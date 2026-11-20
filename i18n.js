"use strict";
(() => {
  const translations = {
    "ADVENTURE · DEIN PRIVATES TAGEBUCH":"ADVENTURE · YOUR PRIVATE DIARY",
    "Nur auf diesem Gerät":"On this device only",
    "DEIN BEREICH":"YOUR SPACE",
    "Übersicht":"Overview",
    "Vaping Diary":"Vaping Diary",
    "Strain Collection":"Strain Collection",
    "Geräte":"Devices",
    "Photo Gallery":"Photo Gallery",
    "ADVENTURE":"ADVENTURE",
    "Quests & Ziele":"Quests & Goals",
    "Education":"Education",
    "Du entscheidest, wo gespeichert wird.":"You decide where your data is stored.",
    "Wähle lokalen Speicher oder richte eine clientseitig verschlüsselte Cloud ein.":"Choose local storage or set up a client-side encrypted cloud.",
    "Speicher & Backup →":"Storage & Backup →",
    "Home":"Home",
    "Tagebuch":"Diary",
    "Sorten":"Strains",
    "Mehr":"More",
    "DEIN PERSÖNLICHES TAGEBUCH":"YOUR PERSONAL DIARY",
    "Schön, dass du da bist.":"Welcome back.",
    "Halte deine Sessions, Geräte und Entdeckungen an einem Ort fest.":"Keep your sessions, devices and discoveries in one place.",
    "＋ Neuer Eintrag":"＋ New entry",
    "DEIN ADVENTURE BEGINNT HIER":"YOUR ADVENTURE STARTS HERE",
    "Dein Weg. Deine Aufzeichnungen.":"Your journey. Your records.",
    "Dokumentiere deine Erfahrungen, lerne deine Geräte kennen und sammle Fortschritt durch Wissen und gute Pflege.":"Document your experiences, get to know your devices and make progress through knowledge and good care.",
    "Zum Tagebuch →":"Go to diary →",
    "gesammelt ·":"collected ·",
    "TAGEBUCHEINTRÄGE":"DIARY ENTRIES",
    "Deine dokumentierten Sessions":"Your recorded sessions",
    "GERÄTE":"DEVICES",
    "In deiner Sammlung":"In your collection",
    "PUFFS / ZÜGE":"PUFFS / DRAWS",
    "Optional erfasste Gesamtzahl":"Optional recorded total",
    "SORTEN":"STRAINS",
    "Zuletzt im Tagebuch":"Recently in your diary",
    "Alle ansehen →":"View all →",
    "Deine Geschichte beginnt hier":"Your story starts here",
    "Dein erster Eintrag wartet auf dich.":"Your first entry is waiting for you.",
    "Eintrag erstellen":"Create entry",
    "Dein nächster Schritt":"Your next step",
    "Alle Quests →":"All quests →",
    "WISSEN & PFLEGE":"KNOWLEDGE & CARE",
    "Lerne etwas Neues":"Learn something new",
    "Kurse zu Akkusicherheit, Reinigung und Gerätekunde.":"Courses on battery safety, cleaning and device knowledge.",
    "Kurse entdecken →":"Explore courses →",
    "DEINE AUFZEICHNUNGEN":"YOUR RECORDS",
    "Deine Sessions und Eindrücke im verschlüsselten Cloud-Spielstand.":"Your sessions and impressions in your encrypted cloud save.",
    "Deine Sessions und Eindrücke, lokal auf diesem Gerät gespeichert.":"Your sessions and impressions, stored locally on this device.",
    "Suche in Einträgen …":"Search entries …",
    "Vaporizer":"Vaporizer",
    "E-Zigarette":"E-cigarette",
    "Tabakerhitzer":"Tobacco heater",
    "Keine Sorte angegeben":"No strain specified",
    "Session":"Session",
    "Speicher fast voll. Exportiere ein Backup und verkleinere Fotos.":"Storage almost full. Export a backup and reduce photo sizes.",
    "Verschlüsselungsschlüssel fehlt":"Encryption key missing",
    "Cloud ist noch nicht eingerichtet. Folge der Anleitung in cloud-setup.md.":"Cloud is not set up yet. Follow the instructions in cloud-setup.md.",
    "Cloud ist noch nicht eingerichtet.":"Cloud is not set up yet.",
    "Bitte eine gültige E-Mail-Adresse eingeben.":"Please enter a valid email address.",
    "Das Kennwort muss mindestens 8 Zeichen haben.":"The password must be at least 8 characters long.",
    "Einen Moment …":"One moment …",
    "Anmelden":"Sign in",
    "Cloud gespeichert":"Cloud saved",
    "Änderungen werden gespeichert …":"Saving changes …",
    "Cloud-Speicherung fehlgeschlagen":"Cloud save failed",
    "Nur auf diesem Gerät":"On this device only",
    "Erfolgreich angemeldet":"Signed in successfully",
    "Konto erstellt":"Account created",
    "Lokal gespeichert":"Saved locally",
    "Lokaler Spielstand aktiviert":"Local save activated"
  };
  const reverse = Object.fromEntries(Object.entries(translations).map(([de,en])=>[en,de]));
  let language = localStorage.getItem("mva_language") || "de";
  const map = () => language === "en" ? translations : reverse;
  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const original = node.nodeValue;
      const trimmed = original.trim();
      const translated = map()[trimmed];
      if (translated) node.nodeValue = original.replace(trimmed, translated);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (const attr of ["placeholder","title","aria-label"]) {
        const value = node.getAttribute(attr);
        if (value && map()[value]) node.setAttribute(attr, map()[value]);
      }
      node.childNodes.forEach(translateNode);
    }
  }
  function apply() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n-switch]").forEach(el => {
      el.textContent = language === "de" ? "🇬🇧 English" : "🇩🇪 Deutsch";
      el.setAttribute("aria-label", language === "de" ? "Switch to English" : "Zu Deutsch wechseln");
    });
    translateNode(document.body);
  }
  function addSwitch() {
    const right = document.querySelector(".topright");
    if (!right || document.querySelector("[data-i18n-switch]")) return;
    const button = document.createElement("button");
    button.className = "language-switch";
    button.type = "button";
    button.setAttribute("data-i18n-switch","");
    button.addEventListener("click", () => {
      language = language === "de" ? "en" : "de";
      localStorage.setItem("mva_language", language);
      apply();
    });
    right.insertBefore(button, right.firstChild);
    apply();
  }
  const observer = new MutationObserver(() => {
    addSwitch();
    if (language === "en") translateNode(document.body);
  });
  document.addEventListener("DOMContentLoaded", () => {
    addSwitch();
    apply();
    observer.observe(document.body,{childList:true,subtree:true});
  });
  window.MVA_I18N = {getLanguage:()=>language, setLanguage(value){language=value==="en"?"en":"de";localStorage.setItem("mva_language",language);apply();}};
})();