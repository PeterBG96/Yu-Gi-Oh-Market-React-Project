import { useContext } from "react";
import {CardContext} from "../../contexts/CardContext"
import { useState } from "react";

import YugiCard from "./YugiCard"
import{FaSearch} from "react-icons/fa"


const Market  = () =>{
    const {cards} = useContext(CardContext)

    const [query, setQuery] = useState("")

    return(
    <article id="marketPage" className="marketCards">
        <h1>Welcome to Yu-Gi-Oh Market</h1>
        
            {cards.length > 0
                ? (
                <article>
                    <FaSearch size="1.4em" className="searchIconFa"/>
                    <article className="searchingCards">
                        <label className="labelCardSearch" htmlFor="cardSearch">Search for cards</label>
                        <input  id="cardSearch" className="searchCards" type="text" placeholder= "Search" onChange={(e) => setQuery(e.target.value)}/>
                    </article>
                <ul className="YuGiOhCardList">
                    {cards.filter(card => card.cardName.toLowerCase().includes(query) || card.cardName.includes(query)
                    ).map(x=> <YugiCard key={x._id} card={x}/>)}

                    
                </ul>
                </article>
                )
                : <article>
                    <img className="marketSolomonMuto" src="/images/granpa.png"></img>
                    <img className="marketBlackCLoud" src="/images/BlackCLoud.png"></img>
                    <p className="textSolomonMuto">I'm sorry. Currently we are out of cards. Please come back later.</p>
                    <article>
                     <style>{"body { background-image: url('/images/GrandpaShop.jpg')  ; background-size: 100% ; height:114vh}"}</style>
                    </article>
                </article>
                
            }
        <article>
            <style>{"body { background-image: url('/images/GrandpaShop.jpg')  ; background-size: 100% ; height:114vh}"}</style>
        </article>
    </article>
    )
}

export default Market