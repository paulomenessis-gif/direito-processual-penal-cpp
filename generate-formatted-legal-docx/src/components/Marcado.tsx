import { tokenizar } from "../data/tipos";
import { CLASSES_DESTAQUE } from "../data/tema";

interface Props {
  texto: string;
  className?: string;
}

/** Renderiza um texto marcado ({{tipo|conteudo}}) com cor + negrito + CAIXA ALTA. */
export function Marcado({ texto, className = "" }: Props) {
  return (
    <span className={className}>
      {tokenizar(texto).map((tk, i) =>
        tk.tipo ? (
          <strong
            key={i}
            className={`font-bold uppercase tracking-wide ${CLASSES_DESTAQUE[tk.tipo]}`}
          >
            {tk.texto}
          </strong>
        ) : (
          <span key={i}>{tk.texto}</span>
        ),
      )}
    </span>
  );
}
