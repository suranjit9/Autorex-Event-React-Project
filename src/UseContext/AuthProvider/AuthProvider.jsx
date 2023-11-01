import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);



    const userCreate =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUsere =>{
            setUser(currentUsere)
        });
        return ()=>{unsubscribe();} 
    },[])


    // Export EveryWhere
    const authInfo ={
        user,
        userCreate,
        singIn,
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node,
}
export default AuthProvider;