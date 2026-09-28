# Arik Andersson Portfolio — Astro + Sanity CMS + Netlify Forms

Wierna, produkcyjna implementacja szablonu portfolio w technologii **Astro** zintegrowana z **Sanity CMS** (dynamiczne generowanie stron detail dla projektów i wpisów na blogu) oraz **Netlify Forms** (formularz kontaktowy).

Projekt działa w 100% **Local-First** — wszystkie fonty (`Gambetta`, `Satoshi`, `Chillax`, `Inter`), 15 zdjęć i 13 wektorów SVG znajdują się lokalnie w projekcie, bez zewnętrznych zależności i bez ryzyka zablokowania przez CDN.

---

## 🚀 Jak to działa?

1. **Astro SSG (Static Site Generation)**:
   - Wszystkie podstrony (`/`, `/work`, `/work/[slug]`, `/blog`, `/blog/[slug]`) są kompilowane do czystego, ultra-szybkiego HTML/CSS/JS.
   - Czas budowania strony wynosi **poniżej 1 sekundy** (859 ms).

2. **Automatyczne Detail Pages z Sanity CMS**:
   - Gdy dodasz nowy projekt lub artykuł w Sanity, Astro podczas budowy (`npm run build`) automatycznie tworzy dla niego dedykowany adres URL, np. `/work/moj-nowy-projekt` lub `/blog/jak-zaprojektowac-strone`.
   - Jeśli Sanity nie jest jeszcze podpięte, strona korzysta z wbudowanych danych fallback (4 case study projektów i 6 pełnych artykułów na blogu).

3. **Netlify Forms**:
   - Formularz kontaktowy w sekcji CTA posiada tagi `data-netlify="true"`, ukryte pole honeypot chroniące przed spamem botów oraz płynną obsługę AJAX z informacją o wysłaniu wiadomości.

---

## 🛠️ Uruchomienie lokalne

```bash
# 1. Przejdź do folderu projektu
cd arik-astro

# 2. Uruchom serwer developerski
npm run dev

# 3. Zbuduj wersję produkcyjną
npm run build

# 4. Podejrzyj zbudowaną wersję produkcyjną
npm run preview
```

---

## 📋 Podłączenie Sanity CMS (Krok po kroku)

### Krok 1: Załóż darmowe konto na Sanity
1. Wejdź na [sanity.io](https://www.sanity.io/) i zaloguj się (np. przez GitHub / Google).
2. Utwórz nowy projekt (Project Name: np. `Arik Portfolio`).
3. W panelu projektu skopiuj swój **Project ID** oraz nazwę datasetu (domyślnie `production`).

### Krok 2: Wpisz zmienne środowiskowe w projekcie
Stwórz plik `.env` w głównym folderze `arik-astro`:
```env
SANITY_PROJECT_ID=twoj_project_id_tutaj
SANITY_DATASET=production
```

Wklej ten sam Project ID w `sanity/sanity.config.js`:
```js
projectId: 'twoj_project_id_tutaj'
```

### Krok 3: Uruchomienie Sanity Studio (panelu edycyjnego)
W folderze `sanity/` znajduje się gotowa konfiguracja schematów:
- `project.js` — projekty z polami: Tytuł, automatyczny slug, kategoria, rok, klient, rola, czas trwania, zdjęcie główne, zajawka, cele, wyzwanie, rozwiązanie, rezultaty i galeria zdjęć.
- `post.js` — artykuły blogowe z polami: Tytuł, slug, data publikacji, kategoria, zdjęcie okładkowe, czas czytania, treść artykułu.
- `testimonial.js` — opinie klientów.
- `processStep.js` — kroki procesu na osi czasu.

Możesz uruchomić Sanity Studio lokalnie:
```bash
cd sanity
npm install
npm run dev
```
Panel edycyjny uruchomi się pod adresem `http://localhost:3333`.

---

## ⚡ Automatyzacja: Jak dodanie wpisu w Sanity tworzy stronę na Netlify?

Aby nowe projekty i wpisy pojawiały się na stronie na żywo od razu po kliknięciu "Publish" w Sanity, ustawiamy prosty **Build Hook** w Netlify:

1. **W Netlify**:
   - Przejdź do: `Site configuration` → `Build & deploy` → `Build hooks`.
   - Kliknij **Add build hook**, nazwij go np. `Sanity Content Update` i skopiuj wygenerowany URL (np. `https://api.netlify.com/build_hooks/xxxxxx`).

2. **W Sanity**:
   - Przejdź na [sanity.io/manage](https://sanity.io/manage) do swojego projektu.
   - Otwórz zakładkę **API** → **Webhooks** → **Create webhook**.
   - Wklej URL webhooka z Netlify.
   - Ustaw triggery: `Create`, `Update`, `Delete` dla datasetu `production`.

🎉 **Efekt**: W momencie gdy w Sanity klikniesz **Publish**:
1. Sanity wysyła sygnał do Netlify.
2. Netlify uruchamia `npm run build`.
3. Astro pobiera najnowsze dane i w ułamku sekundy generuje nowy adres `/work/twoj-projekt` lub `/blog/twoj-wpis`.
4. Nowa strona jest natychmiast opublikowana w sieci!

---

## 🌐 Wdrożenie na Netlify (Deploy)

W projekcie znajduje się już plik `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Opcja 1: Przez Git (Zalecana)
1. Wrzuć folder `arik-astro` do repozytorium na GitHubie.
2. Na [netlify.com](https://www.netlify.com/) kliknij **Add new site** → **Import an existing project**.
3. Wybierz repozytorium.
4. W zakładce Environment variables dodaj:
   - `SANITY_PROJECT_ID` = twój project id
   - `SANITY_DATASET` = production
5. Kliknij **Deploy site**.

### Opcja 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Opcja 3: Przeciągnij folder `dist` (Manual Deploy)
1. Uruchom `npm run build`.
2. Zaloguj się na netlify.com i przeciągnij folder `dist` w okno wdrożenia.

---

## 📬 Formularz Netlify Forms
Formularz kontaktowy jest w pełni gotowy do odbierania zgłoszeń. Każde przesłanie formularza automatycznie trafia do panelu **Forms** w Netlify, skąd możesz:
- Przeglądać wiadomości od klientów.
- Włączyć powiadomienia e-mail o każdym nowym zapytaniu (`Site configuration` → `Notifications` → `Form submissions`).
- Zintegrować powiadomienia z Slackiem lub Discordem.
