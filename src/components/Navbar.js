 import "../styles/nav.css"

export default function Navbar() {
    return (
        <div className="navBarStyle">
        <ul className="navList">  
            <li className="listItem"><a className="listItemText" href="#About">Home</a></li>  
            <li className="listItem"><a className="listItemText" href="#Contact">About</a></li>  
            <li className="listItem"><a className="listItemText" href="#Projects">FAQ</a></li>  
            <li className="listItem"><a className="listItemText" href="#Skills">Contact</a></li>
        </ul>
    </div>
    )
}