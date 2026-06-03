# 🚀 PR Review Helper

## Team Name
CODEAURA

## Team Members
- Garvit Dumir (Solo Developer)

---

## 🔗 Project Links

### 📂 GitHub Repository
https://github.com/GarvitDumir/pr-review-helper.git

### 🌐 Live Frontend (Vercel)
https://pr-review-helper-drkwgp431-garvitdumir1103-4521s-projects.vercel.app/

### ⚙️ Backend (Render)
https://pr-review-backend-4cs9.onrender.com

---

## 🧠 Project Title
PR Review Helper - AI Powered Pull Request Analysis Tool

---

## 📌 Project Description

PR Review Helper is an AI-assisted developer tool that analyzes GitHub Pull Requests and generates a structured review report.

Instead of manually reviewing code changes, developers can simply paste a PR link and instantly receive insights such as:
- Risk level of changes
- Code quality issues
- Missing test cases
- Suggested improvements
- Structured review checklist

This tool reduces manual effort and speeds up the code review process for developers and maintainers.

---

## 💡 Inspiration

While working on GitHub and exploring open-source projects, I noticed that pull request reviews often take significant time and effort.

Maintainers must manually check:
- Code correctness
- Test coverage
- Potential bugs
- Style and structure issues

This repetitive process slows down development.

So I thought:
👉 Why not automate the first-level PR review process?

PR Review Helper was built to act as a smart assistant that helps developers review code faster and more efficiently.

---

## ⚙️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- HTML, CSS

### Backend
- Node.js
- Express.js

### APIs
- GitHub REST API (Pull Requests + Files API)

---

## ✨ Features

- 🔍 Analyze any public GitHub Pull Request
- 📊 Risk scoring system (0–100)
- 🧠 Smart PR summary
- ⚠ Detect potential issues in code changes
- 🧪 Identify missing test cases
- ✅ Generate review checklist
- ⚡ Fast and simple UI-based analysis

---

## 🔄 How It Works

1. User pastes a GitHub Pull Request URL
2. Backend extracts:
   - Repository owner
   - Repository name
   - PR number
3. GitHub API fetches:
   - PR details
   - Changed files and diffs
4. Backend processes the data
5. Frontend displays structured review report

---

## 🧩 Project Structure
client/ → React frontend (Vite)
server/ → Express backend
routes/ → API routes (review logic)
services/ → GitHub API integration logic


---

## 🚀 Deployment

### Frontend
Deployed on Vercel
https://pr-review-helper-drkwgp431-garvitdumir1103-4521s-projects.vercel.app/

### Backend
Deployed on Render
https://pr-review-backend-4cs9.onrender.com

---

## 📊 Appwrite Products Used

- [ ] Auth
- [ ] Databases
- [ ] Storage
- [ ] Functions
- [ ] Messaging
- [ ] Realtime
- [ ] Sites

*(Not used in this project)*

---

## 🎯 Challenges Faced

- Handling GitHub API rate limits
- Parsing pull request URLs correctly
- Connecting frontend and backend across deployments
- Managing CORS issues between Vercel and Render
- Ensuring stable API responses for all PR links

---

## 🔮 Future Improvements

- 🤖 Integrate OpenAI for intelligent PR analysis
- 📊 Add visual diff viewer for code changes
- 🔔 GitHub webhook integration for automatic PR review
- 👥 Multi-developer collaboration mode
- 🌙 Dark mode + improved UI dashboard
- 📈 Advanced risk scoring model

---

## 🏁 Final Note

PR Review Helper is designed to simplify the code review process by providing instant, structured insights on pull requests.

It helps developers save time, reduce manual effort, and improve overall code quality through automation.

---

## 👨‍💻 Developed By
**Garvit Dumir**