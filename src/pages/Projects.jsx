import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'madzz2007'

const FALLBACK_REPOS = [
  {
    id: 'fallback-python-1',
    name: 'python-automation-projects',
    description: 'Python-based automation tools and scripting experiments.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    language: 'Python',
  },
  {
    id: 'fallback-java-1',
    name: 'java-oops-practice',
    description: 'Object-oriented Java projects focused on clean design and problem solving.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    language: 'Java',
  },
  {
    id: 'fallback-web-1',
    name: 'portfolio-website',
    description: 'React and Vite portfolio site showcasing projects and certifications.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    language: 'JavaScript',
  },
  {
    id: 'fallback-other-1',
    name: 'engineering-builds',
    description: 'Miscellaneous engineering prototypes and learning projects.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    language: 'Mixed Source',
  },
]

function getRepoEmoji(language) {
  if (!language) return '📁'
  const lang = language.toLowerCase()
  if (lang.includes('html') || lang.includes('css') || lang.includes('javascript')) return '🏠✨'
  if (lang.includes('java') && !lang.includes('script')) return '🏦'
  if (lang.includes('python')) return '🐍'
  return '💻'
}

function RepoCard({ repo }) {
  const lang = repo.language ? repo.language : 'Mixed Source'
  const cleanTitle = (repo.name || 'Project').replace(/[-_]/g, ' ')
  const description = repo.description
    ? repo.description
    : 'No description added. Visit the source repository link to inspect the codebase structure.'

  return (
    <div className="card">
      <div style={{ fontSize: '3rem' }}>{getRepoEmoji(repo.language)}</div>
      <div className="project-title" style={{ textTransform: 'capitalize' }}>{cleanTitle}</div>
      <div className="project-stack">{lang}</div>
      <p>{description}</p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '1rem', color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}
      >
        View Code on GitHub →
      </a>
    </div>
  )
}

function CategorySection({ title, repos }) {
  if (repos.length === 0) return null
  return (
    <div className="project-category-block" style={{ marginBottom: '3rem' }}>
      <div className="section-title" style={{ marginBottom: '1.5rem' }}>{title}</div>
      <div className="cards-grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

function organizeRepos(repos) {
  const pythonRepos = []
  const javaRepos = []
  const webRepos = []
  const otherRepos = []
  let pythonCount = 0

  repos.forEach((repo) => {
    const lang = repo.language ? repo.language : 'Mixed Source'
    const cleanLang = lang.toLowerCase()

    if (cleanLang === 'python') {
      pythonRepos.push(repo)
      pythonCount++
    } else if (cleanLang === 'java') {
      javaRepos.push(repo)
    } else if (['html', 'css', 'javascript'].includes(cleanLang)) {
      webRepos.push(repo)
    } else {
      otherRepos.push(repo)
    }
  })

  return {
    buckets: { python: pythonRepos, java: javaRepos, web: webRepos, other: otherRepos },
    stats: {
      total: repos.length,
      python: pythonCount,
      web: repos.length - pythonCount,
    },
  }
}

export default function Projects() {
  const [status, setStatus] = useState('loading') // loading | success | error
  const [buckets, setBuckets] = useState({ python: [], java: [], web: [], other: [] })
  const [stats, setStats] = useState({ total: 0, python: 0, web: 0 })

  useEffect(() => {
    let cancelled = false

    async function loadGitHubProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
              'User-Agent': 'Mozilla/5.0',
            },
          }
        )

        if (!response.ok) {
          const errorData = await response.json().catch(() => null)
          const message = errorData?.message?.toLowerCase() || ''
          if (response.status === 403 || message.includes('rate limit')) {
            throw new Error('GitHub API rate limit exceeded.')
          }
          throw new Error('Could not pull repositories from GitHub.')
        }

        const repos = await response.json()
        const originalRepos = repos.filter((repo) => !repo.fork)
        const data = organizeRepos(originalRepos)

        if (!cancelled) {
          setBuckets(data.buckets)
          setStats(data.stats)
          setStatus('success')
        }
      } catch (error) {
        console.error(error)
        if (!cancelled) {
          const fallbackData = organizeRepos(FALLBACK_REPOS)
          setBuckets(fallbackData.buckets)
          setStats(fallbackData.stats)
          setStatus('success')
        }
      }
    }

    loadGitHubProjects()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <section id="dynamic-projects-section">
        {status === 'loading' && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            Connecting to GitHub and organizing projects...
          </div>
        )}

        {status === 'success' && (
          <>
            <CategorySection title="Python Projects" repos={buckets.python} />
            <CategorySection title="Java OOPs Projects" repos={buckets.java} />
            <CategorySection title="Web Development Projects" repos={buckets.web} />
            <CategorySection title="Other Engineering Builds" repos={buckets.other} />
          </>
        )}
      </section>

      <section>
        <div className="section-title">Project Stats</div>
        <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}>
          <div className="card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
              {status === 'success' ? stats.total : '...'}
            </div>
            <h3>Total Projects</h3>
            <p>Live from GitHub</p>
          </div>
          <div className="card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
              {status === 'success' ? stats.python : '...'}
            </div>
            <h3>Python Projects</h3>
            <p>Real-world automation</p>
          </div>
          <div className="card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>
              {status === 'success' ? stats.web : '...'}
            </div>
            <h3>Web & Other</h3>
            <p>UI/UX & Frontend Builds</p>
          </div>
        </div>
      </section>
    </>
  )
}
