from http.server import BaseHTTPRequestHandler
import json
import asyncio
import edge_tts
import base64
import tempfile
import os

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
        except Exception:
            data = {}
        
        text = data.get('text', '')
        voice = data.get('voice', 'pt-BR-AntonioNeural')
        rate = data.get('rate', '+0%')
        
        if not text:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Text is required'}).encode('utf-8'))
            return
            
        try:
            async def run_tts():
                communicate = edge_tts.Communicate(text, voice, rate=rate)
                with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
                    tmp_path = tmp.name
                await communicate.save(tmp_path)
                with open(tmp_path, "rb") as f:
                    audio_bytes = f.read()
                if os.path.exists(tmp_path):
                    os.remove(tmp_path)
                return audio_bytes

            audio_data = asyncio.run(run_tts())
            audio_b64 = base64.b64encode(audio_data).decode('utf-8')
            data_url = f"data:audio/mp3;base64,{audio_b64}"

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            self.end_headers()
            
            response_payload = {
                'success': True,
                'audioUrl': data_url
            }
            self.wfile.write(json.dumps(response_payload).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
