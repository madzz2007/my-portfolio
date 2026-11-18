import { useEffect, useState } from 'react'

export default function CertificateModal({ cert, onClose }) {
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setImageError(false)
  }, [cert])

  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!cert) return null

  return (
    <div
      className="modal-overlay active"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-title">{cert.title}</div>
        <div className="modal-issuer">🏢 {cert.issuer}</div>
        <div className="modal-image-container">
          {!imageError ? (
            <img
              src={`/images/${cert.image}`}
              alt={cert.title}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="no-image">
              <span className="icon">🖼️</span>
              Certificate image not found<br />
              <span style={{ fontSize: '0.8rem' }}>File: {cert.image}</span>
            </div>
          )}
        </div>
        <div className="modal-details">
          {cert.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
