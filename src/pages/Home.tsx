import { Link } from "react-router-dom";
import { H2, Cta, Band } from "../components/ui";
import { percorsiCards, testimonials } from "../data/content";
import { color, font, site, mailLink } from "../theme";

export default function Home() {
  return (
    <div className="page">
      {/* HERO — foto a pieno schermo con testo e CTA sovrapposti */}
      <section
        className="hero"
        style={{
          position: "relative",
          marginInline: "calc(50% - 50vw)",
          width: "100vw",
          overflow: "hidden",
          background: color.ink,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <img
          src="/images/hero-home.jpg"
          alt="Raffaella Gallo in campagna con i suoi barboni al guinzaglio"
          className="heroImg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 25%",
          }}
        />
        <div
          className="heroScrim"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1080,
            margin: "0 auto",
            padding: "96px 20px 44px",
            color: "#fff",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <p
              style={{
                fontFamily: font.accent,
                fontSize: 9.5,
                letterSpacing: ".3em",
                color: "rgba(255,255,255,.82)",
              }}
            >
              EDUCAZIONE · RELAZIONE · SINTONIA
            </p>
            <h1
              style={{
                fontFamily: font.display,
                fontSize: "clamp(36px, 8.4vw, 62px)",
                lineHeight: 1.06,
                letterSpacing: "-.01em",
                marginTop: 18,
              }}
            >
              Ogni cane ha una storia.
              <br />
              <em style={{ color: "#fff" }}>Ogni percorso è unico.</em>
            </h1>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "rgba(255,255,255,.9)",
                marginTop: 18,
                maxWidth: "38ch",
                textWrap: "pretty",
              }}
            >
              Percorsi personalizzati di educazione e rieducazione cinofila,
              costruiti sul tuo cane e sulla vita che condividete.
            </p>
            <Cta href="/contact/">Richiedi un primo incontro</Cta>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0 0" }}>
        <H2 style={{ maxWidth: "24ch" }}>
          Percorsi diversi, costruiti intorno al cane e alla vita che
          condividete.
        </H2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginTop: 28,
          }}
        >
          {percorsiCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="hoverCard"
              style={{
                background: color.white,
                border: "1px solid " + color.pearl,
                padding: "26px 22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 150,
              }}
            >
              <span
                style={{
                  fontFamily: font.accent,
                  fontSize: 11,
                  letterSpacing: ".2em",
                  color: color.teal,
                }}
              >
                {c.title}
              </span>
              <span
                style={{ fontSize: 15.5, lineHeight: 1.6, color: color.body }}
              >
                {c.body}
              </span>
              <span
                style={{
                  fontFamily: font.accent,
                  fontSize: 9.5,
                  letterSpacing: ".2em",
                  color: color.ink,
                  marginTop: "auto",
                }}
              >
                SCOPRI →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Band>
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: font.display,
              fontSize: 44,
              lineHeight: 0,
              color: "rgba(255,255,255,.6)",
              display: "block",
            }}
          >
            “
          </span>
          <p
            style={{
              fontFamily: font.display,
              fontSize: "clamp(20px, 5vw, 30px)",
              lineHeight: 1.42,
              marginTop: 14,
            }}
          >
            Ogni relazione nasce dalla comprensione.
            <br />
            Ogni cambiamento nasce dalla sintonia.
          </p>
        </div>
      </Band>

      <section
        style={{
          padding: "60px 0 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 34,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: font.accent,
              fontSize: 11,
              letterSpacing: ".24em",
              color: color.teal,
            }}
          >
            CONTATTI
          </h3>
          <div
            style={{
              height: 1,
              background: color.pearl,
              margin: "14px 0 18px",
            }}
          />
          <p style={{ fontSize: 16, lineHeight: 1.9, color: color.body }}>
            {site.city}
            <br />
            <a href={mailLink}>{site.email}</a>
          </p>
        </div>
        <div>
          <h3
            style={{
              fontFamily: font.accent,
              fontSize: 11,
              letterSpacing: ".24em",
              color: color.teal,
            }}
          >
            INIZIAMO DA QUI
          </h3>
          <div
            style={{
              height: 1,
              background: color.pearl,
              margin: "14px 0 18px",
            }}
          />
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: color.body,
              textWrap: "pretty",
            }}
          >
            Raccontami brevemente chi è il tuo cane e che cosa vi porta qui. Non
            è necessario sapere già quale percorso scegliere: dalle informazioni
            che mi darai potrò aiutarti a individuare quello più adatto.
          </p>
          <Cta href="/contact/" tone="ghost">
            Richiedi un primo incontro
          </Cta>
        </div>
      </section>

      <section style={{ padding: "64px 0 0" }}>
        <h3
          style={{
            fontFamily: font.accent,
            fontSize: 11,
            letterSpacing: ".24em",
            color: color.teal,
          }}
        >
          DICONO DI ME
        </h3>
        <div
          style={{ height: 1, background: color.pearl, margin: "14px 0 24px" }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{ background: color.pearl, padding: "26px 24px" }}
            >
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.78,
                  color: "#3D4547",
                  whiteSpace: "pre-line",
                  textWrap: "pretty",
                }}
              >
                {t.text}
              </p>
              <p
                style={{
                  fontFamily: font.display,
                  fontSize: 17,
                  marginTop: 18,
                  color: color.teal,
                }}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
