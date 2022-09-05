import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import * as yugiService from "../../services/yugiService"
import { CardContext } from "../../contexts/CardContext"

const Edit = () =>{
    const[currentCard, setCurrentCard] = useState({})
    const {cardEdit} = useContext(CardContext)
    const {cardId} = useParams();
    const navigate = useNavigate()

    useEffect(() =>{
        yugiService.getOne(cardId)
            .then(cardData =>{
                setCurrentCard(cardData)
            })
    },[])

    const onSubmit = (e) =>{
        e.preventDefault()

        const cardData = Object.fromEntries(new FormData(e.target))

        yugiService.edit(cardId, cardData)
            .then(result =>{
                cardEdit(cardId, result)
                navigate(`/details/${cardId}`)
            })
    }

    return(
    <section id="EditPage">
        <article className="EditSection">

            <form id="editForm" onSubmit={onSubmit}>
                <h2>Edit Offer</h2>
                <ul className="noBullet">
                    <li className="nameCardEdit">
                        <label htmlFor="cardNameEdit">Card name:</label>
                        <input type="text" className="inputFields" id="cardNameEdit" placeholder="Time wizard" name="cardName" defaultValue={currentCard.cardName} />
                    </li>
                    <li className="cardTypeEdit">
                        <label htmlFor="type">Type:</label>
                        <input type="text" className="inputFields" id="type" placeholder="Ultra rare" name="cardType" defaultValue={currentCard.cardType} />
                    </li>
                    <li className="creationDateEdit">
                        <label htmlFor="date">Date of creation:</label>
                        <input type="text" className="inputFields" id="date" placeholder="18.02.2021" name="date" defaultValue={currentCard.date} />
                    </li>
                    <li className="cardImageEdit">
                        <label htmlFor="image">Card image:</label>
                        <input type="text" className="inputFields" id="image" placeholder="http:/..." name="cardImg"  defaultValue={currentCard.cardImg}/>
                    </li>
                    <li className="cardDescriptionEdit">
                        <label className="descLabelEdit" htmlFor="description">Description:</label>
                        <textarea id="description12" className="inputFieldsDescription" name="cardDescription" placeholder="Card's condition is..." defaultValue={currentCard.cardDescription}/>
                    </li>
                    <li className="cardPriceEdit">
                        <label htmlFor="priceEditCard">Price:</label>
                        <input type="text" className="inputFields" id="priceEditCard" placeholder="50 Euro" name="price"  defaultValue={currentCard.price}/> <span>EUR</span>
                    </li>
                    <li>
                        <button className="btnEdit">Edit</button>
                    </li>
                </ul>
            </form>
        <article>
            <style>{"body { background-image: url('/images/godCards.jpg')  ; background-size: 100% ; height:120vh}"}</style>
        </article>
        </article>
    </section>
    )
}

export default Edit