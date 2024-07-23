import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props=
{
    children:React.ReactNode
}

const AuthProvider=({children}:Props)=>
{
    const domain=import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId=import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri=import.meta.env.VITE_AUTH0_CALLBACK_URI;
    const audience=import.meta.env.VITE_AUTH0_AUDIENCE;
    
    const navigate=useNavigate();

    if(!domain || ! clientId || !redirectUri || !audience)
    {
        throw new Error("Unable to Initialise Authentication");
    }

    const handleRedirectCallBack=()=>
    {
        navigate("/auth-callback");    
    }

    return (
        <Auth0Provider 
            domain={domain} 
            clientId={clientId} 
            authorizationParams={{redirect_uri:redirectUri,audience}}
            onRedirectCallback={handleRedirectCallBack}
        >
            {children}
        </Auth0Provider>
    );
}

export default AuthProvider;