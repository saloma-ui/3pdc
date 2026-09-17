# Àmbit científic i tecnològic · 3r PDC

Repositori d’activitats de l’**Àmbit científic i tecnològic de 3r PDC**, publicades amb Material for MkDocs i GitHub Pages.

## Arquitectura

```text
docs/
├── index.md
├── programacio.md
├── criteris-avaluacio.md
├── calendari.md
└── activitats/
    ├── up1/
    │   └── index.md
    ├── up2/
    ├── up3/
    ├── up4/
    ├── up5/
    └── up6/
```

Les activitats es creen dins `docs/activitats/upx/`, amb una subcarpeta pròpia per a cada activitat quan sigui necessari. No s’utilitza cap carpeta `docs/material/`.

Els noms de carpetes i fitxers s’escriuen en minúscules, sense espais ni accents.

## Publicació

La branca `main` activa el flux de GitHub Actions. El lloc es construeix amb MkDocs i es publica mitjançant GitHub Pages.

Els PDF es generen amb `mkdocs-exporter`. Les activitats que necessitin PDF poden indicar `pdf: true` al front matter.
