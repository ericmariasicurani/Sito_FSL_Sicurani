import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Spagna() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main>
      <section className="page-hero">
        <img src="/bandiera-spagna.jpg" alt="" className="page-hero__bg" />
        <div className="page-hero__veil" />
        <div className="page-hero__content">
          <Link to="/" className="page-hero__back">← Torna all'Home</Link>
          <h1 className="page-hero__title">Family Corner</h1>
          <p className="page-hero__sub">A Coruña, Galizia · Gennaio 2025 · 3 settimane</p>
        </div>
      </section>

      {/* ── CONTESTO ───────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="two-col reveal">
            <div>
              <span className="sec-label">Il contesto</span>
              <h2 className="sec-title">L'esperienza in Spagna</h2>
              <div className="divider" />
              <p className="body-p">
                Nel <strong>gennaio 2025</strong> ho partecipato al FSL all'estero ad{' '}
                <strong>A Coruña</strong>, in Galizia, insieme ad altri 4 compagni di scuola.
                Abbiamo lavorato per 3 settimane presso <strong>Family Corner</strong>,
                una scuola privata d'inglese, dalle <strong>9:00 alle 14:00</strong>.
              </p>
              <p className="body-p">
                Il nostro compito principale era gestire la comunicazione digitale dell'azienda:
                social media, materiali grafici e sito web, il tutto in un ambiente
                completamente anglofono e ispanofono.
              </p>
            </div>
            <div className="info-box">
              {[
                ['Sede',    'Plaza Maestro Mateo 10, A Coruña'],
                ['Durata',  '3 settimane · Gennaio 2025'],
                ['Orario',  '09:00 – 14:00'],
                ['Team',    '5 studenti ITT Terni'],
                ['Settore', 'Formazione linguistica privata'],
              ].map(([k, v]) => (
                <div className="info-box__row" key={k}>
                  <span className="info-box__key">{k}</span>
                  <span className="info-box__val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATTIVITÀ ───────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="sec-label reveal">Le attività</span>
          <h2 className="sec-title reveal">Cosa abbiamo fatto</h2>
          <div className="divider reveal" />
          <div className="timeline">
            <div className="timeline__line" />

            <div className="timeline__item reveal">
              <div className="timeline__num">1</div>
              <div className="timeline__body">
                <h3 className="timeline__title">Social Media Management</h3>
                <p className="timeline__text">
                  Abbiamo gestito la pagina Instagram <strong>@familycornermesoiro</strong>,
                  creando e pubblicando contenuti con testi in inglese e spagnolo,
                  scelta degli hashtag e coerenza visiva del profilo.
                </p>
              </div>
            </div>

            <div className="timeline__item reveal">
              <div className="timeline__num">2</div>
              <div className="timeline__body">
                <h3 className="timeline__title">Locandine con Canva e AI</h3>
                <p className="timeline__text">
                  Abbiamo creato grafiche promozionali con <strong>Canva</strong> e usato{' '}
                  <strong>Gemini</strong> per ottimizzare i testi, producendo materiali
                  professionali in tempi rapidi.
                </p>
              </div>
            </div>

            <div className="timeline__item reveal">
              <div className="timeline__num">3</div>
              <div className="timeline__body">
                <h3 className="timeline__title">Sito web con Webnode</h3>
                <p className="timeline__text">
                  In 2 settimane abbiamo realizzato il sito del Learning Centre con{' '}
                  <strong>Webnode</strong>, acquistando il dominio, strutturando le pagine
                  e ottimizzando per la SEO. Il sito è apparso tra i{' '}
                  <strong>primi risultati su Google</strong> per "learning centre coruna".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERIA ───────────────────────────────────────────── */}
      <section className="section section--alt2">
        <div className="wrap">
          <span className="sec-label reveal">I lavori</span>
          <h2 className="sec-title reveal">Contenuti realizzati</h2>
          <div className="divider reveal" />

          <div className="gallery-small reveal">

            <div className="gallery-small__item">
              <div className="gallery-small__img-wrap">
                <img src="/posizione-sito.png" alt="Posizionamento Google" />
              </div>
              <div className="gallery-small__cap">
                <strong>Posizionamento su Google</strong>
                <p>Prime posizioni per "learning centre coruna", con 3 pagine indicizzate.</p>
              </div>
            </div>

            <div className="gallery-small__item">
              <div className="gallery-small__img-wrap">
                <img src="/apoyo-escolar.png" alt="Locandina Apoyo Escolar" />
              </div>
              <div className="gallery-small__cap">
                <strong>Locandina "Apoyo Escolar"</strong>
                <p>Grafica per il doposcuola realizzata con Canva, pubblicata sui social.</p>
              </div>
            </div>

            <div className="gallery-small__item">
              <div className="gallery-small__img-wrap">
                <img src="/chino-class.png" alt="Locandina Clase de Chino" />
              </div>
              <div className="gallery-small__cap">
                <strong>Locandina "Clase de Chino"</strong>
                <p>Materiale promozionale per i corsi di cinese con elementi culturali.</p>
              </div>
            </div>

            <div className="gallery-small__item">
              <div className="gallery-small__img-wrap">
                <img src="/social-preview.png" alt="Post Instagram Carnival Camp" />
              </div>
              <div className="gallery-small__cap">
                <strong>Post Instagram — Carnival Camp</strong>
                <p>Locandina pubblicata su @familycornermesoiro con interazioni reali.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section section--alt tc">
        <Link to="/italia" className="btn btn--green">
          Prossima esperienza: Italia &nbsp;→
        </Link>
      </section>

      <footer className="footer">
        <div className="footer__name">Eric Maria Sicurani</div>
        <div className="footer__line" />
        <div className="footer__sub">5BIA · ITT "Allievi-Sangallo" Terni · A.S. 2025/2026</div>
      </footer>
    </main>
  )
}