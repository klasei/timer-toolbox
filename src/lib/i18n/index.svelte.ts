/**
 * Every word the teacher or the class reads, in each language on offer.
 *
 * English is the source: its keys are the type every other language must
 * fill, so a missing translation is a type error rather than a blank button.
 * Lithuanian is the default (the page is prerendered in it); the choice is
 * remembered on this computer, like the rest of the settings.
 */

const isBrowser = typeof window !== "undefined";
import type { ColorId, ChimeId, EndSoundId } from "#lib/types.ts";

export type LanguageCode = "lt" | "en";

const en = {
  "brand.name": "Timer Toolbox",
  "brand.tagline": "Free classroom timers for the projector.",
  "brand.description":
    "Free classroom timers for the projector. The pie timer splits time into labelled parts students can see.",
  "brand.builtBy": "Built by teacher.dev",

  "language.change": "Change language",
  "language.lt": "Lietuvių",
  "language.en": "English",

  "nav.pie": "The pie timer",
  "nav.newTimer": "New timer",
  "nav.settings": "Settings",
  "nav.about": "About",
  "nav.help": "Help",
  "nav.privacy": "Privacy",

  "common.close": "Close modal",
  "common.cancel": "Cancel",
  "common.undo": "Undo",
  "common.back": "Back",
  "toast.deleted": "{name} deleted",

  "help.title": "Help",
  "help.intro":
    "{brand} has one tool so far, the pie timer: a circle that shrinks as time goes, each part in its own colour. Here's how to use it.",
  "help.addSegments": "Add segments",
  "help.addSegmentsBody":
    "Add as many as the task needs — a warm-up, three rounds of reading, a clean-up. Each gets a length, a colour, and an optional label.",
  "help.advance": "Start and advance",
  "help.advanceBody":
    "Start runs the segments one after another. When a segment ends you can let the next begin or wait for the class to be ready; tap the pie to jump ahead.",
  "help.visible": "Keep it visible",
  "help.visibleBody":
    "Use pop-out to float the timer above slides or a document, or add the app to your home screen.",

  "picker.title": "Choose a timer",
  "picker.saved": "Saved timers",
  "picker.summaryOne": "1 part · {time}",
  "picker.summary": "{n} parts · {time}",
  "picker.none": "No saved timers (create one)",

  "editor.editing": "Editing {name}",
  "editor.new": "New timer",
  "editor.name": "Timer name",
  "editor.untitled": "Untitled",
  "editor.save": "Save",
  "editor.create": "Create",
  "editor.done": "Done",
  "editor.deleteTimer": "Delete timer",
  "editor.summary": "{n} of {max} · {time} in all.",
  "editor.running":
    "This timer is running: changing a length or the order starts it over.",
  "editor.length": "Segment {n} length",
  "editor.minutesAria": "Segment {n} minutes",
  "editor.minLess": "One minute less",
  "editor.minMore": "One minute more",
  "editor.minute": "min",
  "editor.idea":
    "Have an idea for another kind of timer, or a new look for this one?",
  "editor.ideaCta": "Email us your suggestion",
  "editor.segments": "Segments",
  "editor.moveUp": "Move segment {n} up",
  "editor.moveDown": "Move segment {n} down",
  "editor.removeSegment": "Delete segment {n}",
  "editor.color": "Segment {n} color",
  "editor.emoji": "Segment {n} emoji",
  "editor.label": "Segment {n} label",
  "editor.add": "Add segment",

  "behaviour.chime": "Chime",
  "behaviour.chimeBody": "Plays when a segment ends.",
  "behaviour.endSound": "End sound",
  "behaviour.endSoundBody": "Plays when the last segment ends.",
  "behaviour.overtime": "After zero",
  "behaviour.overtimeBody":
    "Count up shows how far over the time has gone. Stop at zero freezes it there.",
  "behaviour.advance": "Next segment starts",
  "behaviour.advanceBody":
    "Or the timer waits at zero until you tap to start the next one.",
  "behaviour.auto": "Automatically",
  "behaviour.tap": "When I tap",
  "behaviour.countUp": "Count up",
  "behaviour.stopZero": "Stop at zero",

  "colors.blue": "Blue",
  "colors.green": "Green",
  "colors.orange": "Orange",
  "colors.purple": "Purple",
  "colors.yellow": "Yellow",
  "colors.teal": "Teal",
  "colors.pink": "Pink",
  "colors.red": "Red",

  "chime.chime": "Chime",
  "chime.bell": "Bell",
  "chime.marimba": "Marimba",
  "chime.none": "None",
  "endSound.harp": "Harp",
  "endSound.gong": "Gong",
  "endSound.bells": "Bells",
  "endSound.none": "None",

  "sample.name": "Small group",
  "sample.warmup": "Warm-up",
  "sample.read": "Read",
  "sample.practice": "Practice",
  "sample.cleanup": "Clean up",

  "timer.navLabel": "Timer",
  "timer.pieSuffix": "pie timer",
  "timer.fallback": "Timer",
  "timer.lower": "timer",
  "timer.numbered": "Timer {n}",
  "timer.copy": "{name} copy",
  "timer.part": "Part {n}",
  "timer.untitled": "Untitled timer",
  "timer.open": "Open",
  "timer.edit": "Edit",
  "timer.editTimerTitle": "Edit timer",
  "timer.editAria": "Edit {name}",
  "timer.duplicate": "Duplicate",
  "timer.duplicateAria": "Duplicate {name}",
  "timer.delete": "Delete",
  "timer.deleteAria": "Delete {name}",
  "timer.last": "Your only timer can't be deleted",
  "timer.popout": "Pop out timer",
  "timer.popoutClose": "Close pop-out",
  "timer.popoutHint": "Pop out: keep the timer on top of other windows",

  "pie.ended": "Time's up!",
  "pie.over": "{time} over",
  "pie.left": "{time} left",
  "pie.next": "Next:",
  "pie.leftOf": "{time} left of {total}",
  "pie.restart": "Restart",
  "pie.start": "Start",
  "pie.pause": "Pause",
  "pie.resume": "Resume",
  "pie.skip": "Skip",
  "pie.finish": "Finish",
  "pie.addMinute": "+1 min",
  "pie.startNext": "Start next segment",
  "pie.sounds": "Tap to turn sounds back on",

  "settings.title": "Settings",
  "settings.back": "Back to timer",
  "settings.saved": "Saved timers",
  "settings.defaults": "New timer defaults",
  "settings.display": "Display",
  "settings.colors": "Colors",
  "settings.hcBody": "High contrast: bright yellow on black.",
  "settings.highContrast": "High contrast",
  "settings.standard": "Standard",
  "settings.tips": "Tips",
  "settings.tipChrome":
    "On a Chromebook or in Chrome, pin this tab (right-click the tab, then Pin) so Chrome doesn't put it to sleep while you're in another tab.",
  "settings.tipIpad":
    "On an iPad, keep {brand} on screen. iPads don't let a website play sounds from the background or with the screen locked.",
  "settings.backup": "Backup",
  "settings.backupTitle": "Move your timers",
  "settings.backupBody":
    "Timers are saved in this browser only. Download a backup to move them to another device.",
  "settings.download": "Download backup",
  "settings.restore": "Restore",
  "settings.restored": "Restored {count} timers.",
  "settings.restoredOne": "Restored 1 timer.",
  "settings.restoreBad": "That file isn't a {brand} backup.",
  "settings.readError": "That file couldn't be read.",

  "about.title": "About",
  "about.lede":
    "Free classroom timers for the projector, starting with a pie timer that splits time into labelled parts students can see.",
  "about.from": "From teacher.dev",
  "about.fromBody":
    "{brand} is a project from teacher.dev, a community of builders making free tools for classrooms. Learn more about who we are and what else we're building at teacher.dev.",
  "about.communityAlt": "The teacher.dev community in 2026",
  "about.promise": "Our promise",
  "about.paywall": "Zero paywalls.",
  "about.ads": "Zero ads.",
  "about.tracking": "Zero tracking of personal data.",
  "about.feedback": "Feedback & ideas",
  "about.feedbackBody":
    "We'd love to hear from you. Tell us what's working, what's not, or the kind of timer you wish you had for your class.",
  "about.email": "Email support@teacher.dev",

  "privacy.title": "Privacy",
  "privacy.lede": "What we collect, what we don't, and why.",
  "privacy.p1":
    "{brand} has no accounts and collects no personal information from teachers or students. It has no ads and sets no cookies.",
  "privacy.p2":
    "We use Cloudflare Web Analytics to see which pages visitors open. It uses no cookies and doesn't link people to what they view. See Cloudflare's privacy page for what their analytics does collect.",
  "privacy.p3":
    "Your timers and settings live in this browser's storage, on your device.",
  "privacy.p4":
    "Clearing this site's data from your browser's settings deletes your saved timers.",
  "privacy.questions": "Questions or concerns?",
};

type LangDict = typeof en;

const lt: LangDict = {
  "brand.name": "Laikmatis",
  "brand.tagline": "Nemokami laikmačiai mokyklai.",
  "brand.description":
    "Nemokami laikmačiai mokyklai. Laikmatis dalija laiką į pažymėtas dalis, kurias mokiniai mato.",
  "brand.builtBy": "Sukūrė teacher.dev",

  "language.change": "Keisti kalbą",
  "language.lt": "Lietuvių",
  "language.en": "English",

  "nav.pie": "Apvalus laikmatis",
  "nav.newTimer": "Naujas laikmatis",
  "nav.settings": "Nustatymai",
  "nav.about": "Apie",
  "nav.help": "Pagalba",
  "nav.privacy": "Privatumas",

  "common.close": "Uždaryti langą",
  "common.cancel": "Atšaukti",
  "common.undo": "Atšaukti",
  "common.back": "Atgal",
  "toast.deleted": "{name} ištrintas",

  "help.title": "Pagalba",
  "help.intro":
    "Kol kas {brand} turi vieną įrankį — apskritą laikmatį, kuris traukiasi bėgant laikui, kiekviena dalis savo spalva. Štai kaip juo naudotis.",
  "help.addSegments": "Dalyčių pridėjimas",
  "help.addSegmentsBody":
    "Pridėkite tiek, kiek reikia užduočiai — pamokos pradžia, trys skaitymo posėdžiai, susitvarkymas. Kiekviena dalis gauna ilgį, spalvą ir, jei norite, pavadinimą.",
  "help.advance": "Pradžia ir tolesnės dalys",
  "help.advanceBody":
    "Pradėjus, dalys eina viena po kitos. Kai dalis baigiasi, galite paleisti kitą arba palaukti, kol klasė pasirengs; palieskite pyragą, kad pereitumėte toliau.",
  "help.visible": "Laikmatis matomas",
  "help.visibleBody":
    "Atskiru langu laikmatis plaukioja virš skaidrių ar dokumento, arba pridėkite programėlę prie namo ekrano.",

  "picker.title": "Pasirinkite laikmačių",
  "picker.saved": "Išsaugoti laikmačiai",
  "picker.summaryOne": "1 dalis · {time}",
  "picker.summary": "{n} dalių · {time}",
  "picker.none": "Nėra išsaugotų laikmačių (sukurkite)",

  "editor.editing": "Redaguojamas: {name}",
  "editor.new": "Naujas laikmatis",
  "editor.name": "Laikmačio pavadinimas",
  "editor.untitled": "Be pavadinimo",
  "editor.save": "Išsaugoti",
  "editor.create": "Sukurti",
  "editor.done": "Baigti",
  "editor.deleteTimer": "Ištrinti laikmačių",
  "editor.summary": "{n} iš {max} · iš viso {time}.",
  "editor.running":
    "Laikmatis veikia: keičiant dalies ilgį ar tvarką jis prasideda iš naujo.",
  "editor.length": "Dalies {n} ilgis",
  "editor.minutesAria": "Dalies {n} minutės",
  "editor.minLess": "Viena minutė mažiau",
  "editor.minMore": "Viena minutė daugiau",
  "editor.minute": "min",
  "editor.idea": "Turite idėją kitokiam laikmačiui ar naujui šio vaizdui?",
  "editor.ideaCta": "Parašykite mums pasiūlymą",
  "editor.segments": "Dalys",
  "editor.moveUp": "Perkelti {n} dalį aukštyn",
  "editor.moveDown": "Perkelti {n} dalį žemyn",
  "editor.removeSegment": "Ištrinti {n} dalį",
  "editor.color": "Dalies {n} spalva",
  "editor.emoji": "Dalies {n} jaustukas",
  "editor.label": "Dalies {n} pavadinimas",
  "editor.add": "Pridėti dalį",

  "behaviour.chime": "Skambutis",
  "behaviour.chimeBody": "Skamba, kai dalis baigiasi.",
  "behaviour.endSound": "Baigimo garsas",
  "behaviour.endSoundBody": "Skamba, kai baigiasi paskutinė dalis.",
  "behaviour.overtime": "Po nulio",
  "behaviour.overtimeBody":
    "„Skaičiuoti toliau“ rodo, kiek viršyta. „Sustabdyti ties nuliu“ sustabdo laikmačio skaičiavimą ties nuliu.",
  "behaviour.advance": "Kada prasideda kita dalis",
  "behaviour.advanceBody":
    "Arba laikmatis laukia ties nuliu, kol paspausite, kad pradėtų kita dalis.",
  "behaviour.auto": "Automatiškai",
  "behaviour.tap": "Kai paspaudžiu",
  "behaviour.countUp": "Skaičiuoti toliau",
  "behaviour.stopZero": "Sustabdyti ties nuliu",

  "colors.blue": "Mėlyna",
  "colors.green": "Žalia",
  "colors.orange": "Oranžinė",
  "colors.purple": "Violetinė",
  "colors.yellow": "Geltona",
  "colors.teal": "Žalsvai mėlyna",
  "colors.pink": "Rožinė",
  "colors.red": "Raudona",

  "chime.chime": "Skambutis",
  "chime.bell": "Varpas",
  "chime.marimba": "Marimba",
  "chime.none": "Nėra",
  "endSound.harp": "Arfa",
  "endSound.gong": "Gongas",
  "endSound.bells": "Varpeliai",
  "endSound.none": "Nėra",

  "sample.name": "Klasė",
  "sample.warmup": "Pamokos pradžia",
  "sample.read": "Skaitymas",
  "sample.practice": "Pratybos",
  "sample.cleanup": "Susitvarkymas",

  "timer.navLabel": "Laikmatis",
  "timer.pieSuffix": "pikto laikmatis",
  "timer.fallback": "Laikmatis",
  "timer.lower": "laikmatis",
  "timer.numbered": "Laikmatis {n}",
  "timer.copy": "{name} (kopija)",
  "timer.part": "Dalis {n}",
  "timer.untitled": "Nepavadintas laikmatis",
  "timer.open": "Atidaryti",
  "timer.edit": "Redaguoti",
  "timer.editTimerTitle": "Redaguoti laikmačių",
  "timer.editAria": "Redaguoti {name}",
  "timer.duplicate": "Dublikuoti",
  "timer.duplicateAria": "Dublikuoti {name}",
  "timer.delete": "Ištrinti",
  "timer.deleteAria": "Ištrinti {name}",
  "timer.last": "Vienintelis laikmatis negali būti ištrintas",
  "timer.popout": "Laikmatis atskirame lange",
  "timer.popoutClose": "Uždaryti atskirą langą",
  "timer.popoutHint": "Atskiras langas: laikmatis virš kitų langų",

  "pie.ended": "Laikas baigtas!",
  "pie.over": "viršyta {time}",
  "pie.left": "liko {time}",
  "pie.next": "Toliau:",
  "pie.leftOf": "liko {time} iš {total}",
  "pie.restart": "Iš naujo",
  "pie.start": "Pradėti",
  "pie.pause": "Pauzė",
  "pie.resume": "Tęsti",
  "pie.skip": "Praleisti",
  "pie.finish": "Uždaryti",
  "pie.addMinute": "+1 min",
  "pie.startNext": "Pradėti kitą dalį",
  "pie.sounds": "Palieskite, kad garsas vėl veiktų",

  "settings.title": "Nustatymai",
  "settings.back": "Grįžti prie laikmačių",
  "settings.saved": "Išsaugoti laikmačiai",
  "settings.defaults": "Naujo laikmačio numatytosios",
  "settings.display": "Rodinys",
  "settings.colors": "Spalvos",
  "settings.hcBody": "Didelis kontrastas: ryškiai geltona ant juodos.",
  "settings.highContrast": "Didelis kontrastas",
  "settings.standard": "Standartinė",
  "settings.tips": "Patarimai",
  "settings.tipChrome":
    "Chromebook įrenginyje arba Chrome naršyklėje užfiksuokite šią kortelę (dešinysis pelės mygtukas ant kortelės, tada „Užfiksuoti“), kad Chrome ją neįmigtų, kol esate kitoje kortelėje.",
  "settings.tipIpad":
    "iPad išlaikykite {brand} ekrane. iPad neleidžia svetainei groti garso fone ar užrakintu ekranu.",
  "settings.backup": "Atsarginė kopija",
  "settings.backupTitle": "Perkelti laikmačius",
  "settings.backupBody":
    "Laikmačiai išsaugomi tik šiame naršyklėje. Atsisiųskite atsarginę kopiją, kad perkeltumėte juos į kitą įrenginį.",
  "settings.download": "Atsisiųsti atsarginę kopiją",
  "settings.restore": "Atkurti",
  "settings.restored": "Atkurta {count} laikmačių.",
  "settings.restoredOne": "Atkurtas 1 laikmatis.",
  "settings.restoreBad": "Tai nėra {brand} atsarginė kopija.",
  "settings.readError": "To failo perskaityti nepavyko.",

  "about.title": "Apie",
  "about.lede":
    "Nemokami laikmačiai mokyklai, pradedant nuo pikto laikmačio, kuris dalija laiką į pažymėtas dalis, kurias mokiniai mato.",
  "about.from": "Iš teacher.dev",
  "about.fromBody":
    "{brand} — projektas, paremtas Timer Toolbox iš teacher.dev, bendruomenės, kuri kuria nemokamus įrankius klasėms. Daugiau apie mus ir kitus projektus — teacher.dev svetainėje.",
  "about.communityAlt": "teacher.dev bendruomenė 2026 m.",
  "about.promise": "Mūsų pažadas",
  "about.paywall": "Nėra mokamų funkcijų.",
  "about.ads": "Nėra reklamų.",
  "about.tracking": "Nėra asmens duomenų stebėjimo.",
  "about.feedback": "Atsiliepimai ir idėjos",
  "about.feedbackBody":
    "Mums malonu jus girdėti. Pasakykite, kas veikia, kas ne, arba koks laikmatis jums reikalingas klasėje.",
  "about.email": "Rašykite support@teacher.dev",

  "privacy.title": "Privatumas",
  "privacy.lede": "Ką renkamės, ko nerenkame ir kodėl.",
  "privacy.p1":
    "{brand} neturi paskyrų ir nerenka jokios asmeninės informacijos nuo mokytojų ar mokinių. Reklamų nėra, slapukai nėra nustatomi.",
  "privacy.p2":
    "Naudojame „Cloudflare Web Analytics“, kad matytume, kokias puslapius atidaro lankytojai. Ji slapukų nenaudoja ir nereiškia lankytojų su jų peržiūrimu turiniu. Sužinokite, ką renkasi „Cloudflare“ analizė, jų privatumo puslapyje.",
  "privacy.p3":
    "Jūsų laikmačiai ir nustatymai išsaugomi šios naršyklės atmintyje, jūsų įrenginyje.",
  "privacy.p4":
    "Išvalę šios svetainės duomenis naršyklės nustatymuose, ištrinsite išsaugotus laikmačius.",
  "privacy.questions": "Klausimai ar pastabos?",
};

const dicts: Record<LanguageCode, LangDict> = { en, lt };

const STORAGE_KEY = "laikmatis.language";

function initialLanguage(): LanguageCode {
  if (isBrowser) {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "lt") return stored;
    } catch {
      // Private browsing may refuse storage; the default still applies.
    }
  }
  return "lt";
}

let code = $state<LanguageCode>(initialLanguage());

/** The active language as a bindable { code } object (Svelte 5 runes). */
export const language = {
  get code() {
    return code;
  },
  set code(value: LanguageCode) {
    setLanguage(value);
  },
};

export const languageOptions = [
  { code: "lt", name: "Lietuvių" },
  { code: "en", name: "English" },
] as const;

/** Switch language, remember the choice, and update <html lang>. */
export function setLanguage(next: LanguageCode): void {
  if (next === code) return;
  code = next;
  if (isBrowser) {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not remembered; the choice still applies for this visit.
    }
    if (typeof document !== "undefined") document.documentElement.lang = next;
  }
}

function fill(
  text: string,
  values: Record<string, string | number>,
): string {
  return text.replace(/\{(\w+)\}/g, (match, name) =>
    values[name] === undefined ? match : String(values[name]),
  );
}

/** Translate a key for the current language, filling in {params}. */
export function t(
  key: keyof LangDict,
  values: Record<string, string | number> = {},
): string {
  return fill(dicts[code][key] ?? en[key], values);
}

/** The app's own name, in the active language. */
export function brandName(): string {
  return t("brand.name");
}

/** Human name of a segment color, in the active language. */
export function colorLabel(color: ColorId): string {
  return t(`colors.${color}` as keyof LangDict);
}

/** Human name of a segment chime, in the active language. */
export function chimeLabel(id: ChimeId): string {
  return t(`chime.${id}` as keyof LangDict);
}

/** Human name of an end sound, in the active language. */
export function endSoundLabel(id: EndSoundId): string {
  return t(`endSound.${id}` as keyof LangDict);
}
