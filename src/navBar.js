import logo from './assets/wyink-logo-8.png'

const NavBar = () => {
    return ( 
        <div className="nav-wrapper">
            <nav className="purple darken-4">
                <div className="container center">
                    <a href="/" className="center brand-logo"><img  className="responsive-img center" src={logo} alt="wyink-logo" width="100" height="50"/></a>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;