# Arik Andersson — Portfolio

Nowoczesna, wysokowydajna implementacja portfolio w architekturze **Astro (SSG)**, zintegrowana z **Sanity CMS** oraz **Netlify Forms**.

Projekt stanowi wierne odwzorowanie szablonu portfolio Arik Andersson, zoptymalizowane pod kątem najwyższej wydajności, estetyki dark-mode i pełnej niezależności od zewnętrznych zasobów.

---

### Główne cechy

- **100% Local-First Assets**: Wszystkie kroje pisma (*Gambetta*, *Satoshi*, *Chillax*, *Inter*), grafiki, portrety i wektory SVG są serwowane lokalnie z projektu — bez zewnętrznych zależności i ryzyka blokad CDN.
- **Dynamiczny CMS (Sanity)**: Zautomatyzowane generowanie dedykowanych stron dla projektów (`/work/[slug]`) oraz artykułów na blogu (`/blog/[slug]`) z elastycznym systemem fallbacków.
- **Formularz kontaktowy Netlify**: Obsługa zapytań ofertowych w sekcji CTA z zabezpieczeniem antyspamowym honeypot i asynchronicznym przesyłaniem AJAX.
- **Ultra-szybki czas ładowania**: Statycznie generowane strony (SSG) gwarantujące natychmiastowe renderowanie i zerowy narzut JavaScriptu po stronie klienta.

---

### Stack technologiczny

- **Framework**: Astro 4
- **Styling**: Modern Vanilla CSS (Design Tokens, Responsive Grid & Flexbox)
- **CMS**: Sanity.io (@sanity/client)
- **Deployment & Hosting**: Netlify
