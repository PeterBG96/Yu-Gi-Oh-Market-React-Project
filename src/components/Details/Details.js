import { useParams, Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import DetailsCss from "./Details.module.css"
import { useAuthContext} from "../../contexts/AuthContext"

import * as yugiService from "../../services/yugiService"
import { CardContext } from "../../contexts/CardContext"

const Details = () =>{
    const {cardId} = useParams()
    const navigate = useNavigate()
    const {fetchCardDetails,selectCard, cardRemove} =useContext(CardContext)
    const {user} = useAuthContext()
    const currentCard = selectCard(cardId)

    const isOwner = currentCard._ownerId === user._id

    useEffect(() =>{
        (async () =>{
            const cardDetails = await yugiService.getOne(cardId)
            fetchCardDetails(cardId,{...cardDetails})
        })();
    },[])

    const cardDeleteHandler = () =>{
        const confirmation = window.confirm(`Are you sure you want to delete this card?`)

        if(confirmation){
            yugiService.remove(cardId)
                .then(() =>{
                    cardRemove(cardId)
                    navigate("/market")
                })
        }
    }

    // const card = cards.find(x => x._id == cardId)

    return(
    <section id="details-page" className="details">
        <article className={DetailsCss.cardInformation}>
            <h3 className={DetailsCss.detailsCardName}>Name: {currentCard.cardName}</h3>
            <p className={DetailsCss.detailsCardType}>Type: {currentCard.cardType}</p>
            <p className={DetailsCss.detailsDate}>Date: {currentCard.date}</p>
            <p className={DetailsCss.detailsCardImage}><img width={"380px"} src= {currentCard.cardImg} /></p>
            <article className={DetailsCss.detailsCardDesciption}>
            <h3>Description:</h3>
            <p>{currentCard.cardDescription}</p>
            </article>
            <p className={DetailsCss.detailsPrice}>Price: {currentCard.price} <span>EUR</span></p>
            <article id="actionButtons" className="actions">
                {isOwner && user.email !== undefined &&
                    <article className="ownerButtons">
                        <Link className={DetailsCss.buttonEdit} to={`/market/${cardId}/edit`}>Edit</Link>
                        <button className={DetailsCss.buttonDelete} onClick={cardDeleteHandler}>Delete</button>
                        
                    </article>
                }
                {!isOwner && user.email !== undefined &&
                    <article className="guestButtons">
                        <Link className={DetailsCss.buttonBuy} to={`/market/${cardId}/buy`}>Buy</Link>
                    </article>
                }
  
            </article>
            <article>
                <br></br>
                <br></br>
                <br></br>
            </article>
        </article>
        <article>
            <style>{"body { background-image: url('/images/CardsBackground.png')  ; background-size: 100% ; height:114vh}"}</style>
        </article>

    </section>
    )
}

export default Details