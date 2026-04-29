import comics from "../comics.js"

const dataComicsCard = comics.map((comic) => {
    const { id, series, thumb } = comic;
    return <div key={id}>
        <div>
            <img src={thumb} alt="immagine fumetto" />
        </div>
        <p>
            {series}
        </p>
    </div>

})


function MainCard() {
    return <>
        <div>
            {dataComicsCard}
        </div>
    </>
};

export default MainCard;