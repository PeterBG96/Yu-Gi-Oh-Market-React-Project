import { createContext,useContext } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"

export const AuthContext = createContext()

export const AuthProvider = ({
    children
})=>{
    const [ auth, setAuth] = useLocalStorage(`auth`, {})
    const [ showBanner, setShowBannerh] = useLocalStorage(`My_Profile_Banner`, {})

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
        setShowBannerh({})
    };
    
    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>  
    );
    
}

// Custom Hook
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};

// With HOC
export const withAuth = (Component) => {
    const AuthWrapper = (props) => {
        const context = useContext(AuthContext);
        
        return <Component {...props} auth={context} />
    }

    return AuthWrapper;
} 
