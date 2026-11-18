import SkillBar from '../components/SkillBar.jsx'

const languages = [
  { label: 'Java', percent: 95 },
  { label: 'Python', percent: 92 },
  { label: 'JavaScript', percent: 80 },
  { label: 'HTML5', percent: 98 },
  { label: 'CSS3', percent: 94 },
]

const coreConcepts = [
  { label: 'OOPs (Polymorphism, Inheritance, Encapsulation, Abstraction)', percent: 92 },
  { label: 'Data Structures', percent: 88 },
  { label: 'Algorithms', percent: 82 },
]

const communication = [
  { label: 'Verbal Communication', percent: 90 },
  { label: 'Written Communication', percent: 88 },
  { label: 'Presentation & Public Speaking', percent: 82 },
  { label: 'Active Listening', percent: 85 },
]

const interpersonal = [
  { label: 'Team Collaboration', percent: 92 },
  { label: 'Leadership', percent: 78 },
  { label: 'Adaptability', percent: 88 },
  { label: 'Problem Solving', percent: 90 },
]

const languagesSpoken = [
  { label: 'English (Professional)', percent: 90 },
  { label: 'Tamil (Native)', percent: 100 },
]

const loveDoing = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Crafting intuitive, engaging, and user-centered interfaces that people love to interact with.',
  },
  {
    icon: '🧩',
    title: 'Problem Solving',
    desc: 'Using OOPs principles to break down complex problems into elegant, reusable solutions.',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Building responsive, fast, and accessible websites that work seamlessly across devices.',
  },
]

export default function Skills() {
  return (
    <>
      <section>
        <div className="section-title">Technical Skills</div>
        <div className="cards-grid">
          <div className="card">
            <h3>💻 Programming Languages</h3>
            <div className="skill-bar-group">
              {languages.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="card">
            <h3>🎨 Design &amp; Frontend</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Responsive Web</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Wireframing</span>
              <span className="skill-tag">Prototyping</span>
            </div>
            <div style={{ marginTop: '0.8rem', borderTop: '1px solid rgba(59,130,246,0.15)', paddingTop: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8' }}>
                <span>Design confidence</span>
                <span>88%</span>
              </div>
              <div className="skill-bar-track" style={{ height: 6 }}>
                <div className="skill-bar-fill" style={{ width: '88%', height: 6 }} />
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📚 Core Concepts</h3>
            <div className="skill-bar-group">
              {coreConcepts.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="card">
            <h3>🛠️ Tools &amp; Platforms</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Git &amp; GitHub</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Android Studio</span>
            </div>
            <div style={{ marginTop: '0.3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8' }}>
                <span>Tool proficiency</span>
                <span>86%</span>
              </div>
              <div className="skill-bar-track" style={{ height: 6 }}>
                <div className="skill-bar-fill" style={{ width: '86%', height: 6 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Communication &amp; Soft Skills</div>
        <div className="cards-grid">
          <div className="card">
            <h3>🗣️ Communication Skills</h3>
            <div className="skill-bar-group">
              {communication.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="card">
            <h3>🤝 Interpersonal Skills</h3>
            <div className="skill-bar-group">
              {interpersonal.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="card">
            <h3>🌍 Languages</h3>
            <div className="skill-bar-group">
              {languagesSpoken.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">What I Love Doing</div>
        <div className="cards-grid">
          {loveDoing.map((item) => (
            <div className="card" key={item.title}>
              <div style={{ fontSize: '2rem' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
