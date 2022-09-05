import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import * as authService from "../../services/authService"
import { Link } from "react-router-dom"


const Login = () =>{
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const onLoginHandler = (e) =>{
        e.preventDefault()

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));


        authService.login(email, password)
            .then((authData) =>{
                userLogin(authData)
                navigate("/")
            })
            .catch(() => {
                navigate('/login');
            });

        
    }

    return(
    <section className="loginSectionOne">
        <article className="loginPage">
            <h1>Login</h1>
            <article className="login">
                <form id="login-form" onSubmit={onLoginHandler}>
                    <article className="emailArticle">
                        <label htmlFor="email">Email address:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                    </article>
                    <article className="passwordArticle">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" required/>
                    </article>
                    <article className="form-group">
                        <p>Not registered yet? <Link to="/register">Register Now!</Link></p>
                    </article>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </article>
        </article>
        <img src="/images/TheDarkMagician.png" className="darkMagician"/>
        <img src="/images/Yami.png" className="thePharoh"/>

        <article>
            <style>{"body { background-image: url('/images/stoneTablet.jpg')  ; background-size: 100% }"}</style>
        </article>
    </section>
    )
}

export default Login