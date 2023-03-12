import React from 'react';
import styled from 'styled-components';
import logo from "../img/logo.jpg";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';


const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color:  ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top : 0px;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
}
`



const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid  ${({ theme }) => theme.soft}
`
const Login = styled.div`

`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`



const Menu = ({ darkMode, setDarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={logo} />
                        VShare
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Hr />
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign In to like videos,comment.
                    <Link to="signin" style={{textDecoration: "none"}}>
                        <Button><LoginIcon />SIGN IN</Button>
                    </Link>
                </Login>

                <Hr />
                <Item>
                    <SettingsIcon />
                    Settings
                </Item>
                <Item>
                    <ReportGmailerrorredIcon />
                    Report
                </Item>
                <Item>
                    <HelpIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <LightModeIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu