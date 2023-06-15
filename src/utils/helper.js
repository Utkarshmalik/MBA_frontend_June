import { TOKEN } from "./constants";


export const isUserLoggedIn = ()=>{
    const token = localStorage.getItem(TOKEN);

    return token !=undefined;

}