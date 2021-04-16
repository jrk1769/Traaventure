import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    MenuItem
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
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
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Upcoming Trips",
        href: "/allTrips",
    },
    {
        label: "Contact Us",
        href: "/contactUs",
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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>Traaventure</Link>
        </Typography>
    );

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none", color: "black" },
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
                <Button style={{ color: "white" }}
                    {...{
                        key: label,
                        to: href,
                        component: Link,

                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").className = "scrolled";
        } else {
            document.getElementById("header").className = "MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary mui-fixed MuiPaper-elevation4";
        }
    }

    return (
        <header>
            <AppBar
                id="header"
                style={{ background: document.body.scrollTop === 0 ? 'transparent' : "black", boxShadow: 'none'}}
            >
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    )

}