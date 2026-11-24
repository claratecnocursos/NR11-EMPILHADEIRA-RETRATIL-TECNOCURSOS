/**
 * Conteúdo — NR 11 Empilhadeira Retrátil
 * Tipos: cover | video | content | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR 11 — Empilhadeira Retrátil",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Introdução à NR 11, Responsabilidades e Aspectos Legais",
      objective: "Apresentar a NR 11, a qualificação do operador, o cartão de identificação, o direito de recusa e as responsabilidades legais na operação de empilhadeira retrátil.",
      titleUnlock: {
        title: "BASE LEGAL CONCLUÍDA",
        body: "Você revisou a NR 11, a qualificação e as responsabilidades do operador.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Capa do módulo 1",
          title: "Módulo 1 — Introdução à NR 11, Responsabilidades e Aspectos Legais",
          subtitle: "Norma, qualificação, cartão de identificação e aspectos legais.",
          transcript: "Módulo 1. Introdução à NR 11, responsabilidades e aspectos legais."
        },
        {
          id: "nr11-m1-bemvindo",
          type: "video",
          kicker: "Vídeo",
          title: "Bem-vindo ao Treinamento — Empilhadeira Retrátil",
          playerId: "panda-e4a578a8-7615-4237-8ff8-77888a0a3711",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e4a578a8-7615-4237-8ff8-77888a0a3711",
          transcript: "Vídeo. Bem-vindo ao treinamento de empilhadeira retrátil. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m1-norma",
          type: "video",
          kicker: "Vídeo",
          title: "A Norma NR 11 e os Equipamentos Motorizados",
          playerId: "panda-8f6e75fa-20ae-4236-9c3f-82b91817d6cf",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8f6e75fa-20ae-4236-9c3f-82b91817d6cf",
          transcript: "Vídeo. A Norma NR 11 e os Equipamentos Motorizados. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m1-qualificacao",
          type: "video",
          kicker: "Vídeo",
          title: "Qualificação e o Cartão de Identificação",
          playerId: "panda-971ba1f6-fc6e-438c-9433-7ca8d7788c42",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=971ba1f6-fc6e-438c-9433-7ca8d7788c42",
          transcript: "Vídeo. Qualificação e o Cartão de Identificação. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m1-recusa",
          type: "video",
          kicker: "Vídeo",
          title: "Responsabilidades do Operador e o Direito de Recusa",
          playerId: "panda-1d7160d9-1f83-4233-bc27-b9e22929beae",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=1d7160d9-1f83-4233-bc27-b9e22929beae",
          transcript: "Vídeo. Responsabilidades do Operador e o Direito de Recusa. Assista ao vídeo para avançar."
        }
      ]
    },
    {
      id: 2,
      title: "Aptidão Psicofísica, Saúde e Regras de Acesso",
      objective: "Abordar saúde física e mental, controle de acesso, distrações, faixas de trânsito, bloqueio de áreas críticas e comportamento profissional.",
      titleUnlock: {
        title: "ACESSO SEGURO",
        body: "Você reforçou aptidão, acesso e conduta no setor logístico.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m2-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Capa do módulo 2",
          title: "Módulo 2 — Aptidão Psicofísica, Saúde e Regras de Acesso",
          subtitle: "Saúde, acesso, circulação e comportamento no armazém.",
          transcript: "Módulo 2. Aptidão psicofísica, saúde e regras de acesso."
        },
        {
          id: "nr11-m2-saude",
          type: "video",
          kicker: "Vídeo",
          title: "Saúde Física e Mental na Operação",
          playerId: "panda-4eca7b85-1849-45d4-bea8-712f176228e8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4eca7b85-1849-45d4-bea8-712f176228e8",
          transcript: "Vídeo. Saúde Física e Mental na Operação. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m2-acesso",
          type: "video",
          kicker: "Vídeo",
          title: "Controle de Acesso e Integração de Segurança",
          playerId: "panda-4eca7b85-1849-45d4-bea8-712f176228e8-b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4eca7b85-1849-45d4-bea8-712f176228e8",
          transcript: "Vídeo. Controle de Acesso e Integração de Segurança. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m2-distracoes",
          type: "video",
          kicker: "Vídeo",
          title: "Distrações e Proibições no Setor Logístico",
          playerId: "panda-fe728316-41bf-4df4-a14d-6fa841a51304",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fe728316-41bf-4df4-a14d-6fa841a51304",
          transcript: "Vídeo. Distrações e Proibições no Setor Logístico. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m2-faixas",
          type: "video",
          kicker: "Vídeo",
          title: "Faixas de Trânsito e Preferências de Passagem",
          playerId: "panda-4dccb39a-a706-47f3-bd25-e8ac66146341",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4dccb39a-a706-47f3-bd25-e8ac66146341",
          transcript: "Vídeo. Faixas de Trânsito e Preferências de Passagem. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m2-bloqueio",
          type: "video",
          kicker: "Vídeo",
          title: "Bloqueio de Áreas Críticas e Estacionamento Preventivo",
          playerId: "panda-f7e9c49b-83a8-4ee7-9a10-c571b38b455e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=f7e9c49b-83a8-4ee7-9a10-c571b38b455e",
          transcript: "Vídeo. Bloqueio de Áreas Críticas e Estacionamento Preventivo. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m2-comportamento",
          type: "video",
          kicker: "Vídeo",
          title: "Comportamento Profissional e Brincadeiras Inadequadas",
          playerId: "panda-b4e3b2a6-03be-4ca1-b444-09f8b902f74a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b4e3b2a6-03be-4ca1-b444-09f8b902f74a",
          transcript: "Vídeo. Comportamento Profissional e Brincadeiras Inadequadas. Assista ao vídeo para avançar."
        }
      ]
    },
    {
      id: 3,
      title: "Normas de Trânsito Interno e Circulação",
      objective: "Operar com velocidade segura, sinalização, cinto, estabilidade, capacidade de carga e checklist pré-uso da empilhadeira retrátil.",
      titleUnlock: {
        title: "CIRCULAÇÃO SEGURA",
        body: "Você consolidou trânsito interno, estabilidade e checklist da retrátil.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m3-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Capa do módulo 3",
          title: "Módulo 3 — Normas de Trânsito Interno e Circulação",
          subtitle: "Velocidade, sinalização, estabilidade e checklist da retrátil.",
          transcript: "Módulo 3. Normas de trânsito interno e circulação."
        },
        {
          id: "nr11-m3-velocidade",
          type: "video",
          kicker: "Vídeo",
          title: "Velocidade Máxima e Consciência Situacional",
          playerId: "panda-eec8d062-eea2-4e55-bae3-ade83e1931fb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=eec8d062-eea2-4e55-bae3-ade83e1931fb",
          transcript: "Vídeo. Velocidade Máxima e Consciência Situacional. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-sinalizacao",
          type: "video",
          kicker: "Vídeo",
          title: "Sinalização Luminosa e Visibilidade Ativa",
          playerId: "panda-e96a2a15-9ee5-4c89-b62a-07dc40bfef00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e96a2a15-9ee5-4c89-b62a-07dc40bfef00",
          transcript: "Vídeo. Sinalização Luminosa e Visibilidade Ativa. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-cinto",
          type: "video",
          kicker: "Vídeo",
          title: "Cinto de Segurança e Ergonomia na Cabine",
          playerId: "panda-dd52dd71-c99d-4220-94eb-d04128ce4b46",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=dd52dd71-c99d-4220-94eb-d04128ce4b46",
          transcript: "Vídeo. Cinto de Segurança e Ergonomia na Cabine. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-subida",
          type: "video",
          kicker: "Vídeo",
          title: "Subida, Descida e Estacionamento Preventivo",
          playerId: "panda-d986a0ab-fa62-49ce-9b50-afd32dc0e4a4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d986a0ab-fa62-49ce-9b50-afd32dc0e4a4",
          transcript: "Vídeo. Subida, Descida e Estacionamento Preventivo. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-caracteristicas",
          type: "video",
          kicker: "Vídeo",
          title: "Características Técnicas da Empilhadeira Retrátil",
          playerId: "panda-90f62504-31df-474a-9eab-3d5c52a201b5",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=90f62504-31df-474a-9eab-3d5c52a201b5",
          transcript: "Vídeo. Características Técnicas da Empilhadeira Retrátil. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-centro-carga",
          type: "video",
          kicker: "Vídeo",
          title: "Centro de Carga e Momento de Tombamento",
          playerId: "panda-4907a184-80ef-4969-94c4-09987111fa26",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4907a184-80ef-4969-94c4-09987111fa26",
          transcript: "Vídeo. Centro de Carga e Momento de Tombamento. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-mecanismo",
          type: "video",
          kicker: "Vídeo",
          title: "O Mecanismo Retrátil e o Triângulo de Estabilidade",
          playerId: "panda-c2e63ea3-4507-4fea-8162-fd3ce06209f7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c2e63ea3-4507-4fea-8162-fd3ce06209f7",
          transcript: "Vídeo. O Mecanismo Retrátil e o Triângulo de Estabilidade. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-diagrama",
          type: "video",
          kicker: "Vídeo",
          title: "Diagrama de Capacidade de Carga e Capacidade Residual",
          playerId: "panda-c2e63ea3-4507-4fea-8162-fd3ce06209f7-b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c2e63ea3-4507-4fea-8162-fd3ce06209f7",
          transcript: "Vídeo. Diagrama de Capacidade de Carga e Capacidade Residual. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m3-checklist",
          type: "video",
          kicker: "Vídeo",
          title: "Checklist Pré-Uso da Empilhadeira Retrátil",
          playerId: "panda-c375c798-aeab-41e7-bf9c-15b3b0bfec82",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c375c798-aeab-41e7-bf9c-15b3b0bfec82",
          transcript: "Vídeo. Checklist Pré-Uso da Empilhadeira Retrátil. Assista ao vídeo para avançar."
        }
      ]
    },
    {
      id: 4,
      title: "Interação Máquina x Pedestre, Red Zone e Pontos Cegos",
      objective: "Aplicar a regra de ouro da Red Zone, cruzamentos seguros e proteção contra pontos cegos.",
      titleUnlock: {
        title: "RED ZONE DOMINADA",
        body: "Você aprendeu a coexistir com pedestres e a respeitar a Red Zone.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m4-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Capa do módulo 4",
          title: "Módulo 4 — Interação Máquina x Pedestre, Red Zone e Pontos Cegos",
          subtitle: "Red Zone, cruzamentos e pontos cegos.",
          transcript: "Módulo 4. Interação máquina e pedestre, Red Zone e pontos cegos."
        },
        {
          id: "nr11-m4-redzone",
          type: "video",
          kicker: "Vídeo",
          title: "A Regra de Ouro da Red Zone",
          playerId: "panda-31877712-293e-46cf-bc9b-da2c4c2b8ef7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=31877712-293e-46cf-bc9b-da2c4c2b8ef7",
          transcript: "Vídeo. A Regra de Ouro da Red Zone. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m4-cruzamentos",
          type: "video",
          kicker: "Vídeo",
          title: "Interação em Cruzamentos e Pontos Cegos",
          playerId: "panda-e5957fef-fa5b-4c70-af95-742adae56034",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e5957fef-fa5b-4c70-af95-742adae56034",
          transcript: "Vídeo. Interação em Cruzamentos e Pontos Cegos. Assista ao vídeo para avançar."
        }
      ]
    },
    {
      id: 5,
      title: "Operações de Alta Complexidade, Ressuprimento de Picking e Docas",
      objective: "Seguir o protocolo de aproximação no picking e evitar riscos com garfos elevados e movimentações práticas.",
      titleUnlock: {
        title: "PICKING E DOCAS",
        body: "Você praticou aproximação segura e movimentação de alto risco.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m5-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo5.png",
          imageAlt: "Capa do módulo 5",
          title: "Módulo 5 — Operações de Alta Complexidade, Ressuprimento de Picking e Docas",
          subtitle: "Picking, aproximação segura e riscos operacionais.",
          transcript: "Módulo 5. Operações de alta complexidade, ressuprimento de picking e docas."
        },
        {
          id: "nr11-m5-picking",
          type: "video",
          kicker: "Vídeo",
          title: "Protocolo de Aproximação Segura no Picking",
          playerId: "panda-7eb9db7d-c2d4-4f71-8d95-9bae0d480fb1",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7eb9db7d-c2d4-4f71-8d95-9bae0d480fb1",
          transcript: "Vídeo. Protocolo de Aproximação Segura no Picking. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m5-garfos",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos de Garfos Elevados e Movimentações Práticas",
          playerId: "panda-52a1806d-7ed6-4d6c-94b3-64bbce150eac",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=52a1806d-7ed6-4d6c-94b3-64bbce150eac",
          transcript: "Vídeo. Riscos de Garfos Elevados e Movimentações Práticas. Assista ao vídeo para avançar."
        }
      ]
    },
    {
      id: 6,
      title: "Abastecimento (Pit Stop), Zoneamento de Risco e Comportamento",
      objective: "Dominar regras do Pit Stop, proibições no abastecimento, troca de bateria e conclusão da NR 11.",
      titleUnlock: {
        title: "PIT STOP SEGURO",
        body: "Você concluiu abastecimento, bateria e compromisso com a segurança.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m6-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo5.png",
          imageAlt: "Capa do módulo 6",
          title: "Módulo 6 — Abastecimento (Pit Stop), Zoneamento de Risco e Comportamento",
          subtitle: "Pit Stop, bateria tracionária e conduta operacional.",
          transcript: "Módulo 6. Abastecimento, zoneamento de risco e comportamento."
        },
        {
          id: "nr11-m6-pitstop",
          type: "video",
          kicker: "Vídeo",
          title: "O Pit Stop e as Regras de Entrada",
          playerId: "panda-d3fb5a02-92d5-4fd2-bba1-d168a37901f4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d3fb5a02-92d5-4fd2-bba1-d168a37901f4",
          transcript: "Vídeo. O Pit Stop e as Regras de Entrada. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-proibicoes",
          type: "video",
          kicker: "Vídeo",
          title: "Proibições Críticas no Abastecimento",
          playerId: "panda-d3fb5a02-92d5-4fd2-bba1-d168a37901f4-b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d3fb5a02-92d5-4fd2-bba1-d168a37901f4",
          transcript: "Vídeo. Proibições Críticas no Abastecimento. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-bateria1",
          type: "video",
          kicker: "Vídeo",
          title: "Troca da Bateria Tracionária da Retrátil em Dupla",
          playerId: "panda-7c82f958-8db1-41b9-9339-de40ba299fbb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7c82f958-8db1-41b9-9339-de40ba299fbb",
          transcript: "Vídeo. Troca da Bateria Tracionária da Retrátil em Dupla. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-bateria2",
          type: "video",
          kicker: "Vídeo",
          title: "Passo a Passo da Substituição Física da Bateria",
          playerId: "panda-aacfd4cf-2657-4cad-8c72-a6d14f2ecb03",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=aacfd4cf-2657-4cad-8c72-a6d14f2ecb03",
          transcript: "Vídeo. Passo a Passo da Substituição Física da Bateria. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-bateria3",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Químicos, Eletrólito e Formulário de Controle",
          playerId: "panda-ad4d725d-ee54-4d55-8454-38108bde70fa",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ad4d725d-ee54-4d55-8454-38108bde70fa",
          transcript: "Vídeo. Riscos Químicos, Eletrólito e Formulário de Controle. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-luz",
          type: "video",
          kicker: "Vídeo",
          title: "Condições Adversas de Luz e Ofuscamento",
          playerId: "panda-5aeb03b3-4d32-4283-8121-8253891fa80b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=5aeb03b3-4d32-4283-8121-8253891fa80b",
          transcript: "Vídeo. Condições Adversas de Luz e Ofuscamento. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-tolerancia",
          type: "video",
          kicker: "Vídeo",
          title: "Comportamento e a Tolerância Zero a Brincadeiras",
          playerId: "panda-9105c2b0-bad6-44d8-81a7-395606c693da",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=9105c2b0-bad6-44d8-81a7-395606c693da",
          transcript: "Vídeo. Comportamento e a Tolerância Zero a Brincadeiras. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m6-conclusao",
          type: "video",
          kicker: "Vídeo",
          title: "Conclusão da NR 11 e Compromisso com a Vida",
          playerId: "panda-4c4b06d1-5a44-4367-9fd0-cb7a23996d08",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4c4b06d1-5a44-4367-9fd0-cb7a23996d08",
          transcript: "Vídeo. Conclusão da NR 11 e Compromisso com a Vida. Assista ao vídeo para avançar."
        }
      ]
    },
    {
      id: 7,
      title: "NR 12 — Segurança no Trabalho em Máquinas e Equipamentos",
      objective: "Complementar a capacitação com a NR 12: objetivos, deveres do operador, riscos e boas práticas.",
      titleUnlock: {
        title: "NR 12 CONCLUÍDA",
        body: "Você finalizou o conteúdo complementar de segurança em máquinas.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m7-capa",
          type: "cover",
          image: "assets/fotos/capafinal.png",
          imageAlt: "Capa do módulo 7",
          title: "Módulo 7 — NR 12 Segurança no Trabalho em Máquinas e Equipamentos",
          subtitle: "Objetivo da NR 12, deveres, riscos e boas práticas.",
          transcript: "Módulo 7. NR 12 — Segurança no trabalho em máquinas e equipamentos."
        },
        {
          id: "nr11-m7-objetivo",
          type: "video",
          kicker: "Vídeo",
          title: "O que é a NR 12 e o seu Objetivo",
          playerId: "panda-ae6cb1b3-6556-4268-aa87-3d7f408eb99e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ae6cb1b3-6556-4268-aa87-3d7f408eb99e",
          transcript: "Vídeo. O que é a NR 12 e o seu Objetivo. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m7-deveres",
          type: "video",
          kicker: "Vídeo",
          title: "Os Deveres e Responsabilidades do Operador",
          playerId: "panda-8f02a2b8-accc-4aae-a2cd-dcd4c819c319",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8f02a2b8-accc-4aae-a2cd-dcd4c819c319",
          transcript: "Vídeo. Os Deveres e Responsabilidades do Operador. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m7-riscos",
          type: "video",
          kicker: "Vídeo",
          title: "Identificando os Riscos Mecânicos e Elétricos",
          playerId: "panda-c0348109-5160-401f-9ed9-2ecdd39da5f0",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c0348109-5160-401f-9ed9-2ecdd39da5f0",
          transcript: "Vídeo. Identificando os Riscos Mecânicos e Elétricos. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m7-condutas",
          type: "video",
          kicker: "Vídeo",
          title: "Condutas Proibidas e Boas Práticas",
          playerId: "panda-091b7c6a-4137-4eb7-94e1-aec929c970d5",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=091b7c6a-4137-4eb7-94e1-aec929c970d5",
          transcript: "Vídeo. Condutas Proibidas e Boas Práticas. Assista ao vídeo para avançar."
        },
        {
          id: "nr11-m7-final",
          type: "finale",
          kicker: "Conclusão",
          title: "Parabéns — treinamento concluído",
          body: "Você concluiu o treinamento NR 11 — Empilhadeira Retrátil, com conteúdo complementar da NR 12. Continue aplicando a segurança no dia a dia.",
          image: "assets/fotos/capafinal.png",
          transcript: "Parabéns. Você concluiu o treinamento NR 11 Empilhadeira Retrátil, com conteúdo complementar da NR 12."
        }
      ]
    }
  ]
};
