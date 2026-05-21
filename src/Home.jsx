import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function reveal() {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
  return () => obs.disconnect()
}

export default function Home() {
  useEffect(reveal, [])

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__grid" />
        <div className="hero__mesh" />
        <div className="hero__inner">
          <span className="hero__eyebrow">
            ◆ &nbsp; Percorso per le Competenze Trasversali e l'Orientamento
          </span>
          <h1 className="hero__name">
            Eric Maria<br /><em>Sicurani</em>
          </h1>
          <p className="hero__meta">
            5BIA &nbsp;·&nbsp; ITT "Allievi-Sangallo" Terni &nbsp;·&nbsp; A.S. 2025 / 2026
          </p>
          <p className="hero__desc">
            Un percorso formativo tra Spagna e Italia che ha trasformato la teoria
            in competenze reali. Tre settimane a A Coruña, sei settimane a Terni:
            ambienti professionali, sfide concrete, crescita autentica.
          </p>
          <div className="hero__cta">
            <Link to="/spagna"     className="btn btn--gold">Spagna · Family Corner</Link>
            <Link to="/italia"     className="btn btn--green">Italia · ComputerRivo</Link>
            <Link to="/competenze" className="btn btn--ghost">Competenze acquisite</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ── STATISTICHE ────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="sec-label reveal">Il percorso</span>
          <h2 className="sec-title reveal">FSL in numeri</h2>
          <div className="divider reveal" />
          <div className="stats reveal">
            {[
              { n: '9',  l: 'Settimane totali' },
              { n: '2',  l: 'Paesi coinvolti' },
              { n: '2',  l: 'Aziende' },
              { n: '3',  l: 'Periodi distinti' },
            ].map(({ n, l }) => (
              <div className="stat" key={l}>
                <div className="stat__n">{n}</div>
                <div className="stat__l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESPERIENZE ─────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <span className="sec-label reveal">Le esperienze</span>
          <h2 className="sec-title reveal">Due contesti, due settori</h2>
          <div className="divider reveal" />
          <div className="exp-grid">
            <Link to="/spagna" className="exp-card reveal">
              <div className="exp-card__flag"
                style={{ backgroundImage: "url('/bandiera-spagna.jpg')" }}>
                <span className="exp-card__flag-label">Gennaio 2025 · A Coruña</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">Family Corner</h3>
                <p className="exp-card__sub">Scuola privata d'inglese · Galizia, Spagna</p>
                <p className="exp-card__desc">
                  Social media management, creazione di contenuti con Canva e intelligenza
                  artificiale, sviluppo sito web con Webnode. 3 settimane, 5 ore al giorno.
                </p>
                <span className="exp-card__arrow">Scopri l'esperienza &nbsp;→</span>
              </div>
            </Link>

            <Link to="/italia" className="exp-card reveal reveal-delay-2">
              <div className="exp-card__flag"
                style={{ backgroundImage: "url('/bandiera-italia.jpg')" }}>
                <span className="exp-card__flag-label">Giugno + Settembre 2025 · Terni</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">ComputerRivo</h3>
                <p className="exp-card__sub">Assistenza informatica · Terni, Umbria</p>
                <p className="exp-card__desc">
                  Supporto remoto con AnyDesk, riparazione hardware, installazione
                  Windows da zero. 6 settimane totali, 8 ore al giorno.
                </p>
                <span className="exp-card__arrow">Scopri l'esperienza &nbsp;→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILL PREVIEW ──────────────────────────────────────── */}
      <section className="section section--alt2">
        <div className="wrap tc">
          <span className="sec-label reveal">Le competenze</span>
          <h2 className="sec-title sec-title--center reveal">
            Cosa ho davvero imparato
          </h2>
          <div className="divider divider--center reveal" />
          <p className="sec-lead sec-lead--center reveal">
            Oltre le competenze tecniche, l'FSL mi ha formato come professionista.
            Ogni settimana è stata un'occasione per crescere in modo concreto.
          </p>
          <div className="pills reveal">
            {[
              { l: 'Social Media Management',     g: false },
              { l: 'Grafica con Canva e AI',       g: false },
              { l: 'Sviluppo Web & SEO',           g: false },
              { l: 'Assistenza Remota AnyDesk',    g: true  },
              { l: 'Hardware & Componentistica',   g: true  },
              { l: 'Installazione Windows',        g: true  },
              { l: 'Problem Solving',              g: false },
              { l: 'Lavoro in Team',               g: false },
              { l: 'Adattabilità Internazionale',  g: false },
            ].map(({ l, g }) => (
              <span className="pill" key={l}>
                <span className={`pill__dot${g ? ' pill__dot--green' : ''}`} />
                {l}
              </span>
            ))}
          </div>
          <div className="mt-2">
            <Link to="/competenze" className="btn btn--gold">
              Vedi tutte le competenze &nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer__name">Eric Maria Sicurani</div>
        <div className="footer__line" />
        <div className="footer__sub">
          5BIA · ITT "Allievi-Sangallo" Terni · A.S. 2025/2026
          &nbsp;&nbsp;·&nbsp;&nbsp; Presentazione FSL per l'Esame di Stato
        </div>
      </footer>
    </main>
  )
}