import { Link } from "react-router-dom"

const YugiMuto = () =>{
    return(
        <header>
        <article>
            <img src="/images/KaibaYugi.png" className="KaibaAndYugiImg"/>
        </article>
        <article className="infoKaibaAndYugi">
            <p>
                After Yugi and Joey collected their 10 star chips needed to qualified for the final part of the Duelist Kingdom tournament, they and their friends arrived at Pegasus castle.
            </p>
            <p>
                They are amazed when find out Kaiba , who challenged Yugi Muto to a duel for a second time.
            </p>
            <p>
                After Yugi accepted his challege , the battle started on the citadel on the castle.
            </p>
            <p>
                In this epic duel Kaiba managed to combine his three Blue-Eyes White Dragon, bringing his Blue-Eyes Ultimate Dragon to the battle field. This beast is one of the most card in the entire Yu-Gi-Oh world.
            </p>
            <p>
                To protect his life points Yugi multiply his Kuriboh with Multiply spell card, creating the strongest defence in the show.
            </p>
            <p>
                After some intense battle Kaiba cheated and win the duel.
            </p>
        </article>
        <img src="/images/Multiply.png" className="imgMultiply"/>
        <img src="/images/Kuriboh.png" className="imgKuriboh"/>
        <img src="/images/Kuriboh.png" className="imgKuriboh2"/>
        <img src="/images/Kuriboh.png" className="imgKuriboh3"/>
        <img src="/images/Kuriboh.png" className="imgKuriboh4"/>
        <img src="/images/Kuriboh.png" className="imgKuriboh9"/>
        <img src="/images/Kuriboh.png" className="imgKuriboh10"/>
        <img src="/images/BlueEyesUltimateDragon.png" className="imgUltimateDragon"/>
        <img src="/images/YugiMuto.png" className="imgYugiMuto"/>
        <img src="/images/cloud.png" className="cloudYugi"/>
        <p className="YugiQuestion">What is your favourite monster with attack power bellow 1000 life points? <Link className="YugiTellMe" to="/forum">Tell me here.</Link></p>
        <article>
            <style>{"body { background-image: url('/images/castle.jpg')  ; background-size: 100% 100%}"}</style>
        </article>
    </header>
    )
}

export default YugiMuto