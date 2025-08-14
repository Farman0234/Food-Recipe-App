import React from "react";
import { Link } from "react-router-dom";

/**
 * FunnyErrorPage
 * A drop‑in, funny 404 / error screen for React apps.
 *
 * Usage:
 *  <FunnyErrorPage />
 *  <FunnyErrorPage code={500} title="Server ne chai gira di!" subtitle="Thori dair mein theek ho jayega." />
 *  <FunnyErrorPage homeHref="/" />  // if react-router isn't available
 */
export default function FunnyErrorPage({
  code = 404,
  title = "Aray! Page ghoom gaya 😅",
  subtitle = "Lagta hai link ne chutti le li. Niche se wapas ghar chaltey hain.",
  homeText = "Back to Home",
  homeHref = "/",
}) {
  return (
    <div className="funny-wrapper">
      <NoiseBG />
      <div className="card">
        <div className="emoji" aria-hidden>
          <span>🥴</span>
          <span className="shadow" />
        </div>
        <h1 className="code" aria-label={`Error ${code}`}>{code}</h1>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <div className="actions">
          {/* If react-router is present, use Link; otherwise use <a> */}
          {Link ? (
            <Link className="btn" to={homeHref}>
              {homeText}
            </Link>
          ) : (
            <a className="btn" href={homeHref}>{homeText}</a>
          )}
          <button className="btn ghost" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
        <div className="tips">
          <p>
            <span className="dot" /> Tip: Ctrl+L then type theek URL. Ya phr chai pee kar phir koshish karein ☕
          </p>
        </div>
      </div>

      <footer className="foot">
        <div className="bubbles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ ['--i']: i + 1 }} />
          ))}
        </div>
        <small>© {new Date().getFullYear()} — Lost & Found Dept.</small>
      </footer>

      {/* Styles (pure CSS inside) */}
      <style>{`
        :root{
          --bg:#0f172a;           /* slate-900 */
          --fg:#e2e8f0;           /* slate-200 */
          --muted:#94a3b8;        /* slate-400 */
          --accent:#22d3ee;       /* cyan-400 */
          --accent-2:#a78bfa;     /* violet-400 */
          --card:#111827cc;       /* semi */
          --btn:#111827;          
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        .funny-wrapper{
          position:relative;min-height:100vh;display:grid;place-items:center;
          background: radial-gradient(1200px 600px at 50% -10%, #1e293b 0%, #0b1020 60%, #060910 100%), var(--bg);
          color:var(--fg); overflow:hidden; padding:24px;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
        }
        .card{
          position:relative; max-width:720px; width:100%; 
          background:linear-gradient(180deg, #0b1224aa 0%, #0b1224dd 100%);
          border:1px solid rgba(255,255,255,.06);
          border-radius:24px; padding:32px; text-align:center;
          box-shadow: 0 20px 80px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.03);
          backdrop-filter: blur(8px);
          animation: pop 600ms cubic-bezier(.2,.8,.2,1);
        }
        @keyframes pop{from{transform:scale(.98); opacity:.0} to{transform:scale(1); opacity:1}}

        .emoji{ position:relative; width:120px; height:120px; margin:0 auto 12px; }
        .emoji span{ display:grid; place-items:center; font-size:64px; width:100%; height:100%; 
          background:#0a0f1f; border-radius:50%; border:1px solid rgba(255,255,255,.06);}
        .emoji .shadow{ position:absolute; inset:auto 0 -14px 0; height:14px; border-radius:999px; filter:blur(6px); background:rgba(0,0,0,.75)}

        .code{
          font-size: clamp(56px, 14vw, 140px);
          line-height: .9; margin: 4px 0; letter-spacing:-2px;
          background: conic-gradient(from 180deg, var(--accent), var(--accent-2), var(--accent));
          -webkit-background-clip:text; background-clip:text; color:transparent;
          text-shadow: 0 6px 30px rgba(34, 211, 238, .25);
          animation: wobble 3.5s ease-in-out infinite;
        }
        @keyframes wobble{
          0%,100%{ transform: translateX(0) rotate(0deg) }
          25%{ transform: translateX(-4px) rotate(-1deg) }
          50%{ transform: translateX(4px) rotate(1deg) }
          75%{ transform: translateX(-2px) rotate(-.5deg) }
        }
        .title{ font-size: clamp(20px, 4vw, 36px); margin:6px 0 8px; }
        .subtitle{ color: var(--muted); max-width:52ch; margin:0 auto 16px; }

        .actions{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin: 18px 0 4px }
        .btn{
          appearance:none; border:1px solid rgba(255,255,255,.08);
          background: linear-gradient(180deg, #121a34, #0c1328);
          color: var(--fg); padding:12px 18px; border-radius:999px; font-weight:600; cursor:pointer;
          transform: translateZ(0);
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          box-shadow: 0 10px 24px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.04);
          text-decoration:none; display:inline-flex; align-items:center; gap:8px;
        }
        .btn:hover{ transform: translateY(-2px); border-color: rgba(255,255,255,.18); }
        .btn:active{ transform: translateY(0) scale(.98) }
        .btn.ghost{ background:transparent }

        .tips{ margin-top:8px; color:#9fb3c8; font-size:14px; }
        .dot{ width:8px; height:8px; display:inline-block; border-radius:999px; background:var(--accent); margin-right:8px; box-shadow:0 0 12px var(--accent)}

        .foot{ position:fixed; left:0; right:0; bottom:0; text-align:center; color:#7b8aa8; font-size:12px; padding-bottom:10px; }
        .bubbles{ position:absolute; inset:auto 0 30px 0; display:flex; gap:10px; justify-content:center; filter: blur(.2px); pointer-events:none; }
        .bubbles span{ --s: calc(var(--i) * 1s); width:6px; height:6px; background:radial-gradient(circle at 30% 30%, #7dd3fc, #60a5fa 60%, transparent 61%);
          border-radius:999px; opacity:.85; animation: rise calc(4s + var(--s)) ease-in infinite; }
        .bubbles span:nth-child(odd){ background:radial-gradient(circle at 30% 30%, #c4b5fd, #a78bfa 60%, transparent 61%)}
        @keyframes rise{ from{ transform: translateY(0) scale(1); opacity:.2 } to{ transform: translateY(-80px) scale(1.4); opacity: 0 } }

        /* Responsive */
        @media (max-width:480px){
          .card{ padding:22px; border-radius:18px }
          .emoji{ width:96px; height:96px }
        }
      `}</style>
    </div>
  );
}

function NoiseBG(){
  return (
    <svg className="noise" aria-hidden width="0" height="0" style={{position:'fixed'}}>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 0.06"/>
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      <style>{`
        .noise{ inset:0; width:100%; height:100%; pointer-events:none; }
        .funny-wrapper::before{ content:""; position:fixed; inset:0; background:rgba(255,255,255,.02); z-index:0; }
        .funny-wrapper > * { position:relative; z-index:1; }
      `}</style>
    </svg>
  );
}
