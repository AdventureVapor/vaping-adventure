# Vaping Adventure – Roadmap

Diese Roadmap hält fest, was bereits vorhanden ist und welche Arbeiten bis zur Veröffentlichung von **Version 1.3** noch erledigt werden müssen. Die Häkchen werden erst gesetzt, wenn ein Punkt umgesetzt und – soweit sinnvoll – getestet wurde.

## Bereits umgesetzt

### Grundfunktionen
- [x] Tagebuch mit Einträgen und Verwaltungsfunktionen
- [x] Geräteverwaltung
- [x] Sammlung für Sorten
- [x] CSV-Import und -Export
- [x] JSON-Backup und -Wiederherstellung
- [x] Lokale Datenspeicherung
- [x] Vorhandene Cloud-Speicherfunktion mit Verschlüsselungsansatz

### Galerie – in Version 1.2/Alpha
- [x] Galerie-Kacheln passen Bilder an ihre Bildflächen an
- [x] Bilder lassen sich in einer vergrößerten Lightbox öffnen
- [x] Vor- und Zurück-Navigation in der Lightbox
- [x] Lightbox lässt sich schließen
- [x] Galerie-Änderungen in den Produktionszweig `main` übernommen

> Hinweis: Die Grundfunktionen sind im bisherigen Projektstand vorhanden. Nicht jede einzelne Funktion wurde im Rahmen der Vorbereitung von Version 1.3 erneut vollständig durchgetestet.

## Version 1.3 – noch zu erledigen

### 1. E-Mail-Anmeldung und Benutzerkonten
- [ ] Registrierung mit echter E-Mail-Adresse und Passwort fertigstellen
- [ ] Anmeldung mit E-Mail-Adresse und Passwort
- [ ] E-Mail-Adresse bestätigen
- [ ] Passwort-Zurücksetzen per E-Mail
- [ ] Weiterleitungen und Bestätigungslinks korrekt konfigurieren
- [ ] Verhalten bei ungültigen Eingaben und Authentifizierungsfehlern prüfen

### 2. Verschlüsselte Cloud und Wiederherstellung
- [ ] Einrichtung von Supabase abschließen und dokumentieren
- [ ] Sicherstellen, dass im Frontend ausschließlich der öffentliche Publishable-/Anon-Key verwendet wird
- [ ] Row Level Security (RLS) aktivieren und Richtlinien prüfen
- [ ] Datenbankzugriffe strikt auf den jeweils angemeldeten Benutzer begrenzen
- [ ] Wiederherstellungscode beim Einrichten eines neuen Cloud-Speichers erzeugen
- [ ] Zusammenspiel von Passwortänderung, Passwort-Zurücksetzen und Wiederherstellungscode testen
- [ ] Cloud-Synchronisierung auf mehreren Geräten testen
- [ ] Prüfen, dass keine Passwörter oder unverschlüsselten Tagebuchdaten in der Cloud abgelegt werden

### 3. Sicherheit und Kontentrennung
- [ ] Zwei getrennte Testkonten anlegen
- [ ] Prüfen, dass jedes Konto ausschließlich seine eigenen Cloud-Daten lesen und ändern kann
- [ ] Anmeldung, Abmeldung und Sitzungsablauf testen
- [ ] Sicherheits- und Konfigurationscheckliste vollständig abarbeiten

### 4. Übernahme älterer Daten
- [ ] Vorgehen für Nutzer aus Alpha 1.2 dokumentieren
- [ ] Export der bisherigen Daten und Import in ein neues E-Mail-Konto testen
- [ ] CSV-Import und -Export erneut testen
- [ ] JSON-Backup und -Wiederherstellung erneut testen
- [ ] Umgang mit älteren Cloud-Speicherständen ohne Wiederherstellungscode dokumentieren

### 5. Qualitätssicherung und Veröffentlichung
- [ ] Alle wichtigen Funktionen einmal vollständig durchtesten
- [ ] Fehler aus den Tests beheben
- [ ] Hilfetexte und Einrichtungsanleitung aktualisieren
- [ ] Versionsnummer und Änderungsübersicht auf 1.3 aktualisieren
- [ ] Alpha-Tests abschließen
- [ ] Version 1.3 zur Veröffentlichung freigeben

## Geplant: Deutsch und Englisch

Die zweisprachige Oberfläche soll ebenfalls Teil der Version 1.3 werden.

- [ ] Sprachumschalter oben rechts integrieren (🇩🇪 Deutsch / 🇬🇧 English)
- [ ] Deutsch als Standardsprache beim ersten Besuch einstellen
- [ ] Englische Übersetzungen für Menüs, Schaltflächen, Hinweise und Fehlermeldungen ergänzen
- [ ] Hilfebereich und weitere fest eingebaute Texte übersetzen
- [ ] Gewählte Sprache dauerhaft speichern
- [ ] Tagebuch-Einträge und andere persönliche Inhalte unverändert lassen
- [ ] Sprachwechsel in der gesamten Anwendung testen

## Technischer Stand

- **Produktionszweig:** `main`
- **Alpha-1.3-Arbeitszweig:** `alpha-1.3-email-auth`
- **Status:** Die Arbeiten zur E-Mail-Anmeldung und Cloud-Wiederherstellung sind begonnen. Sie gelten erst nach erfolgreicher Prüfung und Übernahme als abgeschlossen.

---

*Die Roadmap wird während der Entwicklung laufend aktualisiert. Ein Häkchen bedeutet: umgesetzt und ausreichend geprüft – nicht nur geplant oder programmiert.*
