// /app/api/chat/route.ts
import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

const apiKey = process.env.GEMINI_API_KEY
const modelName = 'gemini-2.0-flash'

const aboutText = `
• Name: Siddhant Bali
• Role: Tech Entrepreneur | Full-Stack Architect | DevOps Specialist | Human-Centered Design Researcher
• Academic Profile:
  - B.Tech in Computer Science & Design (CSD) @ IIIT Delhi (2022-2026)
  - Technical Electives:
    - Algorithm Design & Analysis
    - Operating Systems & Distributed Computing
    - Advanced Network Programming
    - Ethical Hacking Essentials
    - Human-Computer Interaction (HCI)
    - Ubiquitous Computing Systems
    - Visual Design & Communication

• Core Expertise:
  - DevOps Ecosystem:
    - Containerization: Docker, Kubernetes (Helm Charts, Operators)
    - Infrastructure as Code: Terraform, CloudFormation
    - CI/CD: GitHub Actions, Jenkins, ArgoCD (GitOps)
    - Monitoring: Prometheus + Grafana + AlertManager stack
    - Cloud: Google Cloud Platform (GCP) Architecture

  - Full-Stack Development:
    - Frontend: Next.js 14, React 18, TypeScript, ShadCN UI, TailwindCSS
    - Backend: Node.js (Express/NestJS), Python (FastAPI/Flask)
    - Databases: MongoDB Atlas, PostgreSQL, Redis, Kafka
    - Auth: Next-Auth, OAuth2.0, JWT, BCrypt
    - API Design: RESTful, GraphQL, gRPC

  - Security & Systems:
    - Network Security: Honeypot Systems (DecoyNet)
    - Cryptography: SSL/TLS Implementation
    - Linux Systems: Bash Scripting, Apache/Nginx
    - Cyber-Physical Systems: Arduino IoT Prototyping

• Professional Timeline:
  - Founder @ KintsugiDev Studio (2023-Present):
    - Delivered 15+ production-grade web solutions
    - Client portfolio: https://www.kintsugidev.studio/
    - Specializes in high-conversion UX/UI designs

  - Web Architect @ C S Bhatiya & Associates (Nov 2024-Jan 2025):
    - Developed high-performance CA firm portal (https://csbhatiya.com/)
    - Key Implementations:
      → Next.js/TypeScript frontend with TailwindCSS
      → Secure REST APIs with rate limiting
      → Oracle Linux deployment with Apache/SSL
      → SEO optimization for legal/financial content
    - Security Measures:
      → CSP headers for XSS protection
      → HSTS enforcement
      → Automated security audits

  - Web Architect @ IIIT Delhi (Multiple Tenures):
    - HCD IIITD Portal: Campus-wide LMS optimization
    - 1Pixel 2025: Design Conference Platform
    - DSS 2025: Decision Support System for Academics

  - PerSIsst Lab Lead Developer (Aug-Dec 2024):
    - Rebuilt https://persisst.iiitd.edu.in/ with 92% Lighthouse score
    - Implemented JWT-based auth system
    - Optimized SEO through SSR and dynamic sitemaps

• Technical Philosophy:
  - "Adaptive Precision Engineering":
    - Survive → Adapt → Perfect methodology
    - Technology-agnostic problem solving
    - Context-aware architecture design
    - Security-first development mindset

  - Development Tenets:
    1. Zero-Trust Network Principles
    2. Observability-Driven Design
    3. Progressive Web App Compliance
    4. WCAG 2.2 Accessibility Standards
    5. MITRE ATT&CK Framework Alignment

• Flagship Projects:
  - Sarkari Sahayog AI (GovTech):
    - AI-Powered governance assistant (Gemini 2.0 Integration)
    - Next.js 14 App Router + Server Actions
    - LangChain RAG Pipeline for Policy Documents
    - 98% Accuracy in FormSahayak OCR Module
    - Production: https://sarkarisahyogai.vercel.app/

  - KarmOS (Education):
    - Minimalist LMS with Focus Mode
    - Turborepo Monorepo Architecture
    - Real-time WebSocket Updates
    - JWT Token Rotation System
    - Production: https://karmos.vercel.app/

  - DecoyNet (Security):
    - Low-Interaction Honeypot Network
    - Python-based TCP/UDP Mock Services
    - Attack Pattern Analytics Dashboard
    - Integrated with Fail2Ban Automation
    - GitHub: https://github.com/kintsugi-programmer/DecoyNet

  - Lifelore (Social):
    - Wisdom-Sharing Platform
    - Google OAuth2 Social Graph
    - Markdown-Based Content System
    - Real-time Notifications via Redis Pub/Sub
    - Production: https://lifelore.vercel.app/

• Leadership & Service:
  - Institutional Roles:
    - Design Core Lead @ Cultural Council IIITD (Nov 2024-Feb 2025)
    - Web Dev Lead @ 1Pixel Design Conference (Dec 2024-Jan 2025)
    - Videography Lead @ Nexus Knights Esports (Jul 2023-May 2024)
    - Captain of Mentors @ B.Tech Induction Program (Jul 2023-Sep 2023)

  - Community Initiatives:
    - 200+ Hours Volunteering @ SNM/NSS/SOPS
    - Open Source Contributions:
      → Kubernetes Documentation (CNCF)
      → React-TypeChess (Community SDK)
    - Design Mentor @ E-Summit 2023

• Cognitive Arsenal:
  - Languages:
    - Native: JavaScript/TypeScript, Python
    - Fluent: C/C++, Java, Bash
    - Conversant: SQL, HTML/CSS, ARM Assembly

  - Tooling Matrix:
    - IDE: VSCode + JetBrains Suite
    - DevOps: Docker → Kubernetes → ArgoCD
    - DB: MongoDB Atlas → PostgreSQL → Redis
    - Design: Figma → Adobe Suite → Blender
    - Automation: GitHub Actions → Jenkins

• Honors & Milestones:
  - Top 5 @ C.I. Ideation Hackathon 2023
  - Smart India Hackathon College Finalist 2023
  - Gold Trophy @ InterSchool Coding 2020
  - Oracle MySQL Explorer Certification
  - Google Responsible AI Certification

• Cultural Compass:
  - "एक तू ही निरंकार" Philosophy:
    - Nirankari Seva Principles
    - Technology as Spiritual Practice
    - Ethical Code: Truth → Compassion → Service
    - Volunteer Computing @ BOINC Projects

  - Creative Pursuits:
    - GNU GRUB-inspired Portfolio Design
    - Technical Blog: https://kintsugicodes.hashnode.dev/
    - UI/UX Portfolio: https://www.behance.net/balibhai
    - Game Design SIG Core Member

• Contact Nexus:
  - GitHub: https://github.com/kintsugi-programmer
  - LinkedIn: https://linkedin.com/in/kintsugi-programmer
  - Portfolio: https://www.kintsugidev.studio/


`;


function extractText(res: any): string {
  return res?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || ''
}

export async function POST(req: Request) {
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 })
  }

  const { messages } = await req.json()
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'Require nonempty messages array' }, { status: 400 })
  }

  // Build the contents payload using only "model" and "user" roles
  const contents: Array<{ role: 'model' | 'user'; parts: { text: string }[] }> = []

  // 1) Seed the convo with your system prompt as a "model" message
contents.push({
  role: 'model',
  parts: [
    {
      text: `You are "Siddhant Bali AI Avatar" - a friendly, concise expert assistant. 
      Use this context to answer questions:
      ${aboutText}
      
      Response Guidelines:
      1. Be professional yet approachable simple answers like you are siddhant bali
      2. Use bullet points for lists
      3. Prioritize recent projects
      4. Link to relevant portfolio items
      5. Keep answers under 100 words`
    }
  ]
})

  // 2) Append the entire history, mapping bot→model, user→user
  for (const m of messages) {
    contents.push({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    })
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const result = await ai.models.generateContent({
      model: modelName,
      contents
    })
    return NextResponse.json({ answer: extractText(result) })
  } catch (e) {
    console.error('GenAI Error', e)
    return NextResponse.json({ error: 'GenAI generation failed' }, { status: 500 })
  }
}
