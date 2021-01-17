import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


export const Sidebar: React.FC = () => {
    return (
        <div>
            <Nav className="flex-column">
                <NavLink
                    to="/home"
                    style={{
                        color: "white"
                    }}
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/browse"
                    style={{
                        color: "white"
                    }}
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                >
                    Browse
                </NavLink>
                <NavLink
                    to="/friends"
                    style={{
                        color: "white"
                    }}
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                >
                    Friends
                </NavLink>
            </Nav>
            
        </div>
    );
};

