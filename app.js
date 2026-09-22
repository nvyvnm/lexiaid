/* ===========================================================
   LexiAid — front-end logic
   1. Kazakh-first translation system (kk / ru / en)
   2. Live "LexiAid Mode" demo: font, colour overlay, size,
      syllable breaking, and read-aloud via the Web Speech API
=========================================================== */

const translations = {
  kk: {
    "nav.lexi": "Lexi туралы",
    "nav.demo": "Сынап көру",
    "nav.journey": "Жол",
    "nav.objects": "Заттар",
    "nav.family": "Отбасына",

    "hero.kicker": "Ғылыми жоба · AI оқу серігі",
    "hero.title": "Әріптер билейтін бетте — соңында сен жеңесің.",
    "hero.lede": "LexiAid — дислексиясы бар балалар мен ересектерге оқуды жеңілдететін жасанды интеллект негізіндегі серік. Қазақ тілінде туған, орысша және ағылшынша сөйлейді.",
    "hero.cta_primary": "LexiAid режимін көру",
    "hero.cta_secondary": "Lexi кім өзі?",
    "hero.stat1": "тіл: ҚАЗ · РУС · ENG",
    "hero.stat2": "Lexi режимдері",
    "hero.stat3": "Қазақстандағы дислексия платформасы",
    "hero.badge1": "дауыс арқылы оқиды",
    "hero.badge2": "буынға бөліп көрсетеді",

    "lexi.title": "Бір көмекші, көп кейіпкер: Lexi",
    "lexi.lede": "Lexi — LexiAid-тің жүрегі. Ол сайтта да, қосымшада да, құлағыңда да — бәрінде де сол Lexi, сол мінез. Төменде оның кейбір «рөлдерін» көре аласың.",
    "lexi.mode1.name": "Lexi Talks",
    "lexi.mode1.desc": "Сұрағыңды дауыстап қой, жауапты да дауыстан ести аласың — теру керек емес.",
    "lexi.mode2.name": "Lexi Reads",
    "lexi.mode2.desc": "Кез келген мәтінді дауыстап оқып, әр сөзді өткен сайын түстеп көрсетеді.",
    "lexi.mode3.name": "Lexi Listens",
    "lexi.mode3.desc": "Сен дауыстап оқығанда тыңдайды, қай жерде қиналғаныңды байқап, жайлап түзетеді.",
    "lexi.mode4.name": "Lexi Explains",
    "lexi.mode4.desc": "Түсініксіз мәтінді қарапайым тілге аударып береді — оқулық та, жаңалық та.",
    "lexi.mode5.name": "Lexi Cheers",
    "lexi.mode5.desc": "Жеңісіңді тойлайды, қиын күнде қолдайды — қашан итермелеп, қашан үнсіз тұру керегін біледі.",
    "lexi.mode6.name": "Lexi Knows You",
    "lexi.mode6.desc": "Қай жерде қиналатыныңды, не ұнататыныңды есінде сақтап, өзіңе арнап жол құрады.",

    "demo.title": "LexiAid режимі — қазір байқап көр",
    "demo.lede": "Кез келген мәтінді осы жерге қой немесе өз мысалымызды қолдан. Қаріпті, түсті, буынды және дауысты өзгертіп, дислексия бар адам қалай оқитынын сезін.",
    "demo.ctl_font": "Қаріп",
    "demo.font_standard": "Әдеттегі",
    "demo.font_friendly": "Дислексияға ыңғайлы",
    "demo.ctl_overlay": "Түс қабаты",
    "demo.ctl_size": "Мәтін өлшемі",
    "demo.ctl_syllable": "Буынға бөлу",
    "demo.read_aloud": "Дауыстап оқу",
    "demo.sample_text": "Ертеде, алыс далада, жұлдыздарды санайтын бір бала болыпты. Ол әріптерді санағаннан гөрі жұлдыздарды санағанды жақсы көретін, себебі әріптер оның көзінде билеп тұратын. Бірақ бір күні оған көмектесетін дос тапты.",
    "demo.hint": "Мәтінді өзгертіп жаз — жоғарыдағы құралдар соған бірден әсер етеді.",

    "journey.title": "Нөлден Батырға дейінгі жол",
    "journey.lede": "Дислексия жоғалмайды — бірақ ұят пен қорқыныш жоғалуы мүмкін. Бұл LexiAid-тің басты сапары.",
    "journey.s1.name": "Нөл", "journey.s1.desc": "«Мен мұны оқи алмаймын. Оқудан қашамын.»",
    "journey.s2.name": "Ұшқын", "journey.s2.desc": "Алғашқы жеңіс, алғашқы серия — Lexi сені құттықтайды.",
    "journey.s3.name": "Құрылысшы", "journey.s3.desc": "Дыбыстар, буындар — күнделікті кішкентай қадамдар.",
    "journey.s4.name": "Оқырман", "journey.s4.desc": "Толық сөйлемдер, қысқа әңгімелер өз бетінше.",
    "journey.s5.name": "Батыр", "journey.s5.desc": "Не оқысаң да, қашан оқысаң да — қорқыныш жоқ.",

    "objects.title": "Қолыңа ұстайтын серпін",
    "objects.lede": "Әр белес — қолмен ұстайтын нақты зат. Экраннан тыс та сапар жалғасады.",
    "objects.o1.name": "Lexi Тасы",
    "objects.o1.desc": "Әр белеске бір тас, үстінде 1–3 сөз ойылған: «Сен қолыңнан келеді».",
    "objects.o2.name": "Lexi Картасы",
    "objects.o2.desc": "Күн сайын бір карта тартасың — бүгінгі сөзің қосымшада көңіл-күйіңді белгілейді.",
    "objects.o3.name": "Алғашқы Сөз Білезігі",
    "objects.o3.desc": "Сен алғаш рет дұрыс оқыған сөзің ойылған жеке жүлде.",

    "family.title": "Ата-ана мен мұғалімге",
    "family.lede": "LexiAid отбасымен бірге жүреді. Апта сайынғы прогресс есебі, ортақ серия, мұғалімге арналған тапсырма тақтасы.",
    "family.p1": "Апта сайын электронды хатпен прогресс есебі",
    "family.p2": "Мектепте мұғалім тапсырма беріп, автоматты бақылайды",
    "family.p3": "Ерте байқау құралы — ата-ана рұқсатымен, дислексия белгілерін көрсетеді",
    "family.quote": "«Нөлдік сенімнен — батырлық сенімге дейін.»",
    "family.quote_sub": "— LexiAid философиясы",

    "footer.note": "Мектеп ғылыми жобасы ретінде жасалған — дислексиясы бар адамдарға көмектесу мақсатында."
  },

  ru: {
    "nav.lexi": "О Lexi",
    "nav.demo": "Попробовать",
    "nav.journey": "Путь",
    "nav.objects": "Предметы",
    "nav.family": "Семье",

    "hero.kicker": "Научный проект · AI-помощник для чтения",
    "hero.title": "На странице, где буквы танцуют, побеждаешь всё равно ты.",
    "hero.lede": "LexiAid — помощник на основе искусственного интеллекта, который делает чтение легче для детей и взрослых с дислексией. Рождён на казахском, говорит по-русски и по-английски.",
    "hero.cta_primary": "Посмотреть режим LexiAid",
    "hero.cta_secondary": "Кто такая Lexi?",
    "hero.stat1": "языка: ҚАЗ · РУС · ENG",
    "hero.stat2": "режимов Lexi",
    "hero.stat3": "первая такая платформа в Казахстане",
    "hero.badge1": "читает вслух",
    "hero.badge2": "показывает деление на слоги",

    "lexi.title": "Один помощник, много ролей: Lexi",
    "lexi.lede": "Lexi — сердце LexiAid. Она одна и та же на сайте, в приложении и в наушниках. Ниже — некоторые её «роли».",
    "lexi.mode1.name": "Lexi Talks",
    "lexi.mode1.desc": "Задай вопрос голосом и получи ответ голосом — печатать не нужно.",
    "lexi.mode2.name": "Lexi Reads",
    "lexi.mode2.desc": "Читает любой текст вслух и подсвечивает каждое слово по ходу чтения.",
    "lexi.mode3.name": "Lexi Listens",
    "lexi.mode3.desc": "Слушает, как ты читаешь вслух, замечает, где ты запинаешься, и мягко поправляет.",
    "lexi.mode4.name": "Lexi Explains",
    "lexi.mode4.desc": "Превращает непонятный текст в простой язык — будь то учебник или новость.",
    "lexi.mode5.name": "Lexi Cheers",
    "lexi.mode5.desc": "Празднует твои победы и поддерживает в трудный день — знает, когда подтолкнуть, а когда просто быть рядом.",
    "lexi.mode6.name": "Lexi Knows You",
    "lexi.mode6.desc": "Запоминает, что даётся тебе тяжело, а что нравится, и строит маршрут именно для тебя.",

    "demo.title": "Режим LexiAid — попробуй прямо сейчас",
    "demo.lede": "Вставь любой текст или используй наш пример. Меняй шрифт, цвет, слоги и голос — и почувствуй, как читает человек с дислексией.",
    "demo.ctl_font": "Шрифт",
    "demo.font_standard": "Обычный",
    "demo.font_friendly": "Удобный при дислексии",
    "demo.ctl_overlay": "Цветной фильтр",
    "demo.ctl_size": "Размер текста",
    "demo.ctl_syllable": "Деление на слоги",
    "demo.read_aloud": "Прочитать вслух",
    "demo.sample_text": "Давным-давно, в далёкой степи, жил мальчик, который считал звёзды. Буквы в его глазах словно танцевали, и звёзды считать ему нравилось куда больше. Но однажды он нашёл друга, который помог ему.",
    "demo.hint": "Измени текст — все инструменты выше сразу применятся к нему.",

    "journey.title": "Путь от Нуля до Героя",
    "journey.lede": "Дислексия не исчезает — но стыд и страх могут исчезнуть. Это главный сюжет LexiAid.",
    "journey.s1.name": "Ноль", "journey.s1.desc": "«Я не могу это прочитать. Я избегаю чтения.»",
    "journey.s2.name": "Искра", "journey.s2.desc": "Первая победа, первая серия — Lexi поздравляет тебя.",
    "journey.s3.name": "Строитель", "journey.s3.desc": "Звуки, слоги — маленькие шаги каждый день.",
    "journey.s4.name": "Читатель", "journey.s4.desc": "Целые предложения, короткие истории самостоятельно.",
    "journey.s5.name": "Герой", "journey.s5.desc": "Читаешь что хочешь и когда хочешь — без страха.",

    "objects.title": "Импульс, который можно держать в руках",
    "objects.lede": "Каждый рубеж — это настоящий предмет. Путь продолжается и вне экрана.",
    "objects.o1.name": "Камень Lexi",
    "objects.o1.desc": "Один камень на каждый рубеж, с гравировкой из 1–3 слов: «У тебя получится».",
    "objects.o2.name": "Карта Lexi",
    "objects.o2.desc": "Каждый день — новая карта; сегодняшнее слово отмечает настроение в приложении.",
    "objects.o3.name": "Браслет первого слова",
    "objects.o3.desc": "Личный трофей с гравировкой первого слова, которое ты прочитал правильно.",

    "family.title": "Родителям и учителям",
    "family.lede": "LexiAid идёт рядом со всей семьёй: еженедельные отчёты о прогрессе, общая серия успехов, панель заданий для учителя.",
    "family.p1": "Еженедельный отчёт о прогрессе по электронной почте",
    "family.p2": "Учитель выдаёт задания в школе и видит прогресс автоматически",
    "family.p3": "Инструмент раннего выявления — с согласия родителей — показывает признаки дислексии",
    "family.quote": "«От нулевой уверенности — до уверенности героя.»",
    "family.quote_sub": "— философия LexiAid",

    "footer.note": "Создано как школьный научный проект — с целью помочь людям с дислексией."
  },

  en: {
    "nav.lexi": "Meet Lexi",
    "nav.demo": "Try it",
    "nav.journey": "The path",
    "nav.objects": "Objects",
    "nav.family": "For families",

    "hero.kicker": "Science project · AI reading companion",
    "hero.title": "On a page where the letters won't sit still, you still win.",
    "hero.lede": "LexiAid is an AI-powered companion that makes reading easier for children and adults with dyslexia. Born in Kazakh, and fluent in Russian and English too.",
    "hero.cta_primary": "See LexiAid Mode",
    "hero.cta_secondary": "Who is Lexi?",
    "hero.stat1": "languages: KK · RU · EN",
    "hero.stat2": "Lexi modes",
    "hero.stat3": "first platform of its kind in Kazakhstan",
    "hero.badge1": "reads out loud",
    "hero.badge2": "shows syllable breaks",

    "lexi.title": "One helper, many hats: Lexi",
    "lexi.lede": "Lexi is the heart of LexiAid — the same character on the site, in the app, and in your ear. Here are a few of her roles.",
    "lexi.mode1.name": "Lexi Talks",
    "lexi.mode1.desc": "Ask a question out loud and hear the answer spoken back — no typing needed.",
    "lexi.mode2.name": "Lexi Reads",
    "lexi.mode2.desc": "Reads any text aloud and highlights each word as it goes.",
    "lexi.mode3.name": "Lexi Listens",
    "lexi.mode3.desc": "Listens while you read aloud, notices where you stumble, and gently corrects.",
    "lexi.mode4.name": "Lexi Explains",
    "lexi.mode4.desc": "Turns a confusing passage into plain language — textbook or news article alike.",
    "lexi.mode5.name": "Lexi Cheers",
    "lexi.mode5.desc": "Celebrates your wins and steadies your hard days — knowing when to push and when to just be there.",
    "lexi.mode6.name": "Lexi Knows You",
    "lexi.mode6.desc": "Remembers your struggles and your favourites, and builds a path just for you.",

    "demo.title": "LexiAid Mode — try it right now",
    "demo.lede": "Drop in any text, or use our sample. Change the font, colour, syllables, and voice to feel how someone with dyslexia reads.",
    "demo.ctl_font": "Font",
    "demo.font_standard": "Standard",
    "demo.font_friendly": "Dyslexia-friendly",
    "demo.ctl_overlay": "Colour overlay",
    "demo.ctl_size": "Text size",
    "demo.ctl_syllable": "Break into syllables",
    "demo.read_aloud": "Read aloud",
    "demo.sample_text": "Long ago, out on the steppe, there lived a boy who counted stars. He liked counting stars far more than letters, because the letters always seemed to dance in front of his eyes. But one day he found a friend who could help.",
    "demo.hint": "Edit the text — every tool above applies to it instantly.",

    "journey.title": "The Zero-to-Hero journey",
    "journey.lede": "Dyslexia doesn't disappear — but the shame and fear can. That's the real story LexiAid is telling.",
    "journey.s1.name": "Zero", "journey.s1.desc": "\"I can't read this. I avoid reading.\"",
    "journey.s2.name": "Spark", "journey.s2.desc": "A first win, a first streak — Lexi welcomes you in.",
    "journey.s3.name": "Builder", "journey.s3.desc": "Sounds and syllables — small daily reps.",
    "journey.s4.name": "Reader", "journey.s4.desc": "Full sentences, short stories, on your own.",
    "journey.s5.name": "Hero", "journey.s5.desc": "You read what you want, when you want — no fear.",

    "objects.title": "Something to hold onto",
    "objects.lede": "Every milestone becomes a real object you can hold — the journey keeps going off-screen too.",
    "objects.o1.name": "Lexi Stone",
    "objects.o1.desc": "One stone per milestone, engraved with 1–3 words: \"You can.\"",
    "objects.o2.name": "Lexi Card",
    "objects.o2.desc": "Draw a new card each day — today's word logs your mood in the app.",
    "objects.o3.name": "First-Word Bracelet",
    "objects.o3.desc": "A personal trophy engraved with the first word you ever read correctly.",

    "family.title": "For parents and teachers",
    "family.lede": "LexiAid travels with the whole family: weekly progress reports, shared streaks, and a task board for teachers.",
    "family.p1": "Weekly progress reports by email",
    "family.p2": "Teachers assign work at school and see progress automatically",
    "family.p3": "An early-screening tool — with parental consent — flags possible dyslexia signs",
    "family.quote": "\"From zero confidence to hero confidence.\"",
    "family.quote_sub": "— the LexiAid philosophy",

    "footer.note": "Built as a school science project — to help people who live with dyslexia."
  }
};

const speechLocales = { kk: "kk-KZ", ru: "ru-RU", en: "en-US" };
let currentLang = "kk";

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (!value) return;
    if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") {
      // Only seed the sample text if the user hasn't started typing their own.
      if (!el.dataset.userEdited) el.value = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

const demoText = document.getElementById("demo-text");
demoText.addEventListener("input", () => { demoText.dataset.userEdited = "true"; });

/* ---- font toggle ---- */
document.querySelectorAll(".seg-btn[data-font]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".seg-btn[data-font]").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    demoText.classList.toggle("friendly-font", btn.getAttribute("data-font") === "friendly");
  });
});

/* ---- colour overlay ---- */
const overlayHue = document.getElementById("overlay-hue");
const demoStage = document.querySelector(".demo-stage");
overlayHue.addEventListener("input", () => {
  const hue = overlayHue.value;
  demoStage.style.setProperty("--overlay-hue", hue);
  demoStage.style.setProperty("--overlay-alpha", hue == 0 ? 0 : 0.35);
});

/* ---- font size ---- */
const fontSize = document.getElementById("font-size");
fontSize.addEventListener("input", () => {
  demoText.style.fontSize = fontSize.value + "px";
});

/* ---- syllable breaking (lightweight heuristic for Cyrillic + Latin vowels) ---- */
const VOWELS = "aeiouyаәеёиійоөұүыэюяAEIOUYАӘЕЁИІЙОӨҰҮЫЭЮЯ";
function splitSyllables(word){
  let syl = "";
  const parts = [];
  for (let i = 0; i < word.length; i++){
    syl += word[i];
    const isVowel = VOWELS.includes(word[i]);
    const nextIsConsonantThenVowel = i + 2 < word.length && !VOWELS.includes(word[i+1]) && VOWELS.includes(word[i+2]);
    if (isVowel && (nextIsConsonantThenVowel || (i + 1 < word.length && VOWELS.includes(word[i+1]) === false && i + 1 === word.length - 1) )){
      parts.push(syl);
      syl = "";
    }
  }
  parts.push(syl);
  return parts.filter(Boolean).join("\u00B7");
}

const syllableToggle = document.getElementById("syllable-toggle");
let plainValue = null;

syllableToggle.addEventListener("change", () => {
  if (syllableToggle.checked){
    plainValue = demoText.value;
    demoText.value = plainValue
      .split(/(\s+)/)
      .map(chunk => /\s+/.test(chunk) ? chunk : splitSyllables(chunk))
      .join("");
  } else if (plainValue !== null) {
    demoText.value = plainValue;
  }
});

/* ---- read aloud ---- */
const readBtn = document.getElementById("read-aloud");
readBtn.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    alert("Бұл браузер дауыстап оқуды қолдамайды. / This browser doesn't support text-to-speech.");
    return;
  }
  const text = (plainValue || demoText.value).replace(/\u00B7/g, "");
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = speechLocales[currentLang];
  utter.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
});

applyLanguage("kk");
