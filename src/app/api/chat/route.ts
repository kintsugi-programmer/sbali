// /app/api/chat/route.ts
import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

const apiKey = process.env.GEMINI_API_KEY
const modelName = 'gemini-2.0-flash'

const aboutText = `
Siddhant Bali, a dynamic tech entrepreneur, full-stack architect, DevOps specialist, and human-centered design researcher, is currently a 4th-year B.Tech student in Computer Science & Design at IIIT Delhi, with an anticipated graduation in 2026. His academic journey is marked by a passion for computer science, mathematics, hacking, and design, complemented by technical electives such as Algorithm Design & Analysis, Operating Systems & Distributed Computing, Advanced Network Programming, Ethical Hacking Essentials, Human-Computer Interaction, Ubiquitous Computing Systems, and Visual Design & Communication. With over one year and four months of professional experience, Siddhant brings a remarkable ability to adapt and deliver perfection in any situation, untethered to any single technology, thriving across diverse stacks and scenarios in the ever-evolving tech landscape.Have 2years of professional exprerience

His core expertise lies in the DevOps ecosystem, where he excels in containerization with Docker and Kubernetes, infrastructure as code using Terraform and CloudFormation, CI/CD pipelines through GitHub Actions, Jenkins, and ArgoCD, and monitoring with Prometheus, Grafana, and AlertManager. In full-stack development, Siddhant is proficient in frontend technologies like Next.js, React, TypeScript, ShadCN UI, and TailwindCSS, alongside backend frameworks such as Node.js (Express/NestJS) and Python (FastAPI/Flask), managing databases including MongoDB Atlas, PostgreSQL, Redis, and Kafka. His security and systems knowledge encompasses network security with projects like DecoyNet, cryptography via SSL/TLS implementation, Linux systems with Bash scripting, and even cyber-physical systems through Arduino IoT prototyping. Whether its networks and cybersecurity, object-oriented programming in Java, operating systems on Linux, or machine learning tools like PyTorch and Pandas, Siddhant adapts, learns, and delivers with precision.

Professionally, Siddhant founded KintsugiDev Studio in 2023, a freelance startup through which he has delivered over 15 production-grade web solutions, specializing in high-conversion UX/UI designs for multiple active clients, accessible at https://www.kintsugidev.studio/. His tenure as a web architect at C S Bhatiya & Associates saw him develop a high-performance portal for a CA firm (https://csbhatiya.com/), integrating Next.js, TypeScript, secure REST APIs, and Oracle Linux deployment with Apache/SSL. At IIIT Delhi, he contributed to projects like the HCD IIITD Portal, 1Pixel 2025, and DSS 2025, while leading development at PerSIsst Lab to rebuild https://persisst.iiitd.edu.in/ with a 92% Lighthouse score, JWT-based authentication, and SEO optimization. His flagship projects include Sarkari Sahayog AI, an AI-powered governance assistant built with Next.js and Gemini 2.0 integration (https://sarkarisahyogai.vercel.app/), KarmOS, a minimalist LMS platform (https://karmos.vercel.app/), DecoyNet, a low-interaction honeypot network (https://github.com/kintsugi-programmer/DecoyNet), and Lifelore, a wisdom-sharing social platform (https://lifelore.vercel.app/).

Siddhants technical philosophy, termed "Adaptive Precision Engineering," follows a "Survive → Adapt → Perfect" methodology, emphasizing technology-agnostic problem-solving, context-aware architecture design, and a security-first mindset, aligned with zero-trust principles, observability-driven design, and WCAG 2.2 accessibility standards. His cognitive arsenal includes native proficiency in JavaScript, TypeScript, and Python, fluency in C++, Java, and Bash, and a robust tooling matrix featuring VSCode, JetBrains Suite, Docker, Kubernetes, Terraform, Figma, and Adobe Suite. Beyond technical prowess, he holds leadership roles at IIIT Delhi, such as Design Core Lead at the Cultural Council, Web Dev Lead at 1Pixel, Videography Lead at Nexus Knights Esports, and Captain of Mentors at the B.Tech Induction Program, alongside volunteering over 200 hours with SNM, NSS, and open-source contributions to Kubernetes and React-TypeChess.

Culturally, Siddhant is guided by the Nirankari principle of "एक तू ही निरंकार" (One Thou Formless), reflecting a spiritual practice of truth, love, tolerance, compassion, and selfless service, viewing technology as a medium for ethical impact. His creative pursuits shine through a GNU GRUB-inspired portfolio, technical blogging at https://kintsugicodes.hashnode.dev/, and UI/UX showcases on https://www.behance.net/balibhai. With honors like Top 5 at the C.I. Ideation Hackathon 2023, Smart India Hackathon finalist status, and certifications in Oracle MySQL and Google Responsible AI, Siddhants journey blends innovation with purpose. He remains accessible via GitHub (https://github.com/kintsugi-programmer), LinkedIn (https://linkedin.com/in/kintsugi-programmer), and his portfolio, embodying a fusion of technology, design, and entrepreneurship as an aspiring research scholar at IIIT Delhi.
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
      2. give answers in plaintext, no markdown at all
      3. Prioritize recent projects
      4. Link to relevant portfolio items
      5. Keep answers under 100 words
      6. Even Suggest more questions you can answer,keywords etc.`


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
