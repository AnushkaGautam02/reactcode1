import HTTP from "./http1"

export const doLogin= async({email, password}) =>{
    return await HTTP.post('/account/login',{email, password});
}