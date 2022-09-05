import { createContext,useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as yugiService from "../services/yugiService"

export const CardContext = createContext();

const cardReducer = (state, action) =>{
    switch(action.type){
        case "ADD_CARD":
            return [...state, action.payload];
        case "ADD_CARDS":
            if(action.payload.length >0){
            return action.payload.map(x => ({...x}))
            }
        case "EDIT_CARD":
            return state.map(x => x._id === action.cardId ? action.payload : x);
        case "REMOVE_CARD":
            return state.filter(x => x._id !== action.cardId);
        default:
            return state
    }
}

export const CardProvider = ({
    children
}) =>{
    const navigate = useNavigate();
    const [cards, dispatch] = useReducer(cardReducer, [])

    useEffect(() =>{
        yugiService.getAll()
            .then(result =>{
                const action = {
                    type: "ADD_CARDS",
                    payload: result
                }

                dispatch(action)
            })
    }, [])

    const selectCard = (cardId) =>{
        return cards.find(x => x._id === cardId) || {}
    }

    const fetchCardDetails = (cardId, cardDetails) =>{
        dispatch({
            type: "FETCH_CARD_DETAILS",
            payload: cardDetails,
            cardId,
        })
    }

    const cardAdd = (cardData) =>{
        dispatch({
            type: "ADD_CARD",
            payload: cardData,
        })

        navigate("/market")
    }

    const cardEdit = (cardId, cardData) =>{
        dispatch({
            type:"EDIT_CARD",
            payload: cardData,
            cardId,
        })
    }

    const cardRemove = (cardId) =>{
        dispatch({
            type: "REMOVE_CARD",
            cardId
        })
    }

    return (
        <CardContext.Provider value={{
            cards,
            cardAdd,
            cardEdit,
            fetchCardDetails,
            selectCard,
            cardRemove
        }}>
            {children}
        </CardContext.Provider>
    );
}
