import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/owner';
function App1(){
    const clientId='665388838326-6c7tiiakboelfo0hch2kn7jjveu70av7.apps.googleusercontent.com';
    return(
        <GoogleOAuthProvider clientId={clientId}>
            <AccountProvider>
                <Login/>
            </AccountProvider>
        </GoogleOAuthProvider>
    );
}
export default App1;