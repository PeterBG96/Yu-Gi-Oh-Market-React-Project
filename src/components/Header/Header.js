import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";


const Header = () =>{
    const { user } = useContext(AuthContext)

    let guestNavigation = (
        <article id="guestNavigation">
            <article className="marketSite">
                <Link to="/market" className="btnMarketGuest">Market</Link>
            </article>
            <article className="factsSite">
                <Link to="/facts" className="btnFactsGuest">Facts</Link>
            </article>
            <article className="loginSite">
                <Link to="/login"  className="btnLoginGuest" >Login</Link>
            </article>
            <article className="registerSite">
                <Link to="/register" className="btnRegisterGuest">Register</Link>
            </article>
            <article className="contactSite">
                <Link to="/contact" className="btnContactGuest">Contact</Link>
            </article>
        </article>
    );

    let userNavigation = (
        <article id="userNavigation">
            <article className="createSite">
                <Link to="/create" className="btnCreate">Create Offer</Link>
            </article>
            <article className="marketSite">
                <Link to="/market" className="btnMarket">Market</Link>
            </article>
            <article className="forumSIte">
                <Link to="/forum" className="btnForum">Forum</Link>
            </article>
            <article className="factsSite">
                <Link to="/facts" className="btnFacts">Facts</Link>
            </article>
            <article className="profileSite">
                <Link to="/profile" className="btnProfile">Profile</Link>
            </article>
            <article className="contactSite">
                <Link to="/contact" className="btnContact">Contact</Link>
            </article>
            <article className="contactSite">
                <Link to="/logout" className="btnLogout">Logout</Link>
            </article>
        </article>
    )

    return(
    <header>
        <section className="headerSectionOne">
            <article className="headerButtons">
                <article className="homeSite">
                    <Link to="/" className="btnHome">Home</Link>
                </article>


                {user.email
                    ?userNavigation
                    :guestNavigation}
            </article>
        </section>
    </header>
    )
}

export default Header