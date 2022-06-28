// css
import React from 'react';
import { AuthContext } from '../../providers/auth';
import './home.css';



function Home(){
    const { user, setUser } = React.useContext(AuthContext)
    return (
        <h1 onClick={ () => console.log(user)}> Página home</h1>

    );
}
export default Home;