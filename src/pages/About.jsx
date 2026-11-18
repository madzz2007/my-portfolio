const whatIDo = [
  '✔ Full-stack web development (HTML/CSS/JS)',
  '✔ UI/UX design & prototyping',
  '✔ Object-oriented programming in Java & Python',
  '✔ Creating responsive, accessible interfaces',
  '✔ Building real-world projects from scratch',
]

export default function About() {
  return (
    <>
      <section>
        <div className="section-title">About Me</div>
        <div className="cards-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>📖 My Journey</h3>
            <p style={{ marginBottom: '1rem' }}>
              I'm Madhesh, a passionate programmer and tech enthusiast who believes in the power of
              code to transform ideas into reality. My journey started with curiosity about how
              websites work, which evolved into a deep love for both frontend aesthetics and
              backend logic.
            </p>
            <p>
              I've completed <strong>5+ OOPs projects</strong> and <strong>5+ Python applications</strong>,
              always focusing on clean, maintainable code and user-centered design.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>🎓 What I Do</h3>
            <ul style={{ marginLeft: '1.2rem', lineHeight: 1.8 }}>
              {whatIDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Education & Experience</div>
        <div className="cards-grid">
          <div className="card">
            <div style={{ fontSize: '2rem' }}>🎓</div>
            <h3 style={{ margin: '0.5rem 0' }}>School Studies Completed</h3>
            <p style={{ color: '#2563eb', marginBottom: '0.5rem' }}>2025</p>
            <p>Finished school studies in 2025 and am currently pursuing CSE 2nd year with a focus on programming, software development, and problem-solving.</p>
          </div>
          <div className="card">
            <div style={{ fontSize: '2rem' }}>💼</div>
            <h3 style={{ margin: '0.5rem 0' }}>Project Portfolio</h3>
            <p style={{ marginBottom: '0.5rem' }}>5+ OOPs Projects • 5+ Python Apps • 1 Major Web Project</p>
            <p>Each project demonstrates problem-solving skills and practical implementation of core concepts.</p>
          </div>
        </div>
      </section>
    </>
  )
}
