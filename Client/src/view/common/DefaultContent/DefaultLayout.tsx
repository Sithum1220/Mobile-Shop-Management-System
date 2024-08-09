import React, {Component} from "react";
import {NavBar} from "../NavBar/NavBar";
import {Dashboard} from "../../pages/Dashboard/Dashboard";
import {MainContent} from "../MainContent/MainContent";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <NavBar />
                <MainContent />
            </>
        );
    }
}