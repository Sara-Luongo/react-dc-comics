import comics from "../comics.js";

const dataComicsCard = comics.map((comic) => {
    const { id, series, thumb } = comic;
    return <div className="card-container" key={id}>
        <div className="container-img-main">
            <img src={thumb} alt="immagine fumetto" />

            <p>
                {series}
            </p>
        </div>
    </div>
});


function MainCard() {
    return <section className="main-card-section">
        {dataComicsCard}
        <div className="contenitore-bottone ">
            <button className="bottone-main">LOAD MORE</button>
        </div>
    </section>
};

export default MainCard;