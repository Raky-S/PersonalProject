import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>

            <div className="login__container">
                <h1>S'identifier</h1>
                <form>
                    <h5>Adresse e-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Mot de pass</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">S'identifier</button>
                </form>

                <p>
                    En continuant, vous acceptez les conditions d'utilisation et la notice Protection de vos informations personnelles d'un faux Amazon, cloné par <strong>Raky-S</strong>.
                </p>

                <button onClick={register} className="login__registerButton">Créer votre compte Amazon</button>
            </div>
        </div>

    )
}

export default Login
