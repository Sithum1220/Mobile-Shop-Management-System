import {Route, Routes} from "react-router-dom";
import {Login} from "../../pages/Login/Login";
import {Register} from "../../pages/Register/Register";

export function MainContent() {
    return (
        <>
            <Routes>
                <Route path="/" Component={Login}></Route>
                <Route path="/register" Component={Register}></Route>
            </Routes>
        </>
    );
}