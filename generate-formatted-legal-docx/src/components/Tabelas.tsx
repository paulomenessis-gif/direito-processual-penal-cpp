import { Fragment } from "react";
import { Marcado } from "./Marcado";
import type { GrupoPrazo, GrupoRegra } from "../data/tipos";

interface Tabela4Props {
  grupos: GrupoPrazo[];
  titulos: [string, string, string, string];
  accent: string; // classes do cabeçalho
  accentGrupo: string; // cor do texto do grupo
  filtro: string;
}

function casa(filtro: string, ...campos: string[]) {
  if (!filtro.trim()) return true;
  const alvo = campos.join(" ").toLowerCase();
  return filtro
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((t) => alvo.includes(t));
}

export function Tabela4({ grupos, titulos, accent, accentGrupo, filtro }: Tabela4Props) {
  const visiveis = grupos
    .map((g) => ({
      ...g,
      linhas: g.linhas.filter((l) => casa(filtro, g.titulo, l.base, l.tema, l.destaque, l.detalhe)),
    }))
    .filter((g) => g.linhas.length > 0);

  if (visiveis.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
        Nenhum resultado para <span className="text-amber-300">“{filtro}”</span> nesta tabela.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/80 shadow-2xl shadow-black/40">
      <table className="w-full min-w-[900px] border-collapse text-[13px] leading-relaxed">
        <thead className="sticky top-0 z-10">
          <tr className={accent}>
            {titulos.map((t, i) => (
              <th
                key={i}
                className={`border-b border-slate-600/70 px-3 py-3 text-left font-bold uppercase tracking-wider ${
                  i === 0 ? "w-[11%] text-center" : i === 1 ? "w-[22%]" : i === 2 ? "w-[19%] text-center" : "w-[48%]"
                }`}
              >
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visiveis.map((g) => (
            <Fragment key={g.titulo}>
              <tr className="bg-slate-800/90">
                <td
                  colSpan={4}
                  className={`border-y border-slate-600/60 px-3 py-2 text-[13px] font-bold uppercase tracking-widest ${accentGrupo}`}
                >
                  {g.titulo}
                </td>
              </tr>
              {g.linhas.map((l, i) => (
                <tr
                  key={g.titulo + i}
                  className={`${i % 2 === 0 ? "bg-slate-900/60" : "bg-slate-900/30"} align-top transition-colors hover:bg-slate-800/60`}
                >
                  <td className="border-b border-slate-800 px-3 py-2.5 text-center align-middle">
                    <Marcado texto={l.base} />
                  </td>
                  <td className="border-b border-slate-800 px-3 py-2.5 font-semibold text-slate-100">
                    <Marcado texto={l.tema} />
                  </td>
                  <td className="border-b border-slate-800 px-3 py-2.5 text-center align-middle">
                    <Marcado texto={l.destaque} />
                  </td>
                  <td className="border-b border-slate-800 px-3 py-2.5 text-slate-300">
                    <Marcado texto={l.detalhe} />
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TabelaRegras({ grupos, filtro }: { grupos: GrupoRegra[]; filtro: string }) {
  const visiveis = grupos
    .map((g) => ({
      ...g,
      linhas: g.linhas.filter((l) => casa(filtro, g.titulo, l.tema, l.base, l.regra, l.excecao)),
    }))
    .filter((g) => g.linhas.length > 0);

  if (visiveis.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
        Nenhuma regra encontrada para <span className="text-amber-300">“{filtro}”</span>.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/80 shadow-2xl shadow-black/40">
      <table className="w-full min-w-[980px] border-collapse text-[13px] leading-relaxed">
        <thead className="sticky top-0 z-10">
          <tr className="bg-[#1B3A6B] text-slate-50">
            <th className="w-[18%] border-b border-slate-600/70 px-3 py-3 text-center font-bold uppercase tracking-wider">
              Tema / Base legal
            </th>
            <th className="w-[41%] border-b border-slate-600/70 px-3 py-3 text-center font-bold uppercase tracking-wider text-sky-300">
              Regra geral
            </th>
            <th className="w-[41%] border-b border-slate-600/70 px-3 py-3 text-center font-bold uppercase tracking-wider text-orange-300">
              Exceções / Observações de prova
            </th>
          </tr>
        </thead>
        <tbody>
          {visiveis.map((g) => (
            <Fragment key={g.titulo}>
              <tr className="bg-slate-800/90">
                <td
                  colSpan={3}
                  className="border-y border-slate-600/60 px-3 py-2 text-[13px] font-bold uppercase tracking-widest text-blue-200"
                >
                  {g.titulo}
                </td>
              </tr>
              {g.linhas.map((l, i) => (
                <tr
                  key={g.titulo + i}
                  className={`${i % 2 === 0 ? "bg-slate-900/60" : "bg-slate-900/30"} align-top transition-colors hover:bg-slate-800/60`}
                >
                  <td className="border-b border-slate-800 px-3 py-3 align-middle">
                    <div className="font-semibold text-slate-100">
                      <Marcado texto={l.tema} />
                    </div>
                    <div className="mt-1 text-[12px]">
                      <Marcado texto={l.base} />
                    </div>
                  </td>
                  <td className="border-b border-slate-800 px-3 py-3 text-slate-300">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-widest text-sky-300">
                      ► Regra
                    </div>
                    <Marcado texto={l.regra} />
                  </td>
                  <td className="border-b border-slate-800 px-3 py-3 text-slate-300">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-widest text-orange-300">
                      ▲ Exceção
                    </div>
                    <Marcado texto={l.excecao} />
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
