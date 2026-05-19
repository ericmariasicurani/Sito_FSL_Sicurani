import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AREE = [
  {
    label: 'Area Digitale & Creativa',
    titolo: 'Comunicazione e Web',
    exp: 'Spagna · Family Corner',
    items: [
      {
        s: 'SM',
        title: 'Social Media Management',
        desc: 'Pianificazione, creazione e pubblicazione di contenuti su Instagram. Analisi del pubblico, scelta degli hashtag, coerenza visiva del profilo aziendale. Ho imparato che ogni post è una decisione strategica, non solo estetica.',
      },
      {
        s: 'GD',
        title: 'Graphic Design con Canva',
        desc: 'Realizzazione di locandine promozionali, grafiche per social e materiali stampati. Uso professionale di template, palette colori e tipografia per mantenere un\'identità visiva coerente e riconoscibile.',
      },
      {
        s: 'AI',
        title: 'Intelligenza Artificiale applicata',
        desc: 'Utilizzo di Gemini e altri strumenti AI per generare e ottimizzare testi. Ho sviluppato un approccio critico: l\'AI amplifica le capacità umane ma richiede direzione, valutazione e revisione da parte di chi la usa.',
      },
      {
        s: 'WB',
        title: 'Sviluppo sito web con Webnode',
        desc: 'Creazione di un sito web completo in 2 settimane: struttura delle pagine, contenuti in inglese, gestione delle immagini, configurazione del dominio. Il sito ha ottenuto posizionamento reale su Google.',
      },
      {
        s: 'SEO',
        title: 'Ottimizzazione SEO',
        desc: 'Ottimizzazione dei contenuti per i motori di ricerca: titoli, meta descrizioni, testi ottimizzati per parole chiave. Risultato concreto: prime posizioni su Google per "learning centre coruna".',
      },
      {
        s: 'RC',
        title: 'Sviluppo React & CSS',
        desc: 'Realizzazione di questo sito di presentazione con React e Vite. Componenti riutilizzabili, routing con React Router, design system CSS custom, animazioni scroll-reveal.',
      },
    ],
    variant: '',
  },
  {
    label: 'Area Tecnica & Informatica',
    titolo: 'Hardware & Assistenza',
    exp: 'Italia · ComputerRivo',
    items: [
      {
        s: 'REM',
        title: 'Assistenza remota con AnyDesk',
        desc: 'Connessione ai computer dei clienti a distanza, diagnosi e risoluzione di problemi software senza presenza fisica. Gestione della comunicazione con il cliente durante tutta la sessione di supporto.',
      },
      {
        s: 'HW',
        title: 'Hardware & Componentistica',
        desc: 'Smontaggio e rimontaggio di computer desktop. Identificazione, funzione e sostituzione di CPU, RAM, scheda madre, HDD/SSD, GPU, alimentatore, dissipatori. Conoscenza pratica dell\'architettura di un PC.',
      },
      {
        s: '[P]',
        title: 'Riparazione stampanti',
        desc: 'Diagnosi e risoluzione dei problemi più comuni: pulizia testine, reset sensori carta, manutenzione meccanica. Capacità di spiegare chiaramente il problema al cliente e indicare la soluzione corretta.',
      },
      {
        s: 'OS',
        title: 'Installazione Windows',
        desc: 'Creazione chiavetta USB bootabile con Media Creation Tool, configurazione BIOS, installazione guidata di Windows, partizionamento disco, attivazione e installazione driver. Processo eseguito su macchine reali di clienti.',
      },
      {
        s: 'LAN',
        title: 'Reti & Configurazione',
        desc: 'Configurazione di reti locali: impostazione indirizzi IP statici e dinamici, risoluzione problemi DNS, configurazione router, stampa in rete. Installazione e configurazione di software aziendali e suite Office.',
      },
      {
        s: 'SWP',
        title: 'Sostituzione componenti',
        desc: 'Swap di RAM, sostituzione HDD con SSD con migrazione dati, cambio pasta termica e dissipatori. Verifica compatibilità componenti prima dell\'acquisto, smontaggio e rimontaggio ordinato e sicuro del case.',
      },
    ],
    variant: '--green',
  },
]

const TRASVERSALI = [
  {
    s: '01',
    title: 'Adattabilità internazionale',
    desc: 'Lavorare in Spagna in inglese e spagnolo, in un contesto culturale completamente diverso. Ho imparato che adattarsi non significa cambiare se stessi, ma saper leggere il contesto e comportarsi di conseguenza.',
  },
  {
    s: '02',
    title: 'Lavoro di squadra eterogeneo',
    desc: 'Collaborare con compagni di scuola in Spagna e con colleghi sconosciuti in Italia. In entrambi i casi ho imparato a valorizzare le competenze degli altri, dividere i compiti in modo intelligente e gestire le divergenze.',
  },
  {
    s: '03',
    title: 'Problem solving metodico',
    desc: 'Affrontare problemi reali — da guasti hardware a strategie di comunicazione — con un approccio sistematico: raccogliere informazioni, formulare ipotesi, testare, valutare. Un metodo applicabile in qualunque ambito.',
  },
  {
    s: '04',
    title: 'Autonomia e iniziativa',
    desc: 'In un contesto professionale nessuno ti segue ogni minuto. Ho imparato a prendere iniziativa, proporre soluzioni, chiedere aiuto quando necessario e portare a termine i compiti in modo indipendente.',
  },
  {
    s: '05',
    title: 'Gestione del tempo professionale',
    desc: 'Rispettare orari lavorativi reali — 5 ore al giorno in Spagna, 8 in Italia — scadenze e priorità. Ho capito cosa significa lavorare con continuità e mantenere la qualità durante tutta la giornata.',
  },
  {
    s: '06',
    title: 'Comunicazione professionale',
    desc: 'Spiegare concetti tecnici in modo semplice a clienti non esperti, gestire situazioni di stress, essere onesto e affidabile. La comunicazione efficace è una competenza tecnica, non solo una qualità personale.',
  },
]

export default function Competenze() {
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
      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <section className="page-hero page-hero--plain">
        <div className="page-hero__mesh" />
        <div className="page-hero__content">
          <Link to="/" className="page-hero__back">← Torna all'Home</Link>
          <h1 className="page-hero__title">Competenze acquisite</h1>
          <p className="page-hero__sub">
            9 settimane di PCTO · 2 paesi · 2 aziende · competenze reali
          </p>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="wrap tc">
          <p className="sec-lead sec-lead--center reveal" style={{ maxWidth: '820px' }}>
            Il PCTO mi ha permesso di sviluppare competenze in tre aree distinte:
            la <strong style={{ color: 'var(--gold)' }}>comunicazione digitale</strong> e
            il marketing (Spagna), l'<strong style={{ color: 'var(--green-light)' }}>informatica
            hardware e software</strong> (Italia), e le <strong style={{ color: 'var(--text)' }}>competenze
            trasversali</strong> che valgono in qualunque contesto professionale.
          </p>
        </div>
      </section>

      {/* ── AREE TECNICHE ──────────────────────────────────────── */}
      {AREE.map(({ label, titolo, exp, items, variant }, idx) => (
        <section key={label} className={`section${idx % 2 === 0 ? '' : ' section--alt2'}`}>
          <div className="wrap">
            <div className="comp-area-title reveal">
              <div>
                <span className="sec-label">{label}</span>
                <h2 className="sec-title" style={{ marginBottom: 0 }}>{titolo}</h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: '0.3rem', letterSpacing: '1px' }}>
                  {exp}
                </p>
              </div>
              <div className="comp-area-line" />
            </div>

            <div className="comp-grid reveal">
              {items.map(({ s, title, desc }) => (
                <div className={`comp-card${variant ? ' comp-card' + variant : ''}`} key={title}>
                  <div className="comp-card__sym">{s}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── COMPETENZE TRASVERSALI ─────────────────────────────── */}
      <section className="section section--alt3">
        <div className="wrap">
          <div className="comp-area-title reveal">
            <div>
              <span className="sec-label">Competenze trasversali</span>
              <h2 className="sec-title" style={{ marginBottom: 0 }}>Soft Skills</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: '0.3rem', letterSpacing: '1px' }}>
                Spagna + Italia · entrambe le esperienze
              </p>
            </div>
            <div className="comp-area-line" />
          </div>

          <div className="comp-grid reveal">
            {TRASVERSALI.map(({ s, title, desc }) => (
              <div className="comp-card comp-card--blue" key={title}>
                <div className="comp-card__sym">{s}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUSIONI ────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="sec-label reveal">Riflessione finale</span>
          <h2 className="sec-title reveal">Conclusioni</h2>
          <div className="divider reveal" />

          <div className="concl-grid reveal">
            <div className="concl-card">
              <div className="concl-card__num">01</div>
              <h3 className="concl-card__title">Il PCTO cambia il modo di vedere il lavoro</h3>
              <p className="concl-card__text">
                Prima del PCTO il "mondo del lavoro" era un concetto astratto. Dopo 9 settimane
                in due aziende reali, in due paesi diversi, è diventato qualcosa di concreto e
                comprensibile. Ho visto come funziona un'azienda dall'interno, quali sono le
                dinamiche reali, cosa si aspetta un datore di lavoro da un collaboratore.
              </p>
            </div>

            <div className="concl-card">
              <div className="concl-card__num">02</div>
              <h3 className="concl-card__title">La teoria scolastica trova finalmente un senso</h3>
              <p className="concl-card__text">
                Molte cose studiate a scuola — reti, sistemi operativi, comunicazione —
                che sembravano astratte hanno trovato un'applicazione pratica immediata.
                Capire il perché di ciò che si studia cambia completamente il modo in cui
                lo si apprende e lo si ricorda. Il PCTO mi ha motivato a studiare con più consapevolezza.
              </p>
            </div>

            <div className="concl-card">
              <div className="concl-card__num">03</div>
              <h3 className="concl-card__title">L'esperienza internazionale è un vantaggio concreto</h3>
              <p className="concl-card__text">
                Lavorare in Spagna in inglese, in un contesto culturale diverso, mi ha dato
                una sicurezza e una flessibilità che nessun corso di lingua avrebbe potuto darmi.
                Ho capito che la comunicazione internazionale è una competenza fondamentale nel
                mondo professionale di oggi, e che costruirla richiede esperienza diretta.
              </p>
            </div>

            <div className="concl-card">
              <div className="concl-card__num">04</div>
              <h3 className="concl-card__title">Cosa porto con me</h3>
              <p className="concl-card__text">
                Da questa esperienza porto competenze tecniche concrete — gestire i social,
                costruire un sito, risolvere problemi hardware, usare strumenti professionali —
                ma soprattutto porto un metodo: affrontare le situazioni nuove con curiosità,
                metodo e iniziativa. Questa è la competenza che vale in qualunque contesto futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ─────────────────────────────────────────── */}
      <section className="section section--alt2 tc">
        <div className="wrap">
          <span className="sec-label reveal">Esplora il percorso</span>
          <h2 className="sec-title sec-title--center reveal">Scopri le esperienze</h2>
          <div className="divider divider--center reveal" />
          <div className="hero__cta reveal">
            <Link to="/spagna" className="btn btn--gold">Spagna · Family Corner</Link>
            <Link to="/italia" className="btn btn--green">Italia · ComputerRivo</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__name">Eric Maria Sicurani</div>
        <div className="footer__line" />
        <div className="footer__sub">5BIA · ITT "Allievi-Sangallo" Terni · A.S. 2025/2026</div>
      </footer>
    </main>
  )
}