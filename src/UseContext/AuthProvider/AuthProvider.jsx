import { createContext } from "react";
import PropTypes from 'prop-types';
export const authContext = createContext(null);
const AuthProvider = ({children}) => {

    const authInfo ={};
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