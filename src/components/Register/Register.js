import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import * as authService from "../../services/authService"
import {AuthContext} from "../../contexts/AuthContext"

const Register = () =>{
    const navigate = useNavigate()
    const {userLogin} = useContext(AuthContext)

    const registerSubmitHandler = (e) =>{
        e.preventDefault()

        let {firstName, lastName, gender, email, password,repass} = Object.fromEntries(new FormData(e.currentTarget))

        if (password !== repass) {
            throw new Error("Passwords are different !!!")
        }



        authService.register(firstName, lastName,gender, email, password)
            .then(authData =>{
                userLogin(authData)

                navigate("/")
            })
    }

    return(
    <section className="registerSectionOne">
        <form method="POST" className="signupForm" onSubmit={registerSubmitHandler}>
            <h1>Sign Up</h1>
            <ul className="noBullet">
                <li className="firstNameField">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" className="inputFields" id="first-name" name="firstName"  placeholder="Alex" required/>
                </li>
                <li className="lastNameField">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" className="inputFields" id="last-name" name="lastName"  placeholder="Petkov" required/>
                </li>
                <li className="genderField">
                    <label htmlFor="last-name">Gender:</label>
                    <input type="radio" name="gender" id="maleRadioButton" value="Male" className="inputFields"/>Male
                    <input type="radio" name="gender" id="femaleRadioButton" value="Female" className="inputFields"/>Female
                </li>
                <li className="emailField">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="inputFields" id="email" name="email"  placeholder="alex@gmail.com" required/>
                </li>
                <li className="passwordField">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="inputFields" id="password" name="password" placeholder="******" required/>
                </li>
                <li className="repassField">
                    <label htmlFor="repeat-password">Repeat-Password:</label>
                    <input type="password" className="inputFields" id="repeat-password" name="repass" placeholder="******" required/>
                </li>
                <li className="join">
                    <button id="join-btn">Join</button>
                </li>
            </ul>
        </form>
        <img src="/images/Kaiba.png" className="kaiba"/>
        <img src="/images/BlueEyes.png" className="whiteDragon"/>
        <article>
            <style>{"body { background-image: url('/images/stoneTablet.jpg')  ; background-size: 100% }"}</style>
        </article>
    </section>
    )
}

export default Register