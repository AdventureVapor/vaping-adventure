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
- [x] E-Mail-Anbieter in Supabase aktiviert
- [x] E-Mail-Bestätigung in Supabase aktiviert
- [x] Site URL und Redirect URL auf die GitHub-Pages-Adresse gesetzt
- [ ] E-Mail-Adresse mit einem echten Testkonto bestätigen
- [ ] Passwort-Zurücksetzen per E-Mail praktisch testen
- [ ] Verhalten bei ungültigen Eingaben und Authentifizierungsfehlern prüfen

### 2. Verschlüsselte Cloud und Wiederherstellung
- [x] Supabase-Tabelle `public.mva_saves` angelegt
- [x] Tabellenspalten `user_id` (uuid), `payload` (jsonb) und `updated_at` (timestamptz) eingerichtet
- [x] `user_id` als Primärschlüssel eingerichtet
- [x] Fremdschlüssel von `user_id` auf `auth.users.id` mit ON DELETE CASCADE eingerichtet
- [x] Row Level Security (RLS) aktiviert
- [x] SELECT-Policy geprüft: Zugriff nur bei `auth.uid() = user_id`
- [x] INSERT-Policy geprüft: Schreiben nur bei `auth.uid() = user_id`
- [x] UPDATE-Policy geprüft: USING und WITH CHECK beschränken Zugriff auf `auth.uid() = user_id`
- [ ] Supabase-Einrichtung vollständig dokumentieren
- [ ] Sicherstellen, dass im Frontend ausschließlich der öffentliche Publishable-/Anon-Key verwendet wird
- [ ] Wiederherstellungscode beim Einrichten eines neuen Cloud-Speichers praktisch testen
- [ ] Zusammenspiel von Passwortänderung, Passwort-Zurücksetzen und Wiederherstellungscode testen
- [ ] Cloud-Synchronisierung auf mehreren Geräten testen
- [ ] Prüfen, dass keine Passwörter oder unverschlüsselten Tagebuchdaten in der Cloud abgelegt werden

### 3. Sicherheit und Kontentrennung
- [x] RLS-Regeln und Benutzerbindung der Datenbank geprüft
- [ ] Zwei getrennte Testkonten anlegen
- [ ] Praktisch prüfen, dass jedes Konto ausschließlich seine eigenen Cloud-Daten lesen und ändern kann
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

## Deutsch und Englisch – umgesetzt

- [x] Sprachumschalter oben rechts integrieren (🇩🇪 Deutsch / 🇬🇧 English)
- [x] Deutsch als Standardsprache beim ersten Besuch einstellen
- [x] Englische Übersetzungen für Menüs, Schaltflächen, Hinweise und viele Fehlermeldungen ergänzen
- [x] Hilfebereich und fest eingebaute Texte übersetzen
- [x] Gewählte Sprache dauerhaft im Browser speichern
- [x] Tagebuch-Einträge und andere persönliche Inhalte unverändert lassen
- [x] Sprachwechsel in der Vorschau auf den wichtigsten Bereichen prüfen
- [x] Sprachfunktion in den Produktionszweig `main` übernehmen

> Hinweis: Die Sprachfunktion wurde in der Vorschau geprüft und anschließend in `main` übernommen. Bei weiteren Tests gefundene fehlende Übersetzungen werden laufend ergänzt. Persönliche Inhalte werden nicht übersetzt.

## Version 1.4 – vorgemerkt

- [ ] Französische Sprache ergänzen
- [ ] Französische Flagge im Sprachumschalter ergänzen
- [ ] Benutzeroberfläche und Lerninhalte ins Französische übersetzen
- [ ] Sprachwahl für Französisch genauso speichern wie Deutsch und Englisch

## Technischer Stand

- **Produktionszweig:** `main` (bleibt während der Alpha-1.3-Entwicklung unverändert)
- **Alpha-1.3-Arbeitszweig:** `alpha-1.3-email-auth`
- **Status:** Supabase-Grundkonfiguration, Datenbanktabelle, Fremdschlüssel und RLS-Policies sind eingerichtet und anhand der SQL-Definitionen geprüft. Registrierung, E-Mail-Bestätigung, echte Cloud-Synchronisierung, Wiederherstellung und Kontentrennung müssen noch praktisch getestet werden.

---

*Die Roadmap wird während der Entwicklung laufend aktualisiert. Ein Häkchen bedeutet: umgesetzt und ausreichend geprüft – nicht nur geplant oder programmiert. Bei Sicherheitsregeln bedeutet die Prüfung der SQL-Definition noch nicht, dass die praktische Trennung mit zwei Testkonten bereits erfolgreich getestet wurde.*
