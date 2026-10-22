const sections = [
  { icon: '⌂', label: 'Inicio', active: true },
  { icon: '◷', label: 'Recordatorios' },
  { icon: '▦', label: 'Proyectos' },
  { icon: '◇', label: 'Notas' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#inicio" aria-label="Zonai, inicio">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="rune-frame" d="M24 3.8 39.7 12v19L24 44.2 8.3 31V12L24 3.8Z" />
              <path className="rune-line" d="M15.5 15.5h17L18 32.5h14.5" />
              <path className="rune-accent" d="m24 8.5 2 3.5-2 3.5-2-3.5 2-3.5ZM11.8 29.4l3.8.3.3 3.8-3.8-.3-.3-3.8ZM32.1 33.3l.3-3.8 3.8-.3-.3 3.8-3.8.3Z" />
              <circle className="rune-orb" cx="24" cy="24" r="2.1" />
            </svg>
          </span>
          <span>ZONAI<span className="brand-period">.</span></span>
        </a>

        <div className="workspace-label">TU ESPACIO</div>
        <nav aria-label="Navegación principal">
          {sections.map((section) => (
            <a
              className={`nav-link${section.active ? ' active' : ''}`}
              href={section.active ? '#inicio' : '#proximamente'}
              key={section.label}
            >
              <span className="nav-icon" aria-hidden="true">{section.icon}</span>
              {section.label}
              {section.label !== 'Inicio' && <span className="coming-soon">Pronto</span>}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="avatar">R</div>
          <div><strong>Mi espacio</strong><span>Personal</span></div>
          <span className="more" aria-hidden="true">···</span>
        </div>
      </aside>

      <main className="main-content" id="inicio">
        <header className="topbar">
          <span className="breadcrumb">Mi espacio <span>/</span> Inicio</span>
          <button className="profile-button" type="button" aria-label="Perfil">R</button>
        </header>

        <section className="welcome">
          <div className="eyebrow"><span className="status-dot" /> TU ESPACIO PERSONAL</div>
          <h1>Un poco más de <em>claridad.</em></h1>
          <p>Todo lo que tienes en mente, en un mismo lugar.</p>
        </section>

        <section className="overview" aria-label="Resumen">
          <article className="summary-card">
            <div className="card-topline"><span>RECORDATORIOS</span><span className="card-icon">◷</span></div>
            <div className="summary-value">—</div>
            <div className="summary-note">pendientes para hoy</div>
          </article>
          <article className="summary-card">
            <div className="card-topline"><span>PROYECTOS ACTIVOS</span><span className="card-icon">▦</span></div>
            <div className="summary-value">—</div>
            <div className="summary-note">un paso cada vez</div>
          </article>
          <article className="summary-card highlight-card">
            <div className="card-topline"><span>IDEAS GUARDADAS</span><span className="card-icon">◇</span></div>
            <div className="summary-value">—</div>
            <div className="summary-note">tu espacio para pensar</div>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel reminders-panel">
            <div className="panel-heading">
              <div><div className="eyebrow">A TENER EN CUENTA</div><h2>Recordatorios</h2></div>
              <button className="text-button" type="button">Ver todos <span>↗</span></button>
            </div>
            <div className="empty-state">
              <span className="empty-icon">◷</span>
              <strong>Tu día empieza aquí</strong>
              <p>Cuando conectemos el frontal con Zonai, tus recordatorios aparecerán aquí.</p>
            </div>
          </article>

          <article className="panel focus-panel">
            <div className="eyebrow">UN MOMENTO PARA TI</div>
            <h2>¿Qué tienes en mente?</h2>
            <p>Este espacio irá tomando forma con las cosas que quieras organizar.</p>
            <div className="focus-decoration" aria-hidden="true"><span>z</span></div>
            <button className="soft-button" type="button" disabled>Próximamente <span>↗</span></button>
          </article>
        </section>

        <footer>Un lugar para tus cosas. <span>Hecho para ti.</span></footer>
      </main>
    </div>
  )
}

export default App
