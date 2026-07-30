import type { GrupoPrazo } from "./tipos";

export const PRAZOS: GrupoPrazo[] = [
  {
    titulo: "I — CONTAGEM E NATUREZA DOS PRAZOS (TEORIA GERAL)",
    linhas: [
      {
        base: "{{art|Art. 798, caput}}",
        tema: "Natureza dos prazos processuais penais",
        destaque: "{{regra|CONTÍNUOS E PEREMPTÓRIOS}}",
        detalhe:
          "{{regra|NÃO SE INTERROMPEM}} por férias, domingo ou dia feriado. {{alerta|NÃO EXISTE}} suspensão de prazo penal entre 20/12 e 20/01 (isso é do CPC).",
      },
      {
        base: "{{art|Art. 798, § 1º}}",
        tema: "Forma de contagem (prazo PROCESSUAL)",
        destaque: "{{prazo|EXCLUI O DIA DO COMEÇO}}",
        detalhe:
          "{{regra|INCLUI-SE O DIA DO VENCIMENTO}}. Conta-se em dias {{alerta|CORRIDOS}} — não há contagem em dias úteis no processo penal.",
      },
      {
        base: "{{art|Art. 10 do CP}}",
        tema: "Forma de contagem (prazo PENAL / material)",
        destaque: "{{prazo|INCLUI O DIA DO COMEÇO}}",
        detalhe:
          "Aplica-se a {{alerta|DECADÊNCIA}}, {{alerta|PRESCRIÇÃO}} e {{alerta|CUMPRIMENTO DE PENA}}. São {{exc|IMPRORROGÁVEIS}} — não se prorrogam para o dia útil seguinte.",
      },
      {
        base: "{{art|Art. 798, § 3º}}",
        tema: "Vencimento em domingo ou feriado",
        destaque: "{{prazo|PRORROGA-SE PARA O 1º DIA ÚTIL}}",
        detalhe:
          "Vale apenas para prazo {{regra|PROCESSUAL}}. Prazo material ({{art|art. 10 do CP}}) {{exc|NÃO SE PRORROGA}}.",
      },
      {
        base: "{{art|Art. 798, § 5º}}",
        tema: "Termo inicial de fluência",
        destaque: "{{prazo|INTIMAÇÃO / AUDIÊNCIA / CIÊNCIA}}",
        detalhe:
          "a) da intimação; b) da audiência ou sessão em que for proferida a decisão, se presente a parte; c) do dia em que a parte manifestar nos autos ciência inequívoca.",
      },
      {
        base: "{{sum|Súmula 710 do STF}}",
        tema: "Termo inicial — mandado e precatória",
        destaque: "{{prazo|DA INTIMAÇÃO}}",
        detalhe:
          "No processo penal contam-se os prazos {{regra|DA DATA DA INTIMAÇÃO}}, e {{exc|NÃO DA JUNTADA}} aos autos do mandado, da carta precatória ou de ordem.",
      },
      {
        base: "{{art|Art. 797 e 799}}",
        tema: "Atos do escrivão",
        destaque: "{{prazo|2 DIAS}}",
        detalhe:
          "O escrivão executará dentro de {{prazo|2 DIAS}} os atos determinados em lei ou ordenados pelo juiz. Processo penal move-se {{regra|DE OFÍCIO}} (impulso oficial).",
      },
      {
        base: "{{art|Art. 800, I}}",
        tema: "Juiz — sentença definitiva de 1º grau e decisão em tribunal",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Contados do {{regra|TERMO DE CONCLUSÃO}} ({{art|art. 800, § 1º}}).",
      },
      {
        base: "{{art|Art. 800, II}}",
        tema: "Juiz — decisões interlocutórias (simples e mistas)",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Prazos {{exc|IMPRÓPRIOS}}: o descumprimento gera sanção disciplinar, não nulidade.",
      },
      {
        base: "{{art|Art. 800, III}}",
        tema: "Juiz — despachos de expediente",
        destaque: "{{prazo|1 DIA}}",
        detalhe: "Excedido o prazo, o juiz comunicará ao órgão disciplinar competente ({{art|art. 800, § 3º}}).",
      },
      {
        base: "{{art|Art. 801}}",
        tema: "Serventuários e órgãos do MP em atraso",
        destaque: "{{valor|PERDA DE VENCIMENTOS}}",
        detalhe:
          "Perderão tantos dias de vencimentos {{qtd|QUANTOS FOREM OS EXCEDIDOS}}, salvo motivo justificado aceito pelo juiz.",
      },
      {
        base: "{{art|Art. 806, § 2º}}",
        tema: "Custas na ação penal privada",
        destaque: "{{prazo|PRAZO FIXADO EM LEI OU PELO JUIZ}}",
        detalhe:
          "A falta de pagamento importa {{exc|RENÚNCIA À DILIGÊNCIA}} requerida ou {{exc|DESERÇÃO DO RECURSO}} interposto.",
      },
    ],
  },
  {
    titulo: "II — INQUÉRITO POLICIAL",
    linhas: [
      {
        base: "{{art|Art. 10, caput}}",
        tema: "Conclusão do IP — indiciado PRESO",
        destaque: "{{prazo|10 DIAS}}",
        detalhe:
          "Contados do dia em que se {{regra|EXECUTAR A PRISÃO}} (flagrante ou preventiva). Prazo em regra {{exc|IMPRORROGÁVEL}}.",
      },
      {
        base: "{{art|Art. 10, caput}}",
        tema: "Conclusão do IP — indiciado SOLTO",
        destaque: "{{prazo|30 DIAS}}",
        detalhe:
          "Contados da instauração. {{regra|PRORROGÁVEL}} sucessivamente pelo juiz, a requerimento da autoridade policial ({{art|art. 10, § 3º}}).",
      },
      {
        base: "{{art|Art. 3º-B, § 2º}}",
        tema: "IP sob o juiz das garantias — investigado preso",
        destaque: "{{prazo|10 DIAS + 15 DIAS}}",
        detalhe:
          "Prorrogação {{qtd|ÚNICA}} de até {{prazo|15 DIAS}}, se o crime for de difícil elucidação. Findo o prazo sem conclusão, {{exc|SOLTURA IMEDIATA}}.",
      },
      {
        base: "{{art|Lei 5.010/66, art. 66}}",
        tema: "IP na JUSTIÇA FEDERAL",
        destaque: "{{prazo|15 DIAS PRESO (+15) / 30 DIAS SOLTO}}",
        detalhe:
          "Único caso em que o prazo do preso é {{exc|PRORROGÁVEL}} por igual período, a pedido do delegado e com autorização do juiz.",
      },
      {
        base: "{{art|Lei 11.343/06, art. 51}}",
        tema: "IP na LEI DE DROGAS",
        destaque: "{{prazo|30 DIAS PRESO / 90 DIAS SOLTO}}",
        detalhe: "Ambos {{exc|DUPLICÁVEIS}} pelo juiz, ouvido o MP ({{prazo|60}} e {{prazo|180 DIAS}}).",
      },
      {
        base: "{{art|Lei 1.521/51, art. 10, § 1º}}",
        tema: "IP — crimes contra a economia popular",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Prazo {{alerta|ÚNICO}}: vale para indiciado {{regra|PRESO OU SOLTO}}.",
      },
      {
        base: "{{art|CPPM, art. 20}}",
        tema: "Inquérito Policial Militar (IPM)",
        destaque: "{{prazo|20 DIAS PRESO / 40 DIAS SOLTO}}",
        detalhe: "O prazo do indiciado solto pode ser prorrogado por mais {{prazo|20 DIAS}}.",
      },
      {
        base: "{{art|Art. 13-A, parágrafo único}}",
        tema: "Requisição de dados cadastrais (tráfico de pessoas, sequestro etc.)",
        destaque: "{{prazo|24 HORAS}}",
        detalhe:
          "Empresas e órgãos públicos devem atender à requisição do delegado ou do MP no prazo de {{prazo|24 HORAS}}.",
      },
      {
        base: "{{art|Art. 14-A, §§ 1º e 2º}}",
        tema: "Agente de segurança investigado (uso da força)",
        destaque: "{{prazo|48 HORAS}}",
        detalhe:
          "Prazo para constituir defensor após a citação/notificação; esgotado, a instituição indicará defensor.",
      },
      {
        base: "{{art|Art. 16}}",
        tema: "Devolução do IP pelo Ministério Público",
        destaque: "{{regra|SOMENTE PARA DILIGÊNCIAS IMPRESCINDÍVEIS}}",
        detalhe: "O MP {{exc|NÃO PODE}} devolver o IP por mera conveniência.",
      },
      {
        base: "{{art|Art. 21}}",
        tema: "Incomunicabilidade do preso",
        destaque: "{{prazo|3 DIAS (NÃO RECEPCIONADO)}}",
        detalhe:
          "{{alerta|PEGADINHA}}: o CPP prevê {{prazo|ATÉ 3 DIAS}}, mas a doutrina majoritária entende {{exc|NÃO RECEPCIONADO}} pela CF/88 ({{art|art. 136, § 3º, IV}}).",
      },
    ],
  },
  {
    titulo: "III — AÇÃO PENAL, ARQUIVAMENTO E ANPP",
    linhas: [
      {
        base: "{{art|Art. 38, caput}}",
        tema: "DECADÊNCIA — queixa ou representação",
        destaque: "{{prazo|6 MESES}}",
        detalhe:
          "Contados do dia em que o ofendido {{regra|SOUBER QUEM É O AUTOR}} do crime. Prazo {{alerta|PENAL}}, fatal e improrrogável ({{art|art. 10 do CP}}).",
      },
      {
        base: "{{art|Art. 38, parágrafo único}}",
        tema: "Ação penal privada SUBSIDIÁRIA da pública",
        destaque: "{{prazo|6 MESES}}",
        detalhe:
          "Contados do dia em que {{regra|SE ESGOTAR O PRAZO}} do MP para oferecer denúncia. O decurso gera {{exc|APENAS PRECLUSÃO}}, não decadência da ação pública.",
      },
      {
        base: "{{art|Art. 46, caput}}",
        tema: "Oferecimento da DENÚNCIA — réu PRESO",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Contados da data em que o MP {{regra|RECEBER OS AUTOS}} do inquérito policial.",
      },
      {
        base: "{{art|Art. 46, caput}}",
        tema: "Oferecimento da DENÚNCIA — réu SOLTO ou afiançado",
        destaque: "{{prazo|15 DIAS}}",
        detalhe:
          "Se houver devolução do IP para diligências, o prazo recomeça {{regra|INTEGRALMENTE}} ({{art|art. 46, § 2º}}).",
      },
      {
        base: "{{art|Lei 11.343/06, art. 54, III}}",
        tema: "Denúncia na Lei de Drogas",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Prazo único, esteja o indiciado {{regra|PRESO OU SOLTO}}.",
      },
      {
        base: "{{art|Lei 1.521/51, art. 10, § 2º}}",
        tema: "Denúncia — economia popular",
        destaque: "{{prazo|2 DIAS}}",
        detalhe: "Menor prazo do ordenamento para o oferecimento da denúncia.",
      },
      {
        base: "{{art|Art. 45}}",
        tema: "Aditamento da QUEIXA pelo Ministério Público",
        destaque: "{{prazo|3 DIAS}}",
        detalhe: "O MP atua como {{regra|CUSTOS LEGIS}} na ação penal privada ({{art|art. 45 e 46, § 2º}}).",
      },
      {
        base: "{{art|Art. 60, I}}",
        tema: "PEREMPÇÃO por inércia do querelante",
        destaque: "{{prazo|30 DIAS SEGUIDOS}}",
        detalhe:
          "Deixar de promover o andamento do processo por {{prazo|30 DIAS SEGUIDOS}}. Só existe na ação penal {{exc|PRIVADA EXCLUSIVA E PERSONALÍSSIMA}}.",
      },
      {
        base: "{{art|Art. 60, II}}",
        tema: "PEREMPÇÃO por morte/incapacidade do querelante",
        destaque: "{{prazo|60 DIAS}}",
        detalhe:
          "Prazo para o {{qtd|C.A.D.I.}} (cônjuge, ascendente, descendente ou irmão) comparecer em juízo para prosseguir ({{art|art. 31}}).",
      },
      {
        base: "{{art|Art. 58}}",
        tema: "Perdão do ofendido — manifestação do querelado",
        destaque: "{{prazo|3 DIAS}}",
        detalhe: "O {{regra|SILÊNCIO IMPORTA ACEITAÇÃO}} tácita do perdão (perdão é ato bilateral).",
      },
      {
        base: "{{art|Art. 28, § 1º}}",
        tema: "Revisão do ARQUIVAMENTO pela vítima",
        destaque: "{{prazo|30 DIAS}}",
        detalhe:
          "Contados do recebimento da comunicação. A vítima submete a matéria à {{regra|INSTÂNCIA DE REVISÃO MINISTERIAL}} (não mais ao juiz).",
      },
      {
        base: "{{art|Art. 28-A, caput}}",
        tema: "ANPP — requisito de pena",
        destaque: "{{pena|PENA MÍNIMA INFERIOR A 4 ANOS}}",
        detalhe:
          "Infração {{regra|SEM VIOLÊNCIA OU GRAVE AMEAÇA}}, com confissão formal e circunstanciada, e desde que necessário e suficiente.",
      },
      {
        base: "{{art|Art. 28-A, III}}",
        tema: "ANPP — prestação de serviços à comunidade",
        destaque: "{{pct|PENA MÍNIMA – 1/3 A 2/3}}",
        detalhe:
          "Período correspondente à pena mínima cominada, {{pct|DIMINUÍDA DE 1/3 A 2/3}}, em local indicado pelo juízo da execução.",
      },
      {
        base: "{{art|Art. 28-A, § 2º, III}}",
        tema: "ANPP — impedimento por benefício anterior",
        destaque: "{{prazo|5 ANOS}}",
        detalhe:
          "Não cabe se o agente foi beneficiado nos {{prazo|5 ANOS ANTERIORES}} por ANPP, transação penal ou suspensão condicional do processo.",
      },
      {
        base: "{{art|Art. 28-A, § 14}}",
        tema: "ANPP — recusa do MP em propor",
        destaque: "{{regra|REMESSA AO ÓRGÃO SUPERIOR}}",
        detalhe:
          "O investigado poderá requerer a remessa dos autos ao órgão superior do MP, na forma do {{art|art. 28}}.",
      },
      {
        base: "{{art|Art. 29}}",
        tema: "Ação privada subsidiária — retomada pelo MP",
        destaque: "{{regra|AÇÃO PENAL INDIRETA}}",
        detalhe:
          "O MP pode aditar, repudiar e oferecer denúncia substitutiva, intervir em todos os termos, fornecer provas, recorrer e {{regra|RETOMAR A AÇÃO}} em caso de negligência do querelante.",
      },
    ],
  },
  {
    titulo: "IV — PRISÕES, MEDIDAS CAUTELARES E LIBERDADE PROVISÓRIA",
    linhas: [
      {
        base: "{{art|Art. 306, caput}}",
        tema: "Comunicação da prisão",
        destaque: "{{prazo|IMEDIATA}}",
        detalhe: "Ao juiz competente, ao Ministério Público e à família do preso ou pessoa por ele indicada.",
      },
      {
        base: "{{art|Art. 306, § 1º}}",
        tema: "Remessa do auto de prisão em flagrante (APF)",
        destaque: "{{prazo|24 HORAS}}",
        detalhe:
          "Ao juiz competente; cópia integral à {{regra|DEFENSORIA PÚBLICA}} se o autuado não informar advogado.",
      },
      {
        base: "{{art|Art. 306, § 2º}}",
        tema: "Entrega da NOTA DE CULPA",
        destaque: "{{prazo|24 HORAS}}",
        detalhe:
          "Mediante recibo, assinada pela autoridade, com o motivo da prisão, o nome do condutor e o das testemunhas.",
      },
      {
        base: "{{art|Art. 310, caput}}",
        tema: "AUDIÊNCIA DE CUSTÓDIA",
        destaque: "{{prazo|24 HORAS}}",
        detalhe:
          "Apresentação {{regra|PESSOAL}} do preso ao juiz, com a presença do MP e da defesa. O juiz deve: relaxar, converter em preventiva ou conceder liberdade provisória.",
      },
      {
        base: "{{art|Art. 310, § 4º}}",
        tema: "Não realização da audiência de custódia",
        destaque: "{{prazo|+ 24 HORAS = PRISÃO ILEGAL}}",
        detalhe:
          "Transcorridas {{prazo|24 HORAS}} após o decurso do prazo, a ausência de motivação idônea torna a prisão {{exc|ILEGAL}}, com responsabilização.",
      },
      {
        base: "{{art|Art. 316, parágrafo único}}",
        tema: "REVISÃO periódica da prisão preventiva",
        destaque: "{{prazo|A CADA 90 DIAS}}",
        detalhe:
          "Decisão fundamentada, de ofício, pelo órgão emissor, sob pena de tornar a prisão ilegal. {{alerta|STF}}: a falta de revisão não gera soltura automática.",
      },
      {
        base: "{{art|Art. 3º-B, § 1º}}",
        tema: "Juiz das garantias — análise da comunicação de prisão",
        destaque: "{{prazo|24 HORAS}}",
        detalhe: "Recebida a comunicação, o juiz das garantias promoverá a audiência de custódia.",
      },
      {
        base: "{{art|Lei 7.960/89, art. 2º}}",
        tema: "PRISÃO TEMPORÁRIA — regra geral",
        destaque: "{{prazo|5 DIAS + 5 DIAS}}",
        detalhe:
          "Prorrogável por igual período em caso de {{regra|EXTREMA E COMPROVADA NECESSIDADE}}. Nunca decretada de ofício.",
      },
      {
        base: "{{art|Lei 8.072/90, art. 2º, § 4º}}",
        tema: "PRISÃO TEMPORÁRIA — crimes hediondos e equiparados",
        destaque: "{{prazo|30 DIAS + 30 DIAS}}",
        detalhe: "Prorrogação por igual período em caso de extrema e comprovada necessidade.",
      },
      {
        base: "{{art|Lei 7.960/89, art. 2º, § 2º}}",
        tema: "Decisão do juiz sobre a temporária",
        destaque: "{{prazo|24 HORAS}}",
        detalhe: "Contadas do recebimento da representação ou do requerimento, sempre fundamentada.",
      },
      {
        base: "{{art|Lei 7.960/89, art. 2º, § 7º}}",
        tema: "Fim do prazo da temporária",
        destaque: "{{regra|SOLTURA IMEDIATA}}",
        detalhe:
          "Independentemente de {{exc|ALVARÁ DE SOLTURA}}, salvo se já decretada prisão preventiva.",
      },
      {
        base: "{{art|Art. 313, I}}",
        tema: "Preventiva — requisito da pena",
        destaque: "{{pena|PENA MÁXIMA SUPERIOR A 4 ANOS}}",
        detalhe:
          "Crime {{regra|DOLOSO}}. {{alerta|ATENÇÃO}}: '4 anos' exatos {{exc|NÃO AUTORIZAM}} a preventiva por esse inciso.",
      },
      {
        base: "{{art|Art. 313, II e III}}",
        tema: "Preventiva — hipóteses autônomas",
        destaque: "{{exc|REINCIDÊNCIA / VIOLÊNCIA DOMÉSTICA}}",
        detalhe:
          "II — condenado por outro crime doloso, com trânsito em julgado; III — para garantir a execução de medidas protetivas de urgência.",
      },
      {
        base: "{{art|Art. 313, parágrafo único}}",
        tema: "Preventiva — dúvida sobre identidade civil",
        destaque: "{{regra|SOLTURA IMEDIATA APÓS IDENTIFICAÇÃO}}",
        detalhe: "Salvo se outra hipótese recomendar a manutenção da medida.",
      },
      {
        base: "{{art|Art. 318, I a VI}}",
        tema: "PRISÃO DOMICILIAR — hipóteses",
        destaque: "{{qtd|80 ANOS / 6 ANOS / 12 ANOS}}",
        detalhe:
          "Maior de {{qtd|80 ANOS}}; extremamente debilitado por doença grave; imprescindível aos cuidados de menor de {{qtd|6 ANOS}} ou PcD; gestante; mulher com filho de até {{qtd|12 ANOS INCOMPLETOS}}; homem único responsável por filho de até {{qtd|12 ANOS INCOMPLETOS}}.",
      },
      {
        base: "{{art|Art. 282, § 4º}}",
        tema: "Descumprimento de medida cautelar diversa",
        destaque: "{{regra|SUBSTITUIR → CUMULAR → PREVENTIVA}}",
        detalhe:
          "A prisão preventiva é a {{exc|ÚLTIMA RATIO}}, sempre mediante requerimento do MP, do assistente ou do querelante.",
      },
      {
        base: "{{art|Art. 366}}",
        tema: "Réu citado por EDITAL que não comparece",
        destaque: "{{regra|SUSPENDE PROCESSO E PRESCRIÇÃO}}",
        detalhe:
          "{{sum|Súmula 415 do STJ}}: o período de suspensão do prazo prescricional é regulado pelo {{regra|MÁXIMO DA PENA COMINADA}}.",
      },
      {
        base: "{{art|Art. 289-A}}",
        tema: "Banco Nacional de Mandados de Prisão",
        destaque: "{{regra|REGISTRO IMEDIATO NO CNJ}}",
        detalhe:
          "Qualquer agente policial poderá efetuar a prisão determinada em mandado registrado; a autoridade deve comunicar o juiz que decretou.",
      },
    ],
  },
  {
    titulo: "V — FIANÇA (PRAZOS, VALORES E PERCENTUAIS)",
    linhas: [
      {
        base: "{{art|Art. 322, caput}}",
        tema: "Fiança concedida pela AUTORIDADE POLICIAL",
        destaque: "{{pena|PENA MÁXIMA ATÉ 4 ANOS}}",
        detalhe:
          "Pena privativa de liberdade máxima {{regra|NÃO SUPERIOR A 4 ANOS}}. Acima disso, apenas o juiz.",
      },
      {
        base: "{{art|Art. 322, parágrafo único}}",
        tema: "Decisão do JUIZ sobre pedido de fiança",
        destaque: "{{prazo|48 HORAS}}",
        detalhe: "Prazo para o juiz decidir sobre o requerimento de fiança nos demais casos.",
      },
      {
        base: "{{art|Art. 325, I}}",
        tema: "VALOR da fiança — pena máxima até 4 anos",
        destaque: "{{valor|1 A 100 SALÁRIOS MÍNIMOS}}",
        detalhe: "Fixação conforme a natureza da infração, as condições pessoais e a situação econômica do preso.",
      },
      {
        base: "{{art|Art. 325, II}}",
        tema: "VALOR da fiança — pena máxima superior a 4 anos",
        destaque: "{{valor|10 A 200 SALÁRIOS MÍNIMOS}}",
        detalhe: "Considera-se também a periculosidade do agente e o custo do processo ({{art|art. 326}}).",
      },
      {
        base: "{{art|Art. 325, § 1º, I}}",
        tema: "Situação econômica precária — dispensa",
        destaque: "{{regra|FIANÇA DISPENSADA}}",
        detalhe:
          "Nos termos do {{art|art. 350}}, com sujeição às obrigações dos {{art|arts. 327 e 328}}.",
      },
      {
        base: "{{art|Art. 325, § 1º, II}}",
        tema: "REDUÇÃO da fiança",
        destaque: "{{pct|ATÉ 2/3}}",
        detalhe: "Limite máximo de redução em razão da situação econômica do preso.",
      },
      {
        base: "{{art|Art. 325, § 1º, III}}",
        tema: "AUMENTO da fiança",
        destaque: "{{pct|ATÉ 1.000 VEZES}}",
        detalhe: "Maior patamar de majoração previsto no CPP.",
      },
      {
        base: "{{art|Art. 333}}",
        tema: "REFORÇO da fiança",
        destaque: "{{prazo|48 HORAS}}",
        detalhe:
          "Prazo para o juiz decidir sobre o reforço. Fiança sem reforço é considerada {{exc|SEM EFEITO}} ({{art|art. 340, parágrafo único}}).",
      },
      {
        base: "{{art|Art. 335}}",
        tema: "Reclamação por recusa ou demora na fiança",
        destaque: "{{prazo|48 HORAS}}",
        detalhe: "O preso reclama ao juiz, que decidirá em {{prazo|48 HORAS}}.",
      },
      {
        base: "{{art|Art. 343}}",
        tema: "QUEBRAMENTO injustificado da fiança",
        destaque: "{{pct|PERDA DE METADE (1/2)}}",
        detalhe:
          "Cabe ao juiz decidir sobre outras medidas cautelares ou, se for o caso, a decretação da preventiva. Impede nova fiança no mesmo processo ({{art|art. 324, I}}).",
      },
      {
        base: "{{art|Art. 344}}",
        tema: "PERDA da fiança",
        destaque: "{{pct|PERDA TOTAL (100%)}}",
        detalhe:
          "Quando, condenado, o réu {{exc|NÃO SE APRESENTAR}} para o início do cumprimento da pena definitivamente imposta.",
      },
      {
        base: "{{art|Art. 345 e 336}}",
        tema: "Destinação do valor",
        destaque: "{{valor|FUNDO PENITENCIÁRIO}}",
        detalhe:
          "Deduzidas custas e encargos. Antes disso, responde por custas, indenização do dano, prestação pecuniária e multa ({{art|art. 336}}).",
      },
      {
        base: "{{art|Art. 334}}",
        tema: "Momento para prestar fiança",
        destaque: "{{prazo|ATÉ O TRÂNSITO EM JULGADO}}",
        detalhe: "A fiança poderá ser prestada enquanto não transitar em julgado a sentença condenatória.",
      },
    ],
  },
  {
    titulo: "VI — CITAÇÕES, INTIMAÇÕES E COMUNICAÇÕES",
    linhas: [
      {
        base: "{{art|Art. 361 e 364}}",
        tema: "Citação por EDITAL — réu não encontrado",
        destaque: "{{prazo|15 DIAS}}",
        detalhe: "Prazo do edital. Não comparecendo nem constituindo advogado, aplica-se o {{art|art. 366}}.",
      },
      {
        base: "{{art|Art. 362}}",
        tema: "Citação por HORA CERTA — réu que se oculta",
        destaque: "{{regra|APLICAM-SE OS ARTS. 227 A 229 DO CPC}}",
        detalhe:
          "Não comparecendo, o juiz nomeará {{regra|DEFENSOR DATIVO}} — {{exc|NÃO SE SUSPENDE}} o processo (diferente do edital).",
      },
      {
        base: "{{art|Art. 368}}",
        tema: "Citação por CARTA ROGATÓRIA (réu no estrangeiro)",
        destaque: "{{regra|SUSPENDE A PRESCRIÇÃO}}",
        detalhe: "Suspende o curso do prazo prescricional até o seu cumprimento — em lugar sabido.",
      },
      {
        base: "{{art|Art. 396}}",
        tema: "RESPOSTA À ACUSAÇÃO",
        destaque: "{{prazo|10 DIAS}}",
        detalhe:
          "Peça {{regra|OBRIGATÓRIA}}. Nela se arrolam testemunhas, alegam preliminares e se argui tudo que interesse à defesa.",
      },
      {
        base: "{{art|Art. 396-A, § 2º}}",
        tema: "Resposta por defensor nomeado",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Não apresentada a resposta, o juiz nomeará defensor e lhe dará vista dos autos por {{prazo|10 DIAS}}.",
      },
      {
        base: "{{art|Art. 370, § 4º}}",
        tema: "Intimação do MP e do defensor nomeado",
        destaque: "{{regra|SEMPRE PESSOAL}}",
        detalhe:
          "Defensor {{exc|CONSTITUÍDO}}, advogado do querelante e assistente são intimados por publicação ({{art|art. 370, § 1º}}).",
      },
      {
        base: "{{art|Art. 392}}",
        tema: "Intimação da SENTENÇA",
        destaque: "{{regra|RÉU E DEFENSOR}}",
        detalhe:
          "Réu preso: pessoalmente. Réu solto por crime inafiançável: pessoal ou por edital de {{prazo|90 DIAS}} se não encontrado; afiançável: edital de {{prazo|30 DIAS}}.",
      },
    ],
  },
  {
    titulo: "VII — PROVAS, PERÍCIAS E INCIDENTES",
    linhas: [
      {
        base: "{{art|Art. 160, parágrafo único}}",
        tema: "Elaboração do LAUDO PERICIAL",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Prorrogável em casos excepcionais, a requerimento dos peritos.",
      },
      {
        base: "{{art|Art. 162}}",
        tema: "AUTÓPSIA (exame necroscópico)",
        destaque: "{{prazo|APÓS 6 HORAS DO ÓBITO}}",
        detalhe:
          "{{exc|EXCEÇÃO}}: pode ser feita antes se os peritos, pela evidência dos sinais de morte, assim declararem no auto.",
      },
      {
        base: "{{art|Art. 168, § 2º}}",
        tema: "EXAME COMPLEMENTAR — lesão corporal grave",
        destaque: "{{prazo|APÓS 30 DIAS DO CRIME}}",
        detalhe:
          "Para atestar incapacidade para as ocupações habituais por mais de {{prazo|30 DIAS}} ({{art|art. 129, § 1º, I, do CP}}).",
      },
      {
        base: "{{art|Art. 150, § 1º}}",
        tema: "Incidente de INSANIDADE MENTAL",
        destaque: "{{prazo|45 DIAS}}",
        detalhe: "Salvo se os peritos demonstrarem a necessidade de maior prazo. Pode ser instaurado já no IP.",
      },
      {
        base: "{{art|Art. 100, caput e § 1º}}",
        tema: "Exceção de SUSPEIÇÃO não reconhecida",
        destaque: "{{prazo|3 DIAS + 24 HORAS}}",
        detalhe:
          "O juiz responde em {{prazo|3 DIAS}} e manda os autos ao tribunal dentro de {{prazo|24 HORAS}}.",
      },
      {
        base: "{{art|Art. 108}}",
        tema: "Exceção de INCOMPETÊNCIA do juízo",
        destaque: "{{prazo|NO PRAZO DE DEFESA}}",
        detalhe:
          "Oposta verbalmente ou por escrito. {{sum|Súmula 33 do STJ}}: a incompetência relativa {{exc|NÃO PODE}} ser declarada de ofício.",
      },
      {
        base: "{{art|Art. 120, § 1º}}",
        tema: "RESTITUIÇÃO de coisa apreendida (direito duvidoso)",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Autuado em apartado; assina-se ao requerente prazo de {{prazo|5 DIAS}} para a prova. Ouve-se sempre o MP.",
      },
      {
        base: "{{art|Art. 122}}",
        tema: "PERDIMENTO de bens em favor da União",
        destaque: "{{prazo|90 DIAS}}",
        detalhe: "Contados do trânsito em julgado da sentença condenatória.",
      },
      {
        base: "{{art|Art. 123}}",
        tema: "LEILÃO de bens não reclamados",
        destaque: "{{prazo|90 DIAS}}",
        detalhe:
          "A contar do trânsito em julgado da sentença final, condenatória ou absolutória. Apurado o valor, recolhe-se ao Tesouro Nacional.",
      },
      {
        base: "{{art|Art. 131, I}}",
        tema: "Levantamento do SEQUESTRO",
        destaque: "{{prazo|60 DIAS}}",
        detalhe:
          "Se a ação penal não for intentada em {{prazo|60 DIAS}} da conclusão da diligência; também se houver caução ou absolvição/extinção transitada em julgado.",
      },
      {
        base: "{{art|Art. 136}}",
        tema: "ARRESTO prévio de imóvel",
        destaque: "{{prazo|15 DIAS}}",
        detalhe: "Revoga-se se, em {{prazo|15 DIAS}}, não for promovido o processo de inscrição da hipoteca legal.",
      },
      {
        base: "{{art|Art. 130, parágrafo único}}",
        tema: "Embargos ao sequestro",
        destaque: "{{regra|JULGAMENTO APÓS O TRÂNSITO EM JULGADO}}",
        detalhe: "Os embargos não poderão ser julgados antes de passar em julgado a sentença condenatória.",
      },
      {
        base: "{{art|Art. 222}}",
        tema: "Carta PRECATÓRIA para oitiva de testemunha",
        destaque: "{{regra|NÃO SUSPENDE A INSTRUÇÃO}}",
        detalhe:
          "O juiz fixa prazo razoável. {{sum|Súmula 273 do STJ}}: intimada a defesa da expedição, é dispensável a intimação da audiência no juízo deprecado.",
      },
      {
        base: "{{art|Art. 479}}",
        tema: "Juntada de documento para uso em PLENÁRIO do júri",
        destaque: "{{prazo|3 DIAS ÚTEIS DE ANTECEDÊNCIA}}",
        detalhe:
          "Documento ou objeto só pode ser lido/exibido se juntado com {{prazo|3 DIAS ÚTEIS}} de antecedência, cientificada a parte contrária.",
      },
    ],
  },
  {
    titulo: "VIII — PROCEDIMENTO COMUM (ORDINÁRIO E SUMÁRIO)",
    linhas: [
      {
        base: "{{art|Art. 394, § 1º, I}}",
        tema: "Procedimento ORDINÁRIO",
        destaque: "{{pena|PENA MÁXIMA ≥ 4 ANOS}}",
        detalhe: "Sanção máxima igual ou superior a {{pena|4 ANOS}} de pena privativa de liberdade.",
      },
      {
        base: "{{art|Art. 394, § 1º, II}}",
        tema: "Procedimento SUMÁRIO",
        destaque: "{{pena|PENA MÁXIMA < 4 ANOS}}",
        detalhe: "Sanção máxima inferior a {{pena|4 ANOS}}.",
      },
      {
        base: "{{art|Art. 394, § 1º, III}}",
        tema: "Procedimento SUMARÍSSIMO",
        destaque: "{{pena|ATÉ 2 ANOS}}",
        detalhe: "Infrações de menor potencial ofensivo — Lei 9.099/95 ({{regra|JECRIM}}).",
      },
      {
        base: "{{art|Art. 400, caput}}",
        tema: "Audiência de instrução — ORDINÁRIO",
        destaque: "{{prazo|60 DIAS}}",
        detalhe: "Prazo máximo para realização da AIJ, em ato único e concentrado.",
      },
      {
        base: "{{art|Art. 531}}",
        tema: "Audiência de instrução — SUMÁRIO",
        destaque: "{{prazo|30 DIAS}}",
        detalhe: "Mesma estrutura do ordinário, com menor número de testemunhas.",
      },
      {
        base: "{{art|Art. 401 e 532}}",
        tema: "Número de TESTEMUNHAS",
        destaque: "{{qtd|8 (ORDINÁRIO) / 5 (SUMÁRIO)}}",
        detalhe:
          "Por fato e por réu. {{exc|NÃO SE COMPUTAM}} as que não prestem compromisso e as referidas ({{art|art. 401, § 1º}}). JECRIM: {{qtd|3}}.",
      },
      {
        base: "{{art|Art. 403, caput}}",
        tema: "ALEGAÇÕES FINAIS ORAIS",
        destaque: "{{prazo|20 MIN + 10 MIN}}",
        detalhe:
          "Para acusação e defesa, prorrogáveis por mais {{prazo|10 MINUTOS}}. Havendo mais de um acusado, o tempo da defesa é {{regra|INDIVIDUAL}}.",
      },
      {
        base: "{{art|Art. 403, § 2º}}",
        tema: "Tempo do ASSISTENTE de acusação",
        destaque: "{{prazo|10 MINUTOS}}",
        detalhe: "Após a manifestação do MP; prorroga-se por igual período o tempo da defesa.",
      },
      {
        base: "{{art|Art. 403, § 3º}}",
        tema: "MEMORIAIS escritos (caso complexo)",
        destaque: "{{prazo|5 DIAS + SENTENÇA EM 10 DIAS}}",
        detalhe: "Prazo sucessivo de {{prazo|5 DIAS}} para cada parte; o juiz sentencia em {{prazo|10 DIAS}}.",
      },
      {
        base: "{{art|Art. 404, parágrafo único}}",
        tema: "Após diligências deferidas ({{art|art. 402}})",
        destaque: "{{prazo|5 DIAS + 10 DIAS}}",
        detalhe: "Memoriais em {{prazo|5 DIAS}} e sentença em {{prazo|10 DIAS}}.",
      },
      {
        base: "{{art|Art. 384}}",
        tema: "MUTATIO LIBELLI — aditamento",
        destaque: "{{prazo|5 DIAS + 5 DIAS}}",
        detalhe:
          "MP adita em {{prazo|5 DIAS}}; defesa se manifesta em {{prazo|5 DIAS}}; podem ser arroladas até {{qtd|3 TESTEMUNHAS}}.",
      },
      {
        base: "{{art|Art. 514}}",
        tema: "Crimes funcionais afiançáveis — resposta preliminar",
        destaque: "{{prazo|15 DIAS}}",
        detalhe:
          "Notificação prévia do funcionário público. {{sum|Súmula 330 do STJ}}: {{exc|DESNECESSÁRIA}} quando a ação penal for precedida de inquérito policial.",
      },
      {
        base: "{{art|Lei 11.343/06, art. 55}}",
        tema: "Defesa prévia na Lei de Drogas",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Antes do recebimento da denúncia — sua supressão gera nulidade.",
      },
      {
        base: "{{art|Lei 8.038/90, art. 4º}}",
        tema: "Competência originária dos tribunais — resposta",
        destaque: "{{prazo|15 DIAS}}",
        detalhe: "Notificação do acusado para oferecer resposta antes do recebimento da denúncia.",
      },
    ],
  },
  {
    titulo: "IX — TRIBUNAL DO JÚRI (PROCEDIMENTO BIFÁSICO)",
    linhas: [
      {
        base: "{{art|Art. 406}}",
        tema: "Resposta à acusação (1ª fase)",
        destaque: "{{prazo|10 DIAS}}",
        detalhe: "Rol de até {{qtd|8 TESTEMUNHAS}} na denúncia/queixa e na resposta ({{art|art. 406, §§ 2º e 3º}}).",
      },
      {
        base: "{{art|Art. 409}}",
        tema: "Manifestação da acusação sobre preliminares",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Apresentada a defesa, ouve-se o MP ou o querelante sobre preliminares e documentos.",
      },
      {
        base: "{{art|Art. 411, § 4º}}",
        tema: "Debates orais na 1ª fase",
        destaque: "{{prazo|20 MIN + 10 MIN}}",
        detalhe: "Para acusação e defesa; réplica e tréplica {{exc|NÃO EXISTEM}} nesta fase.",
      },
      {
        base: "{{art|Art. 411, § 9º}}",
        tema: "Decisão de pronúncia (1ª fase)",
        destaque: "{{prazo|EM AUDIÊNCIA OU 10 DIAS}}",
        detalhe: "Encerrados os debates, o juiz decide na própria audiência ou em até {{prazo|10 DIAS}}.",
      },
      {
        base: "{{art|Art. 412}}",
        tema: "Conclusão da 1ª FASE (sumário da culpa)",
        destaque: "{{prazo|90 DIAS}}",
        detalhe: "Prazo máximo do procedimento preparatório, contado do recebimento da denúncia.",
      },
      {
        base: "{{art|Art. 422}}",
        tema: "Preparação do PLENÁRIO",
        destaque: "{{prazo|5 DIAS / ATÉ 5 TESTEMUNHAS}}",
        detalhe:
          "Prazo comum de {{prazo|5 DIAS}} para arrolar até {{qtd|5 TESTEMUNHAS}}, juntar documentos e requerer diligências.",
      },
      {
        base: "{{art|Art. 425, caput}}",
        tema: "ALISTAMENTO anual de jurados",
        destaque: "{{qtd|800-1.500 / 300-700 / 80-400}}",
        detalhe:
          "Comarcas com mais de {{qtd|1.000.000}} de habitantes: {{qtd|800 A 1.500}}; mais de {{qtd|100.000}}: {{qtd|300 A 700}}; menor população: {{qtd|80 A 400}}.",
      },
      {
        base: "{{art|Art. 426}}",
        tema: "Publicação das listas de jurados",
        destaque: "{{prazo|10 DE OUTUBRO / 10 DE NOVEMBRO}}",
        detalhe:
          "Lista geral publicada até {{prazo|10 DE OUTUBRO}}; lista definitiva até {{prazo|10 DE NOVEMBRO}}, com afixação à porta do fórum.",
      },
      {
        base: "{{art|Art. 426, § 4º}}",
        tema: "Exclusão do jurado que já serviu",
        destaque: "{{prazo|12 MESES}}",
        detalhe: "Quem integrou o Conselho de Sentença nos {{prazo|12 MESES}} anteriores fica excluído da lista geral.",
      },
      {
        base: "{{art|Art. 428}}",
        tema: "DESAFORAMENTO por excesso de serviço",
        destaque: "{{prazo|6 MESES}}",
        detalhe:
          "Se o julgamento não puder ser realizado em {{prazo|6 MESES}} do trânsito em julgado da pronúncia. {{exc|NÃO SE COMPUTA}} o tempo de adiamentos provocados pela defesa.",
      },
      {
        base: "{{art|Art. 427}}",
        tema: "DESAFORAMENTO por ordem pública / imparcialidade / segurança",
        destaque: "{{regra|DISTRIBUIÇÃO IMEDIATA E PREFERENCIAL}}",
        detalhe:
          "Requerido pelo MP, assistente, querelante, acusado ou por representação do juiz. Ouve-se o juiz presidente; o relator pode suspender o julgamento.",
      },
      {
        base: "{{art|Art. 433}}",
        tema: "SORTEIO dos jurados da sessão",
        destaque: "{{prazo|ENTRE O 15º E O 10º DIA ÚTIL}}",
        detalhe:
          "Antecedente à instalação da reunião; sorteio público de {{qtd|25 JURADOS}} dentre os alistados na lista geral.",
      },
      {
        base: "{{art|Art. 447 e 463}}",
        tema: "COMPOSIÇÃO e instalação da sessão",
        destaque: "{{qtd|25 SORTEADOS / 15 PRESENTES / 7 NO CONSELHO}}",
        detalhe:
          "{{qtd|1 JUIZ TOGADO}} (presidente) + {{qtd|25 JURADOS}}; instala-se com no mínimo {{qtd|15 PRESENTES}}; o Conselho de Sentença tem {{qtd|7 JURADOS}}.",
      },
      {
        base: "{{art|Art. 468}}",
        tema: "RECUSAS PEREMPTÓRIAS (imotivadas)",
        destaque: "{{qtd|3 POR PARTE}}",
        detalhe:
          "Acusação e defesa podem recusar até {{qtd|3 JURADOS}} sem motivar. Havendo corréus com defesas colidentes, cada defensor tem suas recusas ({{art|art. 469}}).",
      },
      {
        base: "{{art|Art. 477, caput}}",
        tema: "DEBATES em plenário",
        destaque: "{{prazo|1H30 + 1H30 / RÉPLICA 1H / TRÉPLICA 1H}}",
        detalhe: "Acusação e defesa: {{prazo|1H30}} cada; réplica de {{prazo|1 HORA}} e tréplica de {{prazo|1 HORA}}.",
      },
      {
        base: "{{art|Art. 477, § 1º}}",
        tema: "DEBATES com mais de um acusado",
        destaque: "{{prazo|2H30 / RÉPLICA E TRÉPLICA EM DOBRO}}",
        detalhe:
          "Tempo acrescido de {{prazo|1 HORA}} (total {{prazo|2H30}}) e réplica/tréplica elevadas ao {{pct|DOBRO}} ({{prazo|2 HORAS}}).",
      },
      {
        base: "{{art|Art. 483, § 1º}}",
        tema: "VOTAÇÃO dos quesitos",
        destaque: "{{qtd|MAIS DE 3 VOTOS (4 VOTOS)}}",
        detalhe:
          "Atingidos {{qtd|4 VOTOS}} em um sentido, encerra-se a votação do quesito para preservar o {{regra|SIGILO}} das votações.",
      },
      {
        base: "{{art|Art. 492, § 3º}}",
        tema: "Execução provisória da pena no júri",
        destaque: "{{pena|PENA ≥ 15 ANOS DE RECLUSÃO}}",
        detalhe:
          "Condenação igual ou superior a {{pena|15 ANOS}} autoriza a execução provisória, ressalvado o efeito suspensivo excepcional (§§ 4º e 5º).",
      },
      {
        base: "{{art|Art. 436, § 2º e 442}}",
        tema: "MULTA ao jurado (recusa ou ausência)",
        destaque: "{{valor|1 A 10 SALÁRIOS MÍNIMOS}}",
        detalhe:
          "A critério do juiz, conforme a condição econômica do jurado. A recusa por convicção religiosa/filosófica gera {{exc|SERVIÇO ALTERNATIVO}}.",
      },
      {
        base: "{{art|Art. 458}}",
        tema: "MULTA à testemunha faltosa no plenário",
        destaque: "{{valor|1 A 10 SALÁRIOS MÍNIMOS}}",
        detalhe: "Sem prejuízo da ação penal por crime de desobediência.",
      },
    ],
  },
  {
    titulo: "X — RECURSOS EM ESPÉCIE (PRAZOS)",
    linhas: [
      {
        base: "{{art|Art. 586, caput}}",
        tema: "RECURSO EM SENTIDO ESTRITO — interposição",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Razões em {{prazo|2 DIAS}} ({{art|art. 588}}); contrarrazões em {{prazo|2 DIAS}}.",
      },
      {
        base: "{{art|Art. 586, parágrafo único}}",
        tema: "RESE contra inclusão/exclusão da lista de jurados",
        destaque: "{{prazo|20 DIAS}}",
        detalhe:
          "Contados da publicação definitiva da lista ({{art|art. 581, XIV}}). {{alerta|MAIOR PRAZO}} de RESE do CPP.",
      },
      {
        base: "{{art|Art. 589}}",
        tema: "JUÍZO DE RETRATAÇÃO no RESE",
        destaque: "{{prazo|2 DIAS}}",
        detalhe:
          "Efeito {{regra|REGRESSIVO/ITERATIVO}}: o juiz pode reformar a própria decisão; a parte contrária pode então recorrer.",
      },
      {
        base: "{{art|Art. 593, caput}}",
        tema: "APELAÇÃO — interposição",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Por petição ou termo nos autos. Razões em {{prazo|8 DIAS}} ({{art|art. 600}}).",
      },
      {
        base: "{{art|Art. 600, caput}}",
        tema: "Razões e contrarrazões de apelação",
        destaque: "{{prazo|8 DIAS (3 NAS CONTRAVENÇÕES)}}",
        detalhe:
          "Havendo assistente, ele arrazoa em {{prazo|3 DIAS}} após o MP ({{art|art. 600, § 1º}}). O apelante pode optar por arrazoar na instância superior (§ 4º).",
      },
      {
        base: "{{art|Art. 598, parágrafo único}}",
        tema: "APELAÇÃO SUPLETIVA do ofendido/assistente",
        destaque: "{{prazo|15 DIAS (NÃO HABILITADO) / 5 DIAS (HABILITADO)}}",
        detalhe:
          "{{sum|Súmula 448 do STF}}: o prazo do assistente começa a correr imediatamente após o transcurso do prazo do MP.",
      },
      {
        base: "{{art|Art. 619}}",
        tema: "EMBARGOS DE DECLARAÇÃO nos tribunais",
        destaque: "{{prazo|2 DIAS}}",
        detalhe: "Cabíveis contra acórdão: ambiguidade, obscuridade, contradição ou omissão.",
      },
      {
        base: "{{art|Art. 382}}",
        tema: "EMBARGOS DE DECLARAÇÃO em 1º grau ('embarguinhos')",
        destaque: "{{prazo|2 DIAS}}",
        detalhe: "Contra sentença; no JECRIM o prazo é de {{prazo|5 DIAS}} ({{art|art. 83 da Lei 9.099/95}}).",
      },
      {
        base: "{{art|Art. 609, parágrafo único}}",
        tema: "EMBARGOS INFRINGENTES E DE NULIDADE",
        destaque: "{{prazo|10 DIAS}}",
        detalhe:
          "{{regra|EXCLUSIVOS DA DEFESA}}; exigem decisão de 2ª instância {{regra|NÃO UNÂNIME}} e desfavorável ao réu.",
      },
      {
        base: "{{art|Art. 640}}",
        tema: "CARTA TESTEMUNHÁVEL",
        destaque: "{{prazo|48 HORAS}}",
        detalhe:
          "Requerida ao escrivão contra decisão que denegar o recurso ou obstar sua expedição/seguimento. {{exc|NÃO TEM}} efeito suspensivo ({{art|art. 646}}).",
      },
      {
        base: "{{art|LEP, art. 197 / Súmula 700 do STF}}",
        tema: "AGRAVO EM EXECUÇÃO",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "Rito do RESE, {{exc|SEM EFEITO SUSPENSIVO}}, com juízo de retratação.",
      },
      {
        base: "{{art|Lei 8.038/90 / CPC}}",
        tema: "RECURSO ESPECIAL e EXTRAORDINÁRIO",
        destaque: "{{prazo|15 DIAS}}",
        detalhe:
          "Também {{prazo|15 DIAS}} para o agravo em RE/REsp. {{exc|NÃO TÊM}} efeito suspensivo ({{art|art. 637}}).",
      },
      {
        base: "{{art|Lei 9.099/95, art. 82, § 1º}}",
        tema: "APELAÇÃO no JECRIM",
        destaque: "{{prazo|10 DIAS}}",
        detalhe:
          "Petição {{regra|E RAZÕES CONJUNTAS}} — não há prazo separado. Julgada por Turma Recursal composta por {{qtd|3 JUÍZES}}.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 83, § 2º}}",
        tema: "EMBARGOS DE DECLARAÇÃO no JECRIM",
        destaque: "{{prazo|5 DIAS}}",
        detalhe: "{{regra|INTERROMPEM}} o prazo para os demais recursos.",
      },
      {
        base: "{{art|Art. 621 a 625}}",
        tema: "REVISÃO CRIMINAL",
        destaque: "{{prazo|A QUALQUER TEMPO}}",
        detalhe:
          "Antes da extinção da pena ou {{regra|APÓS}} ela; cabe até depois da morte do réu ({{art|art. 623}}). {{exc|NÃO É REITERÁVEL}}, salvo com novas provas.",
      },
      {
        base: "{{art|Art. 647 e ss.}}",
        tema: "HABEAS CORPUS",
        destaque: "{{prazo|SEM PRAZO}}",
        detalhe:
          "Ação autônoma de impugnação; pode ser impetrado por {{regra|QUALQUER PESSOA}}, sem capacidade postulatória, e concedido de ofício ({{art|art. 654, § 2º}}).",
      },
      {
        base: "{{art|Lei 12.016/09, art. 23}}",
        tema: "MANDADO DE SEGURANÇA criminal",
        destaque: "{{prazo|120 DIAS}}",
        detalhe: "Prazo decadencial, contado da ciência do ato impugnado.",
      },
      {
        base: "{{art|Art. 660, caput}}",
        tema: "Decisão do juiz no HABEAS CORPUS",
        destaque: "{{prazo|24 HORAS}}",
        detalhe: "Efetuadas as diligências e interrogado o paciente, o juiz decidirá fundamentadamente.",
      },
      {
        base: "{{art|Art. 615, § 1º}}",
        tema: "EMPATE no julgamento de recursos",
        destaque: "{{regra|PREVALECE A DECISÃO MAIS FAVORÁVEL AO RÉU}}",
        detalhe: "Se o presidente não votou, profere o voto de desempate; caso contrário, in dubio pro reo.",
      },
    ],
  },
  {
    titulo: "XI — JECRIM (LEI 9.099/95) E INSTITUTOS DESPENALIZADORES",
    linhas: [
      {
        base: "{{art|Lei 9.099/95, art. 61}}",
        tema: "Infração de MENOR POTENCIAL OFENSIVO",
        destaque: "{{pena|PENA MÁXIMA ATÉ 2 ANOS}}",
        detalhe:
          "Contravenções penais e crimes com pena máxima não superior a {{pena|2 ANOS}}, cumulada ou não com multa, {{regra|AINDA QUE}} previstos em procedimento especial.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 74}}",
        tema: "COMPOSIÇÃO CIVIL dos danos",
        destaque: "{{regra|RENÚNCIA AO DIREITO DE QUEIXA/REPRESENTAÇÃO}}",
        detalhe:
          "Homologada, vale como título executivo e acarreta renúncia na ação penal {{regra|PRIVADA}} e {{regra|PÚBLICA CONDICIONADA}}.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 76}}",
        tema: "TRANSAÇÃO PENAL",
        destaque: "{{prazo|5 ANOS (IMPEDIMENTO)}}",
        detalhe:
          "Não cabe se condenado por sentença definitiva a pena privativa de liberdade, ou se beneficiado nos {{prazo|5 ANOS ANTERIORES}}. Não gera reincidência nem maus antecedentes.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 89}}",
        tema: "SUSPENSÃO CONDICIONAL DO PROCESSO (sursis processual)",
        destaque: "{{pena|PENA MÍNIMA ≤ 1 ANO}} — {{prazo|2 A 4 ANOS}}",
        detalhe:
          "Período de prova de {{prazo|2 A 4 ANOS}}; exige não estar sendo processado nem ter sido condenado por outro crime.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 89, § 3º}}",
        tema: "Revogação OBRIGATÓRIA do sursis processual",
        destaque: "{{exc|PROCESSADO POR CRIME / NÃO REPARAR O DANO}}",
        detalhe: "No curso do prazo, sendo processado por outro CRIME ou não efetuando a reparação do dano.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 89, § 4º}}",
        tema: "Revogação FACULTATIVA do sursis processual",
        destaque: "{{exc|PROCESSADO POR CONTRAVENÇÃO / DESCUMPRIR CONDIÇÃO}}",
        detalhe: "Sendo processado por contravenção ou descumprindo qualquer outra condição imposta.",
      },
      {
        base: "{{sum|Súmula 536 do STJ}}",
        tema: "Lei Maria da Penha",
        destaque: "{{exc|NÃO CABE TRANSAÇÃO NEM SURSIS PROCESSUAL}}",
        detalhe:
          "{{sum|Súmula 588 do STJ}}: também é vedada a substituição da pena privativa por restritiva de direitos.",
      },
      {
        base: "{{sum|Súmula 243 do STJ}}",
        tema: "Concurso de crimes e sursis processual",
        destaque: "{{exc|NÃO CABE SE A PENA MÍNIMA SOMADA > 1 ANO}}",
        detalhe: "Aplica-se ao concurso material, formal e à continuidade delitiva.",
      },
    ],
  },
];
