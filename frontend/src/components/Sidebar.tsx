import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Menu, Search, Users } from 'react-feather';

export const Sidebar: React.FC = () => {
    return (
        <div className="menu">
            <div className="menu-background"></div>
            <Nav className="flex-column">
                <NavLink
                    to="/home"
                    className="mb-3 mt-2"
                    style={{
                        color: "white"
                    }}
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                >
                    <Search className="icons" /> Search
                </NavLink>
                <NavLink
                    to="/browse"
                    className="mb-3"
                    style={{
                        color: "white"
                    }}
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                >
                    <Menu className="icons" /> Browse
                </NavLink>
                <NavLink
                    to="/friends"
                    className="mb-2"
                    style={{
                        color: "white"
                    }}
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                >
                    <Users className="icons" /> Friends
                </NavLink>
            </Nav>
            
        </div>
    );
};

