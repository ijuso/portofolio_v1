import "../styles/nav.css"

export default function Navbar() {
    return (
        <div className="topnav">
            <div class="navList">
            <a className="listItemText" class="split" href="#Contact">CONTACT</a>
            <a className="listItemText" class="split" href="#Projects">PROJECTS</a>
            <a className="listItemText" class="split" href="#Skills">SKILLS</a>
            <a className="listItemText" class="split" href="#About">ABOUT</a>
            </div>
        </div>
    )
}