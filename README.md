# 🚀 PR Review Helper AI

An AI-powered Pull Request analysis tool that automatically reviews GitHub PRs, detects risks, missing tests, and generates structured review feedback for maintainers and developers.

---

## 💡 Problem Statement

Code review is one of the most critical yet time-consuming parts of software development. Maintainers often face:

- Large and complex pull requests
- Missing or insufficient test coverage
- Security vulnerabilities hidden in code changes
- Inconsistent review quality across teams

This slows down development and increases the risk of bugs reaching production.

---

## 🎯 Solution

PR Review Helper AI automates the code review process by analyzing pull requests and generating structured insights:

- 🧠 AI-powered PR summary
- 🔴 Risk level detection (Low / Medium / High)
- 🧪 Missing test case detection
- ⚠️ Security & code quality issues
- 📋 Auto-generated review checklist

---

## ⚙️ How It Works

1. User submits a GitHub PR URL
2. Backend extracts PR metadata
3. PR data is fetched via GitHub API or processed directly
4. AI analysis engine evaluates the changes
5. Structured review report is returned to frontend

---

## ✨ Features

- 🔍 GitHub PR analysis
- 🧠 AI-based review engine
- 📊 Risk scoring system (0–100)
- 🧪 Missing test detection
- ⚠️ Security issue detection
- 📋 Developer review checklist
- 🎨 Clean interactive UI

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### APIs / Logic
- GitHub REST API (optional)
- Custom AI review engine (rule-based / OpenAI-ready)

---

## 🚀 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/your-username/pr-review-helper.git
cd pr-review-helper

### . Backend Setup
cd server
npm install
node app.js
Backend runs at: 
http://localhost:5000\

### . Frontend Setup
cd client
npm install
npm run dev
Frontend runs at:
http://localhost:5173

📸 Demo Flow 
1. Open the PR Review Helper AI web app
   → http://localhost:5173
2. User sees a clean input interface
   → “Paste GitHub PR URL”
3. Paste a valid PR link
   Example:
   https://github.com/vercel/next.js/pull/12345
4. Click “Analyze” button
   → Request sent to backend API   
5. Backend processes request
   → Extracts PR data OR uses analysis engine   
6. AI Review Engine runs analysis
   → Generates:
      - Summary
      - Risk Score
      - Issues
      - Missing Tests
      - Checklist   
7. Results displayed on UI
   → Structured review dashboard appears      
8. Final Output shown:
   - 🧠 PR Summary
   - 🔴 Risk Level (Low / Medium / High)
   - ⚠ Issues Found
   - 🧪 Missing Tests
   - 📋 Review Checklist   
