import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  PageNumber,
  PageOrientation,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
  type IBorderOptions,
} from "docx";

import { COR, CORES_DESTAQUE, ROTULOS_DESTAQUE } from "../data/tema";
import { tokenizar, type GrupoPrazo, type GrupoRegra, type TipoDestaque } from "../data/tipos";
import { PRAZOS } from "../data/prazos";
import { VALORES } from "../data/valores";
import { REGRAS } from "../data/regras";

/* ------------------------------------------------------------------ */
/*  Métricas de página (A4 paisagem)                                   */
/* ------------------------------------------------------------------ */

const MARGEM = 567; // 1 cm
const LARGURA_UTIL = 16838 - MARGEM * 2; // 15704 twips

const COLS_4 = [1900, 3600, 3200, LARGURA_UTIL - 1900 - 3600 - 3200];
const COLS_3 = [2600, 6552, LARGURA_UTIL - 2600 - 6552];
const COLS_LEGENDA = [3400, 4300, LARGURA_UTIL - 3400 - 4300];

const FONTE = "Arial";
const T11 = 22; // 11 pt (half-points)
const T10 = 20;
const T12 = 24;
const T16 = 32;
const T26 = 52;

/* ------------------------------------------------------------------ */
/*  Utilitários de estilo                                              */
/* ------------------------------------------------------------------ */

const b = (cor: string, tamanho = 4): IBorderOptions => ({
  style: BorderStyle.SINGLE,
  size: tamanho,
  color: cor,
});

const BORDAS_TABELA = {
  top: b(COR.bordaForte, 8),
  bottom: b(COR.bordaForte, 8),
  left: b(COR.bordaForte, 8),
  right: b(COR.bordaForte, 8),
  insideHorizontal: b(COR.borda, 4),
  insideVertical: b(COR.borda, 4),
};

const SEM_BORDA = {
  top: { style: BorderStyle.NONE, size: 0, color: "auto" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
  left: { style: BorderStyle.NONE, size: 0, color: "auto" },
  right: { style: BorderStyle.NONE, size: 0, color: "auto" },
  insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
  insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
};

const MARGENS_CELULA = { top: 70, bottom: 70, left: 110, right: 110 };

/** Converte texto marcado em TextRun[] com cor, negrito e CAIXA ALTA. */
function runs(
  texto: string,
  base: { color?: string; bold?: boolean; size?: number; caps?: boolean } = {},
): TextRun[] {
  const { color = COR.textoBase, bold = false, size = T11, caps = false } = base;
  return tokenizar(texto).map((tk) => {
    if (!tk.tipo) {
      return new TextRun({
        text: tk.texto,
        font: FONTE,
        size,
        bold,
        color,
        allCaps: caps,
      });
    }
    const tipo = tk.tipo as TipoDestaque;
    return new TextRun({
      text: tk.texto,
      font: FONTE,
      size,
      bold: true,
      allCaps: true,
      color: CORES_DESTAQUE[tipo],
    });
  });
}

function p(
  texto: string,
  opts: {
    color?: string;
    bold?: boolean;
    size?: number;
    caps?: boolean;
    align?: (typeof AlignmentType)[keyof typeof AlignmentType];
    before?: number;
    after?: number;
  } = {},
): Paragraph {
  return new Paragraph({
    alignment: opts.align ?? AlignmentType.LEFT,
    spacing: { before: opts.before ?? 20, after: opts.after ?? 20, line: 260 },
    children: runs(texto, opts),
  });
}

function celula(opts: {
  texto?: string;
  filhos?: Paragraph[];
  fill: string;
  width: number;
  colSpan?: number;
  color?: string;
  bold?: boolean;
  caps?: boolean;
  size?: number;
  align?: (typeof AlignmentType)[keyof typeof AlignmentType];
  vAlign?: "top" | "center" | "bottom";
}): TableCell {
  return new TableCell({
    width: { size: opts.width, type: WidthType.DXA },
    columnSpan: opts.colSpan,
    shading: { type: ShadingType.CLEAR, fill: opts.fill, color: "auto" },
    margins: MARGENS_CELULA,
    verticalAlign: opts.vAlign ?? VerticalAlign.CENTER,
    children:
      opts.filhos ??
      [
        p(opts.texto ?? "", {
          color: opts.color,
          bold: opts.bold,
          caps: opts.caps,
          size: opts.size,
          align: opts.align,
        }),
      ],
  });
}

/* ------------------------------------------------------------------ */
/*  Blocos de conteúdo                                                 */
/* ------------------------------------------------------------------ */

function faixa(
  texto: string,
  sub: string,
  fundo: string,
  corTexto: string,
  tamanho = T16,
): Table {
  return new Table({
    width: { size: LARGURA_UTIL, type: WidthType.DXA },
    columnWidths: [LARGURA_UTIL],
    layout: TableLayoutType.FIXED,
    borders: SEM_BORDA,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: LARGURA_UTIL, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: fundo, color: "auto" },
            margins: { top: 160, bottom: 160, left: 200, right: 200 },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                spacing: { before: 0, after: sub ? 60 : 0 },
                children: [
                  new TextRun({
                    text: texto,
                    font: FONTE,
                    size: tamanho,
                    bold: true,
                    allCaps: true,
                    color: corTexto,
                  }),
                ],
              }),
              ...(sub
                ? [
                    new Paragraph({
                      alignment: AlignmentType.LEFT,
                      spacing: { before: 0, after: 0 },
                      children: runs(sub, { color: COR.subtituloTexto, size: T11 }),
                    }),
                  ]
                : []),
            ],
          }),
        ],
      }),
    ],
  });
}

function espaco(altura = 120): Paragraph {
  return new Paragraph({ spacing: { before: 0, after: altura }, children: [] });
}

function cabecalho4(
  titulos: [string, string, string, string],
  fill: string,
  cor: string,
): TableRow {
  return new TableRow({
    tableHeader: true,
    children: titulos.map((t, i) =>
      celula({
        texto: t,
        fill,
        width: COLS_4[i],
        color: cor,
        bold: true,
        caps: true,
        size: T11,
        align: i === 0 || i === 2 ? AlignmentType.CENTER : AlignmentType.LEFT,
      }),
    ),
  });
}

function linhaGrupo(titulo: string, cols: number[], corTexto: string): TableRow {
  return new TableRow({
    children: [
      celula({
        texto: titulo,
        fill: COR.grupoFundo,
        width: cols.reduce((a, c) => a + c, 0),
        colSpan: cols.length,
        color: corTexto,
        bold: true,
        caps: true,
        size: T12,
      }),
    ],
  });
}

/** Tabela de 4 colunas (Prazos / Valores). */
function tabela4(
  grupos: GrupoPrazo[],
  titulos: [string, string, string, string],
  fillHeader: string,
  corHeader: string,
  corGrupo: string,
): Table {
  const rows: TableRow[] = [cabecalho4(titulos, fillHeader, corHeader)];
  let i = 0;
  for (const g of grupos) {
    rows.push(linhaGrupo(g.titulo, COLS_4, corGrupo));
    for (const l of g.linhas) {
      const fundo = i % 2 === 0 ? COR.linhaA : COR.linhaB;
      i++;
      rows.push(
        new TableRow({
          children: [
            celula({
              texto: l.base,
              fill: fundo,
              width: COLS_4[0],
              align: AlignmentType.CENTER,
              color: COR.art,
              bold: true,
            }),
            celula({ texto: l.tema, fill: fundo, width: COLS_4[1], color: COR.textoBase, bold: true }),
            celula({
              texto: l.destaque,
              fill: fundo,
              width: COLS_4[2],
              align: AlignmentType.CENTER,
            }),
            celula({
              texto: l.detalhe,
              fill: fundo,
              width: COLS_4[3],
              color: COR.textoBase,
              vAlign: VerticalAlign.CENTER,
            }),
          ],
        }),
      );
    }
  }
  return new Table({
    width: { size: LARGURA_UTIL, type: WidthType.DXA },
    columnWidths: COLS_4,
    layout: TableLayoutType.FIXED,
    borders: BORDAS_TABELA,
    rows,
  });
}

/** Tabela de 3 colunas (Regras x Exceções). */
function tabelaRegras(grupos: GrupoRegra[]): Table {
  const rows: TableRow[] = [
    new TableRow({
      tableHeader: true,
      children: [
        celula({
          texto: "TEMA / BASE LEGAL",
          fill: COR.hdRegraFundo,
          width: COLS_3[0],
          color: COR.hdRegraTexto,
          bold: true,
          caps: true,
          align: AlignmentType.CENTER,
        }),
        celula({
          texto: "REGRA GERAL",
          fill: COR.hdRegraFundo,
          width: COLS_3[1],
          color: COR.regra,
          bold: true,
          caps: true,
          align: AlignmentType.CENTER,
        }),
        celula({
          texto: "EXCEÇÕES / OBSERVAÇÕES DE PROVA",
          fill: COR.hdRegraFundo,
          width: COLS_3[2],
          color: COR.exc,
          bold: true,
          caps: true,
          align: AlignmentType.CENTER,
        }),
      ],
    }),
  ];

  let i = 0;
  for (const g of grupos) {
    rows.push(linhaGrupo(g.titulo, COLS_3, COR.grupoTextoAzul));
    for (const l of g.linhas) {
      const fundo = i % 2 === 0 ? COR.linhaA : COR.linhaB;
      i++;
      rows.push(
        new TableRow({
          children: [
            celula({
              fill: fundo,
              width: COLS_3[0],
              vAlign: VerticalAlign.CENTER,
              filhos: [
                p(l.tema, { color: COR.textoBase, bold: true }),
                p(l.base, { size: T10 }),
              ],
            }),
            celula({
              fill: fundo,
              width: COLS_3[1],
              vAlign: VerticalAlign.CENTER,
              filhos: [
                new Paragraph({
                  spacing: { before: 20, after: 40 },
                  children: [
                    new TextRun({
                      text: "► REGRA",
                      font: FONTE,
                      size: T10,
                      bold: true,
                      allCaps: true,
                      color: COR.regra,
                    }),
                  ],
                }),
                p(l.regra, { color: COR.textoBase }),
              ],
            }),
            celula({
              fill: fundo,
              width: COLS_3[2],
              vAlign: VerticalAlign.CENTER,
              filhos: [
                new Paragraph({
                  spacing: { before: 20, after: 40 },
                  children: [
                    new TextRun({
                      text: "▲ EXCEÇÃO",
                      font: FONTE,
                      size: T10,
                      bold: true,
                      allCaps: true,
                      color: COR.exc,
                    }),
                  ],
                }),
                p(l.excecao, { color: COR.textoBase }),
              ],
            }),
          ],
        }),
      );
    }
  }

  return new Table({
    width: { size: LARGURA_UTIL, type: WidthType.DXA },
    columnWidths: COLS_3,
    layout: TableLayoutType.FIXED,
    borders: BORDAS_TABELA,
    rows,
  });
}

/** Legenda de cores (teoria das cores + dupla codificação). */
function tabelaLegenda(): Table {
  const exemplos: Record<TipoDestaque, string> = {
    art: "Art. 306, § 1º",
    prazo: "24 horas / 10 dias / 90 dias",
    valor: "1 a 10 salários mínimos",
    pct: "perda de 1/2 · até 2/3 · 1.000 vezes",
    pena: "pena máxima superior a 4 anos",
    qtd: "25 jurados · 7 no conselho · 3 recusas",
    regra: "regra geral do instituto",
    exc: "exceção legal ou jurisprudencial",
    alerta: "pegadinha recorrente de prova",
    sum: "Súmula 710 do STF",
  };

  const ordem: TipoDestaque[] = [
    "art",
    "prazo",
    "valor",
    "pct",
    "pena",
    "qtd",
    "regra",
    "exc",
    "alerta",
    "sum",
  ];

  const rows: TableRow[] = [
    new TableRow({
      tableHeader: true,
      children: [
        celula({
          texto: "COR",
          fill: COR.hdLegendaFundo,
          width: COLS_LEGENDA[0],
          color: COR.hdLegendaTexto,
          bold: true,
          caps: true,
          align: AlignmentType.CENTER,
        }),
        celula({
          texto: "CATEGORIA DA INFORMAÇÃO",
          fill: COR.hdLegendaFundo,
          width: COLS_LEGENDA[1],
          color: COR.hdLegendaTexto,
          bold: true,
          caps: true,
        }),
        celula({
          texto: "EXEMPLO NO DOCUMENTO",
          fill: COR.hdLegendaFundo,
          width: COLS_LEGENDA[2],
          color: COR.hdLegendaTexto,
          bold: true,
          caps: true,
        }),
      ],
    }),
  ];

  ordem.forEach((tipo, i) => {
    const fundo = i % 2 === 0 ? COR.linhaA : COR.linhaB;
    rows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: COLS_LEGENDA[0], type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: CORES_DESTAQUE[tipo], color: "auto" },
            margins: MARGENS_CELULA,
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 20, after: 20 },
                children: [
                  new TextRun({
                    text: `■ ${tipo.toUpperCase()}`,
                    font: FONTE,
                    size: T11,
                    bold: true,
                    allCaps: true,
                    color: "10141D",
                  }),
                ],
              }),
            ],
          }),
          celula({
            texto: ROTULOS_DESTAQUE[tipo],
            fill: fundo,
            width: COLS_LEGENDA[1],
            color: CORES_DESTAQUE[tipo],
            bold: true,
            caps: true,
          }),
          celula({
            texto: exemplos[tipo],
            fill: fundo,
            width: COLS_LEGENDA[2],
            color: COR.textoBase,
          }),
        ],
      }),
    );
  });

  return new Table({
    width: { size: LARGURA_UTIL, type: WidthType.DXA },
    columnWidths: COLS_LEGENDA,
    layout: TableLayoutType.FIXED,
    borders: BORDAS_TABELA,
    rows,
  });
}

function capa(): Table {
  return new Table({
    width: { size: LARGURA_UTIL, type: WidthType.DXA },
    columnWidths: [LARGURA_UTIL],
    layout: TableLayoutType.FIXED,
    borders: {
      top: b(COR.prazo, 12),
      bottom: b(COR.prazo, 12),
      left: b(COR.prazo, 12),
      right: b(COR.prazo, 12),
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: LARGURA_UTIL, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: COR.capaFundo, color: "auto" },
            margins: { top: 300, bottom: 300, left: 260, right: 260 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 80 },
                children: [
                  new TextRun({
                    text: "DIREITO PROCESSUAL PENAL — CÓDIGO DE PROCESSO PENAL",
                    font: FONTE,
                    size: T26,
                    bold: true,
                    allCaps: true,
                    color: COR.capaTexto,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 120 },
                children: [
                  new TextRun({
                    text: "TABELAS COMPLETAS DE PRAZOS, MULTAS, PERCENTUAIS, QUANTIDADES, PENAS, REGRAS E EXCEÇÕES",
                    font: FONTE,
                    size: T16,
                    bold: true,
                    allCaps: true,
                    color: COR.prazo,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 0 },
                children: runs(
                  "Material de revisão para concursos públicos · Decreto-Lei 3.689/1941 e legislação correlata · Atualizado com a Lei 13.964/2019 (Pacote Anticrime) e jurisprudência dos Tribunais Superiores",
                  { color: COR.subtituloTexto, size: T11 },
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function comoEstudar(): Table {
  const itens = [
    "Leia primeiro a coluna de {{prazo|DESTAQUE}} — ela concentra a informação cobrada em prova objetiva.",
    "As palavras em {{regra|CAIXA ALTA}} e {{exc|COLORIDAS}} funcionam como âncoras de memória (dupla codificação: forma + cor).",
    "Cada cor corresponde a uma categoria fixa de informação. Nunca troque o significado entre tabelas.",
    "A Tabela 3 é a mais cobrada em provas discursivas: memorize sempre o par {{regra|REGRA}} → {{exc|EXCEÇÃO}}.",
    "Os itens marcados em {{alerta|VERMELHO}} são as pegadinhas clássicas de banca.",
  ];
  return new Table({
    width: { size: LARGURA_UTIL, type: WidthType.DXA },
    columnWidths: [LARGURA_UTIL],
    layout: TableLayoutType.FIXED,
    borders: {
      top: b(COR.borda, 4),
      bottom: b(COR.borda, 4),
      left: b(COR.valor, 18),
      right: b(COR.borda, 4),
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: LARGURA_UTIL, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: COR.linhaB, color: "auto" },
            margins: { top: 180, bottom: 180, left: 240, right: 240 },
            children: [
              new Paragraph({
                spacing: { after: 100 },
                children: [
                  new TextRun({
                    text: "COMO USAR ESTE MATERIAL",
                    font: FONTE,
                    size: T12,
                    bold: true,
                    allCaps: true,
                    color: COR.valor,
                  }),
                ],
              }),
              ...itens.map((t) =>
                new Paragraph({
                  spacing: { before: 30, after: 30, line: 260 },
                  bullet: { level: 0 },
                  children: runs(t, { color: COR.textoBase }),
                }),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}

/* ------------------------------------------------------------------ */
/*  Documento                                                          */
/* ------------------------------------------------------------------ */

export function montarDocumento(): Document {
  return new Document({
    background: { color: COR.paginaFundo },
    creator: "Tabelas CPP — Direito Processual Penal",
    title: "Direito Processual Penal — CPP: prazos, multas, percentuais, regras e exceções",
    description:
      "Tabelas formatadas de prazos, multas, percentuais, quantidades, penas, regras e exceções do Código de Processo Penal.",
    styles: {
      default: {
        document: {
          run: { font: FONTE, size: T11, color: COR.textoBase },
          paragraph: { spacing: { line: 260, before: 20, after: 20 } },
        },
      },
    },
    numbering: { config: [] },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838, orientation: PageOrientation.LANDSCAPE },
            margin: { top: MARGEM, bottom: MARGEM, left: MARGEM, right: MARGEM },
          },
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "Direito Processual Penal — CPP · Tabela de estudo · pág. ",
                    font: FONTE,
                    size: T10,
                    color: COR.subtituloTexto,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: FONTE,
                    size: T10,
                    bold: true,
                    color: COR.prazo,
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          capa(),
          espaco(160),
          faixa(
            "LEGENDA CROMÁTICA — CÓDIGO DE CORES DO MATERIAL",
            "Baseada na teoria das cores e na teoria da aprendizagem (codificação dupla): cada categoria de informação recebe uma cor fixa, NEGRITO e CAIXA ALTA.",
            COR.hdLegendaFundo,
            COR.hdLegendaTexto,
          ),
          espaco(60),
          tabelaLegenda(),
          espaco(160),
          comoEstudar(),
          espaco(200),

          faixa(
            "TABELA 1 — PRAZOS DO CÓDIGO DE PROCESSO PENAL",
            "Todos os prazos processuais e materiais relevantes: horas, dias, meses e anos — do inquérito policial aos recursos, com as leis especiais correlatas.",
            COR.hdPrazoFundo,
            COR.hdPrazoTexto,
          ),
          espaco(60),
          tabela4(
            PRAZOS,
            ["BASE LEGAL", "INSTITUTO / SITUAÇÃO", "PRAZO", "DETALHAMENTO, REGRA E EXCEÇÕES"],
            COR.hdPrazoFundo,
            COR.hdPrazoTexto,
            COR.grupoTexto,
          ),
          espaco(200),

          faixa(
            "TABELA 2 — MULTAS, VALORES, PERCENTUAIS, QUANTIDADES E PATAMARES DE PENA",
            "Sanções pecuniárias do CPP, valores de fiança, frações e percentuais, quóruns, números do júri e limites de pena com repercussão processual.",
            COR.hdValorFundo,
            COR.hdValorTexto,
          ),
          espaco(60),
          tabela4(
            VALORES,
            ["BASE LEGAL", "INSTITUTO / SITUAÇÃO", "VALOR · % · QUANTIDADE", "DETALHAMENTO, REGRA E EXCEÇÕES"],
            COR.hdValorFundo,
            COR.hdValorTexto,
            COR.grupoTextoVerde,
          ),
          espaco(200),

          faixa(
            "TABELA 3 — REGRAS E EXCEÇÕES DO CPP (FOCO EM CONCURSOS)",
            "Confronto direto entre a regra geral e as exceções legais, doutrinárias e jurisprudenciais mais cobradas em provas.",
            COR.hdRegraFundo,
            COR.hdRegraTexto,
          ),
          espaco(60),
          tabelaRegras(REGRAS),
          espaco(200),

          faixa(
            "AVISO FINAL",
            "Material de estudo elaborado a partir do documento DIREITO_PROCESSUAL_PENAL_CPP.md. Confira sempre a redação legal vigente e a jurisprudência atualizada antes da prova.",
            COR.subtituloFundo,
            COR.subtituloTexto,
            T12,
          ),
        ],
      },
    ],
  });
}

export async function gerarBlobDocx(): Promise<Blob> {
  const doc = montarDocumento();
  return Packer.toBlob(doc);
}

export async function baixarDocx(
  nome = "CPP-Prazos-Multas-Regras-e-Excecoes.docx",
): Promise<void> {
  const blob = await gerarBlobDocx();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export const ESTATISTICAS = {
  prazos: PRAZOS.reduce((a, g) => a + g.linhas.length, 0),
  valores: VALORES.reduce((a, g) => a + g.linhas.length, 0),
  regras: REGRAS.reduce((a, g) => a + g.linhas.length, 0),
  grupos: PRAZOS.length + VALORES.length + REGRAS.length,
};
