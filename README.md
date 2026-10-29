# Vachana Kranti (ವಚನ ಕ್ರಾಂತಿ) - Online Newspaper & E-Paper

A modern full-stack digital newspaper platform and digital broadsheet E-Paper application built with React, Vite, Node.js, and Express, featuring complete dual-language (**ಕನ್ನಡ (Kannada)** and **English**) support.

---

## 🌟 Features

- **🌐 Dual-Language Experience**:
  - Seamless one-click toggle between **ಕನ್ನಡ (Kannada)** and **English** across the entire platform.
  - Authentic Kannada typography powered by Google's *Noto Serif Kannada* and *Noto Sans Kannada*.
  - Localized dates, numbers, category filters, headlines, and live weather.

- **📰 Digital E-Paper Broadsheet (`/epaper`)**:
  - Classic broadsheet newspaper layout with multi-column editorial styling.
  - **3 Reading Modes**: Full Kannada, Full English, or **ದ್ವಿಭಾಷಾ (Bilingual / Side-by-Side)**.
  - Multi-page navigation (Front Page, City & State, Business & Tech, World & Environment).
  - Edition switcher (Bengaluru Metro Edition & Karnataka State Edition).
  - Print / Save as PDF support.

- **📖 Rich Article Reading (`/article/:id`)**:
  - Detailed story views with reading time, publication dates, and related news.
  - In-article language switcher including side-by-side bilingual reading mode.

- **✍️ Editorial Dashboard (`/admin`)**:
  - Protected admin portal for publishing breaking news stories in English and Kannada.
  - Pre-configured Admin access: `admin@vachanakranti.com` / `admin123`.

- **🔐 Reader Authentication (`/login`)**:
  - Reader registration and login with local session persistence.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, React Router v7, Bootstrap 5, Bootstrap Icons
- **Backend**: Node.js, Express 5, CORS
- **Fonts**: Noto Serif Kannada, Noto Sans Kannada, Cormorant Garamond, Inter

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
npm --prefix client install
```

### 2. Run in Development Mode
Runs both the Express backend API and Vite frontend server concurrently:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build & Run in Production Mode
```bash
npm run build
npm start
```
Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 📜 License
ISC License
