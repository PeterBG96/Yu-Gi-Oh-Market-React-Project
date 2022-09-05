import { useState, useEffect, useContext } from "react"
import {useLocalStorage} from "../../hooks/useLocalStorage"
import {CardContext} from "../../contexts/CardContext"
import { useAuthContext} from "../../contexts/AuthContext"
import CardOffer from "./CardOffer"
import { useParams } from "react-router-dom"



const Profile = () =>{
    const {cardId} = useParams()
    const { cards } = useContext(CardContext);
    const [showBanner, setShowBanner] = useState(true)
    // const [ data, setData] = useLocalStorage(`auth`, {})
    const {user} = useAuthContext()

    useEffect(() =>{
        const data = window.localStorage.getItem("My_Profile_Banner")
        if(data !== null) setShowBanner(JSON.parse(data))
    },[])

    useEffect(() =>{
        window.localStorage.setItem("My_Profile_Banner", JSON.stringify(showBanner))
    }, [showBanner])

    return(
    <article>
        <article className="profileInfo">
            <article>
                {user.gender === "Male"
                ? <img className="profilePictureGender" src="/images/maleProfile.jpg" />
                : <img className="profilePictureGender" src="/images/femaleProfile.jpg" />
                }
                
            </article>
            <article className="currInfo">First name: {user.firstName}</article>
            <article className="currInfo">Last name: {user.lastName}</article>
            <article className="currInfo">Email: {user.email}</article>
        </article>
        {showBanner &&(
        <article className="profileBanner">
            <h2>Welcome to profile page</h2>
            <p>Here you can check your personal information, and show it to other users.</p>
            <p>You can check your offers too.</p>
            <img className="imgCopyCat" src="/images/CopyCat.png"/>
            <img className="imgJinzo" src="/images/Jinzo.png"/>
            <button className="btnProfileBanner" onClick={() => setShowBanner(false)}>Hide</button>
        </article>
        )}
        <article id="displayOurOffers">
            <h2 className="myOffersProfile">My offers</h2>

            {cards.length > 0
                ?( <h2 className="showingOffersNumber">I have {cards.filter(card => card._ownerId.includes(user._id)).length} cards on market.</h2>
                
                ): <p className="no-articles">I don't have any offers yet.</p>
                
            }

            {cards.length > 0
                ?( cards.filter(card => card._ownerId.includes(user._id)).map(x => <CardOffer key={x._id} card={x} /> )
                
                ): <p className="no-articles">No cards yet</p>
                
            }

        
        </article>
        <article>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </article>
        <article>
            <style>{"body { background-image: url('/images/BuyBackground.jpg')  ; background-size: 100% ; height:150vh }"}</style>
        </article>
    </article>
    )
}

export default Profile