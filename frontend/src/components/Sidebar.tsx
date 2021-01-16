import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


export const Sidebar: React.FC = () => {
    return (
        <div>
            <Nav className="flex-column">
                <NavLink
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/browse"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Browse
                </NavLink>
                <NavLink
                    to="/friends"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Friends
                </NavLink>
            </Nav>
            
        </div>
    );
};

