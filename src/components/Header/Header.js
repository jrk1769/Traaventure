import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    MenuItem
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { Link, Link as RouterLink } from "react-router-dom";
import "./Header.css";

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Destinations",
        href: "/destinations",
    },
    {
        label: "Upcoming Trips",
        href: "/trips",
    },
    {
        label: "Free Membership",
        href: "/register"
    }
];

export default function Header() {

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar>
                {traaventureLogo}
                <div className="toolbar">
                    {getMenuButtons()}
                    {/* <input type="search" id="search" placeholder="search" className="search"></input> */}
                </div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className="drawerContainer">{getDrawerChoices()}</div>
                </Drawer>
                <div>{traaventureLogo}</div>
            </Toolbar>
        )
    }

    const traaventureLogo = (
        <Typography variant="h6" component="h1" className="logo">
            Traaventure
        </Typography>
    );

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        // color: "black",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem className="menuItems">{label}</MenuItem>
                </Link>
            );
        });
    };

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: "menuButton"
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className="header">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    )

}