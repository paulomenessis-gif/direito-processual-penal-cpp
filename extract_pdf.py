import fitz
import re
import os
import time

def extract_pdf_to_markdown(pdf_path, output_md_path):
    print(f"Opening PDF: {pdf_path}")
    start_time = time.time()
    
    doc = fitz.open(pdf_path)
    num_pages = len(doc)
    print(f"Total pages to extract: {num_pages}")

    full_md = [
        "# DIREITO PROCESSUAL PENAL - CPP\n",
        "> Documento extraído na íntegra do material de estudo em PDF.\n\n"
    ]

    for p_idx in range(num_pages):
        page = doc[p_idx]
        blocks = page.get_text("blocks")
        page_lines = []

        for b in blocks:
            text = b[4]
            raw_lines = [l.strip() for l in text.split('\n') if l.strip()]
            if not raw_lines:
                continue

            # Remove header noise like '00:00 MIN' and '#F0399' or page timer codes
            filtered = []
            for line in raw_lines:
                if line in ('00:00 MIN', '#F0399') or re.match(r'^\d{2}:\d{2}\s*MIN$', line):
                    continue
                filtered.append(line)

            if not filtered:
                continue

            for line in filtered:
                # Heading checks
                if re.match(r'^TÍTULO\s+[IVXLCDM\d]+', line, re.IGNORECASE):
                    page_lines.append(f"\n## {line}\n")
                elif re.match(r'^CAPÍTULO\s+[IVXLCDM\d]+', line, re.IGNORECASE):
                    page_lines.append(f"\n### {line}\n")
                elif re.match(r'^SEÇÃO\s+[IVXLCDM\d]+', line, re.IGNORECASE):
                    page_lines.append(f"\n#### {line}\n")
                elif re.match(r'^Art\.\s*\d+', line, re.IGNORECASE):
                    page_lines.append(f"\n### {line}\n")
                elif re.match(r'^(COMENTÁRIO|OBS\.|IMPEDIMENTO|SUSPEIÇÃO|JUIZ PRESIDENTE):', line, re.IGNORECASE):
                    page_lines.append(f"\n**{line}**\n")
                elif re.match(r'^(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV)\s*[\-\–]', line):
                    page_lines.append(f"- **{line}**")
                elif re.match(r'^[a-z]\)\s*', line):
                    page_lines.append(f"  - {line}")
                elif re.match(r'^[\-\*•]\s*', line):
                    clean_bullet = re.sub(r'^[\-\*•]\s*', '', line)
                    page_lines.append(f"- {clean_bullet}")
                elif re.match(r'^\d+[\.\)]\s*', line):
                    page_lines.append(line)
                else:
                    # Append flow text to previous line if appropriate
                    if page_lines and not page_lines[-1].startswith(('#', '-', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '**', '\n')) and not page_lines[-1].endswith((':', '.')):
                        page_lines[-1] += ' ' + line
                    else:
                        page_lines.append(line)

        if page_lines:
            page_content = "\n\n".join(page_lines)
            full_md.append(f"<!-- Page {p_idx + 1} -->\n" + page_content)

        if (p_idx + 1) % 100 == 0 or (p_idx + 1) == num_pages:
            print(f"Processed {p_idx + 1}/{num_pages} pages...")

    final_markdown = "\n\n---\n\n".join(full_md)

    with open(output_md_path, 'w', encoding='utf-8') as f:
        f.write(final_markdown)

    elapsed = time.time() - start_time
    file_size_mb = os.path.getsize(output_md_path) / (1024 * 1024)
    print(f"Successfully extracted {num_pages} pages in {elapsed:.2f}s!")
    print(f"Output saved to: {output_md_path} ({file_size_mb:.2f} MB)")

if __name__ == '__main__':
    extract_pdf_to_markdown('DIREITO PROCESSUAL PENAL CPP.pdf', 'DIREITO_PROCESSUAL_PENAL_CPP.md')
