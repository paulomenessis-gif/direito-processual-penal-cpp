import type { GrupoPrazo } from "./tipos";

/**
 * Tabela 2 — MULTAS, VALORES, PERCENTUAIS, FRAÇÕES, QUANTIDADES E PATAMARES DE PENA.
 * Reaproveita a estrutura de GrupoPrazo (base | tema | destaque | detalhe).
 */
export const VALORES: GrupoPrazo[] = [
  {
    titulo: "I — MULTAS PROCESSUAIS PREVISTAS NO CPP",
    linhas: [
      {
        base: "{{art|Art. 219}}",
        tema: "TESTEMUNHA que falta sem justificativa",
        destaque: "{{valor|1 A 10 SALÁRIOS MÍNIMOS}}",
        detalhe:
          "Cumulável com {{regra|CONDUÇÃO COERCITIVA}}, pagamento das {{valor|CUSTAS DA DILIGÊNCIA}} e processo por crime de {{alerta|DESOBEDIÊNCIA}} ({{art|art. 330 do CP}}).",
      },
      {
        base: "{{art|Art. 436, § 2º}}",
        tema: "Recusa injustificada ao SERVIÇO DO JÚRI",
        destaque: "{{valor|1 A 10 SALÁRIOS MÍNIMOS}}",
        detalhe:
          "A critério do juiz, conforme a condição econômica do jurado. Recusa por convicção religiosa/filosófica/política: {{exc|SERVIÇO ALTERNATIVO}} ({{art|art. 438}}).",
      },
      {
        base: "{{art|Art. 442}}",
        tema: "JURADO ausente ou que se retira antes de dispensado",
        destaque: "{{valor|1 A 10 SALÁRIOS MÍNIMOS}}",
        detalhe: "Sem causa legítima, no dia marcado para a sessão.",
      },
      {
        base: "{{art|Art. 458}}",
        tema: "Testemunha faltosa no PLENÁRIO do júri",
        destaque: "{{valor|1 A 10 SALÁRIOS MÍNIMOS}}",
        detalhe: "Aplica-se a multa do {{art|art. 436, § 2º}}, sem prejuízo da ação penal por desobediência.",
      },
      {
        base: "{{art|Art. 265, caput}}",
        tema: "ABANDONO DO PROCESSO pelo defensor",
        destaque: "{{valor|10 A 100 SALÁRIOS MÍNIMOS}}",
        detalhe:
          "{{alerta|MAIOR MULTA DO CPP}}. Só se admite abandono por motivo imperioso, com prévia comunicação ao juiz; sem prejuízo das demais sanções (OAB).",
      },
      {
        base: "{{art|Art. 655}}",
        tema: "Embaraço ou procrastinação de HABEAS CORPUS",
        destaque: "{{valor|MULTA + RESPONSABILIDADE CRIMINAL}}",
        detalhe:
          "Carcereiro, diretor de prisão, escrivão, oficial de justiça ou autoridade que embaraçar a ordem, as informações, a condução ou a soltura. Valor original em mil-réis ({{alerta|DEFASADO}}).",
      },
      {
        base: "{{art|Art. 801}}",
        tema: "Sanção a juízes, MP e serventuários em atraso",
        destaque: "{{valor|PERDA DE VENCIMENTOS POR DIA EXCEDIDO}}",
        detalhe: "Salvo motivo justificado, reconhecido pela autoridade competente.",
      },
      {
        base: "{{art|Art. 804 e 806}}",
        tema: "CUSTAS processuais",
        destaque: "{{valor|A CARGO DO VENCIDO}}",
        detalhe:
          "Na ação privada, a falta de depósito prévio importa {{exc|RENÚNCIA À DILIGÊNCIA}} ou {{exc|DESERÇÃO DO RECURSO}} ({{art|art. 806, § 2º}}).",
      },
      {
        base: "{{art|Art. 653}}",
        tema: "Coação por má-fé ou abuso de poder (HC)",
        destaque: "{{valor|CONDENAÇÃO EM CUSTAS DA AUTORIDADE}}",
        detalhe: "Remetem-se cópias ao MP para apuração de responsabilidade criminal.",
      },
    ],
  },
  {
    titulo: "II — FIANÇA: VALORES, FRAÇÕES E DESTINAÇÃO",
    linhas: [
      {
        base: "{{art|Art. 325, I}}",
        tema: "Fiança — pena máxima {{pena|ATÉ 4 ANOS}}",
        destaque: "{{valor|1 A 100 SALÁRIOS MÍNIMOS}}",
        detalhe: "Arbitrada pelo delegado ou pelo juiz.",
      },
      {
        base: "{{art|Art. 325, II}}",
        tema: "Fiança — pena máxima {{pena|SUPERIOR A 4 ANOS}}",
        destaque: "{{valor|10 A 200 SALÁRIOS MÍNIMOS}}",
        detalhe: "Somente o juiz pode conceder ({{art|art. 322, parágrafo único}}).",
      },
      {
        base: "{{art|Art. 325, § 1º, II}}",
        tema: "Redução por situação econômica",
        destaque: "{{pct|ATÉ 2/3 (DOIS TERÇOS)}}",
        detalhe: "Reduz-se o valor arbitrado, mantendo-se as obrigações dos {{art|arts. 327 e 328}}.",
      },
      {
        base: "{{art|Art. 325, § 1º, III}}",
        tema: "Aumento por capacidade econômica",
        destaque: "{{pct|ATÉ 1.000 (MIL) VEZES}}",
        detalhe: "Maior multiplicador previsto no Código de Processo Penal.",
      },
      {
        base: "{{art|Art. 343}}",
        tema: "QUEBRAMENTO da fiança",
        destaque: "{{pct|PERDA DE 1/2 (METADE)}}",
        detalhe:
          "Hipóteses do {{art|art. 341}}: não comparecer a ato do processo, obstruir o andamento, descumprir cautelar cumulada, resistir a ordem judicial ou praticar nova infração dolosa.",
      },
      {
        base: "{{art|Art. 344}}",
        tema: "PERDA da fiança",
        destaque: "{{pct|PERDA DE 100% (TOTAL)}}",
        detalhe: "Réu condenado que não se apresenta para o início do cumprimento da pena definitiva.",
      },
      {
        base: "{{art|Art. 336 e 345}}",
        tema: "Destinação do valor",
        destaque: "{{valor|CUSTAS → DANO → PRESTAÇÃO → MULTA → FUNPEN}}",
        detalhe:
          "Se condenado, o valor responde por custas, indenização do dano, prestação pecuniária e multa; o saldo da perda vai ao {{valor|FUNDO PENITENCIÁRIO}}.",
      },
      {
        base: "{{art|Art. 337}}",
        tema: "Absolvição, extinção ou prescrição",
        destaque: "{{pct|RESTITUIÇÃO INTEGRAL, SEM DESCONTO}}",
        detalhe: "O valor é devolvido {{regra|SEM DESCONTO}}, salvo o do {{art|art. 336, parágrafo único}}.",
      },
    ],
  },
  {
    titulo: "III — PATAMARES DE PENA COMO CRITÉRIO PROCESSUAL",
    linhas: [
      {
        base: "{{art|Art. 313, I}}",
        tema: "Cabimento da PRISÃO PREVENTIVA",
        destaque: "{{pena|PENA MÁXIMA > 4 ANOS}}",
        detalhe: "Crime doloso. Exatos {{pena|4 ANOS}} {{exc|NÃO BASTAM}} por esse inciso.",
      },
      {
        base: "{{art|Art. 322}}",
        tema: "Fiança pela AUTORIDADE POLICIAL",
        destaque: "{{pena|PENA MÁXIMA ≤ 4 ANOS}}",
        detalhe: "Não superior a {{pena|4 ANOS}} de pena privativa de liberdade.",
      },
      {
        base: "{{art|Art. 28-A}}",
        tema: "ACORDO DE NÃO PERSECUÇÃO PENAL",
        destaque: "{{pena|PENA MÍNIMA < 4 ANOS}}",
        detalhe:
          "Sem violência ou grave ameaça, com confissão. Consideram-se as causas de aumento e diminuição ({{art|art. 28-A, § 1º}}).",
      },
      {
        base: "{{art|Art. 394, § 1º}}",
        tema: "Definição do PROCEDIMENTO",
        destaque: "{{pena|≥ 4 ANOS / < 4 ANOS / ≤ 2 ANOS}}",
        detalhe: "Ordinário, sumário e sumaríssimo, respectivamente.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 61}}",
        tema: "Competência do JECRIM",
        destaque: "{{pena|PENA MÁXIMA ≤ 2 ANOS}}",
        detalhe: "Inclui todas as contravenções penais, independentemente da pena.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 89}}",
        tema: "SUSPENSÃO CONDICIONAL DO PROCESSO",
        destaque: "{{pena|PENA MÍNIMA ≤ 1 ANO}}",
        detalhe: "Período de prova de {{prazo|2 A 4 ANOS}}.",
      },
      {
        base: "{{art|Art. 492, § 3º}}",
        tema: "Execução provisória no TRIBUNAL DO JÚRI",
        destaque: "{{pena|PENA ≥ 15 ANOS DE RECLUSÃO}}",
        detalhe: "O juiz presidente determina a execução provisória, salvo efeito suspensivo excepcional.",
      },
      {
        base: "{{art|Art. 283 e CF, art. 5º, LVII}}",
        tema: "Regra geral da execução da pena",
        destaque: "{{regra|SOMENTE APÓS O TRÂNSITO EM JULGADO}}",
        detalhe: "{{exc|EXCEÇÃO}}: {{art|art. 492, § 3º}} (júri) — presunção de inocência x soberania dos veredictos.",
      },
    ],
  },
  {
    titulo: "IV — QUANTIDADES, NÚMEROS E QUÓRUNS",
    linhas: [
      {
        base: "{{art|Art. 401}}",
        tema: "Testemunhas — procedimento ORDINÁRIO",
        destaque: "{{qtd|ATÉ 8}}",
        detalhe: "Por fato delituoso e por réu; não se computam as não compromissadas e as referidas.",
      },
      {
        base: "{{art|Art. 532}}",
        tema: "Testemunhas — procedimento SUMÁRIO",
        destaque: "{{qtd|ATÉ 5}}",
        detalhe: "Mesma regra de exclusão das não compromissadas.",
      },
      {
        base: "{{art|Art. 406, §§ 2º e 3º}}",
        tema: "Testemunhas — 1ª fase do JÚRI",
        destaque: "{{qtd|ATÉ 8}}",
        detalhe: "Na denúncia/queixa e na resposta à acusação.",
      },
      {
        base: "{{art|Art. 422}}",
        tema: "Testemunhas — PLENÁRIO do júri",
        destaque: "{{qtd|ATÉ 5}}",
        detalhe: "Podendo requerer-se a intimação por mandado ({{art|art. 461}}).",
      },
      {
        base: "{{art|Art. 384, § 4º}}",
        tema: "Testemunhas — MUTATIO LIBELLI",
        destaque: "{{qtd|ATÉ 3}}",
        detalhe: "Cada parte pode arrolar até {{qtd|3}} testemunhas após o aditamento.",
      },
      {
        base: "{{art|Lei 9.099/95, art. 34}}",
        tema: "Testemunhas — JECRIM",
        destaque: "{{qtd|ATÉ 3}}",
        detalhe: "Rol apresentado com antecedência mínima de {{prazo|5 DIAS}} da audiência.",
      },
      {
        base: "{{art|Art. 447}}",
        tema: "Composição do TRIBUNAL DO JÚRI",
        destaque: "{{qtd|1 JUIZ TOGADO + 25 JURADOS}}",
        detalhe: "Dos {{qtd|25}} sorteados, {{qtd|7}} comporão o Conselho de Sentença.",
      },
      {
        base: "{{art|Art. 463}}",
        tema: "Quórum de INSTALAÇÃO da sessão",
        destaque: "{{qtd|MÍNIMO DE 15 JURADOS}}",
        detalhe: "Não havendo número, sorteiam-se suplentes e designa-se nova data ({{art|art. 464}}).",
      },
      {
        base: "{{art|Art. 468}}",
        tema: "RECUSAS PEREMPTÓRIAS",
        destaque: "{{qtd|3 PARA CADA PARTE}}",
        detalhe: "Imotivadas. Recusas motivadas são ilimitadas (impedimento, suspeição, incompatibilidade).",
      },
      {
        base: "{{art|Art. 483, § 1º e 489}}",
        tema: "MAIORIA no Conselho de Sentença",
        destaque: "{{qtd|4 VOTOS (MAIS DE 3)}}",
        detalhe: "As decisões são por maioria; a votação se encerra ao atingir {{qtd|4 VOTOS}} para preservar o sigilo.",
      },
      {
        base: "{{art|Art. 425}}",
        tema: "ALISTAMENTO anual de jurados",
        destaque: "{{qtd|800-1.500 / 300-700 / 80-400}}",
        detalhe:
          "Conforme a população da comarca ({{qtd|+1.000.000}}, {{qtd|+100.000}} e demais). Deve-se garantir a renovação anual de, no mínimo, {{pct|1/5}} da lista.",
      },
      {
        base: "{{art|Art. 426, § 4º}}",
        tema: "Impedimento temporário do jurado",
        destaque: "{{prazo|12 MESES}}",
        detalhe: "Quem serviu no Conselho de Sentença nos {{prazo|12 MESES}} anteriores é excluído da lista geral.",
      },
      {
        base: "{{art|Art. 436}}",
        tema: "Requisito etário para ser JURADO",
        destaque: "{{qtd|MAIOR DE 18 ANOS}}",
        detalhe:
          "Cidadão de notória idoneidade; o serviço é {{regra|OBRIGATÓRIO}} e constitui serviço público relevante ({{art|art. 439}}).",
      },
      {
        base: "{{art|Art. 208}}",
        tema: "Testemunha sem COMPROMISSO",
        destaque: "{{qtd|MENORES DE 14 ANOS}}",
        detalhe:
          "Também doentes e deficientes mentais e as pessoas do {{art|art. 206}} — são {{regra|INFORMANTES}} ou declarantes.",
      },
      {
        base: "{{art|Art. 159, § 1º}}",
        tema: "Perícia na FALTA de perito oficial",
        destaque: "{{qtd|2 PESSOAS IDÔNEAS}}",
        detalhe:
          "Portadoras de diploma de curso superior, preferencialmente na área específica, e que prestarão compromisso.",
      },
      {
        base: "{{art|Art. 158-B}}",
        tema: "CADEIA DE CUSTÓDIA",
        destaque: "{{qtd|10 ETAPAS}}",
        detalhe:
          "Reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.",
      },
      {
        base: "{{art|Art. 386}}",
        tema: "Hipóteses de ABSOLVIÇÃO",
        destaque: "{{qtd|7 INCISOS}}",
        detalhe:
          "Destaque para o inciso {{qtd|VII}} — não existir prova suficiente para a condenação ({{regra|IN DUBIO PRO REO}}).",
      },
      {
        base: "{{art|Art. 397}}",
        tema: "ABSOLVIÇÃO SUMÁRIA",
        destaque: "{{qtd|4 HIPÓTESES}}",
        detalhe:
          "Excludente de ilicitude; excludente de culpabilidade ({{exc|SALVO INIMPUTABILIDADE}}); fato atípico; extinção da punibilidade.",
      },
      {
        base: "{{art|Art. 252 e 254}}",
        tema: "IMPEDIMENTO x SUSPEIÇÃO do juiz",
        destaque: "{{qtd|4 INCISOS x 6 INCISOS}}",
        detalhe:
          "Impedimento: hipóteses {{regra|OBJETIVAS}} ({{art|art. 252}}). Suspeição: hipóteses {{regra|SUBJETIVAS}} ({{art|art. 254}}).",
      },
      {
        base: "{{art|Art. 95}}",
        tema: "EXCEÇÕES processuais",
        destaque: "{{qtd|5 ESPÉCIES}}",
        detalhe:
          "Suspeição, incompetência de juízo, litispendência, ilegitimidade de parte e coisa julgada. A {{regra|SUSPEIÇÃO PRECEDE}} todas ({{art|art. 96}}).",
      },
      {
        base: "{{art|Art. 302}}",
        tema: "Espécies de FLAGRANTE",
        destaque: "{{qtd|4 INCISOS}}",
        detalhe:
          "Próprio (I e II), impróprio/quase-flagrante (III — perseguição) e presumido/ficto (IV — encontrado logo depois com instrumentos ou objetos).",
      },
      {
        base: "{{art|Art. 319}}",
        tema: "MEDIDAS CAUTELARES diversas da prisão",
        destaque: "{{qtd|9 INCISOS}}",
        detalhe:
          "Comparecimento periódico, proibição de acesso, proibição de contato, proibição de ausentar-se da comarca, recolhimento domiciliar noturno, suspensão de função, internação provisória, fiança e monitoração eletrônica.",
      },
      {
        base: "{{art|Art. 581}}",
        tema: "Hipóteses de RECURSO EM SENTIDO ESTRITO",
        destaque: "{{qtd|ROL TAXATIVO}}",
        detalhe:
          "Admite-se {{regra|INTERPRETAÇÃO EXTENSIVA}} ({{art|art. 3º}}), mas não analogia para criar hipóteses novas.",
      },
      {
        base: "{{art|Art. 387, IV}}",
        tema: "Reparação do dano na SENTENÇA",
        destaque: "{{valor|VALOR MÍNIMO FIXADO PELO JUIZ}}",
        detalhe:
          "Exige pedido expresso e contraditório (STJ). Serve de título executivo judicial ({{art|art. 63, parágrafo único}}).",
      },
      {
        base: "{{art|Art. 630}}",
        tema: "INDENIZAÇÃO por erro judiciário (revisão criminal)",
        destaque: "{{valor|JUSTA INDENIZAÇÃO PELOS PREJUÍZOS}}",
        detalhe:
          "{{exc|NÃO CABE}} se o erro decorrer de ato ou falta imputável ao próprio impetrante, ou se a acusação for meramente privada.",
      },
    ],
  },
];
