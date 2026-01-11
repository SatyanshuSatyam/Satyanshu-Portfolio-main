import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🎨 Imgfly',
    desc: 'A visually immersive image discovery platform allowing users to search, view, and organize high-quality images. Features a responsive masonry layout and seamless user experience.',
    ss: '/imagify_satyanshu.jpeg',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL','cloudinary','tailwind CSS'],
    live: 'https://imgfly.vercel.app/',
    code: 'https://github.com/SatyanshuSatyam/Imgfly-.git'
  },
  {
    title: '✅ HabitHub (Habit Tracker)',
    desc: 'A modern productivity dashboard for tracking daily routines. Features include streak analytics, weekly progress averages, and category-based filtering (Health, Fitness, Mindfulness).',
    ss: '/habit_satyanshu.jpeg',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Recharts', 'sonner', 'Redux Toolkit'],
    live: 'https://github.com/SatyanshuSatyam/HabitHUB-Frontent-Project-next.js-and-Tailwind.git',
    code: 'https://github.com/SatyanshuSatyam/HabitHUB-Frontent-Project-next.js-and-Tailwind.git'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A responsive personal portfolio built with React.js and Tailwind CSS to showcase my Full Stack development projects and technical skills. Features a modern dark-themed UI with seamless animations powered by Framer Motion for an engaging user experience.',
    ss: '/GalleryS/portfilio.png',
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://todo-pro-two.vercel.app/',
    code: 'https://github.com/SatyanshuSatyam/Satyanshu-Portfolio-main.git'
  },
  {
    title: '🌦️ Real-Time Weather Dashboard',
    desc: 'Comprehensive weather tracking application featuring live temperature data, 5-day forecasts, Air Quality Index (AQI) monitoring, and interactive map integration.',
    ss: '/weather_satyanshu.jpeg',
    tech: ['React', 'OpenWeather API', 'Leaflet Maps', 'Tailwind', 'Luxon'],
    live: 'https://weather-dashboard-eight-black.vercel.app/',
    code: 'https://github.com/SatyanshuSatyam/Weather-Dashboard.git'
  },
  {
    title: '🔔 Email Alert on WhatsApp',
    desc: 'An automation utility that bridges the gap between Email and WhatsApp. It monitors your inbox and instantly forwards critical email notifications to your WhatsApp number.',
    ss: '/email_alert_satyanshu.jpeg',
    tech: ['Node.js', 'WhatsApp API', 'Nodemailer', 'IMAP', 'Twilio'],
    live: 'https://github.com/SatyanshuSatyam/Email-Alert-On-Whatapps.git',
    code: 'https://github.com/SatyanshuSatyam/Email-Alert-On-Whatapps.git'
  },
  {
    title: '🧾 To-Do List Application',
    desc: 'A sleek and intuitive to-do list app that helps users organize tasks efficiently. Features include task categorization, priority setting, and deadline reminders.',
    ss: '/todos_satyanshu.jpeg',
    tech: ['Nextjs', 'Redux Toolkit', 'Tailwind CSS', 'charts.js'],
    live: 'https://todo-pro-two.vercel.app/',
    code: 'https://github.com/SatyanshuSatyam/TODO_pro.git'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}