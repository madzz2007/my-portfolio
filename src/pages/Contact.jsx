import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [toast, setToast] = useState({ visible: false, message: '', isError: false })

  function showToast(message, isError = false) {
    setToast({ visible: true, message, isError })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }))
    }, 2800)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const { name, email, message } = form

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('❌ Please fill in all fields before sending.', true)
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      showToast('📧 Please enter a valid email address.', true)
      return
    }

    const messageData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString(),
    }
    console.log('📬 New contact message:', messageData)

    showToast(`📨 Thanks ${messageData.name}! I'll respond within 24h.`, false)
    setForm({ name: '', email: '', message: '' })
  }

  function handleResumeClick(event) {
    event.preventDefault()
    showToast('📄 Resume preview: madhesh_resume.pdf (demo) — You can connect on LinkedIn for full CV.', false)
  }

  return (
    <>
      <section>
        <div className="section-title">Let's Connect</div>
        <div className="cards-grid">
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>📧 Get in Touch</h3>
            <p style={{ marginBottom: '1rem', color: '#334155' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>

            <div style={{ margin: '1.5rem 0' }} className="contact-detail-block">
              <p style={{ marginBottom: '0.7rem' }}><strong>Email:</strong> madhesh.66666@example.com</p>
              <p style={{ marginBottom: '0.7rem' }}>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/madzz2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}
                >
                  github.com/madzz2007
                </a>
              </p>
              <p style={{ marginBottom: '0.7rem' }}>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/madhesh-t-671b69382"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}
                >
                  linkedin.com/in/madhesh-t-671b69382
                </a>
              </p>
              <p><strong>Location:</strong> India (Remote Available)</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/madzz2007" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                🐙 GitHub
              </a>
              <a href="https://www.linkedin.com/in/madhesh-t-671b69382" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                🔗 LinkedIn
              </a>
              <a href="#" onClick={handleResumeClick} className="btn btn-primary">📄 Download Resume</a>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>📬 Send a Message</h3>
            <form className="contact-form" style={{ padding: 0 }} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What would you like to discuss?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', cursor: 'pointer' }}>
                Send Message →
              </button>
              <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#64748b', textAlign: 'center' }}>
                ✨ Your message will be logged &amp; simulated — backend ready soon. I'll reach out via email!
              </p>
            </form>
          </div>
        </div>
      </section>

      <div
        className={`toast-message${toast.visible ? ' show' : ''}`}
        style={{
          background: toast.isError ? '#b91c1c' : undefined,
          color: toast.isError ? '#fff' : undefined,
        }}
      >
        {toast.message || "✨ Message sent! (Demo) I'll get back to you soon."}
      </div>
    </>
  )
}
