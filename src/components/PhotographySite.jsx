"use client";

import { useEffect, useMemo, useState } from "react";
import { sectionRegistry, siteContent } from "../data/site-content";

const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Plus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const { identity, navigation } = siteContent;
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首页">
        <span className="brand-mark">{identity.mark}</span>
        <span><b>{identity.name}</b><small>{identity.subtitle}</small></span>
      </a>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="主导航">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>联系我 <ArrowUpRight size={16} /></a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="打开或关闭菜单" aria-expanded={menuOpen}>
        <span /><span />
      </button>
    </header>
  );
}

function Hero() {
  const { hero } = siteContent;
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span />{hero.eyebrow}</p>
        <h1>{hero.titleLines.map((line, index) => <span key={line} className={index === 1 ? "accent-line" : ""}>{line}</span>)}</h1>
        <p className="hero-description">{hero.description}</p>
        <a className="text-link" href="#gallery">浏览作品 <ArrowUpRight /></a>
      </div>
      <figure className="hero-visual reveal reveal-delay">
        <div className="hero-image-wrap">
          <img src={hero.image} alt={hero.imageAlt} />
          <span className="frame-corner frame-corner--top" />
          <span className="frame-corner frame-corner--bottom" />
        </div>
        <figcaption><span>01 / 06</span><span>{hero.note}</span></figcaption>
      </figure>
      <div className="hero-stats reveal">
        {hero.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
      <a className="scroll-note" href="#gallery"><span>向下滚动</span><i /></a>
    </section>
  );
}

function Gallery({ onOpenPhoto }) {
  const { gallery } = siteContent;
  const [category, setCategory] = useState("全部");
  const photos = useMemo(() => category === "全部" ? gallery.photos : gallery.photos.filter((photo) => photo.category === category), [category, gallery.photos]);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-topline">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} intro={gallery.intro} />
        <div className="filters" role="group" aria-label="作品筛选">
          {gallery.categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
      </div>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <button className={`photo-card photo-card--${photo.size}`} key={photo.title} onClick={() => onOpenPhoto(photo)} aria-label={`查看作品：${photo.title}`}>
            <img src={photo.src} alt={photo.alt} loading="eager" />
            <span className="photo-overlay"><span><b>{photo.title}</b><small>{photo.location}</small></span><span className="open-icon"><Plus /></span></span>
          </button>
        ))}
      </div>
      <p className="gallery-count">正在展示 <b>{String(photos.length).padStart(2, "0")}</b> 张作品</p>
    </section>
  );
}

function Journal() {
  const { journal } = siteContent;
  return (
    <section className="section journal-section" id="journal">
      <SectionHeading eyebrow={journal.eyebrow} title={journal.title} intro={journal.intro} />
      <div className="journal-grid">
        {journal.posts.map((post, index) => (
          <article className={`post-card ${index === 0 ? "post-card--featured" : ""}`} key={post.title}>
            <div className="post-image"><img src={post.image} alt="" loading="eager" /><span>{post.tag}</span></div>
            <div className="post-body">
              <p className="post-meta"><time>{post.date}</time><span>{post.readTime}</span></p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="read-more">阅读全文 <ArrowUpRight size={16} /></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  const { about } = siteContent;
  return (
    <section className="section about-section" id="about">
      <div className="about-visual">
        <span className="about-index">ABOUT / 03</span>
        <img src={about.image} alt={about.imageAlt} loading="eager" />
        <span className="image-stamp">在路上<br />SINCE 2018</span>
      </div>
      <div className="about-copy">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <div className="about-text">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="kit-list"><span>随身器材</span><div>{about.kit.map((item) => <b key={item}>{item}</b>)}</div></div>
      </div>
    </section>
  );
}

function Contact() {
  const { contact, identity } = siteContent;
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="eyebrow eyebrow--light"><span />{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p>{contact.description}</p>
        <a className="contact-button" href={`mailto:${identity.email}`}>{contact.button}<ArrowUpRight /></a>
      </div>
      <div className="contact-orbit" aria-hidden="true"><span>LIGHT · TRACE · PHOTOGRAPHY · JOURNAL · </span></div>
    </section>
  );
}

function Footer() {
  const { identity, navigation } = siteContent;
  return (
    <footer>
      <a className="brand brand--footer" href="#top"><span className="brand-mark">{identity.mark}</span><span><b>{identity.name}</b><small>{identity.subtitle}</small></span></a>
      <div className="footer-meta"><span>{identity.location}</span><a href={`mailto:${identity.email}`}>{identity.email}</a></div>
      <div className="footer-links">{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
      <p className="copyright">© 2026 LIGHT / TRACE. ALL PHOTOGRAPHS RESERVED.</p>
    </footer>
  );
}

function Lightbox({ photo, onClose }) {
  useEffect(() => {
    if (!photo) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("no-scroll");
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.classList.remove("no-scroll"); };
  }, [photo, onClose]);

  if (!photo) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.title} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="关闭大图">关闭 <span>×</span></button>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <div><h3>{photo.title}</h3><p>{photo.location} · {photo.category}</p></div>
      </div>
    </div>
  );
}

export default function PhotographySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const sections = { hero: <Hero key="hero" />, gallery: <Gallery key="gallery" onOpenPhoto={setSelectedPhoto} />, journal: <Journal key="journal" />, about: <About key="about" />, contact: <Contact key="contact" /> };

  useEffect(() => {
    const targets = document.querySelectorAll(".section-heading, .photo-card, .post-card, .about-visual, .about-copy");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{sectionRegistry.filter((section) => section.enabled).map((section) => sections[section.id])}</main>
      <Footer />
      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </>
  );
}
