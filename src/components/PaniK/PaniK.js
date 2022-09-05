import { Link } from "react-router-dom"


const PaniK = () =>{
    return(
    <header>
        <article>
            <img src="/images/YugiAndPaniK.png" className="imgYugiAndPaniK"/>
        </article>
        <article className="infoPaniK">
            <p>
                PaniK is a player Eliminator hired by Maximillion Pegasus. He is a brutal man who targeted duelists who had earned many star chips, during Duelist Kingdom tournament.
            </p>
            <p>
                He forced Mai Valentine to a duel and took all of her star chips, so she had to leave the tournament.
            </p>
            <p>
                Then Panik challenged Yugi Muto, who accepted the offer and duel for the Mai star chips.
            </p>
            <p>
                In this duel PaniK used his favourite cards like Castle Of The Dark Illusions, King Of Yamimakai, Reaper Of The Cards and Zoa.
            </p>
            <p>
                To defeat him Yugi had to catapult his own Gaia The Dragon Champion, using Catapult Turtle. He charched the Castle Of The Dark Illusions, which crumbled over PaniK's monsters taking all of his remaining life points.
            </p>
        </article>
        <img src="/images/CastleOfDarkIllusions.png" className="imgCastleOfDarkIllusions"/>
        <img src="/images/ReaperOfTheCards.png" className="imgReaperOfTheCards"/>
        <img src="/images/KingOfYamimakai.png" className="imgKingOfYamimakai"/>
        <img src="/images/Zoa.png" className="imgZoa"/>
        <img src="/images/GaiaTheFierceKnight.png" className="imgGaiaTheFierceKnight"/>
        <img src="/images/CurseOfDragon.png" className="imgCurseOfDragon"/>
        <img src="/images/Polymerization.jpg" className="imgPolymerization"/>
        <img src="/images/GaiaTheDragonChampion.png" className="imgGaiaTheDragonChampion"/>
        <img src="/images/PaniK.png" className="imgPaniK"/>
        <img src="/images/cloud.png" className="cloudPaniK"/>
        <p className="PanikQuestion">What is your favourite Fiend-Type monster?<Link to="/forum" className="PanikTellMe">Tell me here.</Link> </p>
        <article>
            <style>{"body { background-color: rgb(22, 21, 21); background-size: 100% 100%}"}</style>
        </article>
    </header>
    )
}

export default PaniK