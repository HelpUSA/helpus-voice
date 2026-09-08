export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    title: string;
    subtitle: string;
    subdomain: string;
    createAccount: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleGradient: string;
    description: string;
  };
  presets: {
    sectionTitle: string;
    barberTitle: string;
    barberText: string;
    barberBadge: string;
    realestateTitle: string;
    realestateText: string;
    realestateBadge: string;
    supportTitle: string;
    supportText: string;
    supportBadge: string;
    salesTitle: string;
    salesText: string;
    salesBadge: string;
  };
  studio: {
    configTitle: string;
    charCount: string;
    voiceSelectLabel: string;
    voices: {
      antonioName: string;
      antonioDesc: string;
      franciscaName: string;
      franciscaDesc: string;
      thalitaName: string;
      thalitaDesc: string;
    };
    speedLabel: string;
    speedNormal: string;
    textLabel: string;
    placeholder: string;
    generateBtn: string;
    generatingBtn: string;
    resultTitle: string;
    mp3Badge: string;
    downloadBtn: string;
    whatsappBtn: string;
    whatsappMsg: string;
    serverError: string;
  };
  features: {
    fastTitle: string;
    fastDesc: string;
    whatsappTitle: string;
    whatsappDesc: string;
    saasTitle: string;
    saasDesc: string;
  };
  footer: {
    rights: string;
    configuredSubdomain: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      title: 'HelpUS',
      subtitle: 'Estúdio de Gerador de Áudio Neural com IA',
      subdomain: 'voice.helpusbr.com',
      createAccount: 'Criar Conta SaaS'
    },
    hero: {
      badge: 'Alternativa de Alto Desempenho e Custo Reduzido',
      titleStart: 'Crie Áudios e Narrações com ',
      titleGradient: 'Vozes Neurais de IA',
      description: 'Transforme qualquer texto em mensagens de áudio ultra-realistas. Perfeito para WhatsApp, agendamentos, atendimento comercial e vinhetas promocionais.'
    },
    presets: {
      sectionTitle: 'Modelos Prontos para Uso Rápido',
      barberTitle: 'Agendamento Barbearia',
      barberText: 'Olá! Seu horário para corte e barba está confirmado para amanhã às 15 horas. Caso precise reagendar, avise por aqui!',
      barberBadge: 'Barbearia',
      realestateTitle: 'Oferta Imobiliária',
      realestateText: 'Olá! Acabamos de receber um apartamento incrível de 3 suítes na orla com condição exclusiva. Posso te enviar as fotos?',
      realestateBadge: 'Imóveis',
      supportTitle: 'Lembrete de Atendimento',
      supportText: 'Olá! Passando para confirmar nossa reunião de alinhamento de amanhã. Nos vemos em breve!',
      supportBadge: 'Atendimento',
      salesTitle: 'Promoção Comercial',
      salesText: 'Aproveite a nossa semana especial com descontos de até 30% em todos os serviços. Garanta a sua vaga agora!',
      salesBadge: 'Vendas'
    },
    studio: {
      configTitle: 'Configurações do Áudio',
      charCount: 'Caracteres',
      voiceSelectLabel: 'Selecione a Voz Neural',
      voices: {
        antonioName: '👨 Antônio (Masculino - Comercial / Profissional)',
        antonioDesc: 'Tom seguro e envolvente',
        franciscaName: '👩 Francisca (Feminino - Atendimento / Suave)',
        franciscaDesc: 'Tom amigável e receptivo',
        thalitaName: '👩 Thalita (Feminino - Jovem / Dinâmica)',
        thalitaDesc: 'Tom moderno e ágil'
      },
      speedLabel: 'Velocidade da Fala',
      speedNormal: 'Normal (1.0x)',
      textLabel: 'Texto / Roteiro da Mensagem',
      placeholder: 'Digite ou cole aqui o texto que você deseja transformar em áudio de alta qualidade...',
      generateBtn: 'Gerar Áudio de Alta Qualidade',
      generatingBtn: 'Gerando Áudio Neural com IA...',
      resultTitle: 'Áudio Gerado com Sucesso!',
      mp3Badge: 'Formato MP3 320kbps',
      downloadBtn: 'Baixar `.mp3`',
      whatsappBtn: 'Enviar pelo WhatsApp',
      whatsappMsg: 'Ouça a mensagem de voz gravada via HelpUS Voice:',
      serverError: 'Não foi possível conectar ao motor de IA (http://localhost:4000).'
    },
    features: {
      fastTitle: 'Geração Instantânea',
      fastDesc: 'Gere arquivos MP3 em menos de 2 segundos diretamente do servidor backend.',
      whatsappTitle: 'Pronto para WhatsApp',
      whatsappDesc: 'Exporte e compartilhe áudios perfeitos para atendimento automatizado de clientes.',
      saasTitle: 'Pronto para Vercel SaaS',
      saasDesc: 'Configurado para o subdomínio voice.helpusbr.com no ecossistema HelpUS.'
    },
    footer: {
      rights: '© 2026 HelpUS Voice — Todos os direitos reservados. Ecossistema HelpUS BR.',
      configuredSubdomain: 'Subdomínio configurado'
    }
  },
  en: {
    nav: {
      title: 'HelpUS',
      subtitle: 'AI Neural Audio Generator Studio',
      subdomain: 'voice.helpusbr.com',
      createAccount: 'Create SaaS Account'
    },
    hero: {
      badge: 'High Performance & Low Cost AI Alternative',
      titleStart: 'Generate Voiceover & Audio with ',
      titleGradient: 'Neural AI Voices',
      description: 'Transform any text into ultra-realistic audio messages. Perfect for WhatsApp, appointments, sales support, and promotional voiceovers.'
    },
    presets: {
      sectionTitle: 'Ready-to-Use Script Presets',
      barberTitle: 'Barbershop Appointment',
      barberText: 'Hello! Your hair and beard appointment is confirmed for tomorrow at 3 PM. Let us know if you need to reschedule!',
      barberBadge: 'Barbershop',
      realestateTitle: 'Real Estate Offer',
      realestateText: 'Hello! We just listed an incredible 3-suite oceanfront apartment with exclusive terms. Can I send you the photos?',
      realestateBadge: 'Real Estate',
      supportTitle: 'Meeting Reminder',
      supportText: 'Hello! Just following up to confirm our alignment meeting tomorrow. See you soon!',
      supportBadge: 'Support',
      salesTitle: 'Special Promotion',
      salesText: 'Enjoy our special promo week with up to 30% off all services. Lock in your spot now!',
      salesBadge: 'Sales'
    },
    studio: {
      configTitle: 'Audio Settings',
      charCount: 'Characters',
      voiceSelectLabel: 'Select Neural Voice',
      voices: {
        antonioName: '👨 Antonio (Male - Commercial / Professional)',
        antonioDesc: 'Confident and engaging tone',
        franciscaName: '👩 Francisca (Female - Customer Care / Soft)',
        franciscaDesc: 'Friendly and welcoming tone',
        thalitaName: '👩 Thalita (Female - Young / Dynamic)',
        thalitaDesc: 'Modern and energetic tone'
      },
      speedLabel: 'Speaking Rate',
      speedNormal: 'Normal (1.0x)',
      textLabel: 'Message Script / Text',
      placeholder: 'Type or paste the text you want to convert into high-quality neural voice audio...',
      generateBtn: 'Generate High-Quality Audio',
      generatingBtn: 'Generating Neural Audio with AI...',
      resultTitle: 'Audio Generated Successfully!',
      mp3Badge: 'MP3 320kbps Format',
      downloadBtn: 'Download `.mp3`',
      whatsappBtn: 'Share via WhatsApp',
      whatsappMsg: 'Listen to the voice message generated via HelpUS Voice:',
      serverError: 'Could not connect to AI Engine server (http://localhost:4000).'
    },
    features: {
      fastTitle: 'Instant Generation',
      fastDesc: 'Generate MP3 files in under 2 seconds directly from the backend server.',
      whatsappTitle: 'WhatsApp Ready',
      whatsappDesc: 'Export and share crystal-clear audio messages for automated customer service.',
      saasTitle: 'Vercel SaaS Ready',
      saasDesc: 'Configured for the voice.helpusbr.com subdomain in the HelpUS ecosystem.'
    },
    footer: {
      rights: '© 2026 HelpUS Voice — All rights reserved. HelpUS BR Ecosystem.',
      configuredSubdomain: 'Configured subdomain'
    }
  },
  es: {
    nav: {
      title: 'HelpUS',
      subtitle: 'Estudio Generador de Audio Neural con IA',
      subdomain: 'voice.helpusbr.com',
      createAccount: 'Crear Cuenta SaaS'
    },
    hero: {
      badge: 'Alternativa de Alto Rendimiento y Bajo Costo',
      titleStart: 'Genera Locuciones y Audio con ',
      titleGradient: 'Voces Neurales de IA',
      description: 'Transforma cualquier texto en mensajes de audio ultra realistas. Perfecto para WhatsApp, reservas, atención comercial y locuciones publicitarias.'
    },
    presets: {
      sectionTitle: 'Plantillas de Guion Listas para Usar',
      barberTitle: 'Cita en Barbería',
      barberText: '¡Hola! Tu cita de corte y barba está confirmada para mañana a las 15 horas. ¡Avisanos si necesitas reprogramar!',
      barberBadge: 'Barbería',
      realestateTitle: 'Oferta Inmobiliaria',
      realestateText: '¡Hola! Acabamos de recibir un departamento increíble de 3 suites frente al mar con condición exclusiva. ¿Te puedo enviar las fotos?',
      realestateBadge: 'Inmuebles',
      supportTitle: 'Recordatorio de Reunión',
      supportText: '¡Hola! Paso a confirmar nuestra reunión de alineación de mañana. ¡Nos vemos pronto!',
      supportBadge: 'Soporte',
      salesTitle: 'Promoción Comercial',
      salesText: '¡Aprovecha nuestra semana especial con hasta 30% de descuento en todos los servicios. ¡Asegura tu lugar ahora!',
      salesBadge: 'Ventas'
    },
    studio: {
      configTitle: 'Configuración del Audio',
      charCount: 'Caracteres',
      voiceSelectLabel: 'Selecciona la Voz Neural',
      voices: {
        antonioName: '👨 Antonio (Masculino - Comercial / Profesional)',
        antonioDesc: 'Tono seguro y envolvente',
        franciscaName: '👩 Francisca (Femenino - Atención / Suave)',
        franciscaDesc: 'Tono amigable y acogedor',
        thalitaName: '👩 Thalita (Femenino - Joven / Dinámica)',
        thalitaDesc: 'Tono moderno y ágil'
      },
      speedLabel: 'Velocidad de Habla',
      speedNormal: 'Normal (1.0x)',
      textLabel: 'Texto / Guion del Mensaje',
      placeholder: 'Escribe o pega aquí el texto que deseas transformar en audio neural de alta calidad...',
      generateBtn: 'Generar Audio de Alta Calidad',
      generatingBtn: 'Generando Audio Neural con IA...',
      resultTitle: '¡Audio Generado con Éxito!',
      mp3Badge: 'Formato MP3 320kbps',
      downloadBtn: 'Descargar `.mp3`',
      whatsappBtn: 'Enviar por WhatsApp',
      whatsappMsg: 'Escucha el mensaje de voz grabado con HelpUS Voice:',
      serverError: 'No se pudo conectar al servidor de IA (http://localhost:4000).'
    },
    features: {
      fastTitle: 'Generación Instantánea',
      fastDesc: 'Genera archivos MP3 en menos de 2 segundos directamente desde el servidor.',
      whatsappTitle: 'Listo para WhatsApp',
      whatsappDesc: 'Exporta y comparte audios perfectos para atención automatizada al cliente.',
      saasTitle: 'Listo para Vercel SaaS',
      saasDesc: 'Configurado para el subdominio voice.helpusbr.com en el ecosistema HelpUS.'
    },
    footer: {
      rights: '© 2026 HelpUS Voice — Todos los derechos reservados. Ecosistema HelpUS BR.',
      configuredSubdomain: 'Subdominio configurado'
    }
  }
};
