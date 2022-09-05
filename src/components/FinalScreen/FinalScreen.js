import { Link } from "react-router-dom"


const FinalScreen = () =>{
    return(
        <article>
            <article className="finalScreenArticle">
                <h1>
                    Your purchase has been fulfilled !!!
                </h1>
                <p>Thanks for using our website.</p>
                <p>To go back to the market please click <Link className="finalClick" to="/market">here</Link></p>
            </article>
            <article>
                <style>{"body { background-image: url('/images/PharohFinal.gif')  ; background-size: 110%}"}</style>
            </article>
        </article>
    )
}

export default FinalScreen