# 🖥️ Personal Website Project Guide (React + TypeScript)

> **Goal:** Build a modern personal website with static & dynamic pages, API data fetching, and a TypeScript-first stack. Code will be hosted on GitHub and deployed via GitHub Pages or a similar host.

---

## 📋 Problem Statement

- Static and dynamic pages
- User can fetch data from APIs
- Frontend: React (TypeScript preferred)
- Backend: TypeScript (wherever JS is used)
- Code on GitHub
- Deploy on GitHub Pages or similar

---

## ✅ Criteria

| Requirement     | Details                              |
| --------------- | ------------------------------------ |
| Modern codebase | TypeScript, React                    |
| Easy deployment | GitHub Pages, Vercel, Netlify, etc.  |
| Good DX         | Debugging, upgrades, maintainability |
| Scalable        | Static & dynamic content             |
| Cost-effective  | Prefer free/low-cost hosting         |

---

## 🚀 Framework & Technology Options

| Option            | Frontend   | Backend/API     | Deployment              |
| ----------------- | ---------- | --------------- | ----------------------- |
| **Next.js**       | React (TS) | API routes (TS) | Vercel, Netlify, Static |
| **CRA + Express** | React (TS) | Express (TS)    | Netlify, Vercel, Heroku |
| **Astro/Gatsby**  | React (TS) | External API    | GitHub Pages, Netlify   |

---

## ⚖️ Pros & Cons

| Option       | Pros                                                   | Cons                                                   | Maintenance/Effort         |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------ | -------------------------- |
| Next.js      | Fullstack, SSR/SSG, API routes, easy TS, Vercel deploy | Dynamic API not on GitHub Pages, learning curve        | Easy upgrades, good DX     |
| CRA+Express  | Familiar, flexible, full control                       | More setup, not for GitHub Pages, two deployments      | More maintenance/debugging |
| Astro/Gatsby | Fast static, React, easy GitHub Pages                  | Dynamic API must be external, less backend flexibility | Low maintenance, easy DX   |

---

## 🛠️ Setup Commands (VSCode PowerShell, Windows)

### 1. Next.js (Recommended for fullstack)

```powershell
npx create-next-app@latest my-website -e with-typescript
cd my-website
npm run dev
```

### 2. Create React App + Express

```powershell
npx create-react-app my-website --template typescript
cd my-website
# Backend setup
mkdir api
cd api
npm init -y
npm install express typescript ts-node @types/node @types/express
# Create tsconfig.json and server.ts, then run:
npx ts-node server.ts
```

### 3. Astro (Static, React support)

```powershell
npm create astro@latest
# Choose React and TypeScript during setup
cd <astro-project-folder>
npm run dev
```

### 4. Gatsby (Static, React support)

```powershell
npm install -g gatsby-cli
gatsby new my-website https://github.com/gatsbyjs/gatsby-starter-default-typescript
cd my-website
gatsby develop
```

---

## 📝 Summary

- **Fullstack (static + dynamic, API):** Next.js is best fit.
- **Static only:** Astro or Gatsby (GitHub Pages deploy).
- **Separate backend:** CRA + Express (not for GitHub Pages).
