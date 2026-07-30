import { useMemo, useState } from "react";
import { Tabela4, TabelaRegras } from "./components/Tabelas";
import { PRAZOS } from "./data/prazos";
import { VALORES } from "./data/valores";
import { REGRAS } from "./data/regras";
import { CLASSES_DESTAQUE, ROTULOS_DESTAQUE } from "./data/tema";
import type { TipoDestaque } from "./data/tipos";
import { baixarDocx, ESTATISTICAS } from "./docx/gerarDocx";

type Aba = "prazos" | "valores" | "regras";

const ABAS: { id: Aba; rotulo: string; sub: string; cor: string }[] = [
  {
    id: "prazos",
    rotulo: "1 · Prazos",
    sub: "horas, dias, meses e anos",
    cor: "data-[on=true]:bg-amber-500/15 data-[on=true]:text-amber-200 data-[on=true]:border-amber-400/60",
  },
  {
    id: "valores",
    rotulo: "2 · Multas, % e Penas",
    sub: "valores, frações e quantidades",
    cor: "data-[on=true]:bg-emerald-500/15 data-[on=true]:text-emerald-200 data-[on=true]:border-emerald-400/60",
  },
  {
    id: "regras",
    rotulo: "3 · Regras e Exceções",
    sub: "confronto direto para prova",
    cor: "data-[on=true]:bg-sky-500/15 data-[on=true]:text-sky-200 data-[on=true]:border-sky-400/60",
  },
];

const ORDEM_LEGENDA: TipoDestaque[] = [
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

export default function App() {
  const [aba, setAba] = useState<Aba>("prazos");
  const [filtro, setFiltro] = useState("");
  const [estado, setEstado] = useState<"idle" | "gerando" | "pronto" | "erro">("idle");

  const total = useMemo(
    () => ESTATISTICAS.prazos + ESTATISTICAS.valores + ESTATISTICAS.regras,
    [],
  );

  async function handleDownload() {
    try {
      setEstado("gerando");
      await baixarDocx();
      setEstado("pronto");
      setTimeout(() => setEstado("idle"), 4000);
    } catch (e) {
      console.error(e);
      setEstado("erro");
      setTimeout(() => setEstado("idle"), 5000);
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 antialiased">
      {/* ---------------- BARRA DE DOWNLOAD (TOPO) ---------------- */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#0b0f17]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f17]/80">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-lg font-black text-slate-900 shadow-lg shadow-orange-900/40">
              ⚖
            </div>
            <div>
              <h1 className="text-base font-black uppercase tracking-wide text-slate-50 sm:text-lg">
                CPP em Tabelas
              </h1>
              <p className="text-xs text-slate-400">
                Prazos · Multas · Percentuais · Penas · Regras &amp; Exceções
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <span className="hidden text-right text-xs leading-tight text-slate-400 lg:block">
              Arquivo <b className="text-slate-200">.docx</b> · Arial 11 pt · UTF-8
              <br />
              Otimizado para o <b className="text-amber-300">Modo Escuro do Word</b>
            </span>
            <button
              onClick={handleDownload}
              disabled={estado === "gerando"}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-orange-950/50 transition-all hover:scale-[1.02] hover:shadow-orange-800/60 focus:outline-none focus:ring-4 focus:ring-amber-400/40 disabled:cursor-wait disabled:opacity-70"
            >
              {estado === "gerando" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900/40 border-t-slate-900" />
                  Gerando DOCX…
                </>
              ) : estado === "pronto" ? (
                <>✓ Download iniciado!</>
              ) : estado === "erro" ? (
                <>⚠ Erro — tentar de novo</>
              ) : (
                <>
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Baixar tabela em DOCX
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 pb-24">
        {/* ---------------- HERO ---------------- */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-[#16233d] via-[#141b2c] to-[#0f1622] p-6 shadow-2xl shadow-black/50 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
            Decreto-Lei 3.689/1941 · Pacote Anticrime · Súmulas STF/STJ
          </p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-4xl">
            Direito Processual Penal —{" "}
            <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
              Código de Processo Penal
            </span>
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Análise integral do material do repositório{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-[0.85em] text-amber-200">
              DIREITO_PROCESSUAL_PENAL_CPP.md
            </code>{" "}
            organizada em <b className="text-white">3 tabelas de alta densidade</b>: todos os prazos,
            multas, percentuais, frações, quantidades e patamares de pena, além do confronto completo
            entre <b className="text-sky-300">REGRAS</b> e <b className="text-orange-300">EXCEÇÕES</b>{" "}
            relevantes para concursos.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { n: ESTATISTICAS.prazos, r: "Prazos mapeados", c: "text-amber-300" },
              { n: ESTATISTICAS.valores, r: "Multas · % · quantidades", c: "text-emerald-300" },
              { n: ESTATISTICAS.regras, r: "Pares regra/exceção", c: "text-sky-300" },
              { n: total, r: "Linhas no documento", c: "text-fuchsia-300" },
            ].map((s) => (
              <div
                key={s.r}
                className="rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3"
              >
                <div className={`text-2xl font-black ${s.c}`}>{s.n}</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400">{s.r}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- LEGENDA ---------------- */}
        <section className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-900/40 p-5 sm:p-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-purple-300">
            Legenda cromática · teoria das cores + teoria da aprendizagem
          </h3>
          <p className="mt-2 text-xs text-slate-400">
            Cada categoria de informação recebe uma cor fixa e é sempre grafada em{" "}
            <b className="text-slate-200">NEGRITO + CAIXA ALTA</b> (codificação dupla). O mesmo padrão
            é aplicado dentro do arquivo DOCX.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {ORDEM_LEGENDA.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-3 py-2"
              >
                <span className={`text-lg leading-none ${CLASSES_DESTAQUE[t]}`}>■</span>
                <span className={`text-[11px] font-bold uppercase tracking-wide ${CLASSES_DESTAQUE[t]}`}>
                  {ROTULOS_DESTAQUE[t]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- CONTROLES ---------------- */}
        <section className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {ABAS.map((a) => (
              <button
                key={a.id}
                data-on={aba === a.id}
                onClick={() => setAba(a.id)}
                className={`rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-left transition-all hover:border-slate-500 ${a.cor}`}
              >
                <div className="text-sm font-bold uppercase tracking-wide">{a.rotulo}</div>
                <div className="text-[11px] text-slate-400">{a.sub}</div>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <input
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Buscar: fiança, 24 horas, júri, art. 316…"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 py-3 pl-10 pr-9 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
            />
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            {filtro && (
              <button
                onClick={() => setFiltro("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200"
                aria-label="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>
        </section>

        {/* ---------------- TABELAS ---------------- */}
        <section className="mt-5">
          {aba === "prazos" && (
            <Tabela4
              grupos={PRAZOS}
              titulos={["Base legal", "Instituto / Situação", "Prazo", "Detalhamento, regra e exceções"]}
              accent="bg-[#7A4E06] text-amber-50"
              accentGrupo="text-amber-300"
              filtro={filtro}
            />
          )}
          {aba === "valores" && (
            <Tabela4
              grupos={VALORES}
              titulos={[
                "Base legal",
                "Instituto / Situação",
                "Valor · % · Quantidade",
                "Detalhamento, regra e exceções",
              ]}
              accent="bg-[#0E5136] text-emerald-50"
              accentGrupo="text-emerald-300"
              filtro={filtro}
            />
          )}
          {aba === "regras" && <TabelaRegras grupos={REGRAS} filtro={filtro} />}
        </section>

        {/* ---------------- RODAPÉ / CTA ---------------- */}
        <section className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-slate-700/70 bg-gradient-to-r from-slate-900 to-slate-900/40 p-8 text-center">
          <h3 className="text-lg font-black uppercase tracking-wide text-white">
            Leve tudo isso para o Word
          </h3>
          <p className="max-w-2xl text-sm text-slate-400">
            O arquivo é gerado no navegador em <b className="text-slate-200">UTF-8</b> (acentuação e
            caracteres especiais preservados: <span className="text-amber-300">§ º ª ç ã é í ó ú</span>),
            em <b className="text-slate-200">Arial 11 pt</b>, página A4 paisagem, cabeçalhos repetidos
            em todas as páginas e sombreamento escuro em todas as células — perfeito para quem usa o
            Word em tema noturno.
          </p>
          <button
            onClick={handleDownload}
            disabled={estado === "gerando"}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-8 py-4 text-sm font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-orange-950/50 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-amber-400/40 disabled:cursor-wait disabled:opacity-70"
          >
            {estado === "gerando" ? "Gerando DOCX…" : "⬇ Baixar DOCX formatado"}
          </button>
          <p className="text-[11px] uppercase tracking-widest text-slate-600">
            Fonte: repositório paulomenessis-gif/direito-processual-penal-cpp
          </p>
        </section>
      </main>
    </div>
  );
}
