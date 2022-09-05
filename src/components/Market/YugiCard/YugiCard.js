import { Link} from 'react-router-dom';
import { useAuthContext} from "../../../contexts/AuthContext"


const YugiCard = ({
    card
}) =>{
    const {user} = useAuthContext()

    return(
        <li className="YuGiOhCard">
            <h3 className="maketCardName">Card name: {card.cardName}</h3>
            <p className="marketCardType">Type:{card.cardType}</p>
            <p className="marketDateOfCreation">Date of creation: {card.date}</p>
            <p className="marketCardImg"><img width={"180px"} src={card.cardImg} /></p>
            <p className="marketCardsDesctiption">Description:{card.cardDescription}</p>
            <p className="marketCardPrice">Price: {card.price} <span>EUR</span></p>
            {user._id === card._ownerId
                ?
                <p className="ownerIcon">Owner: <img className='ownerIconCheck' src='/images/CheckSymbol.png' width="50px" /></p>
                :
                <p className="ownerIcon">Owner:<img className='ownerIconReject' src='/images/RejectSymbol.png' width="55px" /></p>
            }
            <Link className="buttonYuGiOhCard" to={`/details/${card._id}`}>Details</Link>
        </li>
    )
}

export default YugiCard