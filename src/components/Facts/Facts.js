import { Link } from "react-router-dom"


const Facts = () =>{
    return(
    <article>
        <article className="explanationArticle">
            <p className="explanationParagraph">
                Welcome to Yu-Gi-Oh facts page. Here You can find interesting facts about every character in Yu-Gi-Oh world.
            </p>
            <p className="explanationParagraph">
                Each week we will upload one page full of interesting content about your favourite Yu-Gi-Oh characters.
            </p>
        </article>
        <article className="charactersFacts">
            <p className="charactersFactsLearn">Learn more about:</p>
            <article className="factMakoTsunami">
                <Link className="factMakoTsunamiLink" to="/facts/makotsunami">Mako Tsunami</Link>
            </article>
            <article className="factWeevilUnderwood">
                <Link className="factWeevilUnderwoodLink" to="/facts/weevilunderwood">Weevil Underwood</Link>
            </article>
            <article className="factPaniK">
                <Link className="factPaniKLink" to="/facts/panik">PaniK</Link>
            </article>
            <article className="factMaximillionPegasus">
                <Link className="factMaximillionPegasusLink" to="/facts/pegasus">Maximillion Pegasus</Link>
            </article>
            <article className="factYugiMuto">
                <Link className="factYugiMutoLink" to="/facts/yugimuto">Yugi Muto</Link>
            </article>
        </article>
        <article>
         
         <style>{"body { background-image: url('/images/YuGiOhPaper.jpg')  ; background-size: 100% ; height:120vh }"}</style>
         <style>{"#site-content{padding-right:1100px}"}</style>

        </article>
    </article>
    )
}

export default Facts