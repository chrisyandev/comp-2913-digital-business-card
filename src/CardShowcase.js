import { useSearch } from "@tanstack/react-location";
import "./showcase.css";

export default function CardShowCase() {

  const search = useSearch();
  const favouriteBooks = search.favouriteBooks.split(",");

  return (
    <div className="pageBody">
      <p>Hey it's {JSON.stringify(search)} </p>
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <div class="lx-card">
                    <div class="lx-row">
                      <div class="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt="Armaan"
                        />
                      </div>
                      <div class="infos">
                        <span>
                          <i class="fas fa-user-circle"></i>&nbsp;&nbsp; {search.fullName}
                        </span>
                        <span>
                          <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Full Stack
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">Connect with {String(search.fullName).split(' ')[0]}</h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href="https://github.com/adhanji8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href="https://www.twitter.com/bcit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lx-column">
                <div class="lx-row">
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-info-circle"></i>&nbsp;Welcome to&nbsp;{String(search.fullName).split(' ')[0]}'s corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div class="text">
                      <p>
                        Hi, my name is&nbsp;<b>{search.fullName}</b>.
                      </p>
                      <p>
                        {search.aboutMe}
                      </p>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div class="mini-cards">
                      <span class={search.CSS ? "has-dflex-center bs-md" : "no-display"} title="CSS">
                        <i class="fab fa-css3-alt"></i>
                      </span>
                      <span class={search.HTML ? "has-dflex-center bs-md" : "no-display"} title="HTML">
                        <i class="fab fa-html5"></i>
                      </span>
                      <span class={search.JS ? "has-dflex-center bs-md" : "no-display"} title="JS">
                        <i class="fab fa-js"></i>
                      </span>
                      <span class={search.Git ? "has-dflex-center bs-md" : "no-display"} title="Git">
                        <i class="fab fa-git-alt"></i>
                      </span>
                      <span class={search.NodeJS ? "has-dflex-center bs-md" : "no-display"} title="Node JS">
                        <i class="fab fa-node-js"></i>
                      </span>
                      <span class={search.React ? "has-dflex-center bs-md" : "no-display"} title="React">
                        <i class="fab fa-react"></i>
                      </span>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div class="text">
                      <ol>
                        {favouriteBooks.map((book, index) => {
                          return(
                          <li key={book + index}>
                            <p>
                              <b>{book}</b>
                            </p>
                          </li>);
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
