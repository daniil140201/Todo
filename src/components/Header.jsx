import React from "react";
import {Navbar} from "react-bootstrap";

export const Header = () => {
    return(
        <header>
            <Navbar bg={'dark'} variant={"dark"} expanded={'md'} >
                <Navbar.Brand>
                    Todo List
                </Navbar.Brand>
            </Navbar>
        </header>
    )
};
