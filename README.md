# 💸 TON Tip & Chat — Micro-Tipping dApp on The Open Network

> Submitted to **IdeaTON2 Hackathon** — built in under 6 hours ⏱️

---

## 🚀 Overview

**TON Tip & Chat** is a lightweight, multi-page decentralized application built on **The Open Network (TON)**. It allows users to:

- 🔗 Connect their TON wallet securely using **TonConnect**
- 💸 Send micro-tips (e.g., 0.01 TON) with **custom on-chain messages**
- 🌐 Navigate between pages using a simple, mobile-friendly UI

This dApp demonstrates how social + financial interactions can be seamlessly integrated into a fast, secure, and permissionless TON-based experience.

---

## 🛠️ Features

- 🔗 **TonConnect Wallet Integration** (via `@tonconnect/ui-react`)
- 💬 **Send on-chain text messages** along with TON
- 🧑‍💻 Built with **React + Tailwind CSS**
- ⚛️ **Multi-page routing** (Home, About)
- ⚡️ Deploys instantly to Vercel / Netlify

---

## 🧪 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TonConnect SDK](https://docs.ton.org/next/guides/tonconnect/overview)
- [React Router](https://reactrouter.com/)
- Vercel for hosting

---

## 📦 Folder Structure

ton-tip-dapp/
├── src/
│ ├── pages/
│ │ ├── Home.tsx
│ │ └── About.tsx
│ ├── App.tsx
│ └── index.tsx
├── public/
│ ├── tonconnect-manifest.json
│ ├── terms.html
│ ├── privacy.html
│ └── logo.png
├── tailwind.config.js
├── package.json

pgsql
Copy
Edit

---

## 🧾 TON Connect Manifest

📄 `public/tonconnect-manifest.json`:
```json
{
  "url": "https://yourapp.vercel.app",
  "name": "TON Tip Chat",
  "iconUrl": "https://yourapp.vercel.app/logo.png",
  "termsOfUseUrl": "https://yourapp.vercel.app/terms",
  "privacyPolicyUrl": "https://yourapp.vercel.app/privacy",
  "developer": "Your Team or Name",
  "bridgeUrl": "https://bridge.tonapi.io/bridge",
  "connectivity": "ton-connect"
}
🧑‍💻 Local Development
bash
Copy
Edit
git clone https://github.com/yourname/ton-tip-dapp.git
cd ton-tip-dapp
npm install
npm run start
🌍 Live Demo
🔗 https://yourapp.vercel.app
