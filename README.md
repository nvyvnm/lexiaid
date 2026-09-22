# LexiAid

An AI-powered reading companion for people with dyslexia — built as the practical/demo component of a school science research project. Kazakh-first, with full Russian and English support.

## What's in here

- `index.html` — the whole site: hero, "Meet Lexi" AI-assistant showcase, the Zero-to-Hero journey, the physical objects (Lexi Stones/Cards/Bracelet), and a parent/teacher section.
- `styles.css` — all styling. Colour palette and type choices are explained in the comment at the top of the file.
- `app.js` — the Kazakh/Russian/English translation system, plus the working live demo (font switch, colour overlay, text size, syllable breaking, and read-aloud using the browser's built-in text-to-speech).
- No build step, no dependencies. It's plain HTML/CSS/JS, so it runs anywhere.

## Try it locally

Just double-click `index.html`, or from a terminal:

```
cd lexiaid
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish it on GitHub Pages (free hosting)

1. Create a new repository on GitHub (e.g. `lexiaid`).
2. Upload these three files (`index.html`, `styles.css`, `app.js`) plus this `README.md` to the repository — either by dragging them into the GitHub web uploader, or with git:
   ```
   git init
   git add .
   git commit -m "LexiAid site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/lexiaid.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the `main` branch and the `/ (root)` folder, then click **Save**.
5. GitHub gives you a live link after a minute or two, usually:
   `https://<your-username>.github.io/lexiaid/`

That link works on a phone too — nothing needs to be installed, and it's the real, live site to show the jury.

## Notes on the read-aloud demo

The "Read aloud" button uses the browser's own text-to-speech engine (Web Speech API), so it needs no server and no API key. Kazakh (`kk-KZ`) voice support varies by device — Chrome on Android/desktop tends to have the best coverage. If a device has no Kazakh voice installed, the browser will usually fall back to its default voice; this is a genuine current limitation of browser TTS, not a bug in the site, and it's worth mentioning to the jury as exactly the kind of gap a dedicated Kazakh voice model (one of the ideas in the project's research write-up) would solve.

## What this demo intentionally does — and doesn't — cover

The research paper describes a large long-term product vision (a browser extension, a full gamified world, community features, hardware like a reading pen, AI screening tools, and so on). This site is the tangible proof-of-concept: it demonstrates the core interaction (an AI reading companion, the Kazakh-first approach, and the actual dyslexia-friendly reading tools — font, colour, syllables, voice) in a working, clickable form, and presents the rest of the vision as the "what's next" the research points toward. That framing — working demo + articulated roadmap — is usually stronger in front of a jury than trying to half-build everything.
