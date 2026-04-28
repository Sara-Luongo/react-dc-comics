import './Header.css'

const navMenuItems = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP']

const menuItems = navMenuItems.map((items, index) => {
    return (<li key={index}>
        <a
            href="#">{items}
        </a>
    </li>)
})

function Header() {
    return (
        <header className='header' >
            <nav className='header-navbar'>
                <a href='#'>
                    <img src="/img/dc-logo.png" alt="logo della DC" />
                </a>

                <ul className='header-list'>
                    {menuItems}
                </ul>
            </nav>
        </header>
    )
}
export default Header;