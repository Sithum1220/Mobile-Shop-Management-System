import React, {Component} from "react";
import {MainContent} from "../MainContent/MainContent";
import {NavBar} from "../NavBar/NavBar";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <MainContent/>
            </>
        );
    }
}