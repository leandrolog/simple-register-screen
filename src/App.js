import React, {useState} from "react";
import "./App.css";
import Axios from "axios";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DefaultButton from "./components/DefaultButton";
import RegisterModal from "./components/RegisterModal";
import InputWithLabel from "./components/InputWithLabel";

function App() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = async (e) => {
        e.preventDefault();
        const response = await Axios.post("http://localhost:3001/login", {
            userName: userName,
            password: password,
        }).then((response) => {
            console.log("aaa", response)
        }).catch((error) => {
            console.log("error", error);
        }).finally((!error))
    }

    return (
        <div>
            <ToastContainer position="top-center"
                            closeOnClick
                            pauseOnHover
                            theme="light"/>
            <div className="containerC">
                <div className="loginForm">
                    <form>
                        <h4>Login Here</h4>
                        <InputWithLabel
                            title="UserName"
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                            placeHolder="Enter your UserName"
                        />
                        <InputWithLabel
                            title="Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            placeholder="Enter your Password"
                        />
                        <DefaultButton
                            className="button"
                            type="submit"
                            onClick={login}
                            title="login"/>
                    </form>
                </div>
                <RegisterModal/>
            </div>
        </div>

    );
}

export default App;