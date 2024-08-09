import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";

export function MainContent() {
    return (
        <div className="container mx-auto px-6">
            <Routes>
                <Route path="/" Component={Dashboard}/>
            </Routes>
        </div>
    );
}