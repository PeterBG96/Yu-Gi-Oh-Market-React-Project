import React from 'react';
import { Link } from "react-router-dom"


// document.body.style.backgroundImage = "url('/images/thumb-1920-1204527.png')"
// document.body.style.backgroundSize = "100%"

const Home  = (changebackground) =>{
    return(
    <section className="mainSectionOne">
        <article className="infoToShow">
                <h1 className="yugiTitle">
                    Weclome to Yu Gi Oh Market!
                </h1>
                <p>
                    Here you can buy and sell your favourite yu gi oh cards.To do that click <Link className="pOne" to="/market">here</Link>.
                </p>
                <p>
                    If you want to learn more about Yu-Gi-Oh world please click <Link className="pTwo" to="/facts">here</Link>.
                </p>
                <p>
                    If you have some questions please <Link className="pThree" to="/contact">contact us</Link>.
                </p>
        </article>
        <article>
            <style>{"body { background-image: url('/images/thumb-1920-1204527.png')  ; background-size: 100% }"}</style>
        </article>
    </section>
    )
}

export default Home