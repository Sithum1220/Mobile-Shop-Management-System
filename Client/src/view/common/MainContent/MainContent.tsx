import {Route, Routes} from "react-router-dom";
import {Login} from "../../pages/Login/Login";
import {Register} from "../../pages/Register/Register";
import {Dashboard} from "../../pages/Dashboard/Dashboard";

export function MainContent() {
    return (
        <div className="md:px-12
                 max-2x1  mx-auto">
            <Routes>
                <Route path="/dashboard" Component={Dashboard}/>
            </Routes>
        </div>
    );
}