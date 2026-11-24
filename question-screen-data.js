/**
 * Conteúdo — NR 11 Empilhadeira Retrátil (vídeos + páginas + games)
 * Tipos: cover | video | content | quiz-intro | question | sort | console | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR 11 — Empilhadeira Retrátil",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    /* ═══════════════ MÓDULO 1 ═══════════════ */
    {
      id: 1,
      title: "Introdução à NR 11, Responsabilidades e Aspectos Legais",
      objective: "Apresentar a NR 11, a qualificação do operador, o cartão de identificação, o direito de recusa e as responsabilidades legais.",
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
          transcript: "Início do Módulo 1. Introdução à NR 11, Responsabilidades e Aspectos Legais. Neste módulo você vai revisar a norma, a qualificação do operador, o cartão de identificação e os aspectos legais da operação."
        },
        {
          id: "nr11-m1-bemvindo",
          type: "video",
          kicker: "Vídeo",
          title: "Bem-vindo ao Treinamento — Empilhadeira Retrátil",
          playerId: "panda-e4a578a8-7615-4237-8ff8-77888a0a3711",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e4a578a8-7615-4237-8ff8-77888a0a3711",
          transcript: "Vídeo. Bem-vindo ao Treinamento de Empilhadeira Retrátil. Introdução à NR 11, Responsabilidades e Aspectos Legais. Assista ao vídeo de boas-vindas. Avance quando concluir."
        },
        {
          id: "nr11-m1-norma",
          type: "video",
          kicker: "Vídeo",
          title: "A Norma NR 11 e os Equipamentos Motorizados",
          playerId: "panda-8f6e75fa-20ae-4236-9c3f-82b91817d6cf",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8f6e75fa-20ae-4236-9c3f-82b91817d6cf",
          transcript: "Vídeo. A Norma NR 11 e os Equipamentos Motorizados. Introdução à NR 11, Responsabilidades e Aspectos Legais. Assista ao vídeo sobre a NR 11 e os equipamentos motorizados. Avance quando concluir."
        },
        {
          id: "nr11-m1-qualificacao",
          type: "video",
          kicker: "Vídeo",
          title: "Qualificação e o Cartão de Identificação",
          playerId: "panda-971ba1f6-fc6e-438c-9433-7ca8d7788c42",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=971ba1f6-fc6e-438c-9433-7ca8d7788c42",
          transcript: "Vídeo. Qualificação e o Cartão de Identificação. Introdução à NR 11, Responsabilidades e Aspectos Legais. Assista ao vídeo sobre a qualificação do operador e o cartão de identificação. Avance quando concluir."
        },
        {
          id: "nr11-m1-cartao",
          type: "content",
          layout: "idcard",
          kicker: "CARTÃO DE IDENTIFICAÇÃO",
          title: "O Cartão de Identificação",
          paragraphs: [
            "Após comprovar aptidão em **avaliações médicas frequentes**, o operador recebe um cartão com **nome, foto e tipo sanguíneo**, que deve ficar **visível** durante todo o expediente.",
            "A validade é de apenas **um ano**, exigindo novo exame para renovar. Sem o cartão válido e visível, a **operação fica suspensa**."
          ],
          card: {
            name: "Jose Carlos",
            role: "Operador Autorizado",
            photo: "img/3x4.png",
            logo: "img/NOVA LOGO TECNOCURSOS 1.png",
            fields: [
              { label: "Chapa", value: "23078" },
              { label: "Setor", value: "Expedição" },
              { label: "Tipo Sanguíneo", value: "O+" },
              { label: "Validade", value: "08/2027", tone: "alert" }
            ]
          },
          transcript: "O Cartão de Identificação. Após comprovar aptidão em avaliações médicas frequentes, o operador recebe um cartão com nome, foto e tipo sanguíneo, que deve ficar visível durante todo o expediente. A validade é de apenas um ano, exigindo novo exame para renovar. Sem o cartão válido e visível, a operação fica suspensa."
        },
        {
          id: "nr11-m1-recusa",
          type: "video",
          kicker: "Vídeo",
          title: "Responsabilidades do Operador e o Direito de Recusa",
          playerId: "panda-1d7160d9-1f83-4233-bc27-b9e22929beae",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=1d7160d9-1f83-4233-bc27-b9e22929beae",
          transcript: "Vídeo. Responsabilidades do Operador e o Direito de Recusa. Introdução à NR 11, Responsabilidades e Aspectos Legais. Assista ao vídeo sobre as responsabilidades do operador e o direito de recusa. Avance quando concluir."
        },
        {
          id: "nr11-m1-civil",
          type: "content",
          layout: "defs",
          kicker: "Código Penal",
          title: "Responsabilidade Civil e Criminal",
          body: "Ninguém se escusa de cumprir a lei alegando que não a conhece.",
          items: [
            {
              tag: "Art. 132",
              metric: "3m–1a",
              title: "Expor a vida ou a saúde de outrem",
              text: "Pena de três meses a um ano de detenção. Aumenta em um terço se resultar de inobservância de regra técnica, deixar de prestar socorro ou fugir."
            },
            {
              tag: "Art. 129",
              metric: "2m–1a",
              title: "Lesão corporal",
              text: "Detenção de dois meses a um ano, com o mesmo aumento de um terço pela inobservância de regra técnica."
            }
          ],
          transcript: "Responsabilidade Civil e Criminal. Ninguém se escusa de cumprir a lei, alegando que não a conhece. Artigo 132 do Código Penal: expor a vida ou a saúde de outrem. Pena de três meses a um ano de detenção. A pena aumenta em um terço se o crime resultar de inobservância de regra técnica de profissão, ou se o operador deixar de prestar socorro, ou fugir para evitar prisão em flagrante. Artigo 129: lesão corporal. Detenção de dois meses a um ano, com o mesmo aumento de um terço pela inobservância de regra técnica."
        },
        {
          id: "nr11-m1-sancoes",
          type: "content",
          layout: "defs",
          kicker: "Sanções",
          title: "Sanções Penais, Trabalhistas e Civis",
          body: "As consequências de uma operação insegura vão além do acidente: envolvem pena criminal, demissão e reparação civil.",
          items: [
            {
              tag: "Penal",
              metric: "1–3a",
              title: "Homicídio culposo",
              text: "Morte sem intenção. Detenção de 1 a 3 anos, com aumento de 1/3 se resultar de inobservância de regra técnica."
            },
            {
              tag: "Penal",
              metric: "6–20a",
              title: "Homicídio doloso",
              text: "Morte com intenção. Reclusão de 6 a 20 anos, também com aumento de 1/3 nas mesmas hipóteses."
            },
            {
              tag: "CLT 482",
              metric: "JC",
              title: "Sanção trabalhista",
              text: "Ato faltoso: advertência oral ou escrita e, por reincidência, demissão por justa causa."
            },
            {
              tag: "CC 159",
              metric: "R$",
              title: "Responsabilidade civil",
              text: "Quem, por ação ou omissão, negligência ou imprudência, causar prejuízo a outrem, deve reparar os danos."
            }
          ],
          transcript: "Sanções Penais, Trabalhistas e Civis. Homicídio culposo: morte do acidentado sem intenção. Detenção de um a três anos, com aumento de um terço se resultar de inobservância de regra técnica de profissão. Homicídio doloso: morte com intenção. Reclusão de seis a vinte anos, também com aumento de um terço nas mesmas hipóteses, inclusive deixar de prestar socorro ou fugir. Na CLT, artigo 482: o ato faltoso permite advertência oral ou escrita e, por reincidência, demissão por justa causa. No Código Civil, artigo 159: quem, por ação ou omissão voluntária, negligência ou imprudência, causar prejuízo a outrem, fica obrigado a reparar os danos."
        },
        {
          id: "nr11-m1-quiz-intro",
          type: "quiz-intro",
          title: "Desafio do Módulo 1",
          body: "Responda <strong>3 perguntas</strong> sobre carga máxima, validade do cartão e o objetivo do treinamento. Acerte no mínimo <strong>2</strong> para avançar.",
          count: 3,
          minCorrect: 2,
          transcript: "Desafio do módulo 1. Responda três perguntas sobre carga máxima, validade do cartão e o objetivo do treinamento. Acerte no mínimo duas para avançar."
        },
        {
          id: "nr11-m1-q1",
          type: "question",
          question: "De acordo com a NR 11, o que deve ser indicado de forma visível em todo equipamento de transporte de materiais?",
          image: "assets/fotos/p1m1.png",
          imageAlt: "Placa de carga máxima na empilhadeira",
          imageFit: "contain",
          imagePosition: "center 22%",
          alternatives: [
            { text: "A data do próximo exame médico obrigatório do operador." },
            { text: "A carga máxima de trabalho permitida (limite que nunca deve ser ultrapassado).", correct: true },
            { text: "O nome completo do fabricante e a cor da máquina." }
          ],
          explanation: "Por lei, é obrigatório indicar a carga máxima de trabalho em local visível, e este limite nunca deve ser ultrapassado.",
          transcript: "Pergunta. De acordo com a NR 11, o que deve ser indicado de forma visível em todo equipamento de transporte de materiais? Opção 1: A data do próximo exame médico obrigatório do operador. Opção 2: A carga máxima de trabalho permitida, limite que nunca deve ser ultrapassado. Opção 3: O nome completo do fabricante e a cor da máquina."
        },
        {
          id: "nr11-m1-q2",
          type: "question",
          question: "Qual é o prazo de validade da autorização e quem acompanha esse vencimento?",
          image: "assets/fotos/p2m1.png",
          imageAlt: "Cartão de identificação do operador",
          imageFit: "contain",
          imagePosition: "center 22%",
          alternatives: [
            { text: "A validade é vitalícia e não necessita de exames ou acompanhamento." },
            { text: "A validade é de 1 ano, e o próprio operador monitora a data e avisa a chefia.", correct: true },
            { text: "A validade é de 3 anos, cabendo exclusivamente ao RH monitorar." }
          ],
          explanation: "O cartão é válido por exatamente 1 ano. O operador deve avisar a chefia quando estiver perto do vencimento.",
          transcript: "Pergunta. Qual é o prazo de validade da autorização e quem acompanha esse vencimento? Opção 1: A validade é vitalícia e não necessita de exames ou acompanhamento. Opção 2: A validade é de um ano, e o próprio operador monitora a data e avisa a chefia. Opção 3: A validade é de três anos, cabendo exclusivamente ao RH monitorar."
        },
        {
          id: "nr11-m1-q3",
          type: "question",
          question: "Qual é o principal objetivo deste treinamento de segurança para operação de empilhadeiras?",
          image: "assets/fotos/p3m1.png",
          imageAlt: "Treinamento de segurança com empilhadeira",
          imageFit: "contain",
          alternatives: [
            { text: "Aumentar a velocidade de carregamento dos caminhões na planta." },
            { text: "Capacitar o operador para usar o equipamento com segurança, cumprindo a NR 11 e evitando acidentes.", correct: true },
            { text: "Reduzir o número de operadores necessários na operação." }
          ],
          explanation: "O objetivo central é capacitar para uma operação segura e eficiente, cumprindo a NR 11 e preservando vidas.",
          transcript: "Pergunta. Qual é o principal objetivo deste treinamento de segurança para operação de empilhadeiras? Opção 1: Aumentar a velocidade de carregamento dos caminhões na planta. Opção 2: Capacitar o operador para usar o equipamento com segurança, cumprindo a NR 11 e evitando acidentes. Opção 3: Reduzir o número de operadores necessários na operação."
        }
      ]
    },

    /* ═══════════════ MÓDULO 2 ═══════════════ */
    {
      id: 2,
      title: "Aptidão Psicofísica, Saúde e Regras de Acesso",
      objective: "Abordar saúde, controle de acesso, distrações, faixas de trânsito e comportamento profissional.",
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
          transcript: "Início do Módulo 2. Aptidão Psicofísica, Saúde e Regras de Acesso. Neste módulo você vai revisar saúde física e mental na operação, controle de acesso, regras para motoristas e manobristas, distrações, faixas de trânsito e comportamento profissional."
        },
        {
          id: "nr11-m2-saude",
          type: "video",
          kicker: "Vídeo",
          title: "Saúde Física e Mental na Operação",
          playerId: "panda-4eca7b85-1849-45d4-bea8-712f176228e8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4eca7b85-1849-45d4-bea8-712f176228e8",
          transcript: "Vídeo. Saúde Física e Mental na Operação. Aptidão Psicofísica, Saúde e Regras de Acesso. Assista ao vídeo sobre saúde física e mental na operação. Avance quando concluir."
        },
        {
          id: "nr11-m2-acesso",
          type: "video",
          kicker: "Vídeo",
          title: "Controle de Acesso e Integração de Segurança",
          playerId: "panda-4eca7b85-1849-45d4-bea8-712f176228e8-b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4eca7b85-1849-45d4-bea8-712f176228e8",
          transcript: "Vídeo. Controle de Acesso e Integração de Segurança. Aptidão Psicofísica, Saúde e Regras de Acesso. Assista ao vídeo sobre controle de acesso e integração de segurança. Avance quando concluir."
        },
        {
          id: "nr11-m2-motoristas",
          type: "content",
          layout: "devices",
          kicker: "Circulação",
          title: "Regras para Motoristas e Manobristas",
          accent: "Motoristas e Manobristas",
          body: "Toque nas setas e avance no fluxo: 10 regras para proteger o pedestre.",
          items: [
            { icon: "🚦", title: "20 km/h", text: "Velocidade máxima dentro da unidade." },
            { icon: "🚨", title: "Pisca-alerta + faróis", text: "Sempre ligados na circulação interna." },
            { icon: "🔒", title: "Cinto + condutor habilitado", text: "Cinto obrigatório. Somente condutor habilitado." },
            { icon: "🛑", title: "Faixa de pedestre = PARE", text: "Pare, olhe os dois lados e dê preferência ao pedestre (contato visual)." },
            { icon: "📵", title: "Celular: proibido", text: "Proibido usar ou manusear celular ao dirigir." },
            { icon: "🚫", title: "Nunca bloqueie áreas críticas", text: "Não pare sobre faixas, rampas ou em frente a equipamentos de emergência." },
            { icon: "🚛", title: "Carga/descarga só nas docas", text: "Use apenas áreas sinalizadas para carga e descarga." },
            { icon: "🟥", title: "Na Red Zone", text: "NUNCA pessoa e empilhadeira ao mesmo tempo." },
            { icon: "🅿️", title: "Parada segura do caminhão", text: "Desligado, freio estacionário acionado e trava-rodas." },
            { icon: "🚸", title: "Se precisar descer, use a rota segura", text: "Transite pela frente da doca e pelas faixas de pedestres." }
          ],
          transcript: "Regras para Motoristas e Manobristas. Os motoristas e manobristas devem conduzir seus veículos de forma a proteger o pedestre. Velocidade máxima de vinte quilômetros por hora dentro da unidade. Pisca-alerta e faróis sempre ligados na circulação interna. Cinto obrigatório e somente condutor habilitado. Na faixa de pedestre, pare, olhe os dois lados e dê preferência ao pedestre, com contato visual. Proibido usar ou manusear celular ao dirigir. Nunca bloqueie áreas críticas: não pare sobre faixas, rampas ou em frente a equipamentos de emergência. Carga e descarga somente nas docas sinalizadas. Na Red Zone, nunca pessoa e empilhadeira ao mesmo tempo. Parada segura do caminhão: desligado, freio estacionário acionado e trava-rodas. Se precisar descer, use a rota segura: transite pela frente da doca e pelas faixas de pedestres."
        },
        {
          id: "nr11-m2-distracoes",
          type: "video",
          kicker: "Vídeo",
          title: "Distrações e Proibições no Setor Logístico",
          playerId: "panda-fe728316-41bf-4df4-a14d-6fa841a51304",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fe728316-41bf-4df4-a14d-6fa841a51304",
          transcript: "Vídeo. Distrações e Proibições no Setor Logístico. Aptidão Psicofísica, Saúde e Regras de Acesso. Assista ao vídeo sobre distrações e proibições no setor logístico. Avance quando concluir."
        },
        {
          id: "nr11-m2-faixas",
          type: "video",
          kicker: "Vídeo",
          title: "Faixas de Trânsito e Preferências de Passagem",
          playerId: "panda-4dccb39a-a706-47f3-bd25-e8ac66146341",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4dccb39a-a706-47f3-bd25-e8ac66146341",
          transcript: "Vídeo. Faixas de Trânsito e Preferências de Passagem. Aptidão Psicofísica, Saúde e Regras de Acesso. Assista ao vídeo sobre faixas de trânsito e preferências de passagem. Avance quando concluir."
        },
        {
          id: "nr11-m2-bloqueio",
          type: "video",
          kicker: "Vídeo",
          title: "Bloqueio de Áreas Críticas e Estacionamento Preventivo",
          playerId: "panda-f7e9c49b-83a8-4ee7-9a10-c571b38b455e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=f7e9c49b-83a8-4ee7-9a10-c571b38b455e",
          transcript: "Vídeo. Bloqueio de Áreas Críticas e Estacionamento Preventivo. Aptidão Psicofísica, Saúde e Regras de Acesso. Assista ao vídeo sobre bloqueio de áreas críticas e estacionamento preventivo. Avance quando concluir."
        },
        {
          id: "nr11-m2-comportamento",
          type: "video",
          kicker: "Vídeo",
          title: "Comportamento Profissional e Brincadeiras Inadequadas",
          playerId: "panda-b4e3b2a6-03be-4ca1-b444-09f8b902f74a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b4e3b2a6-03be-4ca1-b444-09f8b902f74a",
          transcript: "Vídeo. Comportamento Profissional e Brincadeiras Inadequadas. Aptidão Psicofísica, Saúde e Regras de Acesso. Assista ao vídeo sobre comportamento profissional e brincadeiras inadequadas. Avance quando concluir."
        },
        {
          id: "nr11-m2-vf",
          type: "sort",
          vf: true,
          title: "Verdadeiro ou falso — Módulo 2",
          body: "4 afirmações sobre aptidão, acesso e circulação. Acerte no mínimo 3.",
          transcript: "Desafio do módulo 2. Quatro afirmações sobre aptidão psicofísica, acesso e circulação. Acerte no mínimo três. Afirmação 1: Se o operador estiver cansado, com sono ou sob efeito de medicamento que altere os reflexos, ainda pode operar reduzindo a velocidade. Afirmação 2: Somente condutor habilitado pode circular na unidade, e o uso do cinto de segurança é obrigatório. Afirmação 3: É permitido manusear o celular ao dirigir se for uma ligação de trabalho. Afirmação 4: Na faixa de pedestre, o motorista deve parar, olhar os dois lados e dar preferência ao pedestre, com contato visual.",
          time: 60,
          minCorrect: 3,
          left: { id: "falso", label: "Falso", icon: "F" },
          right: { id: "verdadeiro", label: "Verdadeiro", icon: "V" },
          items: [
            {
              text: "Se o operador estiver cansado, com sono ou sob efeito de medicamento que altere os reflexos, ainda pode operar reduzindo a velocidade.",
              bin: "falso",
              hint: "Aptidão psicofísica é obrigatória. Cansaço, sono, álcool, drogas ou medicamentos impedem a operação."
            },
            {
              text: "Somente condutor habilitado pode circular na unidade, e o uso do cinto de segurança é obrigatório.",
              bin: "verdadeiro",
              hint: "Acesso controlado: cinto obrigatório e somente condutor habilitado e integrado."
            },
            {
              text: "É permitido manusear o celular ao dirigir se for uma ligação de trabalho.",
              bin: "falso",
              hint: "Proibido usar ou manusear celular ao dirigir."
            },
            {
              text: "Na faixa de pedestre, o motorista deve parar, olhar os dois lados e dar preferência ao pedestre, com contato visual.",
              bin: "verdadeiro",
              hint: "Faixa de pedestre = PARE. Prefira o pedestre e confirme o contato visual."
            }
          ]
        }
      ]
    },

    /* ═══════════════ MÓDULO 3 ═══════════════ */
    {
      id: 3,
      title: "Normas de Trânsito Interno e Circulação",
      objective: "Operar com velocidade segura, sinalização, estabilidade, capacidade de carga e checklist pré-uso.",
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
          transcript: "Início do Módulo 3. Normas de Trânsito Interno e Circulação. Neste módulo você vai revisar velocidade máxima, sinalização luminosa, cinto de segurança, regras de trânsito interno, características da empilhadeira retrátil, estabilidade, capacidade de carga e checklist pré-uso."
        },
        {
          id: "nr11-m3-velocidade",
          type: "video",
          kicker: "Vídeo",
          title: "Velocidade Máxima e Consciência Situacional",
          playerId: "panda-eec8d062-eea2-4e55-bae3-ade83e1931fb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=eec8d062-eea2-4e55-bae3-ade83e1931fb",
          transcript: "Vídeo. Velocidade Máxima e Consciência Situacional. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre velocidade máxima e consciência situacional. Avance quando concluir."
        },
        {
          id: "nr11-m3-sinalizacao",
          type: "video",
          kicker: "Vídeo",
          title: "Sinalização Luminosa e Visibilidade Ativa",
          playerId: "panda-e96a2a15-9ee5-4c89-b62a-07dc40bfef00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e96a2a15-9ee5-4c89-b62a-07dc40bfef00",
          transcript: "Vídeo. Sinalização Luminosa e Visibilidade Ativa. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre sinalização luminosa e visibilidade ativa. Avance quando concluir."
        },
        {
          id: "nr11-m3-cinto",
          type: "video",
          kicker: "Vídeo",
          title: "Cinto de Segurança e Ergonomia na Cabine",
          playerId: "panda-dd52dd71-c99d-4220-94eb-d04128ce4b46",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=dd52dd71-c99d-4220-94eb-d04128ce4b46",
          transcript: "Vídeo. Cinto de Segurança e Ergonomia na Cabine. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre cinto de segurança e ergonomia na cabine. Avance quando concluir."
        },
        {
          id: "nr11-m3-regras",
          type: "content",
          layout: "devices",
          kicker: "Trânsito",
          title: "Regras de Trânsito Interno",
          accent: "Trânsito Interno",
          body: "Toque nas setas e avance no fluxo: 9 regras de proteção ao pedestre.",
          items: [
            { icon: "🚦", title: "20 km/h", text: "Velocidade máxima de 20 km/h dentro da unidade." },
            { icon: "🚨", title: "Pisca-alerta + faróis", text: "Pisca-alerta e faróis sempre ligados na circulação interna." },
            { icon: "🔒", title: "Cinto + condutor habilitado", text: "Cinto obrigatório e somente condutor habilitado." },
            { icon: "🛑", title: "Faixa de pedestre = PARE", text: "Preferência ao pedestre na faixa, com contato visual." },
            { icon: "📵", title: "Celular: proibido", text: "Proibido usar ou manusear celular ao dirigir." },
            { icon: "🚫", title: "Nunca bloqueie áreas críticas", text: "Não bloqueie faixas, rampas ou equipamentos de emergência." },
            { icon: "🚛", title: "Carga/descarga só nas docas", text: "Carga e descarga somente nas docas sinalizadas." },
            { icon: "🟥", title: "Na Red Zone", text: "Nunca pessoa e empilhadeira juntos." },
            { icon: "🅿️", title: "Parada segura", text: "Desligado, freio estacionário e trava-rodas." }
          ],
          transcript: "Regras de Trânsito Interno. Os motoristas e manobristas devem conduzir seus veículos de forma a proteger o pedestre. Velocidade máxima de vinte quilômetros por hora dentro da unidade. Pisca-alerta e faróis sempre ligados na circulação interna. Cinto obrigatório e somente condutor habilitado. Na faixa de pedestre, pare, olhe os dois lados e dê preferência ao pedestre, com contato visual. Proibido usar ou manusear celular ao dirigir. Nunca bloqueie áreas críticas: não bloqueie faixas, rampas ou equipamentos de emergência. Carga e descarga somente nas docas sinalizadas. Na Red Zone, nunca pessoa e empilhadeira ao mesmo tempo. Parada segura: desligado, freio estacionário e trava-rodas."
        },
        {
          id: "nr11-m3-subida",
          type: "video",
          kicker: "Vídeo",
          title: "Subida, Descida e Estacionamento Preventivo",
          playerId: "panda-d986a0ab-fa62-49ce-9b50-afd32dc0e4a4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d986a0ab-fa62-49ce-9b50-afd32dc0e4a4",
          transcript: "Vídeo. Subida, Descida e Estacionamento Preventivo. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre subida, descida e estacionamento preventivo. Avance quando concluir."
        },
        {
          id: "nr11-m3-caracteristicas",
          type: "video",
          kicker: "Vídeo",
          title: "Características Técnicas da Empilhadeira Retrátil",
          playerId: "panda-90f62504-31df-474a-9eab-3d5c52a201b5",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=90f62504-31df-474a-9eab-3d5c52a201b5",
          transcript: "Vídeo. Características Técnicas da Empilhadeira Retrátil. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre as características técnicas da empilhadeira retrátil. Avance quando concluir."
        },
        {
          id: "nr11-m3-visibilidade",
          type: "content",
          layout: "visibilidade",
          kicker: "Visibilidade",
          title: "Espelhos, Ré e Velocidade Máxima",
          body: "Pessoas e operadores de empilhadeira: olhe sempre nos espelhos.",
          mirrorImage: "img/ESPELHOS.png",
          mirrorAlt: "Espelhos convexos de segurança",
          mirrorCaption: "Pessoas e operadores de empilhadeira, olhe sempre nos espelhos.",
          reverseImage: "img/andar re.png",
          reverseAlt: "Empilhadeira transportando carga em marcha à ré",
          reverseCaption: "Sempre que a empilhadeira estiver com materiais, o operador deve andar em ré.",
          speedTitle: "Respeite a Velocidade Máxima",
          speeds: [
            { value: "20", unit: "km/h", label: "Veículos" },
            { value: "10", unit: "km/h", label: "Empilhadeiras" }
          ],
          transcript: "Espelhos, Ré e Velocidade Máxima. Pessoas e operadores de empilhadeira, olhe sempre nos espelhos. Respeite a velocidade máxima: veículos, vinte quilômetros por hora; empilhadeiras, dez quilômetros por hora. Sempre que a empilhadeira estiver com materiais, o operador deve andar em ré."
        },
        {
          id: "nr11-m3-centro-carga",
          type: "video",
          kicker: "Vídeo",
          title: "Centro de Carga e Momento de Tombamento",
          playerId: "panda-4907a184-80ef-4969-94c4-09987111fa26",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4907a184-80ef-4969-94c4-09987111fa26",
          transcript: "Vídeo. Centro de Carga e Momento de Tombamento. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre centro de carga e momento de tombamento. Avance quando concluir."
        },
        {
          id: "nr11-m3-mecanismo",
          type: "video",
          kicker: "Vídeo",
          title: "O Mecanismo Retrátil e o Triângulo de Estabilidade",
          playerId: "panda-c2e63ea3-4507-4fea-8162-fd3ce06209f7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c2e63ea3-4507-4fea-8162-fd3ce06209f7",
          transcript: "Vídeo. O Mecanismo Retrátil e o Triângulo de Estabilidade. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre o mecanismo retrátil e o triângulo de estabilidade. Avance quando concluir."
        },
        {
          id: "nr11-m3-diagrama",
          type: "video",
          kicker: "Vídeo",
          title: "Diagrama de Capacidade de Carga e Capacidade Residual",
          playerId: "panda-c2e63ea3-4507-4fea-8162-fd3ce06209f7-b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c2e63ea3-4507-4fea-8162-fd3ce06209f7",
          transcript: "Vídeo. Diagrama de Capacidade de Carga e Capacidade Residual. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre diagrama de capacidade de carga e capacidade residual. Avance quando concluir."
        },
        {
          id: "nr11-m3-checklist",
          type: "video",
          kicker: "Vídeo",
          title: "Checklist Pré-Uso da Empilhadeira Retrátil",
          playerId: "panda-c375c798-aeab-41e7-bf9c-15b3b0bfec82",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c375c798-aeab-41e7-bf9c-15b3b0bfec82",
          transcript: "Vídeo. Checklist Pré-Uso da Empilhadeira Retrátil. Normas de Trânsito Interno e Circulação. Assista ao vídeo sobre o checklist pré-uso da empilhadeira retrátil. Avance quando concluir."
        },
        {
          id: "nr11-m3-quiz",
          type: "console",
          title: "Quiz — Módulo 3",
          body: "5 situações reais: velocidade, sinalização, cinto, cruzamentos e embarque. Toque na atitude correta.",
          transcript: "Quiz do módulo 3. Cinco situações reais sobre velocidade, sinalização, cinto, cruzamentos e embarque. Acerte no mínimo três. Situação 1: Circulando sem carga, corredor livre. Qual a velocidade máxima? Situação 2: Como devem ficar os sinalizadores da empilhadeira nos corredores? Situação 3: Qual procedimento obrigatório de segurança pessoal antes de operar? Situação 4: Em cruzamento com visibilidade reduzida, o que fazer? Situação 5: Qual a forma correta de subir e descer da cabine?",
          doneText: "Você concluiu as situações do Módulo 3.",
          doneLabel: "Concluir",
          minCorrect: 3,
          items: [
            {
              ask: "Circulando sem carga, corredor livre. Qual a velocidade máxima?",
              hint: "A velocidade máxima é 20 km/h em toda a unidade.",
              answer: "b",
              options: [
                { id: "a", text: "30 km/h, pois o corredor está livre" },
                { id: "b", text: "20 km/h, o limite máximo na unidade" },
                { id: "c", text: "Não há limite se o operador for experiente" }
              ]
            },
            {
              ask: "Como devem ficar os sinalizadores da empilhadeira nos corredores?",
              hint: "Sinalização luminosa ativa em qualquer deslocamento.",
              answer: "c",
              options: [
                { id: "a", text: "Apagados de dia, pois há luz natural" },
                { id: "b", text: "Somente em áreas escuras ou externas" },
                { id: "c", text: "Faróis e pisca-alerta sempre ativos" }
              ]
            },
            {
              ask: "Qual procedimento obrigatório de segurança pessoal antes de operar?",
              hint: "Cinto obrigatório durante toda a condução.",
              answer: "a",
              options: [
                { id: "a", text: "Afivelar o cinto e manter postura correta no assento" },
                { id: "b", text: "Verificar apenas o nível de combustível/bateria" },
                { id: "c", text: "Usar cinto somente em rampas ou áreas externas" }
              ]
            },
            {
              ask: "Em cruzamento com visibilidade reduzida, o que fazer?",
              hint: "Reduzir, buzinar e observar espelhos antes de avançar.",
              answer: "b",
              options: [
                { id: "a", text: "Acelerar para atravessar rápido" },
                { id: "b", text: "Reduzir, buzinar repetidamente e observar espelhos convexos" },
                { id: "c", text: "Manter a velocidade e confiar na preferência" }
              ]
            },
            {
              ask: "Qual a forma correta de subir e descer da cabine?",
              hint: "Sempre use alças e degrau; nunca pule.",
              answer: "b",
              options: [
                { id: "a", text: "Pular do assento para agilizar" },
                { id: "b", text: "Usar as alças de apoio e o degrau integrado" },
                { id: "c", text: "Descer de costas sem apoio" }
              ]
            }
          ]
        }
      ]
    },

    /* ═══════════════ MÓDULO 4 ═══════════════ */
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
          transcript: "Início do Módulo 4. Interação Máquina e Pedestre, Red Zone e Pontos Cegos. Neste módulo você vai revisar a regra de ouro da Red Zone, a interação em cruzamentos, a proteção contra pontos cegos e a distância mínima de segurança."
        },
        {
          id: "nr11-m4-redzone-video",
          type: "video",
          kicker: "Vídeo",
          title: "A Regra de Ouro da Red Zone",
          playerId: "panda-31877712-293e-46cf-bc9b-da2c4c2b8ef7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=31877712-293e-46cf-bc9b-da2c4c2b8ef7",
          transcript: "Vídeo. A Regra de Ouro da Red Zone. Interação Máquina e Pedestre, Red Zone e Pontos Cegos. Assista ao vídeo sobre a regra de ouro da Red Zone. Avance quando concluir."
        },
        {
          id: "nr11-m4-cruzamentos",
          type: "video",
          kicker: "Vídeo",
          title: "Interação em Cruzamentos e Pontos Cegos",
          playerId: "panda-e5957fef-fa5b-4c70-af95-742adae56034",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e5957fef-fa5b-4c70-af95-742adae56034",
          transcript: "Vídeo. Interação em Cruzamentos e Pontos Cegos. Interação Máquina e Pedestre, Red Zone e Pontos Cegos. Assista ao vídeo sobre interação em cruzamentos e pontos cegos. Avance quando concluir."
        },
        {
          id: "nr11-m4-pontoscegos",
          type: "content",
          layout: "list",
          kicker: "Pontos cegos",
          title: "Proteja-se dos Pontos Cegos",
          body: "Ponto cego é a área onde o operador pode não te ver.",
          bullets: [
            "Coluna traseira esquerda do protetor superior",
            "Estrutura superior (teto de proteção) e coluna central",
            "Parte superior do mastro e estrutura frontal",
            "Região atrás do mastro e do porta-garfos",
            "Coluna dianteira direita do protetor superior",
            "Coluna traseira direita do protetor superior (lado do operador)"
          ],
          transcript: "Proteja-se dos Pontos Cegos. Ponto cego é a área onde o operador pode não te ver. Pontos cegos da máquina: coluna traseira esquerda do protetor superior; estrutura superior, ou teto de proteção, e coluna central; parte superior do mastro e estrutura frontal; região atrás do mastro e do porta-garfos; coluna dianteira direita do protetor superior; coluna traseira direita do protetor superior, no lado do operador."
        },
        {
          id: "nr11-m4-vf",
          type: "sort",
          vf: true,
          title: "Quiz — Módulo 4",
          body: "Afirmações sobre distância de segurança e Red Zone. Acerte no mínimo 4 de 5.",
          transcript: "Quiz do módulo 4. Cinco afirmações sobre distância de segurança e a regra de ouro da Red Zone. Acerte no mínimo quatro. Afirmação 1: Como pedestre, mantenha pelo menos quatro metros de qualquer empilhadeira ativa sem barreira física. Afirmação 2: É permitido caminhar por qualquer parte do corredor, desde que se preste atenção. Afirmação 3: É seguro parar no raio de giro da empilhadeira por poucos segundos. Afirmação 4: Na Red Zone, pessoa e empilhadeira ativa ao mesmo tempo por poucos segundos é aceitável. Afirmação 5: Se o pedestre invade a Red Zone, o operador deve parar e pedir a saída da área.",
          time: 60,
          minCorrect: 4,
          left: { id: "falso", label: "Errado", icon: "E" },
          right: { id: "verdadeiro", label: "Certo", icon: "C" },
          items: [
            {
              text: "Como pedestre, mantenha pelo menos 4 metros de qualquer empilhadeira ativa sem barreira física.",
              bin: "verdadeiro",
              hint: "A regra dos 4 metros é a distância mínima segura."
            },
            {
              text: "É permitido caminhar por qualquer parte do corredor, desde que se preste atenção.",
              bin: "falso",
              hint: "Pedestres circulam só pelas faixas e guias demarcadas."
            },
            {
              text: "É seguro parar no raio de giro da empilhadeira por poucos segundos.",
              bin: "falso",
              hint: "Nunca pare no trajeto ou no raio de giro."
            },
            {
              text: "Na Red Zone, pessoa e empilhadeira ativa ao mesmo tempo por poucos segundos é aceitável.",
              bin: "falso",
              hint: "Red Zone: nunca pessoa e máquina ativa juntas."
            },
            {
              text: "Se o pedestre invade a Red Zone, o operador deve parar e pedir a saída da área.",
              bin: "verdadeiro",
              hint: "Pare imediatamente e só retome com a área livre."
            }
          ]
        }
      ]
    },

    /* ═══════════════ MÓDULO 5 ═══════════════ */
    {
      id: 5,
      title: "Operações de Alta Complexidade, Ressuprimento de Picking e Docas",
      objective: "Seguir o protocolo de aproximação no picking e evitar riscos com garfos elevados.",
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
          transcript: "Início do Módulo 5. Operações de Alta Complexidade, Ressuprimento de Picking e Docas. Neste módulo você vai revisar o abastecimento do picking, o protocolo de aproximação segura, as regras de docas e os riscos de garfos elevados."
        },
        {
          id: "nr11-m5-picking",
          type: "content",
          layout: "defs",
          image: "img/picking-abastecimento.jpg",
          imageAlt: "Empilhadeira no corredor de abastecimento avançando até a célula de picking, onde um trabalhador está abaixado",
          kicker: "Picking",
          title: "Abastecimento do Picking",
          body: "O ressuprimento parece simples, mas fora das regras pode causar acidentes graves.",
          items: [
            {
              tag: "Risco",
              metric: "!",
              title: "Prensamento entre paletes",
              text: "Pessoas são prensadas no ressuprimento quando a visão do operador é obstruída."
            },
            {
              tag: "Causa",
              metric: "👁",
              title: "Campo de visão limitado",
              text: "Paletes e pessoas abaixadas ficam fora do campo de visão do operador."
            },
            {
              tag: "Cenário",
              metric: "→",
              title: "Corredor de abastecimento",
              text: "A empilhadeira avança até a célula de picking, onde pode haver trabalhador abaixado."
            }
          ],
          transcript: "Abastecimento do Picking. O processo de ressuprir o picking parece simples, mas se não for executado seguindo as regras, pode causar graves acidentes. Pessoas são prensadas entre paletes no momento do ressuprimento porque a visão do operador é obstruída por paletes, principalmente quando as pessoas estão abaixadas. No corredor de abastecimento, a empilhadeira avança até a célula de picking, onde pode haver trabalhador abaixado fora do campo de visão."
        },
        {
          id: "nr11-m5-picking-video",
          type: "video",
          kicker: "Vídeo",
          title: "Protocolo de Aproximação Segura no Picking",
          playerId: "panda-7eb9db7d-c2d4-4f71-8d95-9bae0d480fb1",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7eb9db7d-c2d4-4f71-8d95-9bae0d480fb1",
          transcript: "Vídeo. Protocolo de Aproximação Segura no Picking. Operações de Alta Complexidade, Ressuprimento de Picking e Docas. Assista ao vídeo sobre o protocolo de aproximação segura no picking. Avance quando concluir."
        },
        {
          id: "nr11-m5-aproximacao",
          type: "content",
          layout: "defs",
          kicker: "Protocolo",
          title: "A Regra Inicial de Ouro",
          body: "Nunca se aproxime de uma empilhadeira em movimento. Mantenha 4 metros e faça contato visual.",
          items: [
            {
              tag: "Passo 1",
              metric: "1",
              title: "Parada total",
              text: "A empilhadeira deve estar completamente estática."
            },
            {
              tag: "Passo 2",
              metric: "2",
              title: "Garfos no solo",
              text: "Os garfos devem ser baixados e deitados planos contra o chão."
            },
            {
              tag: "Passo 3",
              metric: "3",
              title: "Motor desligado",
              text: "Desligue o motor e retire a chave de ignição."
            }
          ],
          transcript: "A Regra Inicial de Ouro. Nunca se aproxime de uma empilhadeira em movimento. Mantenha-se à distância segura de quatro metros e faça contato visual com o condutor. O pedestre só pode se aproximar após três passos: parada total da empilhadeira; descida completa dos garfos até o solo, planos contra o chão; e desligamento do motor com retirada da chave de ignição."
        },
        {
          id: "nr11-m5-doca",
          type: "content",
          layout: "dock",
          kicker: "Docas",
          title: "Chaves, Motorista e Área Segura",
          body: "Durante carga ou descarga, o protocolo evita que o veículo saia antes da hora e que alguém entre na área de manobra.",
          steps: [
            {
              tag: "Chaves",
              title: "Fora da ignição",
              text: "As chaves do caminhão nunca ficam na ignição nem com o motorista.",
              note: "Com a chave na ignição, o veículo pode sair no meio da carga ou da descarga."
            },
            {
              tag: "Guarda",
              title: "Equipe de expedição",
              text: "As chaves ficam sob guarda da equipe de expedição.",
              note: "Quem guarda a chave é a expedição, não o motorista do caminhão."
            },
            {
              tag: "Espera",
              title: "Área segura",
              text: "O motorista externo aguarda na área segura demarcada para pedestres.",
              note: "Ele espera o fim da operação fora da manobra, na área de pedestres."
            },
            {
              tag: "Proibido",
              title: "Red Zone livre",
              text: "Proibido caminhar pela Red Zone ou baia operacional durante manobras.",
              note: "Enquanto a empilhadeira manobra, essas áreas ficam sem pedestres."
            },
            {
              tag: "Ordem",
              title: "Organização",
              text: "Organização gera segurança.",
              note: "Cada pessoa no seu lugar deixa a operação previsível."
            }
          ],
          transcript: "Chaves, Motorista e Área Segura. Durante carga ou descarga, o protocolo evita que o veículo saia antes da hora e que alguém entre na área de manobra. As chaves do caminhão nunca devem permanecer na ignição ou sob a posse do motorista. Elas devem ser recolhidas e mantidas sob a guarda da equipe de expedição. O motorista externo deve aguardar o fim da operação na área segura demarcada para pedestres. É proibido caminhar pela Red Zone ou pela baia operacional enquanto as empilhadeiras realizam as manobras de carga. Organização gera segurança."
        },
        {
          id: "nr11-m5-garfos",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos de Garfos Elevados e Movimentações Práticas",
          playerId: "panda-52a1806d-7ed6-4d6c-94b3-64bbce150eac",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=52a1806d-7ed6-4d6c-94b3-64bbce150eac",
          transcript: "Vídeo. Riscos de Garfos Elevados e Movimentações Práticas. Operações de Alta Complexidade, Ressuprimento de Picking e Docas. Assista ao vídeo sobre riscos de garfos elevados e movimentações práticas. Avance quando concluir."
        },
        {
          id: "nr11-m5-quiz",
          type: "console",
          title: "Quiz — Módulo 5",
          body: "5 situações: picking, aproximação, conversa com operador, docas e garfos. Escolha a atitude correta.",
          transcript: "Quiz do módulo 5. Cinco situações sobre picking, aproximação, docas e garfos elevados. Acerte no mínimo três. Situação 1: Ressuprir picking com palete alto cobrindo a visão, qual o maior risco? Situação 2: Qual o protocolo inegociável ao aproximar-se para abastecer o picking? Situação 3: Pedestre precisa falar com operador em atividade, o que fazer? Situação 4: O que é obrigatório antes e durante carga e descarga na doca? Situação 5: Qual a regra sobre garfos ao trafegar?",
          doneText: "Você concluiu as situações do Módulo 5.",
          doneLabel: "Concluir",
          minCorrect: 3,
          items: [
            {
              ask: "Ressuprir picking com palete alto cobrindo a visão — qual o maior risco?",
              hint: "Paletes volumosos/altos bloqueiam a visão; atenção duplicada.",
              answer: "b",
              options: [
                { id: "a", text: "Não interfere se a velocidade for baixa" },
                { id: "b", text: "Cargas altas bloqueiam a visão e podem esmagar o ajudante" },
                { id: "c", text: "Só é risco se não houver iluminação" }
              ]
            },
            {
              ask: "Protocolo inegociável ao aproximar-se para abastecer o picking?",
              hint: "Ajudante para, sai e autoriza com o braço erguido.",
              answer: "a",
              options: [
                { id: "a", text: "Lento, alinhado, buzinar; entrar só quando o ajudante sair e levantar o braço" },
                { id: "b", text: "Entrar rápido buzinando uma vez" },
                { id: "c", text: "Esperar o ajudante continuar na baia" }
              ]
            },
            {
              ask: "Pedestre precisa falar com operador em atividade. O que fazer?",
              hint: "Distância 4 m + parada, garfos no solo, desligar e retirar a chave.",
              answer: "c",
              options: [
                { id: "a", text: "Aproximar-se pela lateral com a máquina em movimento" },
                { id: "b", text: "Bater no mastro para chamar atenção" },
                { id: "c", text: "Manter 4 m; só após parada total, garfos no solo, motor off e chave retirada" }
              ]
            },
            {
              ask: "O que é obrigatório antes/durante carga e descarga na doca?",
              hint: "Veículo calçado; chaves com a expedição; motorista fora da Red Zone.",
              answer: "b",
              options: [
                { id: "a", text: "Motorista na cabine com o motor ligado" },
                { id: "b", text: "Freio, motor off, calços, chaves com a expedição e motorista na área segura" },
                { id: "c", text: "Calço de um lado basta" }
              ]
            },
            {
              ask: "Qual a regra sobre garfos ao trafegar?",
              hint: "Garfos elevados causam tombamento; nunca elevar pessoas.",
              answer: "c",
              options: [
                { id: "a", text: "Pode dirigir com garfos elevados se o corredor estiver livre" },
                { id: "b", text: "Empurrar carga de lado com os garfos é permitido" },
                { id: "c", text: "Proibido dirigir com garfos/cargas elevados, passar sob garfos ou elevar pessoas" }
              ]
            }
          ]
        }
      ]
    },

    /* ═══════════════ MÓDULO 6 ═══════════════ */
    {
      id: 6,
      title: "Abastecimento (Pit Stop), Zoneamento de Risco e Comportamento",
      objective: "Dominar regras do Pit Stop, proibições, troca de bateria e conclusão da NR 11.",
      titleUnlock: {
        title: "PIT STOP SEGURO",
        body: "Você concluiu abastecimento, bateria e compromisso com a segurança.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m6-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo6.png",
          imageAlt: "Capa do módulo 6",
          title: "Módulo 6 — Abastecimento (Pit Stop), Zoneamento de Risco e Comportamento",
          subtitle: "Pit Stop, bateria tracionária e conduta operacional.",
          transcript: "Início do Módulo 6. Abastecimento, Zoneamento de Risco e Comportamento. Neste módulo você vai revisar as regras do Pit Stop, o zoneamento do armazém, a troca da bateria tracionária, condições adversas de luz e a tolerância zero a brincadeiras."
        },
        {
          id: "nr11-m6-pitstop",
          type: "video",
          kicker: "Vídeo",
          title: "O Pit Stop e as Regras de Entrada",
          playerId: "panda-d3fb5a02-92d5-4fd2-bba1-d168a37901f4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d3fb5a02-92d5-4fd2-bba1-d168a37901f4",
          transcript: "Vídeo. O Pit Stop e as Regras de Entrada. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre o Pit Stop e as regras de entrada. Avance quando concluir."
        },
        {
          id: "nr11-m6-guia",
          type: "content",
          layout: "guide",
          kicker: "Pit Stop",
          title: "Guia Rápido de Segurança do Pit Stop",
          body: "A baia de abastecimento de GLP e baterias é uma das zonas de maior risco químico e de explosão.",
          items: [
            {
              tag: "Fila",
              title: "Um por vez",
              text: "Apenas um equipamento por vez na baia — aguarde na fila recuada."
            },
            {
              tag: "Operador",
              title: "Estacionar e desligar",
              text: "O operador estaciona, desliga e puxa o freio. Nada além disso."
            },
            {
              tag: "Técnico",
              title: "Só habilitado",
              text: "Troca de cilindro ou conexão de baterias: só o técnico habilitado."
            },
            {
              tag: "Saída",
              title: "Sempre livres",
              text: "As saídas do Pit Stop precisam ficar sempre livres."
            },
            {
              tag: "Proibido",
              title: "Sem fogo",
              text: "Proibido fumar ou qualquer chama exposta.",
              tone: "ban"
            },
            {
              tag: "Proibido",
              title: "Sem celular",
              text: "Proibido celular ou dispositivo eletrônico ligado.",
              tone: "ban"
            }
          ],
          transcript: "Guia rápido de segurança do Pit Stop. A baia de abastecimento de G L P e baterias é uma das zonas de maior risco químico e de explosão. Permitido apenas um equipamento por vez: aguarde na fila recuada. O operador deve apenas estacionar, desligar e puxar o freio. A troca de cilindro ou conexão de baterias é responsabilidade do técnico habilitado. As saídas do Pit Stop precisam ficar sempre livres. Proibido fumar ou qualquer chama exposta. Proibido celular ou dispositivo eletrônico ligado."
        },
        {
          id: "nr11-m6-proibicoes",
          type: "video",
          kicker: "Vídeo",
          title: "Proibições Críticas no Abastecimento",
          playerId: "panda-d3fb5a02-92d5-4fd2-bba1-d168a37901f4-b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d3fb5a02-92d5-4fd2-bba1-d168a37901f4",
          transcript: "Vídeo. Proibições Críticas no Abastecimento. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre proibições críticas no abastecimento. Avance quando concluir."
        },
        {
          id: "nr11-m6-zonas",
          type: "content",
          layout: "zones",
          image: "img/MAPEAMENTO.png",
          imageAlt: "Mapa do armazém com zonas vermelha, amarela e verde de circulação",
          title: "Onde cada máquina e pessoa deve circular",
          body: "Para evitar colisões e atropelamentos, o armazém é dividido em três setores de fluxo. Conhecer e respeitar essas barreiras invisíveis é um dever de todos.",
          highlight: "três setores de fluxo",
          items: [
            {
              tone: "red",
              title: "Zonas de movimentação de empilhadeira",
              risk: "Risco altíssimo",
              text: "Pedestres e ajudantes proibidos, salvo com bloqueio."
            },
            {
              tone: "yellow",
              title: "Zonas de operações mistas",
              risk: "Risco médio",
              text: "Só ajudantes com paleteiras e conferentes."
            },
            {
              tone: "green",
              title: "Zonas de paleteiras e pedestres",
              risk: "Risco baixo",
              text: "Empilhadeiras motorizadas proibidas nestas vias."
            }
          ],
          transcript: "Onde cada máquina e pessoa deve circular. Para evitar colisões e atropelamentos, o armazém é dividido em três setores de fluxo. Conhecer e respeitar essas barreiras invisíveis é um dever de todos. Zona vermelha: movimentação de empilhadeira, risco altíssimo; pedestres e ajudantes proibidos, salvo com bloqueio. Zona amarela: operações mistas, risco médio; só ajudantes com paleteiras e conferentes. Zona verde: paleteiras e pedestres, risco baixo; empilhadeiras motorizadas são proibidas nestas vias."
        },
        {
          id: "nr11-m6-bateria1",
          type: "video",
          kicker: "Vídeo",
          title: "Troca da Bateria Tracionária da Retrátil em Dupla",
          playerId: "panda-7c82f958-8db1-41b9-9339-de40ba299fbb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7c82f958-8db1-41b9-9339-de40ba299fbb",
          transcript: "Vídeo. Troca da Bateria Tracionária da Retrátil em Dupla. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre a troca da bateria tracionária da retrátil em dupla. Avance quando concluir."
        },
        {
          id: "nr11-m6-bateria2",
          type: "video",
          kicker: "Vídeo",
          title: "Passo a Passo da Substituição Física da Bateria",
          playerId: "panda-aacfd4cf-2657-4cad-8c72-a6d14f2ecb03",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=aacfd4cf-2657-4cad-8c72-a6d14f2ecb03",
          transcript: "Vídeo. Passo a Passo da Substituição Física da Bateria. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre o passo a passo da substituição física da bateria. Avance quando concluir."
        },
        {
          id: "nr11-m6-bateria3",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Químicos, Eletrólito e Formulário de Controle",
          playerId: "panda-ad4d725d-ee54-4d55-8454-38108bde70fa",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ad4d725d-ee54-4d55-8454-38108bde70fa",
          transcript: "Vídeo. Riscos Químicos, Eletrólito e Formulário de Controle. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre riscos químicos, eletrólito e formulário de controle. Avance quando concluir."
        },
        {
          id: "nr11-m6-luz",
          type: "video",
          kicker: "Vídeo",
          title: "Condições Adversas de Luz e Ofuscamento",
          playerId: "panda-5aeb03b3-4d32-4283-8121-8253891fa80b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=5aeb03b3-4d32-4283-8121-8253891fa80b",
          transcript: "Vídeo. Condições Adversas de Luz e Ofuscamento. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre condições adversas de luz e ofuscamento. Avance quando concluir."
        },
        {
          id: "nr11-m6-tolerancia",
          type: "video",
          kicker: "Vídeo",
          title: "Comportamento e a Tolerância Zero a Brincadeiras",
          playerId: "panda-9105c2b0-bad6-44d8-81a7-395606c693da",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=9105c2b0-bad6-44d8-81a7-395606c693da",
          transcript: "Vídeo. Comportamento e a Tolerância Zero a Brincadeiras. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre comportamento e a tolerância zero a brincadeiras. Avance quando concluir."
        },
        {
          id: "nr11-m6-conclusao",
          type: "video",
          kicker: "Vídeo",
          title: "Conclusão da NR 11 e Compromisso com a Vida",
          playerId: "panda-4c4b06d1-5a44-4367-9fd0-cb7a23996d08",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4c4b06d1-5a44-4367-9fd0-cb7a23996d08",
          transcript: "Vídeo. Conclusão da NR 11 e Compromisso com a Vida. Abastecimento, Zoneamento de Risco e Comportamento. Assista ao vídeo sobre a conclusão da NR 11 e o compromisso com a vida. Avance quando concluir."
        },
        {
          id: "nr11-m6-vf",
          type: "sort",
          vf: true,
          title: "Verdadeiro ou falso — Módulo 6",
          body: "4 frases simples sobre Pit Stop e zoneamento. Acerte no mínimo 3.",
          transcript: "Desafio do módulo 6. Quatro frases sobre Pit Stop e zoneamento. Acerte no mínimo três. Afirmação 1: No Pit Stop, só pode entrar uma empilhadeira por vez. Afirmação 2: Na zona vermelha, pedestres podem circular junto com a empilhadeira. Afirmação 3: É proibido fumar ou usar celular ligado na baia de abastecimento. Afirmação 4: Com a bateria em cerca de vinte por cento, pode continuar até a máquina parar.",
          time: 60,
          minCorrect: 3,
          left: { id: "falso", label: "Falso", icon: "F" },
          right: { id: "verdadeiro", label: "Verdadeiro", icon: "V" },
          items: [
            {
              text: "No Pit Stop, só pode entrar uma empilhadeira por vez.",
              bin: "verdadeiro",
              hint: "A baia recebe um equipamento por vez."
            },
            {
              text: "Na zona vermelha, pedestres podem circular junto com a empilhadeira.",
              bin: "falso",
              hint: "Na zona vermelha, pedestres são proibidos, salvo com bloqueio."
            },
            {
              text: "É proibido fumar ou usar celular ligado na baia de abastecimento.",
              bin: "verdadeiro",
              hint: "Na baia não pode fogo, chama nem celular ligado."
            },
            {
              text: "Com a bateria em cerca de 20%, pode continuar até a máquina parar.",
              bin: "falso",
              hint: "Com cerca de 20%, encaminhe o equipamento para recarga."
            }
          ]
        }
      ]
    },

    /* ═══════════════ MÓDULO 7 ═══════════════ */
    {
      id: 7,
      title: "NR 12 — Segurança no Trabalho em Máquinas e Equipamentos",
      objective: "Complementar a capacitação com a NR 12: objetivos, deveres, riscos e boas práticas.",
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
          transcript: "Início do Módulo 7. NR 12, Segurança no Trabalho em Máquinas e Equipamentos. Neste módulo você vai revisar o objetivo da NR 12, os deveres do operador, os quatro pilares de responsabilidade, os riscos mecânicos e elétricos, os sistemas de proteção e as boas práticas."
        },
        {
          id: "nr11-m7-objetivo",
          type: "video",
          kicker: "Vídeo",
          title: "O que é a NR 12 e o seu Objetivo",
          playerId: "panda-ae6cb1b3-6556-4268-aa87-3d7f408eb99e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ae6cb1b3-6556-4268-aa87-3d7f408eb99e",
          transcript: "Vídeo. O que é a NR 12 e o seu Objetivo. Segurança no Trabalho em Máquinas e Equipamentos. Assista ao vídeo sobre o que é a NR 12 e o seu objetivo. Avance quando concluir."
        },
        {
          id: "nr11-m7-deveres",
          type: "video",
          kicker: "Vídeo",
          title: "Os Deveres e Responsabilidades do Operador",
          playerId: "panda-8f02a2b8-accc-4aae-a2cd-dcd4c819c319",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8f02a2b8-accc-4aae-a2cd-dcd4c819c319",
          transcript: "Vídeo. Os Deveres e Responsabilidades do Operador. Segurança no Trabalho em Máquinas e Equipamentos. Assista ao vídeo sobre os deveres e responsabilidades do operador. Avance quando concluir."
        },
        {
          id: "nr11-m7-pilares",
          type: "content",
          layout: "defs",
          kicker: "NR 12",
          title: "Os Quatro Pilares de Responsabilidade",
          body: "A sua atitude determina a segurança de todos. A NR 12 estabelece quatro responsabilidades diárias.",
          items: [
            {
              tag: "1",
              metric: "✓",
              title: "Inspeção diária",
              text: "Verifique o estado mecânico e os sistemas de segurança antes de iniciar o turno."
            },
            {
              tag: "2",
              metric: "!",
              title: "Comunicação de falhas",
              text: "Barulho estranho, mau funcionamento ou falha: não opere. Comunique o supervisor."
            },
            {
              tag: "3",
              metric: "kg",
              title: "Respeito à capacidade",
              text: "Nunca exceda o limite máximo de carga da placa do fabricante."
            },
            {
              tag: "4",
              metric: "PO",
              title: "Procedimentos internos",
              text: "Siga tráfego, manuseio e segurança definidos pela empresa."
            }
          ],
          transcript: "Os quatro pilares de responsabilidade do operador. A sua atitude determina a segurança de todos. A NR 12 estabelece quatro responsabilidades diárias. Primeiro: inspeção diária do estado mecânico e dos sistemas de segurança antes de iniciar o turno. Segundo: comunicação de falhas; barulho estranho, mau funcionamento ou falha, não opere e comunique o supervisor. Terceiro: respeito absoluto à capacidade; nunca exceda o limite máximo de carga da placa do fabricante. Quarto: seguir os procedimentos internos de tráfego, manuseio e segurança da empresa."
        },
        {
          id: "nr11-m7-riscos",
          type: "video",
          kicker: "Vídeo",
          title: "Identificando os Riscos Mecânicos e Elétricos",
          playerId: "panda-c0348109-5160-401f-9ed9-2ecdd39da5f0",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c0348109-5160-401f-9ed9-2ecdd39da5f0",
          transcript: "Vídeo. Identificando os Riscos Mecânicos e Elétricos. Segurança no Trabalho em Máquinas e Equipamentos. Assista ao vídeo sobre identificação dos riscos mecânicos e elétricos. Avance quando concluir."
        },
        {
          id: "nr11-m7-protecao",
          type: "content",
          layout: "guide",
          kicker: "Proteção",
          title: "Sistemas de Proteção e Regras de Proteção Física",
          body: "Nunca neutralize, altere ou opere com dispositivo de segurança desligado ou danificado.",
          items: [
            {
              tag: "Estrutura",
              title: "Grade superior",
              text: "Resguarda a cabeça em caso de queda de objetos."
            },
            {
              tag: "Emergência",
              title: "Botão de emergência",
              text: "Trava energia, tração e hidráulica na hora."
            },
            {
              tag: "Alerta",
              title: "Buzina e sinalização",
              text: "Buzina, giroflex e alarme de ré avisam pedestres."
            },
            {
              tag: "Obrigatório",
              title: "Cinto de segurança",
              text: "Use o cinto em todos os deslocamentos."
            },
            {
              tag: "Postura",
              title: "Dentro da cabine",
              text: "Mantenha o corpo sempre dentro do perímetro da cabine."
            },
            {
              tag: "Proibido",
              title: "Sem membros para fora",
              text: "Não apoie o corpo na coluna nem coloque membros para fora.",
              tone: "ban"
            }
          ],
          transcript: "Sistemas de proteção e regras de proteção física. Nunca neutralize, altere ou opere com dispositivo de segurança desligado ou danificado. Verifique diariamente a grade de proteção superior, o botão de emergência, a buzina, o giroflex e o alarme de ré. O cinto é obrigatório em todos os deslocamentos. O corpo deve permanecer sempre dentro do perímetro da cabine. Não apoie o corpo na coluna nem coloque membros para fora."
        },
        {
          id: "nr11-m7-condutas",
          type: "video",
          kicker: "Vídeo",
          title: "Condutas Proibidas e Boas Práticas",
          playerId: "panda-091b7c6a-4137-4eb7-94e1-aec929c970d5",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=091b7c6a-4137-4eb7-94e1-aec929c970d5",
          transcript: "Vídeo. Condutas Proibidas e Boas Práticas. Segurança no Trabalho em Máquinas e Equipamentos. Assista ao vídeo sobre condutas proibidas e boas práticas. Avance quando concluir."
        },
        {
          id: "nr11-m7-quiz-intro",
          type: "quiz-intro",
          title: "Missão NR 12 — Módulo 7",
          body: "Responda <strong>3 perguntas</strong> sobre a NR 12. Acerte no mínimo <strong>2</strong> para concluir.",
          count: 3,
          minCorrect: 2,
          transcript: "Missão NR 12 do módulo 7. Responda três perguntas sobre a NR 12. Acerte no mínimo duas para concluir."
        },
        {
          id: "nr11-m7-q1",
          type: "question",
          question: "Para que serve a NR 12?",
          image: "assets/fotos/p1m7.png",
          imageAlt: "NR 12 — segurança em máquinas e equipamentos",
          imageFit: "contain",
          imagePosition: "center 18%",
          alternatives: [
            { text: "Organizar apenas o horário de almoço da equipe." },
            { text: "Garantir segurança no trabalho com máquinas e equipamentos (empilhadeira/transpaleteira).", correct: true },
            { text: "Dispensar o uso do cinto de segurança." }
          ],
          explanation: "A NR 12 define requisitos mínimos de segurança em máquinas e equipamentos.",
          transcript: "Pergunta. Para que serve a NR 12? Opção 1: Organizar apenas o horário de almoço da equipe. Opção 2: Garantir segurança no trabalho com máquinas e equipamentos, empilhadeira ou transpaleteira. Opção 3: Dispensar o uso do cinto de segurança."
        },
        {
          id: "nr11-m7-q2",
          type: "question",
          question: "Qual é o primeiro dever de cada turno?",
          image: "assets/fotos/p2m7.png",
          imageAlt: "Inspeção do equipamento no início do turno",
          imageFit: "contain",
          imagePosition: "center 18%",
          alternatives: [
            { text: "Ligar o equipamento sem checklist para ganhar tempo." },
            { text: "Inspecionar o equipamento completo antes de usar.", correct: true },
            { text: "Deixar o colega inspecionar no seu lugar." }
          ],
          explanation: "Todo turno começa com inspeção completa do equipamento.",
          transcript: "Pergunta. Qual é o primeiro dever de cada turno? Opção 1: Ligar o equipamento sem checklist para ganhar tempo. Opção 2: Inspecionar o equipamento completo antes de usar. Opção 3: Deixar o colega inspecionar no seu lugar."
        },
        {
          id: "nr11-m7-q3",
          type: "question",
          question: "Qual risco existe na recarga da bateria?",
          image: "assets/fotos/p3m7.png",
          imageAlt: "Recarga de bateria da empilhadeira",
          imageFit: "contain",
          imagePosition: "center 18%",
          alternatives: [
            { text: "Nenhum risco elétrico relevante." },
            { text: "Curto-circuito, aquecimento excessivo e gases tóxicos/inflamáveis.", correct: true },
            { text: "Apenas o barulho do carregador." }
          ],
          explanation: "Na recarga há riscos elétricos e químicos; também existem riscos mecânicos e de atropelamento.",
          transcript: "Pergunta. Qual risco existe na recarga da bateria? Opção 1: Nenhum risco elétrico relevante. Opção 2: Curto-circuito, aquecimento excessivo e gases tóxicos ou inflamáveis. Opção 3: Apenas o barulho do carregador."
        },
        {
          id: "nr11-m7-final",
          type: "finale",
          kicker: "Conclusão",
          title: "Parabéns — treinamento concluído",
          body: "Você concluiu o treinamento NR 11 — Empilhadeira Retrátil, com conteúdo complementar da NR 12. Continue aplicando a segurança no dia a dia.",
          image: "assets/fotos/capafinal.png",
          transcript: "Parabéns. Você concluiu o treinamento NR 11 Empilhadeira Retrátil, com conteúdo complementar da NR 12. Continue aplicando a segurança no dia a dia. A segurança é um direito de todos e um dever de cada um."
        }
      ]
    }
  ]
};
