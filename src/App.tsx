import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Gamepad2, Mail, FileText, ExternalLink } from 'lucide-react'
import { projects, type Project } from './projects'

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  return (
    <article className="project-card" onClick={() => onOpen(project)} tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}>
      <div className={`project-visual visual-${project.visual} accent-${project.accent}`}>
        <div className="visual-grid" />
        <div className="visual-glow" />
        {project.visual === 'tank' && <div className="tank-art"><i className="tank-tread"/><i className="tank-hull"/><i className="tank-top"/><i className="tank-gun"/></div>}
        {project.visual === 'physics' && <div className="physics-art"><i/><i/><i/><b/><b/></div>}
        {project.visual === 'food' && <div className="food-art"><i className="shop"/><i className="awning"/><i className="counter"/><b>🍔</b><b>🍟</b><b>🥤</b></div>}
        {project.visual === 'train' && <div className="train-art"><i className="train-body"/><i className="train-windows"/><i className="train-rail"/></div>}
        {project.visual === 'network' && <div className="network-art"><i/><i/><i/><i/><b/><b/><b/></div>}
        {project.visual === 'runner' && <div className="runner-art"><i/><i/><i/><b/></div>}
        <span className="visual-number">0{index + 1}</span>
        <span className="visual-type">{project.category.toUpperCase()} / {project.year}</span>
      </div>
      <div className="project-body">
        <div className="project-mini-meta"><span>◈ {project.stack.slice(0, 2).join(' · ')}</span><span>{project.status}</span></div>
        <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={15}/></div>
        <span className="project-role">{project.tagline}</span>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery = project.images?.length ? project.images : []
  const hasVideo = Boolean(project.videoUrl)

  return <div className="overlay" onMouseDown={onClose}>
    <div className="details-panel" role="dialog" aria-modal="true" aria-label={`${project.title} project details`} onMouseDown={e => e.stopPropagation()}>
      <button className="close-button" onClick={onClose} aria-label="Close project details">×</button>
      <div className="details-header">
        <span className="section-label">{project.category} / {project.year} / {project.status}</span>
        <h2>{project.title}</h2>
        <p className="details-tagline">{project.tagline}</p>
      </div>

      <section className="detail-media-section">
        <div className="detail-section-heading">
          <h3>Project media</h3>
          <span>SCROLL HORIZONTALLY →</span>
        </div>
        <div className="media-scroller">
          {gallery.length ? gallery.map((src, i) =>
            <div className="media-card image-media-card" key={src + i}>
              <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
              <span className="media-caption">SCREENSHOT {String(i + 1).padStart(2, '0')}</span>
            </div>
          ) : <div className="media-card placeholder-media-card">
            <div className={`gallery-art visual-${project.visual} accent-${project.accent}`}>
              <div className="visual-grid"/><div className="visual-glow"/>
              <span className="gallery-placeholder-title">{project.title}</span>
              <span className="gallery-placeholder-sub">ADD GAMEPLAY SCREENSHOTS TO THIS PROJECT</span>
            </div>
            <span className="media-caption">PROJECT PREVIEW PLACEHOLDER</span>
          </div>}
          {hasVideo && <div className="media-card video-media-card">
            <div className="video-frame">
              {project.videoUrl?.includes('youtube.com/embed/') || project.videoUrl?.includes('player.vimeo.com') ?
                <iframe src={project.videoUrl} title={`${project.title} gameplay video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/> :
                <video src={project.videoUrl} controls playsInline preload="metadata"/>
              }
            </div>
            <span className="media-caption">GAMEPLAY VIDEO</span>
          </div>}
        </div>
      </section>

      <section className="detail-info">
        <div className="detail-section-heading"><h3>About the project</h3><span>OVERVIEW</span></div>
        <p className="detail-description">{project.description}</p>
        <h4>What I worked on</h4>
        <ul>{project.highlights.map(x => <li key={x}>{x}</li>)}</ul>
        <div className="detail-section-heading tech-heading"><h3>Technologies</h3><span>TOOLS & SYSTEMS</span></div>
        <div className="chips">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
        <p className="details-footnote">Project details describe the prototype and my individual contributions. Add project-specific screenshots and recordings as they become available.</p>
      </section>
    </div>
  </div>
}

function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  return <main className="page">
    <header className="header">
      <a href="#top" className="identity"><strong>Samarth Mali<span>.</span></strong><small>Unity Game Developer</small></a>
      <nav className="social-nav" aria-label="Social links">
        <a href="https://github.com/malisamarth" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
        <a href="https://debuggeddream.itch.io/" target="_blank" rel="noreferrer" aria-label="itch.io"><Gamepad2/></a>
        <a className="resume-link" href="/Samarth-Mali-Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={12}/></a>
      </nav>
    </header>

    <section className="intro" id="top">
      <div className="avatar"><span>SM</span></div>
      <div className="intro-copy">
        <p className="intro-overline">GAMEPLAY PROGRAMMING · C# · UNITY</p>
        <h1>Building interactive experiences through code.</h1>
        <p>Game developer specializing in gameplay systems and interactive mechanics. I enjoy writing clean, maintainable code and tackling new challenges in game development.</p>
      </div>
    </section>

    <section className="projects-section" id="work">
      <div className="section-heading"><h2>Projects</h2><span>SELECTED WORK / 2025—2026</span></div>
      <div className="project-grid">
        {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected}/>)}
      </div>
      <p className="project-note">More prototypes and experiments are being documented.</p>
    </section>

    <section className="education-section">

      <div className="education-grid">

        <div className="education-column">
          <div className="section-heading">
            <h2>Education</h2>
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <article className="education-card">
            <b>B.Tech in Computer Science & Engineering</b>
            <span>Vishwakarma University, Pune</span>
            <small>2023 — 2027</small>
          </article>
        </div>

        <div className="education-column">
          <div className="section-heading">
            <h2>Work Experience</h2>
            <span>PROFESSIONAL EXPERIENCE</span>
          </div>

          <article className="education-card experience-card">

            <div className="experience-content">
              <b>Unity Developer Intern</b>
              <span>KidloLand Kids & Toddler Games</span>
              <small>Game Development · Unity · C#</small>

              <a
                className="certificate-link"
                href="YOUR_GOOGLE_DRIVE_LINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate ↗
              </a>
            </div>

            <img
              className="company-logo"
              src="https://www.idzdigital.com/img/KidlolandLogoTransparentBluetext.svg"
              alt="KidloLand company logo"
            />

          </article>
        </div>

      </div>

    </section>

    <section className="technical-section" id="skills">
      <div className="section-heading"><h2>Technical Experience</h2><span>TOOLS & TECHNOLOGIES</span></div>
      <div className="chips">
        {['C#','Unity Engine','FishNet','Unity Physics','ScriptableObjects','C++','JavaScript','Git','GitHub','Gameplay Systems','OOP','Debugging'].map(x => <span key={x}>{x}</span>)}
      </div>
    </section>

    <section className="about-section" id="about">
      <div className="about-inner">
        <span className="section-label">A LITTLE ABOUT ME</span>
        <h2>Hi, I'm Samarth.</h2>
        <p>I'm a 20-year-old game developer and Computer Science student currently building projects with Unity and C#. I enjoy exploring how gameplay systems work, from movement and physics to multiplayer interactions.</p>
        <p>I've worked on <strong>15+ Unity game prototypes</strong> during my internship at KidloLand, developing gameplay features, reusable components, audio systems and multiplayer functionality using FishNet.</p>
        <p>I'm interested in gameplay programming and the engineering behind responsive, enjoyable player experiences. I'm always learning, experimenting and building.</p>
        <a className="about-contact" href="mailto:samarthmali880@gmail.com">Want to know more? Get in touch <ArrowUpRight size={14}/></a>
      </div>
    </section>

    <footer className="footer">
      <span>© 2026 SAMARTH MALI</span><a href="mailto:samarthmali880@gmail.com"><Mail size={13}/> CONTACT</a>
    </footer>
    {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)}/>}
  </main>
}
export default App
