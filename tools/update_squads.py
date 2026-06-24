"""
Scraper opcional para dados complementares.

Uso:
  python tools/update_squads.py

Observação:
- O site principal é estático.
- Este script é apenas um ponto de partida para baixar/normalizar fontes externas,
  como PDF oficial de elencos ou páginas públicas.
"""

import json
import re
from pathlib import Path

try:
    import requests
except ImportError:
    raise SystemExit("Instale requests: pip install requests")

SQUAD_PDF_TEXT_URL = "http://localhost:8451/https://fdp.fifa.org/assetspublic/ce281/pdf/SquadLists-English.pdf"

def main():
    print("Este script é um ponto de partida.")
    print("Para scraping real, substitua SQUAD_PDF_TEXT_URL por uma fonte acessível no seu ambiente.")
    out = Path(__file__).resolve().parents[1] / "data_squads.json"
    out.write_text(json.dumps({"updated": False, "players": []}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Arquivo gerado: {out}")

if __name__ == "__main__":
    main()
