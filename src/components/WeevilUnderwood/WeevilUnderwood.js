import { Link } from "react-router-dom"


const WeevilUnderwood = () =>{
    return(
    <header>
        <article>
            <img src="/images/JoeyWeevil.jpg" className="JoeyAndWeevil"/>
        </article>
        <article className="infoWeevil">
            <p>
                Weevil Underwood displays an adoration for insects, and as such his Deck is based on Insect-Type monsters.
            </p>
            <p>
                He is very tricky opponent.
            </p>
            <p>
                In second season he challenged Joey Wheeler, whose deck Weevil slipped into his Parasite Paracide, turning turned all Joey's monsters into insects,
                but despite that fraud he was defeated.
            </p>
            <p>
                His favourite cards are "Insect Queen" and "Great Moth".
            </p>
        </article>
        <img src="/images/WeevilUnderwood.png" className="WeevilImg"/>
        <img src="/images/cloud.png" className="cloudWeevil"/>
        <img src="/images/InsectQueen.png" className="insectQueenImg"/>
        <img src="/images/GreatMoth.png" className="imgGreatMoth"/>
        <p className="WeevilQuestion">What is your favourite Insect-type monster? <Link to="/forum" className="WeevilTellMe">Tell me here.</Link></p>
        <article>
            <style>{"body { background-image: url('/images/grass.png')  ; background-size: 100%  100%}"}</style>
        </article>
    </header>
    )
}

export default WeevilUnderwood