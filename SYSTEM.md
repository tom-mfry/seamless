
# SYSTEM.MD

## 🔐 Operational Guardrails

This system defines **execution boundaries**, **safety protocols**, and **best practices** for AI-assisted development on the **Bridal Seamstress Nuxt 3 Website**.

All AI-generated code, configurations, or suggestions **must conform to the rules below** to ensure security, maintainability, and project integrity.

---

## ⚖️ General Constraints

- Do not introduce new technologies, services, or frameworks without explicit developer approval.
- Do not suggest dynamic SSR, real-time functionality, or server dependencies — this is a **fully static site**.
- Assume zero backend or database access.
- Ensure all outputs are compatible with **Nuxt 3 static site generation** (`nitro.preset: 'static'`).

---

## 📦 File & Project Structure Rules

- Route pages must be created in `pages/` using Nuxt’s file-based routing (`index.vue`, `contact.vue`, `info.vue`, etc.).
- Global layout goes in `app.vue`.
- Reusable components must be placed in `components/`.
- Assets (like images) must go in `public/` or `assets/` depending on use case.
- All production build output goes to `.output/public` (default for Netlify hosting).

---

## 🎨 Tailwind CSS Guidelines

- Always prefer **utility-first classes** over raw CSS or component libraries unless scoped for accessibility or maintainability.
- Use responsive breakpoints (`sm:`, `md:`, `lg:`) for layout flexibility.
- Never rely on `@apply` unless defining utility extensions in `global.css`.

---

## ✨ SEO Best Practices (Enforced)

Every route/page (`.vue`) must include:
- A unique `<title>` tag
- A `<meta name="description">`
- Proper heading hierarchy (`<h1>`, `<h2>`, etc.)
- Clean, semantic markup (`<section>`, `<article>`, `<footer>`, etc.)
- Lazy-loaded, optimized images using `@nuxt/image`

---

## ✉️ Netlify Form Handling Rules

- Forms **must** include:
  ```html
  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- Fields go here -->
  </form>
