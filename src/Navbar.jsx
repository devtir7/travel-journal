import navLogo from './assets/globe.png'

export default function Navbar()
{
    return (
        <nav>
            <img src={navLogo} />
            <p>my travel journal.</p>
        </nav>
    )
}