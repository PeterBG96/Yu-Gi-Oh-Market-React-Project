import {Link} from "react-router-dom"

const ThankYou = () =>{
    return(
    <article>
        <article>
            {/* <p>Thanks</p>
            <Link to="/">here </Link> */}

        </article>
        <img src="/images/TeaGardner.png" className="TeaGardnerImg"/>;
        <img src="/images/BlackCloud.png"  className="cloudTeaGardner"/>
        <p className="TeaGardnerText">We have received your message. Within 48 hours we will respond. <Link className="linkTextTea" to="/">Have a nice day.</Link></p>
        <article>
                <style>{"body { background-image: url('/images/hall.jpg')  ; background-size: 100% 100% }"}</style>
        </article>
    </article>

    )
}

export default ThankYou