# My Vaping Adventure · Alpha 1.2.2

Static website for GitHub Pages. Local storage works without a server. Optional encrypted cloud storage uses the user's own Supabase project; the app itself does not operate a cloud service.

## Storage and privacy

- Local mode keeps entries, devices, strains, photos, quests, and course progress in this browser's local storage.
- Optional cloud mode uses Supabase Auth and a user-owned database table. The browser encrypts the complete save, including photos, with AES-GCM before upload. Supabase receives ciphertext, not the diary content.
- The login password is used to derive the encryption key with PBKDF2. It is not saved in the app. Sign in again after starting a new browser session.
- Losing the password means the encrypted cloud save cannot be recovered. Keep a JSON backup.
- See [cloud-setup.md](cloud-setup.md) for setup, account behavior, and limitations.

The project uses the Supabase publishable/anon key in the browser and relies on row-level security. Never add a `service_role` key or database password to `cloud-config.js`.

## Included

- Diary with filters, search, sorting, editing, and deletion.
- Device library and local device photos.
- Strain collection and local photo gallery.
- CSV import/export and JSON backup/restore.
- Quests and courses for learning, equipment care, and documentation.
- Optional encrypted cloud save, username/password sign-in, and explicit switching between local and cloud saves.

The app can read the existing `pvd_entries`, `pvd_devices`, and `pvd_game` local-storage records when opened on the same site origin as the earlier Alpha 1.2 app.
