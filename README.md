# My Vaping Adventure · Alpha 1.2

This is a static website for GitHub Pages. Publish the contents of this folder as the Pages site; it has no server component and does not send diary data to a cloud service.

## Privacy and backups

Entries, devices, strains, gallery photos, quests, and course progress are saved in the browser's local storage on the current device. They do not follow you to another browser or device. Use **Mehr → Datensicherung** regularly to download a JSON backup. Restoring a backup replaces the current local data after first downloading a safety copy.

The app can also read the existing `pvd_entries`, `pvd_devices`, and `pvd_game` local-storage records when it is opened on the same site origin as the earlier Alpha 1.2 app. The app currently looks for the referenced logo at `Bilder/logo.png`; that image was not present alongside the supplied HTML, so the built-in mark is shown until the image is added.

## Included

- Mobile-first diary with filters, search, sorting, puff totals, editing, and deletion.
- Device classes, descriptions, and local device photos.
- Strain collection and saving new diary strains to the collection.
- Gallery with local photos linked to devices or diary entries.
- CSV import preview, likely-duplicate skipping, and export.
- JSON backup and restore.
- Quests and courses that reward learning, care, and documentation rather than consumption.

The current app is a single-browser alpha. Clearing browser data also clears its local data, so keep a JSON backup.

---

# My Vaping Adventure · Alpha 1.2 (Deutsch)

Dies ist eine statische Website für GitHub Pages. Veröffentliche den Inhalt dieses Ordners als Pages-Website. Die App benötigt keinen Server und sendet keine Tagebuchdaten an einen Cloud-Dienst.

## Datenschutz und Sicherungen

Einträge, Geräte, Sorten, Galeriefotos, Quests und Kursfortschritte werden im lokalen Browserspeicher des aktuellen Geräts gespeichert. Sie werden nicht mit anderen Browsern oder Geräten synchronisiert. Lade unter **Mehr → Datensicherung** regelmäßig eine JSON-Sicherung herunter. Beim Wiederherstellen ersetzt die Sicherung die aktuellen lokalen Daten; zuvor wird eine zusätzliche Sicherheitskopie heruntergeladen.

Die App kann außerdem vorhandene lokale Datensätze unter `pvd_entries`, `pvd_devices` und `pvd_game` auslesen, wenn sie auf demselben Website-Ursprung wie die frühere Alpha-1.2-App geöffnet wird. Das referenzierte Logo wird unter `Bilder/logo.png` erwartet. Diese Bilddatei war im Ordner der bereitgestellten HTML-Datei nicht enthalten; bis sie ergänzt wird, erscheint das eingebaute Symbol.

## Funktionen

- Für Mobilgeräte optimiertes Tagebuch mit Filtern, Suche, Sortierung, Puff-Statistik sowie Bearbeiten und Löschen.
- Geräteklassen, Beschreibungen und lokal gespeicherte Gerätefotos.
- Sortensammlung; neue Tagebuchsorten können automatisch in der Sammlung gespeichert werden.
- Lokale Fotogalerie mit Zuordnung zu Geräten oder Tagebucheinträgen.
- CSV-Import mit Vorschau und Erkennung möglicher Duplikate sowie CSV-Export.
- JSON-Sicherung und Wiederherstellung.
- Quests und Kurse mit Belohnungen für Lernen, Pflege und Dokumentation statt für Konsum.

Die App ist derzeit eine Alpha für einen einzelnen Browser. Wenn du die Browserdaten löschst, werden auch die lokalen App-Daten gelöscht. Bewahre deshalb eine JSON-Sicherung auf.
