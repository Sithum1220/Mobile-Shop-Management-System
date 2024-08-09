import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";
import {Employee} from "../../pages/Employee/Employee";

export function MainContent() {
    return (
        <div className="container mx-auto px-6">
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
        </div>
    );
}