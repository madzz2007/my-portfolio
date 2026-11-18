import { useEffect, useState } from 'react'

export default function SkillBar({ label, percent, thin = false }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percent), 50)
    return () => clearTimeout(timer)
  }, [percent])

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-label">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="skill-bar-track" style={thin ? { height: 6 } : undefined}>
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%`, height: thin ? 6 : undefined }}
        />
      </div>
    </div>
  )
}
