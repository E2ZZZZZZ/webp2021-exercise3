import { useEffect, useState } from "react";
import { fetchImages } from "./api";





function Header() {
  return (
  <section class="hero is-primary is-small">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">

        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
            <a href="https://github.com/">GitHub</a>
            </a>
            <a class="navbar-item">
            <a href="https://app.netlify.com/">Netlify</a>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>


  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Let's See Some Lovely Dogs!!!
      </p>
      <p class="subtitle">
        Are you ready!
      </p>
    </div>
  </div>


  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a href="https://www.youtube.com/results?search_query=dog">Cute Dogs on YouTube </a></li>
          <li><a href="https://www.amazon.co.jp/s?k=%E7%8A%AC+%E3%81%8A%E3%82%82%E3%81%A1%E3%82%83&crid=2DXH49V12OG26&sprefix=%E7%8A%AC%2Caps%2C235&ref=nb_sb_ss_ts-doa-p_4_1">Dog Toys on Amazon</a></li>
          <li><a href="https://alphaicon.com/article-details/1323">Tips About Having Dogs</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
  );
}


function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <button class="button is-primary is-loading">Loading</button>;
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth is-primary ">
              <select name="breed" defaultValue="shiba">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
                <option value="hound">Hound</option>
                <option value="boxer">Boxer</option>
                <option value="beagle">Beagle</option>
                <option value="african">African</option>
                <option value="basenji">Basenji</option>
                <option value="vizsla">Vizsla</option>
              </select>
            </div>
          </div>
          <div className="control">
          <button class="button is-primary is-rounded">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
            <section className="section">
        <div className="container">
        <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}




function Onfooter(){
  return(
    
    <div class="notification is-primary is-light">
      DO NOT HAVING A PET, IF THERE IS A POSSIBLE OF BANDONING IT. A PET COULD JUST A PET TO YOU, BUT FOR PET, YOU ARE THE WHOLE WORLD.
    </div>
    
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
      <h2>You've viewed this site from{new Date().toLocaleTimeString()}</h2>
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
        <h3>日本大学文理学部情報科学科 Webプログラミングの演習課題</h3>
        <h3>5420081 薛兪正淳</h3>
      </div>
    </footer>
  );
}





function App() {
  return (
    <div>
      <Header />
      <Main />
      <Onfooter />
      <Footer />
    </div>
  );
}

export default App;