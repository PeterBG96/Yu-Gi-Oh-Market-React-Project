import { useContext } from "react"
import { CardContext } from "../../contexts/CardContext"
import * as yugiService from "../../services/yugiService"

const Create = () =>{
    const {cardAdd} = useContext(CardContext)

    const onCardCreate = (e) =>{
        e.preventDefault()

        const cardData = Object.fromEntries(new FormData(e.target))


        yugiService.create(cardData)
            .then(result =>{
                cardAdd(result)
            })
    }


    return(
    <main className="createMain">
        <section id="createPage">
            <article className="createSection">

                <form id="create-form" onSubmit={onCardCreate} method="POST">
                    <h2>Create Offer</h2>
                    <ul className="noBullet">
                        <li className="nameCard">
                            <label htmlFor="cardName">Card name:</label>
                            <input type="text" className="inputFields" id="cardName" placeholder="Time wizard" name="cardName"  />
                        </li>
                        <li className="cardType">
                            <label htmlFor="type">Type:</label>
                            <input type="text" className="inputFields" id="type" placeholder="Ultra rare" name="cardType"  />
                        </li>
                        <li className="creationDate">
                            <label htmlFor="date">Date of creation:</label>
                            <input type="text" className="inputFields" id="date" placeholder="18.02.2021" name="date"  />
                        </li>
                        <li className="cardImage">
                            <label htmlFor="image">Card image:</label>
                            <input type="text" className="inputFields" id="image" placeholder="http:/..." name="cardImg"  />
                        </li>
                        <li className="cardDescription">
                            <label className="descLabel" htmlFor="description">Description:</label>
                            <textarea id="description1" className="inputFields" name="cardDescription" placeholder="Card's condition is..."/>
                        </li>
                        <li className="cardPrice">
                            <label htmlFor="cardCreatePrice">Price:</label>
                            <input type="text" className="inputFields" id="cardCreatePrice" placeholder="50" name="price"  /> <span>EUR</span>
                        </li>
                        <li>
                            <button className="btnCreate">Create</button>
                        </li>
                    </ul>
                </form>
            </article>
        </section>
        <img src="/images/Joey.png" id="tuk" className="joeyWheeler"/>
        <img src="/images/TimeWizard.png" className="timeWizard"/>
        <img src="/images/BabyDragon.png" className="babyDragon"/>
        <img src="/images/Polymerization.jpg" className="polymerization"/>
        <img src="/images/ThousandDragon.png" className="thousandDragon" />
        <article>
            <style>{"body { background-image: url('/images/stoneTablet.jpg')  ; background-size: 100% }"}</style>
        </article>
    </main>
    )
}

export default Create