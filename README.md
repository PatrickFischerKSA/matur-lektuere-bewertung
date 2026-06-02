# Maturlektüre Bewertung

Eine kleine Next.js-Webanwendung für Lehrpersonen, die kreative Lernprodukte zu Individuallektüren für die Maturprüfung schnell bewerten und kommentieren möchten.

## Funktionen

- Stammdaten für Schülerin oder Schüler, Klasse, Lektüre, Autorin oder Autor und Produktform
- fünf Kriterien mit je 1 bis 4 Punkten
- automatische Berechnung der Gesamtpunktzahl und Note
- Notenformel: `(erreichte Punkte / 20) × 5 + 1`
- Rundung der Note auf eine Dezimalstelle
- zusammenfassender Rückmeldungsbereich
- Kommentarbausteine in drei Kategorien
- lokale Speicherung im Browser mit `localStorage`
- keine Anmeldung, keine externe Datenbank, keine kostenpflichtigen Dienste

## Grundsatz

Bewertet wird nicht die gewählte Form an sich, sondern wie eigenständig, vertieft und textgerecht die Auseinandersetzung mit der Lektüre gelingt. Eine Inhaltszusammenfassung allein genügt nicht.

## Lokal starten

```bash
npm install
npm run dev
```

Danach ist die Anwendung unter `http://localhost:3000` erreichbar.

## Tests

```bash
npm test
```

Die Tests prüfen die Punkte- und Notenberechnung, Rundung, Validierung und das Einfügen von Kommentarbausteinen.

## Deployment auf Render

Wenn Render beim Anlegen meldet, dass `matur-lektuere-bewertung` bereits vergeben ist, muss der Service einen eindeutigen Namen erhalten. Dieses Repository enthält dafür `render.yaml` mit dem Namen `matur-lektuere-bewertung-app`.

Manuelles Setup auf Render:

- Name: `matur-lektuere-bewertung-app` oder ein anderer eindeutiger Name
- Runtime: `Node`
- Branch: `main`
- Build Command: `npm ci && npm run build`
- Start Command: `npm run start`
- Environment Variable: `NODE_VERSION=22`

## Projektstruktur

```text
src/app          Next.js-Seiten und globale Styles
src/components   UI-Komponenten für Formular, Raster, Kommentare und Ergebnis
src/lib          Bewertungsdaten, Typen, Berechnungs- und Validierungslogik
src/test         Vitest-Tests
```

## Hinweise zur Speicherung

Die aktuelle Bewertung wird automatisch im lokalen Browser-Speicher gesichert. Sie bleibt auf demselben Gerät und im selben Browser erhalten, bis eine neue leere Bewertung angelegt oder der Browser-Speicher gelöscht wird.
