import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Italia() {
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
        <img src="/bandiera-italia.jpg" alt="" className="page-hero__bg" />
        <div className="page-hero__veil" />
        <div className="page-hero__content">
          <Link to="/" className="page-hero__back">← Torna all'Home</Link>
          <h1 className="page-hero__title">ComputerRivo</h1>
          <p className="page-hero__sub">Terni, Umbria · Giugno + Settembre 2025 · 6 settimane totali</p>
        </div>
      </section>

      {/* ── CONTESTO ───────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="two-col reveal">
            <div>
              <span className="sec-label">Il contesto</span>
              <h2 className="sec-title">L'esperienza in Italia</h2>
              <div className="divider" />
              <p className="body-p">
                Presso <strong>ComputerRivo</strong>, centro di assistenza informatica di Terni,
                ho svolto due periodi di PCTO: <strong>giugno 2025</strong> e{' '}
                <strong>settembre 2025</strong>, 3 settimane ciascuno.
              </p>
              <p className="body-p">
                Con me altri 2 studenti dell'ITT. Orario full time:{' '}
                <strong>9:00–13:00 e 16:00–20:00</strong>, per 8 ore al giorno.
              </p>
            </div>
            <div className="info-box">
              {[
                ['Sede',       'Terni, Umbria'],
                ['Periodo 1',  'Giugno 2025 · 3 settimane'],
                ['Periodo 2',  'Settembre 2025 · 3 settimane'],
                ['Orario',     '09:00–13:00 / 16:00–20:00'],
                ['Ore/giorno', '8 ore'],
                ['Settore',    'Assistenza informatica'],
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

      {/* ── PERIODO 1 ──────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="period-wrap reveal">
            <span className="period-badge">Periodo 1</span>
            <h2 className="period-title">Giugno 2025</h2>
          </div>

          <div className="act-grid">
            <div className="act-card reveal">
              <div className="act-card__header">
                <div className="act-card__sym">›_</div>
                <h3>Assistenza remota con AnyDesk</h3>
              </div>
              <p>
                Ho usato <strong>AnyDesk</strong> per connettermi ai PC dei clienti a distanza
                e risolvere problemi software senza essere fisicamente presenti.
              </p>
            </div>

            <div className="act-card reveal">
              <div className="act-card__header">
                <div className="act-card__sym">[P]</div>
                <h3>Problemi con le stampanti</h3>
              </div>
              <ul className="act-list">
                <li>
                  <strong>Testine ostruite:</strong> stampe sfocate o righe mancanti.
                  Soluzione: Impostazioni → Manutenzione → Pulizia testine.
                </li>
                <li>
                  <strong>Carta non rilevata:</strong> spegnere, rimuovere tutta la carta,
                  aspettare 30 secondi, reinserire e riaccendere.
                </li>
              </ul>
            </div>

            <div className="act-card reveal">
              <div className="act-card__header">
                <div className="act-card__sym">HW</div>
                <h3>Smontaggio e studio dell'hardware</h3>
              </div>
              <ul className="act-list">
                <li><strong>CPU</strong> — cervello del computer</li>
                <li><strong>RAM</strong> — memoria temporanea</li>
                <li><strong>Scheda madre</strong> — collega tutto</li>
                <li><strong>HDD / SSD</strong> — memoria permanente</li>
                <li><strong>GPU</strong> — elaborazione grafica</li>
                <li><strong>Alimentatore</strong> — fornisce corrente</li>
              </ul>
            </div>

            <div className="act-card reveal">
              <div className="act-card__header">
                <div className="act-card__sym">OS</div>
                <h3>Installazione Windows da chiavetta</h3>
              </div>
              <p>
                Abbiamo installato Windows su computer dei clienti usando una chiavetta USB
                già preparata: si avvia il PC dalla chiavetta tramite BIOS e si segue
                la procedura guidata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERIODO 2 ──────────────────────────────────────────── */}
      <section className="section section--alt2">
        <div className="wrap">
          <div className="period-wrap reveal">
            <span className="period-badge period-badge--2">Periodo 2</span>
            <h2 className="period-title">Settembre 2025</h2>
          </div>

          <div className="act-grid">
            <div className="act-card act-card--green reveal">
              <div className="act-card__header">
                <div className="act-card__sym">›_</div>
                <h3>Assistenza remota avanzata</h3>
              </div>
              <p>
                Ho gestito in autonomia sessioni di supporto remoto più complesse:
                rimozione virus, aggiornamenti bloccati, ripristino di sistema.
              </p>
            </div>

            <div className="act-card act-card--green reveal">
              <div className="act-card__header">
                <div className="act-card__sym">HW</div>
                <h3>Sostituzione componenti</h3>
              </div>
              <p>
                Ho sostituito RAM difettose, HDD con SSD (con migrazione dati)
                e dissipatori. Ho imparato a verificare la compatibilità prima
                dell'acquisto e a smontare il case in modo ordinato.
              </p>
            </div>

            <div className="act-card act-card--green reveal">
              <div className="act-card__header">
                <div className="act-card__sym">LAN</div>
                <h3>Configurazione di rete</h3>
              </div>
              <p>
                Configurazione base di reti locali: indirizzi IP, DNS, router
                e stampa in rete. Installazione di software e suite Office
                per clienti aziendali.
              </p>
            </div>

            <div className="act-card act-card--green reveal">
              <div className="act-card__header">
                <div className="act-card__sym">CX</div>
                <h3>Relazione con il cliente</h3>
              </div>
              <p>
                Ho imparato a spiegare problemi tecnici in modo semplice,
                gestire la preoccupazione del cliente e rispettare
                i tempi di riparazione promessi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt tc">
        <Link to="/competenze" className="btn btn--gold">
          Vedi le competenze acquisite &nbsp;→
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