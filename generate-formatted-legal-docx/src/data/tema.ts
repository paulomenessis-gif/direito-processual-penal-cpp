import type { TipoDestaque } from "./tipos";

/**
 * Paleta calibrada para o MODO NOTURNO do Word (fundo escuro).
 * Todas as células recebem sombreamento escuro explícito + texto claro,
 * garantindo legibilidade tanto no tema escuro quanto no claro/impressão.
 *
 * Base: teoria das cores (contraste quente x frio para separar "tempo",
 * "dinheiro", "regra" e "exceção") + teoria da aprendizagem
 * (codificação dupla: cor + CAIXA ALTA + NEGRITO).
 */

export const COR = {
  paginaFundo: "10141D",

  // Capa e títulos
  capaFundo: "16233D",
  capaTexto: "FFFFFF",
  subtituloFundo: "1B2438",
  subtituloTexto: "9FD2FF",

  // Cabeçalhos das tabelas (um matiz por tabela)
  hdPrazoFundo: "7A4E06",
  hdPrazoTexto: "FFF3D6",
  hdValorFundo: "0E5136",
  hdValorTexto: "DDFFEE",
  hdRegraFundo: "1B3A6B",
  hdRegraTexto: "E4EFFF",
  hdLegendaFundo: "3B2159",
  hdLegendaTexto: "F3E4FF",

  // Linhas de agrupamento (subtítulos internos)
  grupoFundo: "27314A",
  grupoTexto: "FFD98A",
  grupoTextoVerde: "8FF0C0",
  grupoTextoAzul: "9EC6FF",

  // Corpo
  linhaA: "181D28",
  linhaB: "1E2431",
  textoBase: "E6EBF5",
  borda: "3C4964",
  bordaForte: "6B7EA3",

  // Destaques
  art: "C9B6FF",
  prazo: "FFC857",
  valor: "5EE9A0",
  pct: "5CD8F0",
  pena: "FF8FA3",
  qtd: "FFB3F0",
  regra: "7FB3FF",
  exc: "FF9E4A",
  alerta: "FF6B6B",
  sum: "F0A9FF",
} as const;

export const CORES_DESTAQUE: Record<TipoDestaque, string> = {
  art: COR.art,
  prazo: COR.prazo,
  valor: COR.valor,
  pct: COR.pct,
  pena: COR.pena,
  qtd: COR.qtd,
  regra: COR.regra,
  exc: COR.exc,
  alerta: COR.alerta,
  sum: COR.sum,
};

export const ROTULOS_DESTAQUE: Record<TipoDestaque, string> = {
  art: "Base legal / Artigo",
  prazo: "Prazo (tempo)",
  valor: "Multa / Valor / Fiança",
  pct: "Percentual / Fração",
  pena: "Pena / Patamar de pena",
  qtd: "Quantidade / Número",
  regra: "REGRA GERAL",
  exc: "EXCEÇÃO",
  alerta: "Atenção / Pegadinha de prova",
  sum: "Súmula / Jurisprudência",
};

/** Classes Tailwind equivalentes (pré-visualização na web). */
export const CLASSES_DESTAQUE: Record<TipoDestaque, string> = {
  art: "text-violet-300",
  prazo: "text-amber-300",
  valor: "text-emerald-300",
  pct: "text-cyan-300",
  pena: "text-rose-300",
  qtd: "text-fuchsia-300",
  regra: "text-sky-300",
  exc: "text-orange-300",
  alerta: "text-red-400",
  sum: "text-purple-300",
};
