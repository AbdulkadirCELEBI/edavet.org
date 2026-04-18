# edavet.org - Digital Invitation Platform

A modern, fast, and user-friendly digital invitation platform built with the latest technologies. This project allows users to browse, customize, and order various digital invitations for events like weddings, birthdays, and corporate gatherings.

## 🚀 Tech Stack

- **Framework:** [SvelteKit 2](https://kit.svelte.dev/) (with [Svelte 5](https://svelte.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling:**
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [DaisyUI 5](https://daisyui.com/) (Modern UI components)
  - [Lucide Svelte](https://lucide.dev/) (Icon library)
- **Database & ORM:**
  - [SQLite](https://sqlite.org/) (via `better-sqlite3`)
  - [Drizzle ORM](https://orm.drizzle.team/)
- **Runtime/Adapter:** [Node.js](https://nodejs.org/) (with `@sveltejs/adapter-node`)

## ✨ Key Features

- **Responsive Design:** Premium UI that works seamlessly across mobile, tablet, and desktop.
- **Dynamic Categories:** Specialized invitation types for every occasion:
  - Wedding & Engagement
  - Birthday Parties
  - Baby Showers
  - Concerts & Events
  - Business & Fair Invitations
  - Custom "Design Your Own" options
- **Theme Support:** Native dark/light mode toggle.
- **Fast Performance:** Server-side rendering (SSR) and optimized assets.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20 or newer recommended)
- npm (installed by default with Node.js)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/edavet.org.git
   cd edavet.org
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Setup environment variables:
   - Copy `.env.example` to `.env`
   - Configure your variables (e.g., `DATABASE_URL`, `ORIGIN`)

4. Push the database schema:
   ```sh
   npm run db:push
   ```

### Development

Start the development server:

```sh
npm run dev
```

### Building for Production

To create a production build:

```sh
npm run build
```

Preview the build:

```sh
npm run preview
```

## 📂 Project Structure

- `src/lib/`: Reusable components and server utilities.
  - `src/lib/components/`: UI components (Navbar, Footer, etc.)
  - `src/lib/server/`: Server-only logic and database configuration.
- `src/routes/`: Application pages and API routes.
- `src/app.d.ts`: TypeScript global type definitions.
- `static/`: Static assets (images, icons, etc.)
