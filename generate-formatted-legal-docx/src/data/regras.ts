import type { GrupoRegra } from "./tipos";

export const REGRAS: GrupoRegra[] = [
  {
    titulo: "A — APLICAÇÃO DA LEI PROCESSUAL PENAL E SISTEMA ACUSATÓRIO",
    linhas: [
      {
        tema: "Territorialidade da lei processual",
        base: "{{art|Art. 1º}}",
        regra: "{{regra|O CPP APLICA-SE EM TODO O TERRITÓRIO NACIONAL}}, sem exceção de pessoas.",
        excecao:
          "{{exc|I}} — tratados, convenções e regras de direito internacional; {{exc|II}} — prerrogativa de função (Presidente, ministros, embaixadores); {{exc|III}} — processos da Justiça Militar; {{exc|IV}} — Tribunal de Segurança Nacional; {{exc|V}} — crimes eleitorais.",
      },
      {
        tema: "Lei processual no tempo",
        base: "{{art|Art. 2º}}",
        regra:
          "{{regra|TEMPUS REGIT ACTUM}} — a lei processual aplica-se {{regra|DESDE LOGO}}, sem prejuízo da validade dos atos já praticados (efeito imediato, sem retroatividade).",
        excecao:
          "{{exc|NORMAS HÍBRIDAS OU MISTAS}} (com conteúdo material: prescrição, ANPP, representação) seguem a lei penal: retroagem se {{exc|BENÉFICAS}} e não retroagem se {{exc|GRAVOSAS}} ({{art|CF, art. 5º, XL}}).",
      },
      {
        tema: "Interpretação",
        base: "{{art|Art. 3º}}",
        regra:
          "Admite-se {{regra|INTERPRETAÇÃO EXTENSIVA}}, {{regra|APLICAÇÃO ANALÓGICA}} e suplemento dos princípios gerais de direito.",
        excecao:
          "{{exc|VEDADA}} analogia {{exc|IN MALAM PARTEM}} para restringir direitos fundamentais ou criar hipóteses de cabimento de prisão/recurso não previstas.",
      },
      {
        tema: "Estrutura acusatória",
        base: "{{art|Art. 3º-A}}",
        regra:
          "{{regra|VEDADA A INICIATIVA DO JUIZ NA FASE DE INVESTIGAÇÃO}} e a substituição da atuação probatória do órgão de acusação.",
        excecao:
          "Persistem no CPP dispositivos de perfil inquisitivo ({{art|arts. 156, I}}, {{art|385}}, {{art|209}}) — objeto de crítica doutrinária e de leitura conforme a Constituição (STF, {{sum|ADI 6.298}}).",
      },
      {
        tema: "Juiz das garantias",
        base: "{{art|Arts. 3º-B a 3º-F}}",
        regra:
          "{{regra|CONTROLA A LEGALIDADE DA INVESTIGAÇÃO}} e a salvaguarda dos direitos individuais; sua competência {{regra|CESSA COM O RECEBIMENTO DA DENÚNCIA}}.",
        excecao:
          "STF ({{sum|ADI 6.298}}): {{exc|NÃO SE APLICA}} aos processos de competência originária dos tribunais, ao júri, à violência doméstica e às infrações de menor potencial ofensivo. O juiz que atuou na investigação fica {{exc|IMPEDIDO}} ({{art|art. 3º-D}}).",
      },
    ],
  },
  {
    titulo: "B — INQUÉRITO POLICIAL",
    linhas: [
      {
        tema: "Características do IP",
        base: "{{art|Arts. 4º a 23}}",
        regra:
          "Procedimento {{regra|ADMINISTRATIVO}}, {{regra|INQUISITIVO}}, {{regra|SIGILOSO}}, {{regra|ESCRITO}}, {{regra|OFICIOSO}}, {{regra|DISCRICIONÁRIO}}, {{regra|INDISPONÍVEL}} e {{regra|DISPENSÁVEL}}.",
        excecao:
          "{{sum|Súmula Vinculante 14}}: é direito do defensor acessar os elementos de prova {{exc|JÁ DOCUMENTADOS}}. Contraditório é {{exc|DIFERIDO}}, não inexistente.",
      },
      {
        tema: "Valor probatório do IP",
        base: "{{art|Art. 155}}",
        regra:
          "O juiz {{regra|NÃO PODE FUNDAMENTAR}} sua decisão {{regra|EXCLUSIVAMENTE}} nos elementos informativos colhidos na investigação.",
        excecao:
          "{{exc|PROVAS CAUTELARES}}, {{exc|NÃO REPETÍVEIS}} e {{exc|ANTECIPADAS}} produzidas no IP podem embasar a condenação isoladamente (ex.: perícia, interceptação, busca).",
      },
      {
        tema: "Arquivamento do inquérito",
        base: "{{art|Arts. 17, 18 e 28}}",
        regra:
          "A autoridade policial {{regra|NÃO PODE MANDAR ARQUIVAR}} ({{art|art. 17}}). O arquivamento é ordenado pelo {{regra|MINISTÉRIO PÚBLICO}} e submetido à instância de revisão ministerial.",
        excecao:
          "A vítima pode provocar revisão em {{exc|30 DIAS}}. {{sum|Súmula 524 do STF}}: arquivado o IP, só cabe nova ação penal com {{exc|NOVAS PROVAS}}. Se o arquivamento foi por atipicidade ou excludente de ilicitude, faz {{exc|COISA JULGADA MATERIAL}}.",
      },
      {
        tema: "Vícios do inquérito",
        base: "{{art|Art. 12}}",
        regra: "{{regra|IRREGULARIDADES DO IP NÃO CONTAMINAM}} a ação penal, por ser peça meramente informativa.",
        excecao:
          "{{exc|PROVAS ILÍCITAS}} colhidas na investigação devem ser desentranhadas e contaminam as derivadas ({{art|art. 157, § 1º}}).",
      },
      {
        tema: "Indiciamento",
        base: "{{art|Art. 2º, § 6º, da Lei 12.830/13}}",
        regra: "Ato {{regra|PRIVATIVO DO DELEGADO}} de polícia, fundamentado em indícios de autoria e materialidade.",
        excecao:
          "{{exc|NÃO PODE}} o juiz ou o MP requisitar indiciamento (STF, HC 115.015). {{exc|NÃO CABE}} indiciamento após o recebimento da denúncia.",
      },
      {
        tema: "Incomunicabilidade do preso",
        base: "{{art|Art. 21}}",
        regra: "O CPP prevê incomunicabilidade por até {{exc|3 DIAS}}, por despacho fundamentado.",
        excecao:
          "{{alerta|NÃO RECEPCIONADO}} pela CF/88 para a doutrina majoritária: se nem no estado de defesa se admite ({{art|CF, art. 136, § 3º, IV}}), não se admite na normalidade. Advogado {{exc|SEMPRE}} tem acesso ({{art|EOAB, art. 7º, III}}).",
      },
    ],
  },
  {
    titulo: "C — AÇÃO PENAL",
    linhas: [
      {
        tema: "Titularidade da ação penal pública",
        base: "{{art|CF, art. 129, I / art. 24}}",
        regra: "{{regra|PRIVATIVA DO MINISTÉRIO PÚBLICO}}.",
        excecao:
          "{{exc|AÇÃO PENAL PRIVADA SUBSIDIÁRIA DA PÚBLICA}} ({{art|art. 29}} e {{art|CF, art. 5º, LIX}}) em caso de {{exc|INÉRCIA}} do MP — o arquivamento ou o pedido de diligências {{alerta|NÃO}} autorizam a subsidiária.",
      },
      {
        tema: "Princípio da obrigatoriedade",
        base: "{{art|Art. 24}}",
        regra: "Havendo justa causa, o MP {{regra|DEVE OFERECER DENÚNCIA}} — obrigatoriedade e indisponibilidade.",
        excecao:
          "{{exc|OBRIGATORIEDADE MITIGADA}}: transação penal ({{art|art. 76 da Lei 9.099/95}}), {{exc|ANPP}} ({{art|art. 28-A}}), colaboração premiada com não denúncia ({{art|art. 4º, § 4º, da Lei 12.850/13}}) e parcelamento tributário.",
      },
      {
        tema: "Indivisibilidade",
        base: "{{art|Art. 48}}",
        regra:
          "A ação penal {{regra|PRIVADA}} deve ser proposta contra {{regra|TODOS OS AUTORES}}; a renúncia a um aproveita a todos ({{art|art. 49}}).",
        excecao:
          "Na ação penal {{exc|PÚBLICA}} prevalece a {{exc|DIVISIBILIDADE}} (STF e STJ): o MP pode denunciar um e prosseguir investigando os demais.",
      },
      {
        tema: "Retratação da representação",
        base: "{{art|Art. 25}}",
        regra: "A representação é {{regra|IRRETRATÁVEL DEPOIS DE OFERECIDA A DENÚNCIA}}.",
        excecao:
          "{{exc|LEI MARIA DA PENHA}} ({{art|art. 16 da Lei 11.340/06}}): a renúncia só é admitida perante o juiz, em audiência especialmente designada, {{exc|ANTES DO RECEBIMENTO DA DENÚNCIA}} e ouvido o MP.",
      },
      {
        tema: "Sucessão processual (C.A.D.I.)",
        base: "{{art|Art. 31}}",
        regra:
          "Morto o ofendido ou declarado ausente, o direito de queixa passa ao {{regra|CÔNJUGE, ASCENDENTE, DESCENDENTE OU IRMÃO}}.",
        excecao:
          "{{exc|AÇÃO PENAL PRIVADA PERSONALÍSSIMA}} ({{art|art. 236 do CP}} — induzimento a erro essencial) {{exc|NÃO ADMITE SUCESSÃO}}: a morte do ofendido extingue a punibilidade.",
      },
      {
        tema: "Perempção",
        base: "{{art|Art. 60}}",
        regra:
          "Causa de extinção da punibilidade exclusiva da ação penal {{regra|PRIVADA EXCLUSIVA}} e {{regra|PERSONALÍSSIMA}}.",
        excecao:
          "{{exc|NÃO SE APLICA}} à ação penal privada {{exc|SUBSIDIÁRIA DA PÚBLICA}}: havendo negligência do querelante, o MP {{exc|RETOMA}} a ação como parte principal ({{art|art. 29}}).",
      },
      {
        tema: "Condenação apesar do pedido de absolvição",
        base: "{{art|Art. 385}}",
        regra:
          "Nos crimes de ação {{regra|PÚBLICA}}, o juiz pode condenar ainda que o MP peça absolvição e reconhecer agravante não alegada.",
        excecao:
          "Na ação {{exc|PRIVADA}}, o pedido de absolvição nas alegações finais gera {{exc|PEREMPÇÃO}} ({{art|art. 60, III}}). Doutrina moderna: o art. 385 é {{alerta|INCOMPATÍVEL}} com o sistema acusatório ({{art|art. 3º-A}}).",
      },
      {
        tema: "Aditamento da denúncia/queixa",
        base: "{{art|Arts. 45 e 569}}",
        regra: "Admite-se aditamento enquanto não proferida a sentença; omissões podem ser supridas a qualquer tempo.",
        excecao:
          "{{exc|ADITAMENTO PRÓPRIO}} (inclui fato/réu novo) exige nova citação e defesa; após a sentença, {{exc|NÃO SE ADMITE}} ({{sum|Súmula 453 do STF}} quanto à mutatio em 2º grau).",
      },
    ],
  },
  {
    titulo: "D — JURISDIÇÃO E COMPETÊNCIA",
    linhas: [
      {
        tema: "Competência territorial",
        base: "{{art|Art. 70}}",
        regra:
          "{{regra|TEORIA DO RESULTADO}} — lugar em que se consumar a infração; na tentativa, lugar do {{regra|ÚLTIMO ATO DE EXECUÇÃO}}.",
        excecao:
          "{{exc|JECRIM}}: teoria da atividade — lugar da ação ou omissão ({{art|art. 63 da Lei 9.099/95}}). {{exc|CRIMES PLURILOCAIS CONTRA A VIDA}}: STJ fixa o lugar da conduta. {{exc|AÇÃO PRIVADA}}: querelante pode optar pelo domicílio do réu ({{art|art. 73}}). Lugar incerto: domicílio do réu ({{art|art. 72}}).",
      },
      {
        tema: "Crime continuado ou permanente em várias comarcas",
        base: "{{art|Arts. 71 e 83}}",
        regra: "Firma-se a competência pela {{regra|PREVENÇÃO}}.",
        excecao:
          "Prevenção é critério {{exc|RESIDUAL}} e gera nulidade apenas {{exc|RELATIVA}} ({{sum|Súmula 706 do STF}}).",
      },
      {
        tema: "Conexão e continência",
        base: "{{art|Arts. 76 a 82}}",
        regra: "{{regra|REUNIÃO DOS PROCESSOS}} (simultaneus processus) e unidade de julgamento.",
        excecao:
          "{{exc|SEPARAÇÃO OBRIGATÓRIA}} ({{art|art. 79}}): concurso entre jurisdição comum e {{exc|MILITAR}}; comum e {{exc|JUÍZO DA INFÂNCIA}}; {{exc|DOENÇA MENTAL SUPERVENIENTE}} (§ 1º); {{exc|CORRÉU FORAGIDO}} no júri (§ 2º). {{exc|SEPARAÇÃO FACULTATIVA}} ({{art|art. 80}}): tempo/lugar diversos, excessivo número de réus ou motivo relevante.",
      },
      {
        tema: "Prevalência de competências",
        base: "{{art|Art. 78}}",
        regra:
          "{{regra|JÚRI PREVALECE}} sobre a jurisdição comum; jurisdição {{regra|ESPECIAL}} prevalece sobre a comum; entre juízes de mesma categoria: infração mais grave → maior número de infrações → prevenção.",
        excecao:
          "{{sum|Súmula 122 do STJ}}: a {{exc|JUSTIÇA FEDERAL}} atrai a estadual nos crimes conexos, afastando o {{art|art. 78, II, 'a'}}.",
      },
      {
        tema: "Foro por prerrogativa de função",
        base: "{{art|Art. 84 / CF}}",
        regra:
          "STF ({{sum|AP 937 QO}}): restringe-se aos crimes cometidos {{regra|NO CARGO}} e {{regra|EM RAZÃO DAS FUNÇÕES}}; após o fim da instrução, a competência não se altera.",
        excecao:
          "{{sum|Súmula Vinculante 45}}: a competência do {{exc|JÚRI}} prevalece sobre o foro estabelecido {{exc|EXCLUSIVAMENTE PELA CONSTITUIÇÃO ESTADUAL}}. {{sum|Súmula 704 do STF}}: a atração por conexão/continência não viola garantias.",
      },
      {
        tema: "Declaração de incompetência",
        base: "{{art|Arts. 109 e 567}}",
        regra:
          "A incompetência {{regra|ABSOLUTA}} (matéria/pessoa/função) pode ser reconhecida {{regra|DE OFÍCIO}}, a qualquer tempo e grau.",
        excecao:
          "{{sum|Súmula 33 do STJ}}: a incompetência {{exc|RELATIVA}} (territorial) {{exc|NÃO PODE}} ser declarada de ofício e {{exc|PRECLUI}} se não alegada na resposta à acusação.",
      },
      {
        tema: "Efeitos do reconhecimento da incompetência",
        base: "{{art|Art. 567}}",
        regra:
          "Anulam-se {{regra|SOMENTE OS ATOS DECISÓRIOS}}; os atos instrutórios são ratificados pelo juízo competente.",
        excecao:
          "Parte da doutrina sustenta que a incompetência {{exc|ABSOLUTA}} contamina {{exc|TODOS OS ATOS}}; STF e STJ admitem a ratificação até de denúncia oferecida por MP incompetente.",
      },
    ],
  },
  {
    titulo: "E — PROVAS",
    linhas: [
      {
        tema: "Prova ilícita",
        base: "{{art|Art. 157}}",
        regra:
          "São {{regra|INADMISSÍVEIS}} as provas ilícitas, devendo ser {{regra|DESENTRANHADAS}} dos autos e inutilizadas; a ilicitude contamina as {{regra|PROVAS DERIVADAS}} (frutos da árvore envenenada).",
        excecao:
          "{{exc|FONTE INDEPENDENTE}} ({{art|art. 157, § 2º}}); {{exc|DESCOBERTA INEVITÁVEL}}; {{exc|AUSÊNCIA DE NEXO CAUSAL}}; {{exc|PROVA ILÍCITA PRO REO}} (proporcionalidade / estado de necessidade da defesa).",
      },
      {
        tema: "Iniciativa probatória do juiz",
        base: "{{art|Art. 156}}",
        regra: "O ônus da prova incumbe a {{regra|QUEM ALEGA}}.",
        excecao:
          "{{exc|I}} — o juiz pode ordenar produção antecipada de provas urgentes e relevantes ({{alerta|CRITICADO}} à luz do {{art|art. 3º-A}}); {{exc|II}} — pode determinar diligências para dirimir dúvida sobre ponto relevante. Também {{art|art. 209}} (testemunha do juízo).",
      },
      {
        tema: "Exame de corpo de delito",
        base: "{{art|Arts. 158 e 167}}",
        regra:
          "{{regra|INDISPENSÁVEL}} nas infrações que deixam vestígios, direto ou indireto, {{regra|NÃO PODENDO SUPRI-LO A CONFISSÃO}} do acusado.",
        excecao:
          "{{exc|DESAPARECIDOS OS VESTÍGIOS}}, a {{exc|PROVA TESTEMUNHAL}} poderá suprir-lhe a falta ({{art|art. 167}}). Também admite-se suprimento por prova documental/pericial indireta.",
      },
      {
        tema: "Dever de depor",
        base: "{{art|Arts. 206 e 207}}",
        regra: "{{regra|TODA PESSOA PODERÁ SER TESTEMUNHA}} e não poderá eximir-se de depor.",
        excecao:
          "{{exc|PODEM RECUSAR-SE}} ({{art|art. 206}}): ascendente, descendente, afim em linha reta, cônjuge (ainda que separado), irmão, pai/mãe/filho adotivo — {{alerta|SALVO}} quando não for possível obter a prova por outro modo. {{exc|PROIBIDAS DE DEPOR}} ({{art|art. 207}}): quem deve guardar sigilo em razão de função, ministério, ofício ou profissão, {{alerta|SALVO}} desobrigadas pela parte E querendo depor.",
      },
      {
        tema: "Compromisso da testemunha",
        base: "{{art|Art. 208}}",
        regra: "A testemunha presta {{regra|COMPROMISSO DE DIZER A VERDADE}} e responde por falso testemunho.",
        excecao:
          "{{exc|NÃO PRESTAM COMPROMISSO}}: doentes e deficientes mentais, {{exc|MENORES DE 14 ANOS}} e as pessoas do {{art|art. 206}} — são meros {{exc|INFORMANTES}}/declarantes.",
      },
      {
        tema: "Testemunhas com prerrogativa",
        base: "{{art|Art. 221}}",
        regra:
          "Autoridades ali listadas (senadores, deputados, ministros, governadores, prefeitos, magistrados, membros do MP e dos TCs) são inquiridas em {{regra|LOCAL, DIA E HORA PREVIAMENTE AJUSTADOS}}.",
        excecao:
          "{{exc|PRESIDENTE, VICE, PRESIDENTES DO SENADO, DA CÂMARA E DO STF}} escolhem o local ({{art|art. 221, caput}}); Presidente, Vice, senadores e deputados federais podem optar por depoimento {{exc|POR ESCRITO}} ({{art|art. 221, § 1º}}). Se figurarem como {{alerta|INVESTIGADOS OU RÉUS}}, não têm a prerrogativa.",
      },
      {
        tema: "Interrogatório",
        base: "{{art|Arts. 185 a 196 e 400}}",
        regra:
          "É {{regra|MEIO DE DEFESA}}, realizado como {{regra|ÚLTIMO ATO}} da instrução, presidido pelo juiz, com direito ao {{regra|SILÊNCIO}} ({{art|art. 186}}), que não importa confissão nem prejudica a defesa.",
        excecao:
          "{{exc|VIDEOCONFERÊNCIA}} ({{art|art. 185, § 2º}}) é excepcional e exige decisão fundamentada em uma das 4 hipóteses legais. O juiz pode realizar {{exc|NOVO INTERROGATÓRIO}} a qualquer tempo ({{art|art. 196}}). Corréus são interrogados {{exc|SEPARADAMENTE}} ({{art|art. 191}}).",
      },
      {
        tema: "Busca domiciliar",
        base: "{{art|Arts. 240 a 245 / CF, art. 5º, XI}}",
        regra:
          "Exige {{regra|MANDADO JUDICIAL}} e execução {{regra|DURANTE O DIA}}; ninguém entra na casa sem consentimento do morador.",
        excecao:
          "{{exc|FLAGRANTE DELITO}}, {{exc|DESASTRE}}, {{exc|PRESTAÇÃO DE SOCORRO}} e {{exc|CONSENTIMENTO}} do morador autorizam a entrada a {{exc|QUALQUER HORA}}. STF (RE 603.616): flagrante exige {{alerta|JUSTA CAUSA PRÉVIA}}, com fundadas razões devidamente registradas.",
      },
      {
        tema: "Busca pessoal",
        base: "{{art|Art. 244}}",
        regra: "Depende de mandado.",
        excecao:
          "{{exc|INDEPENDE DE MANDADO}} no caso de prisão, quando houver {{exc|FUNDADA SUSPEITA}} de posse de arma ou objeto de prova, ou no curso de busca domiciliar. STJ: {{alerta|NERVOSISMO}} ou 'atitude suspeita' genérica {{alerta|NÃO}} configuram fundada suspeita.",
      },
      {
        tema: "Reconhecimento de pessoas",
        base: "{{art|Art. 226}}",
        regra:
          "Descrição prévia; colocação ao lado de pessoas semelhantes; lavratura de {{regra|AUTO PORMENORIZADO}}; possibilidade de não ser visto pelo reconhecedor (na instrução).",
        excecao:
          "STJ ({{sum|HC 598.886}}): as formalidades são {{exc|OBRIGATÓRIAS}} e não meras recomendações; o reconhecimento inválido {{exc|NÃO SERVE}} nem como elemento de confirmação e não pode fundamentar condenação.",
      },
      {
        tema: "Cadeia de custódia",
        base: "{{art|Arts. 158-A a 158-F}}",
        regra:
          "Rastreabilidade do vestígio em {{regra|10 ETAPAS}}; o agente público que reconhecer o vestígio inicia a cadeia.",
        excecao:
          "A quebra não gera nulidade automática: STJ analisa {{exc|CASO A CASO}} — pode levar à inadmissibilidade ou apenas à redução do valor probatório.",
      },
      {
        tema: "Documentos",
        base: "{{art|Arts. 231 e 233}}",
        regra: "As partes podem apresentar documentos em {{regra|QUALQUER FASE DO PROCESSO}}.",
        excecao:
          "{{exc|PLENÁRIO DO JÚRI}}: antecedência mínima de {{exc|3 DIAS ÚTEIS}} ({{art|art. 479}}). {{exc|CARTAS PARTICULARES}} interceptadas por meios criminosos não são admitidas ({{art|art. 233}}).",
      },
    ],
  },
  {
    titulo: "F — SUJEITOS PROCESSUAIS",
    linhas: [
      {
        tema: "Impedimento x Suspeição",
        base: "{{art|Arts. 252, 254 e 112}}",
        regra:
          "{{regra|IMPEDIMENTO}} ({{art|art. 252}}) = razões {{regra|OBJETIVAS}}, ligadas ao processo → nulidade {{regra|ABSOLUTA}}. {{regra|SUSPEIÇÃO}} ({{art|art. 254}}) = razões {{regra|SUBJETIVAS}}, ligadas às partes → nulidade {{regra|RELATIVA}}, sujeita a preclusão.",
        excecao:
          "{{sum|Súmula 234 do STJ}}: a participação do membro do MP na investigação {{exc|NÃO GERA}} impedimento nem suspeição para denunciar. Amizade íntima/inimizade capital exigem prova ({{art|art. 254, I}}).",
      },
      {
        tema: "Defesa técnica",
        base: "{{art|Arts. 261 e 263}}",
        regra: "{{regra|NENHUM ACUSADO SERÁ PROCESSADO OU JULGADO SEM DEFENSOR}}; a defesa técnica é {{regra|IRRENUNCIÁVEL}}.",
        excecao:
          "{{sum|Súmula 523 do STF}}: a {{exc|FALTA}} de defesa é nulidade {{exc|ABSOLUTA}}; a {{exc|DEFICIÊNCIA}} só anula se houver {{exc|PROVA DE PREJUÍZO}}. A autodefesa (comparecimento, interrogatório) é {{exc|RENUNCIÁVEL}}.",
      },
      {
        tema: "Assistente de acusação",
        base: "{{art|Arts. 268 a 273}}",
        regra:
          "Admitido {{regra|SOMENTE NA AÇÃO PENAL PÚBLICA}}, pelo ofendido ou {{regra|C.A.D.I.}}, {{regra|ENQUANTO NÃO TRANSITAR EM JULGADO}} a sentença, recebendo a causa no estado em que se achar.",
        excecao:
          "{{exc|NÃO CABE RECURSO}} da decisão que admite ou rejeita o assistente ({{art|art. 273}}) — usa-se {{exc|MANDADO DE SEGURANÇA}}. Corréu no mesmo processo {{exc|NÃO PODE}} ser assistente ({{art|art. 270}}). {{sum|Súmula 210 do STF}}: pode recorrer, inclusive extraordinariamente.",
      },
      {
        tema: "Curador ao réu menor de 21 anos",
        base: "{{art|Arts. 15, 194 e 262}}",
        regra: "O CPP previa nomeação de curador ao acusado menor de 21 anos.",
        excecao:
          "{{alerta|REVOGADO}} pela Lei 10.792/03 e superado pelo {{exc|CÓDIGO CIVIL DE 2002}} (maioridade aos 18 anos). {{sum|Súmula 352 do STJ}} tratava da matéria e está superada.",
      },
      {
        tema: "Ministério Público",
        base: "{{art|Arts. 257 e 258}}",
        regra:
          "Cabe ao MP {{regra|PROMOVER A AÇÃO PENAL PÚBLICA}} e {{regra|FISCALIZAR A EXECUÇÃO DA LEI}} (custos legis).",
        excecao:
          "Aplicam-se ao MP os {{exc|IMPEDIMENTOS E SUSPEIÇÕES}} dos juízes ({{art|art. 258}}), mas {{exc|NÃO}} as hipóteses de incompatibilidade por 'atuação anterior na investigação'.",
      },
    ],
  },
  {
    titulo: "G — PRISÕES, MEDIDAS CAUTELARES E LIBERDADE",
    linhas: [
      {
        tema: "Regra da liberdade",
        base: "{{art|Art. 283 / CF, art. 5º, LXI}}",
        regra:
          "Ninguém será preso senão em {{regra|FLAGRANTE DELITO}}, por {{regra|ORDEM ESCRITA E FUNDAMENTADA}} da autoridade judiciária competente ou por {{regra|CONDENAÇÃO TRANSITADA EM JULGADO}}.",
        excecao:
          "{{exc|TRANSGRESSÃO MILITAR}} e crime propriamente militar; {{exc|ESTADO DE DEFESA E DE SÍTIO}}; {{exc|ART. 492, § 3º}} — execução provisória no júri para pena ≥ 15 anos; recaptura de foragido.",
      },
      {
        tema: "Decretação de cautelares de ofício",
        base: "{{art|Arts. 282, § 2º, e 311}}",
        regra:
          "Após a Lei 13.964/19, é {{regra|VEDADA A DECRETAÇÃO DE OFÍCIO}} de prisão preventiva ou de medida cautelar, em qualquer fase.",
        excecao:
          "{{exc|NÃO HÁ EXCEÇÃO}}: exige-se requerimento do MP, do querelante ou do assistente, ou representação da autoridade policial. O juiz {{alerta|PODE}}, de ofício, {{exc|REVOGAR}} ou {{exc|SUBSTITUIR}} a medida ({{art|art. 282, § 5º}}) — e conceder liberdade.",
      },
      {
        tema: "Contraditório prévio nas cautelares",
        base: "{{art|Art. 282, § 3º}}",
        regra: "O juiz {{regra|INTIMARÁ A PARTE CONTRÁRIA}}, acompanhada de cópia do requerimento e das peças necessárias.",
        excecao: "{{exc|CASOS DE URGÊNCIA}} ou de {{exc|PERIGO DE INEFICÁCIA}} da medida dispensam o contraditório prévio.",
      },
      {
        tema: "Fundamentos da preventiva",
        base: "{{art|Arts. 312, 313 e 315}}",
        regra:
          "Exige {{regra|FUMUS COMISSI DELICTI}} (prova da materialidade + indício suficiente de autoria) e {{regra|PERICULUM LIBERTATIS}} (ordem pública, ordem econômica, conveniência da instrução ou aplicação da lei penal) + {{regra|PERIGO GERADO PELO ESTADO DE LIBERDADE}}.",
        excecao:
          "{{exc|VEDADA}} preventiva como antecipação de pena ou decorrência automática de investigação, denúncia ou pronúncia ({{art|art. 313, § 2º}}); {{exc|VEDADA}} se presente excludente de ilicitude ({{art|art. 314}}); fundamentação {{alerta|NÃO}} pode ser genérica ou por mera reprodução de lei ({{art|art. 315, § 2º}}).",
      },
      {
        tema: "Prisão domiciliar substitutiva",
        base: "{{art|Arts. 318 e 318-A}}",
        regra:
          "A preventiva imposta a {{regra|GESTANTE}}, {{regra|MÃE OU RESPONSÁVEL POR CRIANÇA ATÉ 12 ANOS}} ou por pessoa com deficiência {{regra|SERÁ SUBSTITUÍDA}} por domiciliar (HC 143.641/STF).",
        excecao:
          "{{exc|CRIME COM VIOLÊNCIA OU GRAVE AMEAÇA}} à pessoa; {{exc|CRIME CONTRA O PRÓPRIO FILHO}} ou dependente; situações excepcionalíssimas devidamente fundamentadas.",
      },
      {
        tema: "Espécies de flagrante",
        base: "{{art|Art. 302}}",
        regra:
          "{{regra|PRÓPRIO}} (I — cometendo; II — acaba de cometer); {{regra|IMPRÓPRIO}} (III — perseguido logo após); {{regra|PRESUMIDO}} (IV — encontrado logo depois com instrumentos, armas ou objetos).",
        excecao:
          "{{exc|FLAGRANTE PREPARADO/PROVOCADO}} é ilegal — {{sum|Súmula 145 do STF}} (crime impossível). {{exc|FLAGRANTE FORJADO}} é crime. São {{regra|VÁLIDOS}}: flagrante {{regra|ESPERADO}}, {{regra|PRORROGADO/RETARDADO}} (ação controlada) e em {{regra|CRIME PERMANENTE}} (a qualquer tempo, {{art|art. 303}}).",
      },
      {
        tema: "Liberdade provisória",
        base: "{{art|Art. 310, §§ 1º e 2º}}",
        regra:
          "Não sendo caso de relaxamento nem de preventiva, o juiz {{regra|CONCEDERÁ LIBERDADE PROVISÓRIA}}, com ou sem fiança.",
        excecao:
          "{{exc|DEVERÁ DENEGAR}} a liberdade provisória ao {{exc|REINCIDENTE}}, ao integrante de {{exc|ORGANIZAÇÃO CRIMINOSA ARMADA OU MILÍCIA}} e a quem porta {{exc|ARMA DE FOGO DE USO RESTRITO}} ({{art|art. 310, § 2º}}) — dispositivo lido como {{alerta|NÃO AUTOMÁTICO}} pelo STF, exigindo fundamentação concreta.",
      },
      {
        tema: "Crimes inafiançáveis",
        base: "{{art|Arts. 323 e 324}}",
        regra: "Em regra, a fiança é {{regra|CABÍVEL}} nas infrações penais.",
        excecao:
          "{{exc|INAFIANÇÁVEIS}}: racismo; tortura, tráfico, terrorismo e hediondos; ação de grupos armados contra a ordem constitucional e o Estado Democrático ({{art|art. 323}}). {{exc|NÃO SE CONCEDE}} a quem já quebrou fiança no mesmo processo, em prisão civil ou militar, ou presentes os requisitos da preventiva ({{art|art. 324}}).",
      },
      {
        tema: "Audiência de custódia",
        base: "{{art|Arts. 287 e 310}}",
        regra:
          "Apresentação {{regra|PESSOAL}} do preso ao juiz em {{regra|24 HORAS}}, com MP e defesa, para controle da legalidade e prevenção da tortura.",
        excecao:
          "Res. 357/2020 do CNJ e STF: {{exc|VIDEOCONFERÊNCIA}} apenas em situações excepcionalíssimas e fundamentadas. O não comparecimento por motivo idôneo não gera automaticamente soltura, mas exige justificação ({{art|art. 310, § 4º}}).",
      },
      {
        tema: "Prisão especial",
        base: "{{art|Art. 295}}",
        regra:
          "Rol de pessoas com direito a recolhimento em {{regra|LOCAL DISTINTO}} da prisão comum, {{regra|ATÉ O TRÂNSITO EM JULGADO}}.",
        excecao:
          "Consiste {{exc|EXCLUSIVAMENTE}} no local distinto (§ 3º); inexistindo, cela distinta no mesmo estabelecimento (§ 4º); os demais direitos e deveres são {{exc|IGUAIS}} aos do preso comum (§ 5º).",
      },
    ],
  },
  {
    titulo: "H — PROCEDIMENTOS E SENTENÇA",
    linhas: [
      {
        tema: "Emendatio libelli x Mutatio libelli",
        base: "{{art|Arts. 383 e 384}}",
        regra:
          "{{regra|EMENDATIO}} — o juiz corrige a {{regra|CAPITULAÇÃO}} sem alterar os fatos, {{regra|AINDA QUE APLIQUE PENA MAIS GRAVE}}, sem necessidade de aditamento. {{regra|MUTATIO}} — surgindo prova de {{regra|ELEMENTAR OU CIRCUNSTÂNCIA NÃO CONTIDA}} na denúncia, o MP {{regra|DEVE ADITAR EM 5 DIAS}}.",
        excecao:
          "{{sum|Súmula 453 do STF}}: {{exc|NÃO SE APLICA A MUTATIO}} em segunda instância. Na emendatio em grau recursal, respeita-se a {{exc|NON REFORMATIO IN PEJUS}}. Se o MP se recusa a aditar, aplica-se o {{art|art. 28}} ({{art|art. 384, § 1º}}).",
      },
      {
        tema: "Absolvição sumária",
        base: "{{art|Art. 397}}",
        regra:
          "Após a resposta, o juiz absolverá sumariamente quando houver: excludente de {{regra|ILICITUDE}}; excludente de {{regra|CULPABILIDADE}}; {{regra|FATO ATÍPICO}}; ou {{regra|EXTINÇÃO DA PUNIBILIDADE}}.",
        excecao:
          "{{exc|INIMPUTABILIDADE}} ({{art|art. 26, caput, do CP}}) {{exc|NÃO GERA}} absolvição sumária no rito comum — o processo prossegue para eventual absolvição imprópria com medida de segurança. No {{regra|JÚRI}}, o {{art|art. 415, parágrafo único}} permite a absolvição sumária imprópria se a inimputabilidade for a {{regra|ÚNICA TESE}}.",
      },
      {
        tema: "Identidade física do juiz",
        base: "{{art|Art. 399, § 2º}}",
        regra: "O juiz que {{regra|PRESIDIU A INSTRUÇÃO}} deverá proferir a sentença.",
        excecao:
          "STJ aplica por analogia as hipóteses do CPC: {{exc|CONVOCAÇÃO}}, {{exc|LICENÇA}}, {{exc|AFASTAMENTO}}, {{exc|PROMOÇÃO}} ou {{exc|APOSENTADORIA}} do magistrado.",
      },
      {
        tema: "Correlação entre acusação e sentença",
        base: "{{art|Arts. 383 a 385}}",
        regra:
          "O réu se defende dos {{regra|FATOS}}, não da capitulação; a sentença deve guardar {{regra|CORRELAÇÃO}} com a imputação.",
        excecao:
          "Julgamento {{exc|EXTRA}}, {{exc|ULTRA}} ou {{exc|CITRA PETITA}} gera nulidade; no júri, o quesito deve refletir a tese efetivamente debatida.",
      },
      {
        tema: "Detração na sentença",
        base: "{{art|Art. 387, § 2º}}",
        regra:
          "O tempo de {{regra|PRISÃO PROVISÓRIA}}, administrativa ou de internação será computado para fins de {{regra|DETERMINAÇÃO DO REGIME INICIAL}}.",
        excecao:
          "A detração propriamente dita (abatimento da pena) permanece com o {{exc|JUÍZO DA EXECUÇÃO}} ({{art|art. 66, III, 'c', da LEP}}).",
      },
      {
        tema: "Reparação civil na sentença",
        base: "{{art|Art. 387, IV}}",
        regra: "O juiz fixará {{regra|VALOR MÍNIMO}} para reparação dos danos causados pela infração.",
        excecao:
          "STJ: exige {{exc|PEDIDO EXPRESSO}} (do MP ou do ofendido) e {{exc|CONTRADITÓRIO}} específico; danos morais podem ser fixados {{exc|IN RE IPSA}} na violência doméstica ({{sum|Tema 983 do STJ}}).",
      },
      {
        tema: "Crimes funcionais afiançáveis",
        base: "{{art|Art. 514}}",
        regra: "Notificação prévia do funcionário público para {{regra|RESPOSTA ESCRITA EM 15 DIAS}} antes do recebimento da denúncia.",
        excecao:
          "{{sum|Súmula 330 do STJ}}: é {{exc|DESNECESSÁRIA}} a resposta preliminar quando a ação penal for {{exc|PRECEDIDA DE INQUÉRITO POLICIAL}}.",
      },
    ],
  },
  {
    titulo: "I — TRIBUNAL DO JÚRI",
    linhas: [
      {
        tema: "Competência do júri",
        base: "{{art|CF, art. 5º, XXXVIII}}",
        regra:
          "Crimes {{regra|DOLOSOS CONTRA A VIDA}}, consumados ou tentados ({{art|arts. 121, 122, 123, 124 a 127 do CP}}), e as infrações {{regra|CONEXAS}}.",
        excecao:
          "{{exc|FORO POR PRERROGATIVA}} previsto na {{exc|CONSTITUIÇÃO FEDERAL}} prevalece sobre o júri. {{sum|Súmula Vinculante 45}}: prerrogativa prevista {{exc|SÓ EM CONSTITUIÇÃO ESTADUAL}} {{exc|NÃO PREVALECE}}. Latrocínio ({{sum|Súmula 603 do STF}}) e genocídio não vão a júri.",
      },
      {
        tema: "Princípios constitucionais do júri",
        base: "{{art|CF, art. 5º, XXXVIII}}",
        regra:
          "{{regra|PLENITUDE DE DEFESA}}, {{regra|SIGILO DAS VOTAÇÕES}}, {{regra|SOBERANIA DOS VEREDICTOS}} e {{regra|COMPETÊNCIA PARA OS CRIMES DOLOSOS CONTRA A VIDA}}.",
        excecao:
          "A soberania é mitigada pela {{exc|APELAÇÃO}} por decisão manifestamente contrária à prova dos autos ({{art|art. 593, III, 'd'}}) e pela {{exc|REVISÃO CRIMINAL}} (pro reo), que pode absolver diretamente.",
      },
      {
        tema: "Decisão contrária à prova dos autos",
        base: "{{art|Art. 593, III, 'd', e § 3º}}",
        regra:
          "Provido o recurso, o tribunal {{regra|SUJEITA O RÉU A NOVO JÚRI}} — não pode julgar o mérito diretamente (juízo rescindente).",
        excecao:
          "{{exc|NÃO SE ADMITE SEGUNDA APELAÇÃO}} pelo mesmo motivo ({{art|art. 593, § 3º}}), ainda que a nova decisão também pareça contrária à prova.",
      },
      {
        tema: "Referências proibidas em plenário",
        base: "{{art|Art. 478}}",
        regra:
          "As partes {{regra|NÃO PODERÃO}}, sob pena de nulidade, fazer referência à {{regra|DECISÃO DE PRONÚNCIA}} e às decisões posteriores que julgaram admissível a acusação, nem ao {{regra|SILÊNCIO DO ACUSADO}} ou à ausência de interrogatório, {{regra|COMO ARGUMENTO DE AUTORIDADE}}.",
        excecao:
          "É {{exc|LÍCITA}} a mera leitura ou menção fática; a vedação alcança apenas o uso como {{exc|ARGUMENTO DE AUTORIDADE}} para beneficiar ou prejudicar o acusado. O uso de algemas exige decisão fundamentada ({{sum|Súmula Vinculante 11}}).",
      },
      {
        tema: "Pronúncia e o 'in dubio pro societate'",
        base: "{{art|Art. 413}}",
        regra:
          "Exige-se {{regra|PROVA DA MATERIALIDADE}} e {{regra|INDÍCIOS SUFICIENTES DE AUTORIA}}; a linguagem deve ser {{regra|SÓBRIA E COMEDIDA}}, sob pena de excesso de linguagem.",
        excecao:
          "O standard do {{exc|IN DUBIO PRO SOCIETATE}} vem sendo {{alerta|REJEITADO}} pelo STF ({{sum|ARE 1.067.392}}) — dúvida razoável deve conduzir à {{exc|IMPRONÚNCIA}}. Excesso de linguagem gera {{exc|ANULAÇÃO}}, não desentranhamento ({{sum|STJ}}).",
      },
      {
        tema: "Recursos contra as decisões da 1ª fase",
        base: "{{art|Arts. 416 e 581, IV}}",
        regra:
          "{{regra|PRONÚNCIA}} → {{regra|RESE}} ({{art|art. 581, IV}}). {{regra|IMPRONÚNCIA}} e {{regra|ABSOLVIÇÃO SUMÁRIA}} → {{regra|APELAÇÃO}} ({{art|art. 416}}).",
        excecao:
          "{{exc|DESCLASSIFICAÇÃO}} ({{art|art. 419}}) → {{exc|RESE}} ({{art|art. 581, II}}). Impronúncia {{exc|NÃO FAZ}} coisa julgada material: cabe nova denúncia com prova nova enquanto não ocorrer a prescrição ({{art|art. 414, parágrafo único}}).",
      },
      {
        tema: "Desaforamento",
        base: "{{art|Arts. 427 e 428}}",
        regra:
          "Cabível por {{regra|INTERESSE DA ORDEM PÚBLICA}}, {{regra|DÚVIDA SOBRE A IMPARCIALIDADE DO JÚRI}}, {{regra|SEGURANÇA PESSOAL DO ACUSADO}} ou {{regra|COMPROVADO EXCESSO DE SERVIÇO}} (mais de 6 meses).",
        excecao:
          "{{exc|NÃO CABE}} antes do trânsito em julgado da pronúncia nem durante o julgamento pelo júri ({{sum|Súmula 712 do STF}} — é nula a decisão sem audiência prévia da defesa). {{exc|NÃO SE COMPUTA}} o tempo de adiamentos causados pela defesa.",
      },
      {
        tema: "Quesito genérico de absolvição",
        base: "{{art|Art. 483, III}}",
        regra:
          "Após materialidade e autoria, indaga-se: {{regra|'O JURADO ABSOLVE O ACUSADO?'}} — permite absolvição por {{regra|CLEMÊNCIA}}, sem vinculação a tese jurídica.",
        excecao:
          "STF discute se a absolvição por clemência pode ser cassada como 'contrária à prova dos autos' — prevalece a {{exc|SOBERANIA}} do veredicto (Tema 1.087, com repercussão geral).",
      },
    ],
  },
  {
    titulo: "J — NULIDADES",
    linhas: [
      {
        tema: "Princípio do prejuízo",
        base: "{{art|Arts. 563 e 566}}",
        regra:
          "{{regra|PAS DE NULLITÉ SANS GRIEF}} — nenhum ato será declarado nulo se não houver resultado {{regra|PREJUÍZO}} para a acusação ou para a defesa.",
        excecao:
          "Nas nulidades {{exc|ABSOLUTAS}} o prejuízo é {{exc|PRESUMIDO}} — embora STF e STJ venham exigindo demonstração concreta em diversas hipóteses ({{alerta|TENDÊNCIA JURISPRUDENCIAL}}).",
      },
      {
        tema: "Momento de arguição",
        base: "{{art|Art. 571}}",
        regra:
          "Nulidades {{regra|RELATIVAS}} devem ser arguidas no momento próprio (defesa prévia, alegações finais, razões de recurso), sob pena de {{regra|PRECLUSÃO}}.",
        excecao:
          "Nulidades {{exc|ABSOLUTAS}} podem ser arguidas {{exc|A QUALQUER TEMPO}} e {{exc|EM QUALQUER GRAU}}, inclusive em HC e revisão criminal, e reconhecidas de ofício.",
      },
      {
        tema: "Convalidação",
        base: "{{art|Art. 572}}",
        regra:
          "Consideram-se {{regra|SANADAS}} as nulidades se não arguidas em tempo oportuno, se o ato atingiu sua finalidade, ou se a parte aceitou seus efeitos.",
        excecao:
          "{{exc|NÃO SE CONVALIDAM}} as nulidades absolutas (ex.: incompetência de juízo, falta de defesa, ausência de denúncia, ilegitimidade de parte).",
      },
      {
        tema: "Nulidade por incompetência",
        base: "{{art|Art. 567}}",
        regra: "A incompetência anula {{regra|SOMENTE OS ATOS DECISÓRIOS}}.",
        excecao:
          "O processo é remetido ao juízo competente, que {{exc|RATIFICA}} os atos instrutórios. STF admite ratificação inclusive da denúncia.",
      },
      {
        tema: "Nulidade em favor da acusação",
        base: "{{art|Art. 565}}",
        regra:
          "{{regra|NENHUMA DAS PARTES}} poderá arguir nulidade a que haja dado causa, ou para que tenha concorrido, ou referente a formalidade cujo cumprimento só à parte contrária interesse.",
        excecao:
          "A {{exc|ACUSAÇÃO}} pode arguir nulidade que a prejudique; mas o Estado não pode se beneficiar da própria torpeza processual.",
      },
    ],
  },
  {
    titulo: "K — RECURSOS, HABEAS CORPUS E REVISÃO CRIMINAL",
    linhas: [
      {
        tema: "Voluntariedade dos recursos",
        base: "{{art|Art. 574}}",
        regra: "Os recursos são {{regra|VOLUNTÁRIOS}}.",
        excecao:
          "{{exc|RECURSO DE OFÍCIO}} (reexame necessário): concessão de HC ({{art|art. 574, I}}); {{exc|REABILITAÇÃO}} ({{art|art. 746}}); arquivamento em crimes contra a economia popular e a saúde pública ({{art|art. 7º da Lei 1.521/51}}). {{sum|Súmula 423 do STF}}: sem o recurso de ofício, a decisão {{exc|NÃO TRANSITA EM JULGADO}}.",
      },
      {
        tema: "Fungibilidade recursal",
        base: "{{art|Art. 579}}",
        regra:
          "{{regra|SALVO MÁ-FÉ}}, a parte não será prejudicada pela interposição de um recurso por outro; o tribunal determinará o processamento correto.",
        excecao:
          "{{exc|ERRO GROSSEIRO}} e interposição {{exc|FORA DO PRAZO}} do recurso correto afastam a fungibilidade.",
      },
      {
        tema: "Proibição da reforma para pior",
        base: "{{art|Art. 617}}",
        regra:
          "No recurso {{regra|EXCLUSIVO DA DEFESA}}, o tribunal {{regra|NÃO PODE AGRAVAR}} a pena — inclusive a {{regra|REFORMATIO IN PEJUS INDIRETA}} (novo julgamento após anulação).",
        excecao:
          "No {{exc|JÚRI}}, anulado o julgamento por recurso da defesa, o novo Conselho de Sentença é {{exc|SOBERANO}} para reconhecer circunstâncias mais graves — mas o juiz presidente fica limitado à pena anterior quanto ao que não foi objeto de nova decisão dos jurados.",
      },
      {
        tema: "Efeito suspensivo",
        base: "{{art|Arts. 596, 597 e 637}}",
        regra: "A apelação de sentença {{regra|CONDENATÓRIA}} tem {{regra|EFEITO SUSPENSIVO}}.",
        excecao:
          "{{exc|SENTENÇA ABSOLUTÓRIA}}: o réu é posto imediatamente em liberdade ({{art|art. 596}}). {{exc|RE E RESP}} não têm efeito suspensivo ({{art|art. 637}}). {{exc|AGRAVO EM EXECUÇÃO}} e {{exc|CARTA TESTEMUNHÁVEL}} também não.",
      },
      {
        tema: "Apelação x RESE",
        base: "{{art|Art. 593, § 4º}}",
        regra:
          "Quando cabível a {{regra|APELAÇÃO}}, {{regra|NÃO SE ADMITE RESE}}, ainda que a irresignação seja apenas de parte da decisão.",
        excecao:
          "O rol do {{art|art. 581}} é {{exc|TAXATIVO}}, mas admite {{exc|INTERPRETAÇÃO EXTENSIVA}}. Decisões sem recurso previsto desafiam {{exc|HC}}, {{exc|MS}} ou {{exc|CORREIÇÃO PARCIAL}}.",
      },
      {
        tema: "Embargos infringentes e de nulidade",
        base: "{{art|Art. 609, parágrafo único}}",
        regra:
          "Cabíveis em {{prazo|10 DIAS}}, {{regra|SOMENTE PELA DEFESA}}, contra acórdão {{regra|NÃO UNÂNIME}} desfavorável ao réu, restritos à matéria objeto da divergência.",
        excecao:
          "{{exc|NÃO CABEM}} contra decisão unânime, contra decisão favorável ao réu, nem em favor da acusação. {{exc|NÃO CABEM}} de decisão em HC originário do tribunal quando unânime.",
      },
      {
        tema: "Habeas corpus — cabimento",
        base: "{{art|Arts. 647 e 648}}",
        regra:
          "Cabível sempre que houver {{regra|VIOLÊNCIA OU COAÇÃO}} à liberdade de locomoção por ilegalidade ou abuso de poder; impetração {{regra|SEM FORMA SACRAMENTAL}}, por {{regra|QUALQUER PESSOA}}, inclusive de ofício pelo juiz.",
        excecao:
          "{{sum|Súmula 693 do STF}}: {{exc|NÃO CABE}} contra decisão condenatória a pena de {{exc|MULTA}}. {{sum|Súmula 694}}: não cabe contra perda de patente/função. {{sum|Súmula 695}}: não cabe se já extinta a pena privativa. {{art|CF, art. 142, § 2º}}: não cabe contra {{exc|PUNIÇÃO DISCIPLINAR MILITAR}} (salvo controle de legalidade).",
      },
      {
        tema: "Habeas corpus substitutivo",
        base: "{{sum|Jurisprudência STF/STJ}}",
        regra: "Não se admite HC {{regra|SUBSTITUTIVO}} de recurso próprio.",
        excecao:
          "Havendo {{exc|FLAGRANTE ILEGALIDADE}}, a ordem é concedida {{exc|DE OFÍCIO}}. {{sum|Súmula 691 do STF}} pode ser superada em caso de teratologia.",
      },
      {
        tema: "Revisão criminal",
        base: "{{art|Arts. 621 a 631}}",
        regra:
          "Cabível {{regra|SOMENTE PRO REO}}, {{regra|A QUALQUER TEMPO}}, antes ou após a extinção da pena, e mesmo {{regra|APÓS A MORTE}} do condenado ({{art|art. 623}}).",
        excecao:
          "{{exc|NÃO EXISTE}} revisão criminal {{exc|PRO SOCIETATE}} no Brasil. {{exc|NÃO É REITERÁVEL}}, salvo se fundada em {{exc|NOVAS PROVAS}} ({{art|art. 622, parágrafo único}}). {{exc|NÃO CABE}} de decisão absolutória nem de sentença de arquivamento.",
      },
      {
        tema: "Indenização por erro judiciário",
        base: "{{art|Art. 630}}",
        regra: "O tribunal poderá reconhecer o direito a uma {{regra|JUSTA INDENIZAÇÃO}} pelos prejuízos sofridos.",
        excecao:
          "{{exc|NÃO CABE}} se o erro ou a injustiça decorrer de {{exc|ATO OU FALTA IMPUTÁVEL}} ao próprio impetrante (confissão ou ocultação de prova) ou se a acusação for {{exc|MERAMENTE PRIVADA}} ({{art|art. 630, § 2º}}).",
      },
    ],
  },
  {
    titulo: "L — DISPOSIÇÕES GERAIS E RELAÇÕES JURISDICIONAIS",
    linhas: [
      {
        tema: "Publicidade dos atos",
        base: "{{art|Art. 792}}",
        regra: "As audiências, sessões e atos processuais serão, em regra, {{regra|PÚBLICOS}}.",
        excecao:
          "{{exc|SIGILO}} quando da publicidade puder resultar {{exc|ESCÂNDALO}}, {{exc|INCONVENIENTE GRAVE}} ou {{exc|PERIGO DE PERTURBAÇÃO DA ORDEM}} ({{art|art. 792, § 1º}}); sala secreta na votação do júri ({{art|art. 485}}).",
      },
      {
        tema: "Ação civil ex delicto",
        base: "{{art|Arts. 63 a 68}}",
        regra:
          "A sentença penal condenatória transitada em julgado é {{regra|TÍTULO EXECUTIVO JUDICIAL}} no cível ({{art|art. 63}}).",
        excecao:
          "{{exc|NÃO IMPEDEM}} a ação civil: absolvição por insuficiência de provas, por atipicidade e o arquivamento ({{art|art. 67}}). {{exc|IMPEDEM}}: reconhecimento categórico da inexistência do fato ou da negativa de autoria ({{art|art. 66}}) e excludentes de ilicitude ({{art|art. 65}}, com ressalvas do CC quanto a estado de necessidade agressivo).",
      },
      {
        tema: "Coisa julgada penal",
        base: "{{art|Art. 95, V}}",
        regra: "A sentença de mérito transitada em julgado impede novo processo pelo {{regra|MESMO FATO}} (ne bis in idem).",
        excecao:
          "{{exc|REVISÃO CRIMINAL}} pro reo desconstitui a coisa julgada. Arquivamento por {{exc|FALTA DE PROVAS}} faz apenas coisa julgada formal ({{sum|Súmula 524 do STF}}).",
      },
      {
        tema: "Cartas rogatórias e homologação",
        base: "{{art|Arts. 780 a 790}}",
        regra: "As cartas rogatórias passivas são cumpridas após {{regra|EXEQUATUR DO STJ}} ({{art|CF, art. 105, I, 'i'}}).",
        excecao:
          "{{exc|COOPERAÇÃO DIRETA}} por auxílio direto dispensa exequatur quando não houver ato de jurisdição estrangeira a executar.",
      },
      {
        tema: "Contagem por dias úteis (CPC/2015)",
        base: "{{art|Art. 798 x art. 219 do CPC}}",
        regra: "No processo penal os prazos são contados em {{regra|DIAS CORRIDOS}}.",
        excecao:
          "{{alerta|PEGADINHA}}: a regra de dias úteis do CPC {{exc|NÃO SE APLICA}} ao processo penal (STF e STJ). Exceção literal: prazo de {{exc|3 DIAS ÚTEIS}} do {{art|art. 479}} (documentos no plenário do júri).",
      },
    ],
  },
];
