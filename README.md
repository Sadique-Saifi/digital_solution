# NexCore Digital — Modern Agency Website

> **"Building Smarter Digital Experiences. Automating Business Growth."**

A premium, modern SaaS-inspired website built for a hybrid technology agency combining **AI & Business Automation** with **Website Development & Digital Solutions**.

---

## 🌟 Key Highlights

- **Aesthetic:** Deep obsidian & navy background (`#080D1A`), electric indigo (`#6366F1`) & sky blue (`#38BDF8`) gradients, soft glassmorphism, and glowing borders.
- **Hero Dashboard Visual:** Custom interactive CSS-animated business dashboard with floating cards (website live badge, real-time incoming WhatsApp enquiry notification, AI automation throughput gauge, and workflow flow nodes).
- **Comprehensive Sections:**
  - 🚀 **Hero:** Value proposition, dual CTA, custom interactive visual dashboard.
  - 🛠️ **Services:** 4 interactive cards (Web Development, AI Automation, Custom Software, Data Analytics).
  - 🏢 **Solutions:** Industry-specific cards (Education, Real Estate, Retail/E-Commerce, Service Businesses) + industry tag cloud.
  - ⭐ **Why Partner With Us:** 6 key value pillars and a tech-first partner banner.
  - 🔄 **Our Process:** 4-step interactive timeline from discovery to continuous improvement.
  - 💻 **Tech Stack:** Categorized, interactive technology pills (Frontend, Backend, Database, AI/ML, Analytics).
  - 💡 **CTA Section:** High-converting gradient card with dual conversion paths.
  - 📬 **Contact:** Direct channels (WhatsApp Business, Project Inquiry Form, and Email).
  - 📱 **Floating WhatsApp FAB:** Fixed button with subtle pulse ring and hover tooltip.
- **Zero Broken Links:** All conversion actions lead to your active Google Form or official WhatsApp business chat.

---

## ⚙️ Centralized Configuration (`src/config/siteConfig.js`)

You can edit all contact details, agency names, and form URLs in **one single file**:

```javascript
export const siteConfig = {
  agencyName: "NexCore Digital",
  agencyInitials: "NC",
  tagline: "Building Smarter Digital Experiences. Automating Business Growth.",

  // Google Form URL (opens in new tab)
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe0_Jzvlw3LgfiRBjoBIJH8qj3WqtWR16rAAPXKgdpvi6TuJg/viewform?usp=dialog",

  // WhatsApp Number (format: country code + 10 digits without +, spaces, or dashes)
  whatsappNumber: "91XXXXXXXXXX",
  whatsappMessage: "Hello! I visited your website and would like to discuss a project. Could you please share more details about your services?",

  // Email
  email: "hello@nexcoredigital.com",
};
```

---

## 🚀 How to Run the Website Locally (Before Uploading to GitHub)

### Prerequisites
- Node.js (v18+ recommended)
- Git

### 1. Open Terminal in the Project Directory
```bash
cd "C:\Users\sadiq\Digital_solution"
```

### 2. Start the Local Development Server
```bash
npm run dev
```

You will see output similar to:
```text
  VITE v5.4.1  ready in 320 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

👉 Hold `Ctrl` (or `Cmd`) and click the link, or open your web browser and go to **`http://localhost:5173/`**.

### 3. Verify Production Build Locally
To test how the website will perform in production:
```bash
# Build the production bundle
npm run build

# Preview the built version
npm run preview
```
Visit the preview URL (usually `http://localhost:4173/`) to test the compiled version.

---

## 📤 How to Upload to GitHub

Follow these steps to push your codebase to a new GitHub repository:

### Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter repository name (e.g., `digital-solution` or `nexcore-digital`).
3. Leave **"Initialize this repository with a README" unchecked** (since we already have our own).
4. Click **Create repository**.

### Step 2: Commit and Push from Your Terminal
Run the following commands in `C:\Users\sadiq\Digital_solution`:

```bash
# 1. Stage all project files
git add .

# 2. Make your initial commit
git commit -m "feat: complete modern agency website with AI dashboard and WhatsApp/Form integrations"

# 3. Rename branch to main
git branch -M main

# 4. Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git

# 5. Push to GitHub
git push -u origin main
```

---

## 🌐 Free One-Click Deployment Options

Once your code is on GitHub, you can host it with automatic SSL in under 2 minutes:

- **Vercel:** Import your GitHub repo on [vercel.com](https://vercel.com) — framework will automatically be detected as `Vite`. Click **Deploy**.
- **Netlify:** Import repo on [netlify.com](https://netlify.com) — build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages:** Connect repo on Cloudflare Pages — framework preset `Vite`.

---

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v3 + Custom Glassmorphism Utilities
- **Icons:** Lucide React
- **Animations:** CSS3 Hardware-Accelerated Keyframes & Transitions
- **Design Inspiration:** Stripe, Linear, Vercel, Framer
