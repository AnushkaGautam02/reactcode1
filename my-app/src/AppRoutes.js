import { Route, Routes } from "react-router-dom";
import Account from "./layout/account";
import Login from "./container/Login";
import Main from "./layout/main";
import Home  from './container/Home';
import ForgotPassword from "./container/ForgetPassword";

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account/>}>
                <Route path="login" element={<Login/>} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="/" element={<Main />}>
                <Route path="" element={< Home />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
    )
}

export default AppRouters;