import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="text-center"><span className="loading loading-spinner text-error"></span></div>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default PrivetRoute;