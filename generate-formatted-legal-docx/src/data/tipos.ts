/**
 * Tipos e utilitários de marcação para as tabelas do CPP.
 *
 * Sintaxe de marcação usada nos textos:
 *   {{tipo|texto}}
 *
 * Tipos disponíveis:
 *   art    -> artigo / base legal
 *   prazo  -> prazos (dias, horas, meses, anos)
 *   valor  -> multas, valores, quantias
 *   pct    -> percentuais e frações
 *   pena   -> penas e patamares de pena
 *   qtd    -> quantidades (nº de jurados, testemunhas, votos...)
 *   regra  -> regra geral
 *   exc    -> exceção
 *   alerta -> pegadinha de prova / atenção
 *   sum    -> súmula / jurisprudência
 */

export type TipoDestaque =
  | "art"
  | "prazo"
  | "valor"
  | "pct"
  | "pena"
  | "qtd"
  | "regra"
  | "exc"
  | "alerta"
  | "sum";

export interface Token {
  tipo: TipoDestaque | null;
  texto: string;
}

const RE = /\{\{(art|prazo|valor|pct|pena|qtd|regra|exc|alerta|sum)\|([^}]*)\}\}/g;

/** Converte um texto marcado em uma lista de tokens. */
export function tokenizar(texto: string): Token[] {
  const tokens: Token[] = [];
  let ultimo = 0;
  let m: RegExpExecArray | null;
  RE.lastIndex = 0;
  while ((m = RE.exec(texto)) !== null) {
    if (m.index > ultimo) {
      tokens.push({ tipo: null, texto: texto.slice(ultimo, m.index) });
    }
    tokens.push({ tipo: m[1] as TipoDestaque, texto: m[2] });
    ultimo = m.index + m[0].length;
  }
  if (ultimo < texto.length) {
    tokens.push({ tipo: null, texto: texto.slice(ultimo) });
  }
  return tokens;
}

/** Remove a marcação, devolvendo texto puro. */
export function limpar(texto: string): string {
  return texto.replace(RE, (_a, _t, c) => c);
}

/* ------------------------------------------------------------------ */
/*  Estruturas das tabelas                                             */
/* ------------------------------------------------------------------ */

export interface LinhaPrazo {
  base: string; // Art. / lei
  tema: string; // instituto
  destaque: string; // o prazo em si
  detalhe: string; // observações
}

export interface GrupoPrazo {
  titulo: string;
  linhas: LinhaPrazo[];
}

export interface LinhaRegra {
  tema: string;
  base: string;
  regra: string;
  excecao: string;
}

export interface GrupoRegra {
  titulo: string;
  linhas: LinhaRegra[];
}
