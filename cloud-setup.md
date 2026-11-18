# Vaping Adventure – Cloud-Einrichtung (Alpha 1.3)

Diese Anleitung beschreibt die Supabase-Seite der Cloud-Anbindung. Die Anwendung bleibt eine statische Website auf GitHub Pages; Supabase stellt Authentifizierung und Datenbank bereit.

> **Wichtig:** Diese Datei dokumentiert die geplante E-Mail-Anmeldung. Die aktuelle App-Version auf `main` verwendet noch die alte Benutzername-Anmeldung. Die Alpha-1.3-Änderungen werden zunächst im Branch `alpha-1.3-email-auth` entwickelt und erst nach Tests übernommen.

## 1. Supabase-Projekt

Benötigt werden:
- Project URL
- Publishable Key (oder der bisherige anon/public key)

Diese beiden Werte dürfen im Browser in `cloud-config.js` stehen. **Niemals** einen `service_role`-Key, Secret API Key oder Datenbankpasswort in GitHub bzw. in eine Browserdatei eintragen.

## 2. Tabelle für verschlüsselte Spielstände

Im Supabase SQL Editor ausführen (vorhandene Datenbank vorher prüfen und sichern):

```sql
create table if not exists public.mva_saves (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.mva_saves enable row level security;

drop policy if exists "Users can read their own save" on public.mva_saves;
create policy "Users can read their own save"
on public.mva_saves for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert their own save" on public.mva_saves;
create policy "Users can insert their own save"
on public.mva_saves for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update their own save" on public.mva_saves;
create policy "Users can update their own save"
on public.mva_saves for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
```

Die Richtlinien sind die eigentliche serverseitige Trennung der Konten. Ein Filter in JavaScript allein ist kein Zugriffsschutz.

## 3. E-Mail-Bestätigung

In Supabase unter **Authentication → Providers → Email**:
- E-Mail-Anbieter aktiviert lassen.
- E-Mail-Bestätigung aktivieren.
- Für produktiven Versand einen eigenen SMTP-Anbieter einrichten. Der Standardversand von Supabase ist für Tests begrenzt.

Unter **Authentication → URL Configuration**:
- Site URL auf die veröffentlichte GitHub-Pages-Adresse setzen.
- Die exakte GitHub-Pages-Adresse zusätzlich als Redirect URL erlauben, einschließlich des Pfads, falls die Anwendung dort unter einem Unterpfad liegt.

Die Anwendung muss Bestätigungslinks wieder auf die App zurückführen können.

## 4. Passwort-Wiederherstellung und Verschlüsselung

Die Anwendung verschlüsselt Tagebuchdaten im Browser mit AES-GCM. Supabase erhält nur den verschlüsselten Spielstand.

Bei neu angelegten Cloud-Spielständen wird ein zufälliger Tagebuchschlüssel erzeugt. Dieser Schlüssel wird doppelt verpackt:
- einmal mit einem aus dem aktuellen Passwort abgeleiteten Schlüssel,
- einmal mit einem aus einem zufälligen Wiederherstellungscode abgeleiteten Schlüssel.

**Der Wiederherstellungscode wird bei der ersten Einrichtung einmalig angezeigt.** Nutzer müssen ihn sicher und getrennt vom Gerät aufbewahren. Bei einem Passwort-Reset über den E-Mail-Link fragt die App den Code ab, verpackt den Tagebuchschlüssel mit dem neuen Passwort und aktualisiert den verschlüsselten Datensatz. Ohne Passwort oder Wiederherstellungscode kann auch der Betreiber die Daten nicht entschlüsseln.

Ältere Spielstände im Format v1 (Alpha 1.2) verwenden noch die direkte Passwortableitung und besitzen keinen Wiederherstellungscode. Ein Passwort-Reset kann diese alten verschlüsselten Daten nicht wiederherstellen. Solche Nutzer sollten sich vor einem Passwortwechsel anmelden und ein JSON-Backup exportieren; die Migration auf das neue Format muss in einer angemeldeten Sitzung erfolgen.

## 5. Bestehende Konten

Die bisherige Alpha 1.2-Anmeldung erzeugte interne Adressen der Form `benutzername@mva.invalid`. Das sind keine echten E-Mail-Adressen. Diese Konten können nicht automatisch durch bloßes Ändern der Oberfläche in verifizierte E-Mail-Konten umgewandelt werden. Betroffene Nutzer benötigen ein neues E-Mail-Konto und sollten ihren bisherigen Spielstand vorher als JSON exportieren und nach der Anmeldung importieren.



## 6. Sicherheitscheck vor Veröffentlichung

- [ ] Nur Publishable-/Anon-Key im Frontend
- [ ] Keine Service-Role- oder Secret-Keys im Repository
- [ ] RLS für `mva_saves` aktiviert
- [ ] SELECT, INSERT und UPDATE jeweils auf `auth.uid() = user_id` beschränkt
- [ ] E-Mail-Bestätigung getestet
- [ ] Redirect-URLs geprüft
- [ ] Passwort-Reset und Schlüssel-Wiederherstellung gemeinsam getestet
- [ ] Zwei Testkonten angelegt und gegenseitiger Datenzugriff ausgeschlossen
- [ ] CSV-Import und JSON-Backup getestet
