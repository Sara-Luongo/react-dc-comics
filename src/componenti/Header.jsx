import './Header.css'

const navMenuItems = [
    {
        title: 'COMICS',
        id: 1
    },
    {
        title: 'MOVIES',
        id: 2
    },
    {
        title: 'TV',
        id: 3
    },
    {
        title: 'GAMES',
        id: 4
    },
    {
        title: 'COLLECTIBLES',
        id: 5
    },
    {
        title: 'VIDEOS',
        id: 6
    },
    {
        title: 'FANS',
        id: 7
    },
    {
        title: 'NEWS',
        id: 8
    },
    {
        title: 'SHOP',
        id: 9
    }
]

const menuItems = navMenuItems.map((items) => {
    const { title, id } = items
    return (<li key={id}>
        {title}
    </li>)
})

function Header() {
    return (
        <header className='header'>
            <nav className='header-navbar'>
                <div>
                    <a href='#'>
                        <img src="/img/dc-logo.png" alt="logo della DC" />
                    </a>
                </div>
                <div>
                    <ul className='header-list'>
                        {menuItems}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;