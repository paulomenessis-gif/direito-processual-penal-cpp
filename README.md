# Direito Processual Penal - Código de Processo Penal (CPP)

Este repositório contém a extração integral e estruturada em **Markdown (.md)** do material de estudo do **Código de Processo Penal (CPP)**.

## 📄 Conteúdo do Repositório

- [`DIREITO_PROCESSUAL_PENAL_CPP.md`](./DIREITO_PROCESSUAL_PENAL_CPP.md): Arquivo Markdown contendo todas as 743 páginas extraídas na íntegra, com títulos, capítulos, artigos, notas e comentários.
- [`extract_pdf.py`](./extract_pdf.py): Script em Python utilizando `PyMuPDF` utilizado para realizar a extração com preservação de acentuação, cabeçalhos e formatação.

## ✨ Destaques da Extração

- **743 Páginas Convertidas:** Sem omissão de texto ou resumos.
- **Acentuação 100% Preservada:** Caracteres em português (`á`, `à`, `ã`, `ç`, `é`, `ê`, `í`, `ó`, `õ`, `ú`, `º`, `ª`) convertidos em UTF-8 limpo.
- **Estruturação Markdown:**
  - `##` para Títulos e Livros
  - `###` para Capítulos e Artigos (`Art. 1º`, `Art. 251`, etc.)
  - Seções de comentários e observações formatadas em negrito (**COMENTÁRIO:**, **OBS.:**, **IMPEDIMENTO:**).
  - Marcadores de páginas embutidos (`<!-- Page X -->`) e divisores (`---`).

## 🛠️ Como reexecutar o script de extração

Caso queira reprocessar o documento em PDF:

```bash
pip install pymupdf
python extract_pdf.py
```
