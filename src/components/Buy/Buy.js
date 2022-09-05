import { CardContext } from "../../contexts/CardContext"
import { useContext, useEffect, useState } from "react"

import * as yugiService from "../../services/yugiService"
import { useParams, Link, useNavigate } from "react-router-dom"

const Buy = () =>{
    const {cardRemove} =useContext(CardContext)
    const navigate = useNavigate()
    const {cardId} = useParams()

    const onCardBuyHandler = (e) =>{
        e.preventDefault()

        const cardData = Object.fromEntries(new FormData(e.target))

        yugiService.buyCard(cardId,cardData)

        yugiService.remove(cardId)
        .then(() =>{
            cardRemove(cardId)
            navigate("/market/buy/final")
        })

    }  


    return(
    <article>
        <article className="purchaseDetails">
            <p className="textBanditKeit">How is it going?</p>
            <img src="/images/BanditKeit.png" className="imgBanditKeit"/>
            <img src="/images/BlackCloud.png" className="cloudBanditKeit"/>
            <form method="POST" className="formPurchaseDetails" onSubmit={onCardBuyHandler}>
            <h1>Welcome to payment page</h1>
            <ul className="noBullet">
                <li className="firstNameFieldBuy">
                    <label htmlFor="first-nameBuy">First Name:</label>
                    <input type="text" className="inputFields" id="first-nameBuy" name="firstName"  placeholder="Alex" required/>
                </li>
                <li className="lastNameFieldBuy">
                    <label htmlFor="last-nameBuy">Last Name:</label>
                    <input type="text" className="inputFields" id="last-nameBuy" name="lastName"  placeholder="Petkov" required/>
                </li>
                <li className="emailFieldBuy">
                    <label htmlFor="emailBuy">Email:</label>
                    <input type="text" className="inputFields" id="emailBuy" name="email"  placeholder="alex@gmail.com" required/>
                </li>
                <li className="addressFieldBuy">
                    <label htmlFor="fullAddress">Address:</label>
                    <input type="address" className="inputFields" id="fullAddress" name="fullAddress" placeholder="Type your full address" required/>
                </li>
                <li className="paymentCardBuy">
                    <label htmlFor="paymentCard">Card number:</label>
                    <input type="debitCard" className="inputFields" id="debitCardBuy" name="paymentCard" placeholder="******" required/>
                </li>
                <li className="paymentCardDetails">
                    <input className="paymentCardDetailsExtra" name="ExpirationDate" placeholder="Expiration Date"/>
                    <input className="paymentCardDetailsExtra" name="CVC" placeholder="CVC" />
                    <input className="paymentCardDetailsExtra" name="ZIP" placeholder="ZIP" />
                </li>
                <li className="submitPayment">
                    <button id="btnSubmitPayment">Submit payment</button>
                </li>
            </ul>
            </form>
        </article>
        <article>
            <style>{"body { background-image: url('/images/BuyBackground.jpg') ;overflow-x:hidden ; background-size: 100% 100%}"}</style>
        </article>
    </article>
    )
}

export default Buy