import './Footer.css'
import FooterLinks from "./Footer-links.jsx"
function Footer() {
    return <>
        <footer className='footer'>

            <section className='section-items'>
                <ul className='list-items'>
                    <li><img src="/img/buy-comics-digital-comics.png" alt="" />DIGITAL COMICS</li>
                    <li><img src="/img/buy-comics-merchandise.png" alt="" />DC MERCHANDISE</li>
                    <li><img src="/img/buy-comics-shop-locator.png" alt="" />SUBSCRIPTION</li>
                    <li><img src="/img/buy-comics-subscriptions.png" alt="" />COMIC SHOP LOCATOR</li>
                    <li><img src="/img/buy-dc-power-visa.svg" alt="" />DC POWER VISA</li>
                </ul>
            </section>

            <section className='section-footer-links'>
                <FooterLinks />
            </section>

            <section>
                <div>
                    <button>SING-UP NOW!</button>
                </div>
                <div>
                    <h3>FOLLOW US</h3>
                    <ul>
                        <li><img src="public/img/footer-facebook.png" alt="" /></li>
                        <li><img src="public/img/footer-periscope.png" alt="" /></li>
                        <li><img src="public/img/footer-pinterest.png" alt="" /></li>
                        <li><img src="public/img/footer-twitter.png" alt="" /></li>
                        <li><img src="public/img/footer-youtube.png" alt="" /></li>
                    </ul>
                </div>
            </section>
        </footer >
    </>

}
export default Footer;