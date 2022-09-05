import { Link } from "react-router-dom"


const PageNotFound = () =>{
    return(
    <main className="notFoundMain">
        <p className="firstP">404</p>
        <p className="secondP">
            Page is not found !!!
        </p>
        <img src="/images/pegasus.png" className="pegasus"/>
        <img src="/images/cloud.png" className="cloudPegasus"/>
        <p className="cloudText">
            Ohh nooo... You have been sent to the shadow realm. If you want to escape click <Link to="/">here</Link>.
        </p>
        <article>
            <style>{"body { background-image: url('/images/shadowRealm.jpg')  ; background-size: 100%  100%}"}</style>
        </article>
    </main>
    )
}

export default PageNotFound