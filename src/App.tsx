import { useId } from 'react'
import { assets } from './assets'
import { programs, reasons, stats, timeline, type Program } from './data'

const TREND_LINE =
  'M5.56952 3.51501C8.76901 3.64558 12.5638 4.1059 15.7721 4.6678C29.442 7.06183 43.6917 7.15785 57.3087 9.78241C67.0195 11.654 77.3287 15.3025 87.0276 17.9729C115.532 25.7432 143.859 35.1385 171.954 46.1411C189.228 53.0083 206.379 61.9812 223.729 68.304C226.542 69.3301 229.875 64.4875 232.902 72.5602L282.923 92.3666C296.429 97.5374 310.133 101.791 323.623 106.934C340.044 113.193 356.393 117.622 373.04 122.021C381.479 124.251 389.922 126.985 398.395 128.905C404.982 130.359 412.374 131.172 419.025 132.23L439.148 135.401C441.543 135.786 447.111 136.984 449.281 136.937'

function WeightTrendChart() {
  const uid = useId().replace(/:/g, '')

  return (
    <svg
      className="trend-chart"
      viewBox="0 0 454 144.572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      overflow="visible"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`${uid}-clip`}>
          <rect className="trend-clip" x="-4" y="-4" width="462" height="154" />
        </clipPath>
        <filter id={`${uid}-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g clipPath={`url(#${uid}-clip)`}>
        <path
          d="M5.56952 3.51501C8.76901 3.64558 12.5638 4.1059 15.7721 4.6678C29.442 7.06183 43.6917 7.15785 57.3087 9.78241C67.0195 11.654 77.3287 15.3025 87.0276 17.9729C115.532 25.7432 143.859 35.1385 171.954 46.1411C189.228 53.0083 206.379 61.9812 223.729 68.304C226.542 69.3301 229.875 64.4875 232.902 72.5602L282.923 92.3666C296.429 97.5374 310.133 101.791 323.623 106.934C340.044 113.193 356.393 117.622 373.04 122.021C381.479 124.251 389.922 126.985 398.395 128.905C404.982 130.359 412.374 131.172 419.025 132.23L439.148 135.401C441.543 135.786 447.111 136.984 449.281 136.937C448.365 138.415 447.999 138.798 448.174 141.018C444.575 139.89 434.867 138.776 431.017 138.21L400.389 133.374C390.671 131.718 380.675 128.146 370.998 125.637C340.841 117.82 310.825 107.39 281.075 96.0346L234.107 77.3442C233.497 77.11 230.542 76.0566 230.064 76.0887C227.96 76.2293 226.656 77.2551 224.418 76.5148C222.361 76.0422 221.166 71.9031 219.348 71.1547C203.31 64.5516 187.389 57.0863 171.371 50.3609C162.074 46.4572 152.438 43.6038 143.067 40.0986C133.138 36.3845 123.127 33.08 113.184 29.451C104.749 26.6441 95.2216 24.4214 86.6302 22.0439L68.9596 17.1107C64.6869 15.8783 59.8691 14.1236 55.6 13.5644C38.6873 11.349 21.7074 9.32909 4.78522 7.40385C5.50472 5.99553 5.55639 5.24914 5.56952 3.51501Z"
          fill="#DDB454"
        />
        <path
          d="M449.281 136.937C450.997 135.708 452.012 135.395 453.893 134.971C453.94 137.261 454.548 144.936 452.247 144.558C451.22 144.39 448.973 142.188 448.174 141.018C447.999 138.798 448.366 138.415 449.281 136.937Z"
          fill="white"
        />
        <path
          d="M0.0179346 0C2.50947 0.621528 3.6324 0.995439 5.56955 3.51499C5.55641 5.24912 5.50474 5.99551 4.78525 7.40382C2.78875 8.88463 2.1287 9.05578 0.0208939 9.4459C-0.0232449 6.37638 0.0159541 3.08797 0.0179346 0Z"
          fill="white"
        />
      </g>
      <circle
        className="trend-tracer"
        r="5"
        fill="#fff8e8"
        filter={`url(#${uid}-glow)`}
        style={{ offsetPath: `path('${TREND_LINE}')` }}
      />
      <circle className="trend-end-ring" cx="449.281" cy="136.937" r="7" />
      <circle className="trend-end-dot" cx="449.281" cy="136.937" r="3.25" fill="#fff" />
    </svg>
  )
}

function Icon({
  src,
  size,
  alt = '',
  rotate,
  className = '',
}: {
  src: string
  size: number
  alt?: string
  rotate?: number
  className?: string
}) {
  return (
    <span className={`icon ${className}`.trim()} style={{ width: size, height: size }}>
      <img
        src={src}
        alt={alt}
        style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      />
    </span>
  )
}

function Stars() {
  return (
    <div className="stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} src={assets.star} size={12} />
      ))}
    </div>
  )
}

function VisitButton({ href }: { href: string }) {
  return (
    <a className="btn-primary" href={href} target="_blank" rel="noreferrer">
      Visit Site
      <Icon src={assets.iconArrow} size={20} rotate={-90} />
    </a>
  )
}

function Rating({ rating, label }: { rating: string; label: string }) {
  return (
    <div className="rating">
      <span className="score">{rating}</span>
      <img className="rating-rule" src={assets.ratingDivider} alt="" />
      <div className="rating-meta">
        <Stars />
        <span className="score-label">{label}</span>
      </div>
    </div>
  )
}

function RankCard({ program }: { program: Program }) {
  return (
    <article className={`rank-card${program.featured ? ' featured' : ''}`}>
      {program.badge && (
        <div className={`rank-badge ${program.badge.tone}`}>
          <Icon
            src={program.badge.tone === 'gold' ? assets.badgeTag : assets.badgeStar}
            size={16}
          />
          <span>{program.badge.text}</span>
        </div>
      )}
      <div className="rank-grid">
        <div className="rank-brand">
          <div className="rank-num">{program.rank}</div>
          <img className="brand-logo" src={program.logo} alt={program.name} />
        </div>
        <ul className="bullets">
          {program.bullets.map((bullet) => (
            <li key={bullet}>
              <span className="bullet-check">
                <img src={assets.checkFilled} alt="" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <aside className="rank-aside">
          <Rating rating={program.rating} label={program.label} />
          <div className="rank-cta">
            <VisitButton href={program.href} />
            <a className="go-link" href={program.href} target="_blank" rel="noreferrer">
              {program.goTo}
            </a>
          </div>
        </aside>
      </div>
      {program.accordion && (
        <details className="why-acc">
          <summary>
            <span className="why-acc-label">
              <Icon src={assets.magicWand} size={20} />
              {program.accordion.title}
            </span>
            <Icon src={assets.caretDown} size={20} className="caret" />
          </summary>
          <p>{program.accordion.body}</p>
        </details>
      )}
    </article>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="wrap header-inner">
          <div className="forbes-lockup" aria-label="Forbes Health">
            <img className="forbes-mark" src={assets.forbes} alt="" />
            <img className="health-mark" src={assets.health} alt="" />
          </div>
          <p className="header-kicker">#1 GLP-1 PROGRAM OF 2026</p>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">
              <Icon src={assets.heroStar} size={16} />
              FORBES HEALTH #1 GLP-1 PROGRAM OF 2026
            </div>
            <img className="noom-mark" src={assets.noomWordmark} alt="NOOM" />
            <div className="hero-text">
              <h1>Weight loss, reprogrammed.</h1>
              <p className="hero-price">Starting at $79/mo.</p>
              <ul className="hero-list">
                <li>Doctor prescribed GLP-1 medication</li>
                <li>Personal coaching, and a plan that adapts to you</li>
                <li>Medication at your door in 7 days or less</li>
              </ul>
            </div>
            <div className="hero-cta">
              <a
                className="btn-mint"
                href="https://www.noom.com"
                target="_blank"
                rel="noreferrer"
              >
                Prequalify in 2 minutes
                <Icon src={assets.iconArrowLg} size={24} rotate={-90} />
              </a>
              <span className="cta-note">On Noom's Website</span>
            </div>
          </div>
          <div className="hero-photo">
            <img src={assets.heroPhoto} alt="" />
          </div>
        </div>
      </section>

      <div className="page-body">
        <section className="value">
          <div className="value-copy">
            <h2>
              Lose up to <em>20% of your body weight</em> - without white-knuckling it.
            </h2>
            <p>
              GLP-1 medication works with your body's own biochemistry to quiet cravings
              and keep you full — so the change feels sustainable, not forced. Semaglutide
              and tirzepatide, prescribed online by licensed providers and shipped free -
              in 7 days or less.
            </p>
          </div>
          <div className="trend-card">
            <p className="trend-title">Weight Trend</p>
            <WeightTrendChart />
            <div className="trend-axis">
              <span>WEEK 1</span>
              <span>MONTH 3</span>
              <span>MONTH 6</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <h3>The numbers behind the #1 pick</h3>
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <div className="stat-top">
                  <strong>{stat.value}</strong>
                  <Icon src={stat.icon} size={32} />
                </div>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="curve">
          <div className="curve-head">
            <p className="overline">YOUR FIRST SIX MONTHS</p>
            <h3>The curve, explained.</h3>
          </div>
          <div className="steps">
            {timeline.map((step, index) => (
              <div className="step-block" key={step.tag}>
                {index > 0 && <img className="step-rule" src={assets.divider} alt="" />}
                <div className="step">
                  <div className="step-copy">
                    <div className="step-head">
                      <span className="step-tag">{step.tag}</span>
                      <div className="step-status">
                        <img className="step-dash" src={assets.dashedLine} alt="" />
                        {step.tone === 'green' ? (
                          <span className="step-radar" aria-hidden="true">
                            <Icon src={assets.dotGreen} size={16} />
                          </span>
                        ) : (
                          <Icon
                            src={step.tone === 'blue' ? assets.dotBlue : assets.dotGold}
                            size={16}
                          />
                        )}
                        <span className={step.tone === 'green' ? 'status-final' : undefined}>
                          {step.status}
                        </span>
                      </div>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why">
          <h3>Why Noom leads the field</h3>
          <div className="why-grid">
            {reasons.map((item) => (
              <article className="why-item" key={item.title}>
                <span className="why-check">
                  <Icon src={assets.check} size={16} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rankings" id="compare">
          <div className="rankings-head">
            <p className="overline">NOW COMPARE</p>
            <h3>Which program fits you?</h3>
            <p className="rankings-lead">
              Every partner wins somewhere. Start from the sentence that sounds most like
              you.
            </p>
          </div>
          <div className="rank-list">
            {programs.map((program) => (
              <RankCard key={program.rank} program={program} />
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-title">
            <span>Start with</span>
            <img className="cta-mark" src={assets.noomWordmark} alt="NOOM" />
          </div>
          <p>Prequalify in about two minutes. Medication at your door in 7 days or less.</p>
          <a
            className="btn-mint"
            href="https://www.noom.com"
            target="_blank"
            rel="noreferrer"
          >
            Prequalify in 2 minutes
            <Icon src={assets.iconArrowLg} size={24} rotate={-90} />
          </a>
          <span className="cta-note">On Noom's Website</span>
        </section>

        <footer className="legal">
          <p>
            Information provided on Forbes Health is for educational purposes only. Your
            health and wellness is unique to you, and the products and services we review
            may not be right for your circumstances. We do not offer individual medical
            advice, diagnosis or treatment plans. For personal advice, consult a medical
            professional. We earn a commission from the offers on this page, which
            impacts their display.
          </p>
        </footer>
      </div>
    </div>
  )
}
