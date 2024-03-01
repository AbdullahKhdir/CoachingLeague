const Navigation = () => {
    return(
        <>
            {/* <div className="blur"></div> */}
            <div className="container">
                <nav className="navigation-bar">
                    <a className="navigation-bar-brand" href="#logo">Logo</a>

                    <ul className="navigation-bar-routes">
                        <li className="navigation-item">
                        <a className="nav-link" href="#coaching">Become a Coach or a Player</a>
                        </li>
                        {/* <li className="navigation-item">
                        <a className="nav-link" href="#play-with-a-pro">Play with a pro</a>
                        </li> */}
                    </ul>

                    <ul className="navigation-bar-actions">
                        <li className="navigation-item">
                        <a className="nav-link" href="#sign-in">Sign in</a>
                        </li>
                        <li className="navigation-item">
                        <a className="nav-link" href="#sign-up">Sign up</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navigation;