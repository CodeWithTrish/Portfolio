# Trishant Tangnoo — Portfolio

A full-stack portfolio website built with **React + Vite** (frontend) and **FastAPI** (backend).

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **Backend**: Python FastAPI, Uvicorn, SMTP email
- **Deploy**: Vercel (frontend) + Render (backend)

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env          # fill in your SMTP credentials
uvicorn main:app --reload
# → http://localhost:8000
```

## Deployment

### 1. Deploy Backend to Render (free)
1. Push code to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Point to the `backend/` directory (or root with `rootDir: backend`)
4. Fill in env vars: `SMTP_USER`, `SMTP_PASS`, `OWNER_EMAIL`, `FRONTEND_URL`
5. Copy your Render URL (e.g. `https://trishant-portfolio-api.onrender.com`)

### 2. Deploy Frontend to Vercel (free)
1. Go to [vercel.com](https://vercel.com) → New Project → import repo
2. Set **Root Directory** to `frontend`
3. Add env var: `VITE_API_URL=https://your-render-url.onrender.com`
4. In `vercel.json`, replace `RENDER_BACKEND_URL` with your Render URL
5. Deploy → get your `https://trishant-portfolio.vercel.app` URL

### 3. Add to LinkedIn
Paste your Vercel URL in your LinkedIn profile under **Website**.

## Contact Form (Email Setup)
1. Enable 2FA on your Gmail
2. Generate an App Password: Google Account → Security → App Passwords
3. Set `SMTP_USER=your@gmail.com` and `SMTP_PASS=<app-password>` in Render env vars
