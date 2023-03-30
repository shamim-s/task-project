import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PrivateRoutes = ({children}) => {
    const {userEmail} = useContext(AuthContext);
    const location = useLocation();

    if(userEmail){
        return children
    }
    return <Navigate to={'/'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;