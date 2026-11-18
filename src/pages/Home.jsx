const overview = [
  {
    icon: '🎯',
    title: '5+ OOPs Projects',
    desc: 'Banking systems, Employee management, E-commerce simulators using Java & Python OOP principles.',
  },
  {
    icon: '🐍',
    title: '5+ Python Projects',
    desc: 'Real-world applications including data tools, automation scripts, and web utilities.',
  },
  {
    icon: '🏠',
    title: 'Lavish World',
    desc: 'Complete interior design web platform with modern UI/UX and responsive design.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">✨ Welcome to my portfolio</div>
          <h1>Hi! I'm Madhesh</h1>
          <p className="hero-desc">
            Passionate programmer specializing in Java, Python, Web Development, and UI/UX design.
            I build innovative solutions that blend clean code with beautiful interfaces.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Hire Me</a>
          </div>
        </div>

        <div className="profile-wrapper" style={{ flex: 0.8, minWidth: 250, textAlign: 'center' }}>
          <div className="profile-circle">
            <img src="/images/my-photo.png" alt="Madhesh" />
          </div>
          <div className="profile-name">Madhesh</div>
          <div className="profile-title">B.E Computer Science</div>
        </div>
      </section>

      <section>
        <div className="section-title">Quick Overview</div>
        <div className="cards-grid">
          {overview.map((item) => (
            <div className="card" key={item.title}>
              <div className="card-icon">{item.icon}</div>
              <h3 style={{ margin: '1rem 0 0.5rem' }}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
