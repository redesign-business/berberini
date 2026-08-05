const img = (name: string) => `/images/${name}`;

const styles = `
  :root { --ink:#21342f; --paper:#f4f0e8; --cream:#fbf8f2; --sage:#9bab94; --clay:#b86f52; }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
  a { color:inherit; }
  .page { overflow:hidden; }
  .notice { padding:9px 20px; background:var(--ink); color:#fff; text-align:center; font-size:11px; letter-spacing:.16em; text-transform:uppercase; }
  nav { height:86px; padding:0 5vw; display:flex; align-items:center; justify-content:space-between; background:var(--cream); border-bottom:1px solid #d8d2c7; }
  .brand { display:flex; align-items:center; gap:14px; text-decoration:none; font-family:Georgia, serif; font-size:22px; letter-spacing:.05em; }
  .brand img { width:58px; height:58px; object-fit:contain; }
  .links { display:flex; gap:28px; align-items:center; font-size:12px; letter-spacing:.1em; text-transform:uppercase; }
  .links a { text-decoration:none; }
  .cta { display:inline-flex; align-items:center; justify-content:center; min-height:48px; padding:0 24px; border:1px solid var(--clay); background:var(--clay); color:#fff; text-decoration:none; font-size:11px; letter-spacing:.14em; text-transform:uppercase; transition:.2s; }
  .cta:hover { background:transparent; color:var(--clay); }
  .hero { min-height:690px; display:grid; grid-template-columns:1.05fr .95fr; background:var(--cream); }
  .hero-copy { padding:90px 8vw 70px 7vw; display:flex; flex-direction:column; justify-content:center; }
  .eyebrow { margin:0 0 20px; color:var(--clay); font-size:11px; font-weight:bold; letter-spacing:.2em; text-transform:uppercase; }
  h1,h2,h3 { font-family:Georgia, 'Times New Roman', serif; font-weight:400; }
  h1 { max-width:720px; margin:0 0 26px; font-size:clamp(52px,6.5vw,96px); line-height:.94; letter-spacing:-.045em; }
  .hero-copy > p:not(.eyebrow) { max-width:570px; margin:0 0 34px; color:#59665f; font-family:Georgia, serif; font-size:19px; line-height:1.65; }
  .hero-art { position:relative; min-height:620px; background:#c7c2b7; }
  .hero-art > img { width:100%; height:100%; object-fit:cover; image-rendering:auto; }
  .hero-card { position:absolute; right:0; bottom:0; width:min(310px,72%); padding:27px; background:var(--ink); color:white; }
  .hero-card strong { display:block; margin-bottom:8px; font-family:Georgia, serif; font-size:22px; font-weight:400; }
  .hero-card span { font-size:12px; line-height:1.6; color:#dbe2de; }
  .proofbar { display:grid; grid-template-columns:repeat(3,1fr); padding:28px 6vw; background:#dde2d8; }
  .proofbar div { padding:0 4vw; border-right:1px solid #b8c1b4; text-align:center; font-family:Georgia,serif; font-size:17px; }
  .proofbar div:last-child { border:0; }
  .section { padding:110px 7vw; }
  .split { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:9vw; }
  .split.reverse .visual { order:2; }
  .visual { position:relative; min-height:570px; }
  .visual > img { width:100%; height:570px; object-fit:cover; }
  .portrait > img { object-position:center top; }
  .stamp { position:absolute; right:-24px; bottom:28px; width:130px; height:130px; display:grid; place-items:center; padding:18px; border-radius:50%; background:var(--clay); color:white; text-align:center; font-size:10px; line-height:1.5; letter-spacing:.12em; text-transform:uppercase; }
  h2 { max-width:650px; margin:0 0 24px; font-size:clamp(38px,5vw,67px); line-height:1.03; letter-spacing:-.035em; }
  .copy > p:not(.eyebrow), .copy li { color:#58655f; font-size:16px; line-height:1.8; }
  .copy ul { margin:26px 0 34px; padding:0; list-style:none; border-top:1px solid #cfc9bd; }
  .copy li { padding:12px 0 12px 25px; border-bottom:1px solid #cfc9bd; position:relative; }
  .copy li:before { content:'+'; position:absolute; left:2px; color:var(--clay); }
  .technology { background:var(--ink); color:#fff; }
  .technology .copy > p:not(.eyebrow), .technology .copy li { color:#ccd5d0; }
  .technology .copy ul, .technology .copy li { border-color:#50615a; }
  .device { background:#e6e0d5; display:grid; place-items:center; }
  .device > img { object-fit:contain; padding:45px; }
  .result-tag { position:absolute; left:-25px; top:35px; padding:16px 20px; background:var(--cream); color:var(--ink); font:15px Georgia,serif; box-shadow:0 8px 30px #15211d30; }
  .stories { background:#dfe4db; }
  .stories-head { display:grid; grid-template-columns:1fr .8fr; gap:6vw; align-items:end; margin-bottom:55px; }
  .stories-head p { color:#59665f; line-height:1.8; }
  .story-grid { display:grid; grid-template-columns:.85fr 1.15fr; gap:25px; }
  .story-image { min-height:480px; }
  .story-image img { width:100%; height:100%; object-fit:cover; }
  .quotes { display:grid; grid-template-columns:1fr 1fr; gap:25px; }
  blockquote { margin:0; padding:38px; background:var(--cream); display:flex; flex-direction:column; justify-content:space-between; font:20px/1.55 Georgia,serif; }
  blockquote strong { margin-top:30px; color:var(--clay); font:11px Arial,sans-serif; letter-spacing:.14em; text-transform:uppercase; }
  .products { background:var(--cream); }
  .product-visual { background:#d4c8b8; }
  .product-visual img { object-position:center; }
  .partner { display:flex; gap:18px; align-items:center; margin-top:25px; }
  .partner img { width:130px; height:62px; object-fit:contain; }
  .partner span { font-size:12px; line-height:1.5; color:#66716b; }
  .faq-wrap { display:grid; grid-template-columns:.78fr 1.22fr; gap:8vw; align-items:start; }
  .faq-image { position:sticky; top:25px; }
  .faq-image img { width:100%; min-height:560px; object-fit:cover; }
  details { padding:23px 0; border-top:1px solid #c9c3b8; }
  details:last-of-type { border-bottom:1px solid #c9c3b8; }
  summary { cursor:pointer; list-style:none; font:21px Georgia,serif; }
  summary:after { content:'+'; float:right; color:var(--clay); }
  details[open] summary:after { content:'−'; }
  details p { padding-right:30px; color:#5c6962; line-height:1.7; }
  .final { display:grid; grid-template-columns:1fr 1fr; min-height:570px; background:#adbaa8; }
  .final img { width:100%; height:100%; object-fit:cover; }
  .final-copy { padding:80px 8vw; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; }
  footer { padding:55px 7vw 30px; background:#182722; color:#dfe5e1; }
  .footer-top { display:flex; justify-content:space-between; gap:40px; align-items:center; padding-bottom:45px; }
  .footer-top img { width:100px; height:90px; object-fit:contain; }
  .footer-meta { display:flex; justify-content:space-between; gap:20px; padding-top:25px; border-top:1px solid #405049; color:#9eaaa4; font-size:11px; letter-spacing:.06em; }
  @media(max-width:800px) {
    nav { height:72px; padding:0 20px; } .brand { font-size:18px; } .brand img { width:45px; height:45px; }
    .links a:not(.cta) { display:none; } .links { gap:0; } nav .cta { min-height:40px; padding:0 13px; font-size:9px; }
    .hero, .split, .stories-head, .story-grid, .faq-wrap, .final { grid-template-columns:1fr; }
    .hero-copy { padding:70px 25px; } .hero-art { min-height:480px; } h1 { font-size:56px; }
    .proofbar { grid-template-columns:1fr; gap:15px; } .proofbar div { border:0; border-bottom:1px solid #b8c1b4; padding-bottom:15px; } .proofbar div:last-child { border:0; padding-bottom:0; }
    .section { padding:75px 25px; } .split { gap:50px; } .split.reverse .visual { order:0; }
    .visual, .visual > img { min-height:430px; height:430px; } .stamp { right:-8px; }
    .quotes { grid-template-columns:1fr; } blockquote { min-height:290px; }
    .faq-image { position:relative; } .faq-image img { min-height:380px; height:380px; }
    .final img { height:430px; } .final-copy { padding:70px 25px; }
    .footer-top { align-items:flex-start; flex-direction:column; } .footer-meta { flex-direction:column; }
  }
`;

export default function Page() {
  return (
    <main className="page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="notice">Private skincare studio · Homewood, Lake Tahoe</div>
      <nav>
        <a className="brand" href="#top">
          <img src={img("b927b2_2dcd3abdfbad4a0ca7227df5da08624a-mv2-a53111936e.png")} alt="Berberini Aesthetics" />
          <span>Berberini</span>
        </a>
        <div className="links">
          <a href="#approach">Approach</a><a href="#vivace">Vivace Ultra</a><a href="#stories">Stories</a>
          <a className="cta" href="#contact">Request a consultation</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Clinical wisdom · Artful care</p>
          <h1>Skin care that sees the whole picture.</h1>
          <p>Highly personal aesthetics grounded in more than two decades of critical care nursing, created for natural results and the life you live in Tahoe.</p>
          <div><a className="cta" href="#contact">Request a consultation</a></div>
        </div>
        <div className="hero-art">
          <img src={img("b927b2_a74865ffe8784075925a8bba82e461c2-mv2-cf9049969d.jpg")} alt="Radiant natural skin" />
          <div className="hero-card"><strong>Attentive by design.</strong><span>We welcome a limited number of clients so every plan can remain genuinely personal.</span></div>
        </div>
      </header>

      <div className="proofbar">
        <div>20+ years medical-clinical experience</div><div>I.A.C. Corneotherapist</div><div>FDA-cleared technology</div>
      </div>

      <section className="section split" id="approach">
        <div className="visual portrait">
          <img src={img("melissa-b691e4b9b9.jpg")} alt="Melissa, I.A.C. Corneotherapist and founder of Berberini" />
          <div className="stamp">Johns Hopkins · UCSF · Tahoe full time</div>
        </div>
        <div className="copy">
          <p className="eyebrow">Meet Melissa</p>
          <h2>Clinical precision, guided by an artist’s eye.</h2>
          <p>Melissa brings over 20 years of critical care nursing at leading hospitals on both coasts to every treatment. Her fine art background adds restraint, nuance, and respect for what makes each face singular.</p>
          <ul><li>I.A.C. Corneotherapist</li><li>PHI brow certified in microblading and SMP</li><li>In-depth consultation and individual treatment planning</li></ul>
          <a className="cta" href="#contact">Request a consultation</a>
        </div>
      </section>

      <section className="section technology split reverse" id="vivace">
        <div className="visual device">
          <img src={img("b927b2_c9c85d2aa39e4c32b5ebd52773885e73-mv2-878a43a445.png")} alt="Vivace Ultra radiofrequency microneedling device" />
          <div className="result-tag">Mapped to your skin. Layer by layer.</div>
        </div>
        <div className="copy">
          <p className="eyebrow">The Vivace Experience®</p>
          <h2>Advanced treatment. Remarkably little interruption.</h2>
          <p>Vivace Ultra combines radiofrequency microneedling with linear array ultrasound, letting us visually map your skin and personalize treatment depth in each layer.</p>
          <ul><li>FDA-cleared for safety</li><li>Visible before-and-after results</li><li>Designed for a return to dinner that same night</li></ul>
          <a className="cta" href="#contact">Request a consultation</a>
        </div>
      </section>

      <section className="section stories" id="stories">
        <div className="stories-head"><div><p className="eyebrow">Client stories</p><h2>Trust built month after month.</h2></div><p>Results matter. So does being known, cared for, and supported beyond the treatment room.</p></div>
        <div className="story-grid">
          <div className="story-image"><img src={img("b927b2_e06bdf06442a4dd0b0c9d59b27a626bb-mv2-0501ba7e63.jpg")} alt="Berberini client result" /></div>
          <div className="quotes">
            <blockquote>“I have been seeing her for four years… She cares about all her clients and always goes above and beyond. I wish I could rate her more than 5 stars!”<strong>Madison W. · 10/10 recommend</strong></blockquote>
            <blockquote>“I am approaching 70… her facials have led to a dramatic improvement in my skin. Melissa carefully evaluated my skin and developed an individual treatment plan.”<strong>Joyce Y. · Monthly client</strong></blockquote>
          </div>
        </div>
      </section>

      <section className="section products split">
        <div className="visual product-visual"><img src={img("b927b2_760ab3cb7df64dfda4d204d2ad3cc420-mv2-dfee1ce729.jpg")} alt="Medical and science-based skincare" /></div>
        <div className="copy">
          <p className="eyebrow">Beyond the treatment room</p><h2>Products chosen for evidence, not trends.</h2>
          <p>Your home routine is shaped with the same care as your in-studio plan. Berberini partners with clinically respected lines including Obagi MD, dermaviduals® RX, and EltaMD.</p>
          <div className="partner"><img src={img("34-e8671b39b3.png")} alt="Obagi Medical" /><span>30+ years of science-backed skincare developed by leading dermatologists.</span></div>
        </div>
      </section>

      <section className="section faq-wrap">
        <div className="faq-image"><img src={img("b927b2_919cd5b72c6248018b67f9dce7018163-mv2-0ca27875ae.jpg")} alt="Personalized aesthetics consultation" /></div>
        <div className="copy">
          <p className="eyebrow">Good to know</p><h2>Questions, answered clearly.</h2>
          <details open><summary>What happens during a consultation?</summary><p>We begin with your history, current routine, concerns, and goals, then evaluate your skin and design an individual treatment plan. No one-size-fits-all protocols.</p></details>
          <details><summary>What is Vivace Ultra?</summary><p>It is an FDA-cleared radiofrequency microneedling device with ultrasound skin mapping. This allows treatment to be personalized by skin layer while supporting natural-looking rejuvenation.</p></details>
          <details><summary>Do you offer plans or packages?</summary><p>Yes. Flexible options include prepaid “6 for 5” treatment bundles that can be fine-tuned as your skin’s needs change.</p></details>
          <details><summary>What support is included with microblading?</summary><p>Your second session and desired-look touch-ups within 45 days are included. Color correction within the first week and ongoing aftercare support are also provided.</p></details>
        </div>
      </section>

      <section className="final" id="contact">
        <img src={img("2029f2_ad7d103a827d4bfc855d5e3ce1870718-mv2-9a6ad15da5.jpg")} alt="Berberini Aesthetics in Lake Tahoe" />
        <div className="final-copy"><p className="eyebrow">Homewood, California</p><h2>Your best skin starts with being understood.</h2><p>Visit our private Lake Tahoe studio for a considered plan built around your skin, your goals, and your pace.</p><a className="cta" href="mailto:melissa@berberini.com?subject=Consultation request">Request a consultation</a></div>
      </section>

      <footer>
        <div className="footer-top"><img src={img("berberini-white-b79f9325f0.png")} alt="Berberini Aesthetics" /><div>4917 W. Lake Blvd, Homewood, CA 96141<br />415-260-1088 · melissa@berberini.com</div></div>
        <div className="footer-meta"><span>© 2026 Berberini Aesthetics</span><span>Clinical wisdom · Artful care · Lake Tahoe</span></div>
      </footer>
    </main>
  );
}
