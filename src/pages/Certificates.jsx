import { useMemo, useState } from 'react'
import CertificateModal from '../components/CertificateModal.jsx'
import { certCategories, certStats } from '../data/certificates.js'

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const featuredCategories = useMemo(
    () =>
      certCategories
        .map((category) => ({
          ...category,
          certs: category.certs.filter((cert) => cert.featured),
        }))
        .filter((category) => category.certs.length > 0),
    []
  )

  const archiveCategories = useMemo(
    () =>
      certCategories
        .map((category) => ({
          ...category,
          certs: category.certs.filter((cert) => !cert.featured),
        }))
        .filter((category) => category.certs.length > 0),
    []
  )

  const hasMoreCertificates = archiveCategories.some((category) => category.certs.length > 0)

  const renderCategorySection = (category) => (
    <div className="category-section" key={category.key}>
      <div className="category-header">
        <span className={`category-badge ${category.badgeClass}`}>
          {category.emoji} {category.label}
        </span>
        <h2>{category.heading}</h2>
        <span className="count">
          {category.certs.length} Certificate{category.certs.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="cards-grid">
        {category.certs.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <span className={`cert-category-tag ${category.tagClass}`}>{category.label}</span>
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-details">
              {cert.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="cert-date">{cert.date}</div>
            <div className="cert-actions">
              {cert.badge && <span className="badge-verified">{cert.badge}</span>}
              <button className="view-cert-btn" onClick={() => setActiveCert(cert)}>
                🖼️ View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <section>
        <div className="section-title">🏆 Certificates & Achievements</div>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: 700 }}>
          Featured certificates are shown first so the most important work is easy to spot.{' '}
          <strong style={{ color: '#60a5fa' }}>Click "View Certificate" to see the actual certificate image.</strong>
        </p>

        <div className="cert-stats">
          {certStats.map((stat) => (
            <div className="stat-cert" key={stat.label}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {featuredCategories.map((category) => renderCategorySection(category))}

        {hasMoreCertificates && (
          <div className="archive-section">
            <div className="archive-header">
              <div>
                <h3>More Certificates</h3>
                <p>Browse the remaining achievements in the archive.</p>
              </div>
              <button className="view-more-btn" onClick={() => setShowAll((value) => !value)}>
                {showAll ? 'Show less' : 'View more'}
              </button>
            </div>

            {showAll && <div className="archive-content">{archiveCategories.map((category) => renderCategorySection(category))}</div>}
          </div>
        )}
      </section>

      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  )
}
