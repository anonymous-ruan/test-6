import sys
from PyPDF2 import PdfReader

if len(sys.argv) < 2:
    print("Usage: python extract_pdf.py <pdf_path>")
    sys.exit(1)

path = sys.argv[1]
out_path = "extracted_utf8.txt"
reader = PdfReader(path)
text_parts = []
for page in reader.pages:
    try:
        text_parts.append(page.extract_text() or "")
    except Exception:
        text_parts.append("")

with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n\n".join(text_parts))
print(f"Wrote extracted text to {out_path}")
