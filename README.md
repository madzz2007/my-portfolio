# Madhesh — Portfolio (React)

This is a full React conversion of the original static HTML/CSS/JS portfolio. No `.html` page
files remain — every page (Home, About, Skills, Projects, Certificates, Contact) is now a React
component, routed with `react-router-dom`, with all interactive behavior (skill bar animations,
GitHub project fetching, the certificate modal, and the contact form) reimplemented using React
state and hooks instead of vanilla DOM scripting.

## Project structure

```
src/
  main.jsx              entry point, sets up the router
  App.jsx               route table
  index.css             all site styles (merged from style.css / contact.css / inline <style> blocks)
  components/
    Navbar.jsx           top navigation with active-link highlighting
    Footer.jsx           shared footer
    SkillBar.jsx         animated skill percentage bar
    CertificateModal.jsx certificate "lightbox" modal
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx          fetches your public GitHub repos client-side, same as before
    Certificates.jsx
    Contact.jsx
  data/
    certificates.js      certificate content extracted into a data file
public/
  images/                my-photo.png + cert1.png...cert24.png
```

## Running it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Notes

- The Projects page still calls the public GitHub API (`api.github.com/users/madzz2007/repos`)
  client-side, exactly like the original script — no backend needed.
- The contact form is still a front-end simulation (it logs to the console and shows a toast);
  wire up `handleSubmit` in `src/pages/Contact.jsx` to a real backend/email service when ready.
- Certificate images live in `public/images/` and are referenced as `/images/certN.png`.
