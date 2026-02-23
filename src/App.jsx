export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <span className="logo">T3</span>
          <div className="brandBlock">
            <span className="brandText">Arquitectura de Sistemas</span>
            <span className="brandSub">Aplicación web estática</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#info">Info</a>
          <a href="#tecnologias">Tecnologías</a>
        </nav>

        <a className="topBtn" href="#tecnologias">Ver tecnologías</a>
      </header>

      <main className="container">
        <section id="inicio" className="hero">
          <div className="heroLeft">
            <span className="pill">Vite + React • Docker • AWS Beanstalk</span>

            <h1>
              Tarea <span className="accent">3</span>
            </h1>

            <p className="subtitle">
              Esta es mi página web creada con <strong>Vite + React</strong>. Es una interfaz{" "}
              <strong>estática</strong> lista para el despliegue en{" "}
              <strong>AWS Elastic Beanstalk</strong>.
            </p>

            <div className="actions">
              <a className="btnPrimary" href="#info">Ver información</a>
              <a className="btnGhost" href="#tecnologias">Tecnologías</a>
            </div>

            <div className="miniStats">
              <div className="miniStat">
                <div className="miniNum">✔</div>
                <div className="miniText">
                  <div className="miniTitle">Estática</div>
                  <div className="miniSub">Sin APIs</div>
                </div>
              </div>

              <div className="miniStat">
                <div className="miniNum">⚙</div>
                <div className="miniText">
                  <div className="miniTitle">CI/CD</div>
                  <div className="miniSub">Pipeline</div>
                </div>
              </div>

              <div className="miniStat">
                <div className="miniNum">☁</div>
                <div className="miniText">
                  <div className="miniTitle">AWS</div>
                  <div className="miniSub">Beanstalk</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="heroRight">
            <div className="panel">
              <div className="panelHead">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="panelTitle">Resumen</span>
              </div>

              <div className="panelBody">
                <div className="kv">
                  <span className="k">Proyecto</span>
                  <span className="v">Ejercicio3</span>
                </div>
                <div className="kv">
                  <span className="k">Framework</span>
                  <span className="v">Vite + React</span>
                </div>
                <div className="kv">
                  <span className="k">Contenedor</span>
                  <span className="v">Docker</span>
                </div>
                <div className="kv">
                  <span className="k">Deploy</span>
                  <span className="v">Elastic Beanstalk</span>
                </div>

                <div className="tags">
                  <span className="tag">Sencilla</span>
                  <span className="tag">Presentable</span>
                  <span className="tag">Lista para entregar</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="info" className="section">
          <h2>Información</h2>
          <p className="sectionDesc">
            Esta web corresponde a la <strong>Tarea 3</strong>. El proyecto está pensado para
            cumplir los requisitos: Vite, Docker, Husky, Doppler y CI/CD.
          </p>

          <div className="cards">
            <div className="card">
              <div className="cardIcon">🎯</div>
              <div className="cardTitle">Objetivo</div>
              <div className="cardText">
                Crear una aplicación web sencilla y desplegarla usando AWS Beanstalk.
              </div>
            </div>

            <div className="card">
              <div className="cardIcon">🧩</div>
              <div className="cardTitle">Tipo de app</div>
              <div className="cardText">
                Interfaz agradable, simple y completamente estática (sin APIs).
              </div>
            </div>

            <div className="card">
              <div className="cardIcon">📦</div>
              <div className="cardTitle">Entrega</div>
              <div className="cardText">
                Repositorio en GitHub + Pipeline + URL pública de Beanstalk.
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="section">
          <h2>Tecnologías usadas</h2>
          <p className="sectionDesc">Herramientas principales utilizadas en el proyecto.</p>

          <ul className="list">
            <li><strong>Vite + React</strong> (desarrollo y build)</li>
            <li><strong>Docker</strong> (contenedor)</li>
            <li><strong>Husky</strong> (validaciones antes de commit)</li>
            <li><strong>Doppler</strong> (secretos)</li>
            <li><strong>GitHub Actions</strong> (pipeline)</li>
            <li><strong>AWS Elastic Beanstalk</strong> (deploy)</li>
          </ul>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} • Tarea 3 • Brayan</div>
          <div className="footerRight">Vite • React • Docker • AWS</div>
        </footer>
      </main>
    </div>
  );
}