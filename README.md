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

## Deployment auf Vercel

Die Anwendung ist jetzt fuer Vercel vorbereitet. Laut Vercel funktioniert Next.js dort in der Regel zero-config; dieses Repository legt die wichtigen Werte trotzdem explizit fest:

- Framework: `Next.js`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Node.js-Version: `22.x`
- keine benoetigten Umgebungsvariablen

Praktisches Setup auf Vercel:

1. Repository in Vercel importieren
2. Framework-Preset `Next.js` bestaetigen
3. Deployment starten

Die Konfiguration liegt in `vercel.json`, die Node-Version zusaetzlich in `package.json` und `.nvmrc`.

## Projektstruktur

```text
src/app          Next.js-Seiten und globale Styles
src/components   UI-Komponenten für Formular, Raster, Kommentare und Ergebnis
src/lib          Bewertungsdaten, Typen, Berechnungs- und Validierungslogik
src/test         Vitest-Tests
```

## Hinweise zur Speicherung

Die aktuelle Bewertung wird automatisch im lokalen Browser-Speicher gesichert. Sie bleibt auf demselben Gerät und im selben Browser erhalten, bis eine neue leere Bewertung angelegt oder der Browser-Speicher gelöscht wird.
