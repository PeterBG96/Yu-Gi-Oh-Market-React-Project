import { Link } from "react-router-dom"


const MakoTsunami = () =>{
    return(
    <header className="headerMako">
        
        <article className="imgBoth">
            <img src="/images/Yugioh007.png" className="YugiAndMako"/>
        </article>
        <article className="infoMako">
            <p>Mako Tsunami is a fisherman who wants to become the greatest fisherman ever in honor of his late father, who tragically died on a shipwreck boat accident. </p>
            <p>He is known for dueling with honor and using a deck that contained mainly sea creatures.</p>
            <p>His favourite cards are The Legendary Fisherman and Fortress Whale.</p>
            <p>In season one he was defeated by Yami Yugi and accepted his defeat as a real champion.</p>
        </article>
        <img src="/images/MakoTsunami.png" className="MakoTsunamiImg"/>
        <img src="/images/the_legendary_fisherman.png" className="theFisherman"/>
        <img src="/images/fortress_whale.png" className="imgFortressWhale"/>
        <img src="/images/cloud.png" className="cloudMako"/>
        <p className="MakoQuestion">What is your favourite water-type monster?<Link to="/forum" className="MakoTellMe"> Tell me here.</Link></p>
        <article>
            <style>{"body { background-image: url('/images/water.jpg')  ; background-size: 100% 100%}"}</style>
        </article>
    </header>
    )
}

export default MakoTsunami