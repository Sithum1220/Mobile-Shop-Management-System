import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";
import {Employee} from "../../pages/Employee/Employee";
import {Supplier} from "../../pages/Supplier/Supplier";
import {Inventory} from "../../pages/Inventory/Inventory";
import {PerchesOrder} from "../../pages/PerchesOrder/PerchesOrder";

export function MainContent() {
    return (
        <div className="container mx-auto px-6">
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/supplier" element={<Supplier />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/orders" element={<PerchesOrder />} />
            </Routes>
        </div>
    );
}