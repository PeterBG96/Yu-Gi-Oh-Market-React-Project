import { Link } from "react-router-dom"


const Pegasus = () =>{
    return(
    <header>
        <article>
            <img src="/images/PegasusAndYugi.jpg" className="PegasusAndYugiImg"/>
        </article>
        <article className="infoPegasus">
            <p>
                Maximillion Pegasus is the president of Industrial Illusions and the creator of the game of Duel Monsters.
            </p>
            <p>
                He was a host of the first tournamet in Yu-Gi-Oh series.
            </p>
            <p>
                Pegasus sent Yugi's granpa soul into the shadow realm, forcing Yugi to join his tournament.
            </p>
            <p>
                He owns many cards that have never been released to the public, such as "Toon world" , "Relinquished" and many more.
            </p>
            <p>
                Destipe his strong cards and his millenium eye which allows him to see his opponnents cards, he was defeated by Yugi Muto at the end of season one.
            </p>
        </article>
        <img src="/images/toon_world.png" className="toonWorld"/>
        <img src="/images/toon_mermaid.png" className="toonMermaid"/>
        <img src="/images/toonBlueEyesWhiteDragon.png" className="toonDragon"/>
        <img src="/images/toonSummonedSkull.png" className="toonSummonedSkull"/>
        <img src="/images/relinquished.png" className="relinquished"/>
        <img src="/images/pegasusNormal.png" className="normalPegasus"/>
        <img src="/images/cloud.png" className="normalPegasusCloud"/>
        <p className="PegasusQuestion">What is your favourite Toon-monster card?<Link to="/login" className="PegasusTellMe"> Tell me here.</Link></p>
        <article>
            <style>{"body { background-image: url('/images/castle.jpg')  ; background-size: 100% 100%}"}</style>
        </article>

    </header>
    )
}

export default Pegasus