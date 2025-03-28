import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Smile With Ven</h1>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>             
        </div>
    )
}

export default Navbar;