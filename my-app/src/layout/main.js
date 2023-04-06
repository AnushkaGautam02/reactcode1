import {Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderNavBar from "../component/header"
import { useAuth } from "../Context/AuthContext";


const MainContainer = ({children})=>{
    return(
        <div className="main_container">

        {children}
        </div>
    )
}

const ProtectedPage = () =>{
    return(
        <>
        
        <HeaderNavBar/>
        <MainContainer>
        <Outlet/>
        </MainContainer>
       
        </>
    )
}
const Main=()=>{

    const authContext = useAuth();
    return(
        <>
        { authContext.toke?<ProtectedPage/>:<Navigate to="/account.login"/>}
        </>
    )
}

export default Main;