import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Trishant Portfolio API", version="1.0.0")

# CORS — allow the deployed frontend origin + localhost dev
origins = [
    "http://localhost:5173",
    "http://localhost:4173",
    os.getenv("FRONTEND_URL", ""),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str = ""
    message: str


@app.get("/")
def root():
    return {"status": "ok", "message": "Trishant Portfolio API is live 🚀"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/api/contact")
async def contact(form: ContactForm):
    """Receive contact form submission and forward to owner's email."""
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", 587))
    smtp_user = os.getenv("SMTP_USER", "")
    smtp_pass = os.getenv("SMTP_PASS", "")
    owner_email = os.getenv("OWNER_EMAIL", smtp_user)

    if not smtp_user or not smtp_pass:
        # In dev / demo mode, just log and return success
        print(f"[CONTACT] From: {form.name} <{form.email}>")
        print(f"[CONTACT] Subject: {form.subject}")
        print(f"[CONTACT] Message: {form.message}")
        return {"success": True, "message": "Message received (demo mode)."}

    # Build email
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Portfolio] {form.subject or 'New message'} — from {form.name}"
    msg["From"] = smtp_user
    msg["To"] = owner_email
    msg["Reply-To"] = form.email

    html_body = f"""
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#0d0d1f;color:#e0e0ff;padding:32px;border-radius:12px;">
      <h2 style="color:#00e5ff;margin-bottom:4px;">New Portfolio Message</h2>
      <p style="color:#6878a0;font-size:13px;margin-bottom:24px;">via trishant.dev</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#8892b0;font-size:13px;width:80px;">Name</td>
          <td style="padding:8px 0;font-weight:600;">{form.name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#8892b0;font-size:13px;">Email</td>
          <td style="padding:8px 0;"><a href="mailto:{form.email}" style="color:#00e5ff;">{form.email}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#8892b0;font-size:13px;">Subject</td>
          <td style="padding:8px 0;">{form.subject or '—'}</td>
        </tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#050510;border-radius:8px;border-left:3px solid #00e5ff;">
        <p style="color:#8892b0;font-size:12px;margin-bottom:8px;">MESSAGE</p>
        <p style="line-height:1.7;white-space:pre-wrap;">{form.message}</p>
      </div>
    </div>
    """

    msg.attach(MIMEText(html_body, "html"))

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, owner_email, msg.as_string())
        return {"success": True, "message": "Message sent successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")
