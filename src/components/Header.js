import React from 'react';
import AuthGoogle from '../GoogleAuth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right, #32beed 40%, #163ea1);
    background: -moz-linear-gradient(to right, #32beed 40%, #163ea1);
    background: -webkit-gradient(to right, #32beed 40%, #163ea1);
    background: -webkit-linear-gradient(to right, #32beed 40%, #163ea1);
    background: -o-linear-gradient(to right, #32beed 40%, #163ea1);
    background: -ms-linear-gradient(to right, #32beed 40%, #163ea1);
    background: linear-gradient(to right, #32beed 40%, #163ea1);

    /* aplicando styles para los son */
    > * {
        margin: 15px;
        font-size: 2em;
    }
`;

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    > * {
        margin: 5px;
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1>Streamy</h1>
            </Link>
            <Div>
                <h1>All Streams</h1>
                <AuthGoogle />
            </Div>
        </HeaderStyled>
    );
};
export default Header;
