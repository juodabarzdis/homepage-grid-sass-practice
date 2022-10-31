import coverImage from "./assets/images/image-web-3-desktop.jpg";

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="header-container">
          <img
            className="header-container__image"
            src={coverImage}
            alt="Header"
          />
        </div>
        <div className="new-container new">
          <div className="new__item">
            <h2 className="new__title">New</h2>
          </div>
          <div className="new-list">
            <div className="new-list__item">
              <h3 className="new-list__heading">Hydrogen VS Electric Cars</h3>
              <p classname="new-list__paragraph">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="new-list__item">
              <h3 className="new-list__heading">
                The Downsides of AI Artistry
              </h3>
              <p classname="new-list__paragraph">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="new-list__item">
              <h3 className="new-list__heading">Is VS Funding Drying Up</h3>
              <p classname="new-list__paragraph">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="heading-container">
          <h1 className="heading-container__h1">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="article-container">
          <p className="article-container__paragraph">
            We dive into next evolution of the web that claims to put the power
            to the platforms back into the hands of people. But is it really
            fullfilling its promise?
          </p>

          <button className="btn btn--red">Read more</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
