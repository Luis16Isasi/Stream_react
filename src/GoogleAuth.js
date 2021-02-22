import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

//extraemos el componente de react para FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//acá importamos nuestros iconos para mostrarlos en nuestro componente
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { connect } from 'react-redux';
import { signIn, signOut } from './actions/index';

const GoogleAuth = props => {
    const googleAuthRef = useRef(null);
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '666235050332-t595muep9ufd6vhopebl99mudmmft653.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    googleAuthRef.current = window.gapi.auth2.getAuthInstance();
                    handleSign(googleAuthRef.current.isSignedIn.get());
                    googleAuthRef.current.isSignedIn.listen(handleSign);
                });
        });
    }, []);

    //aca escuchamos un cambio y actualizamos nuestro store de redux
    const handleSign = isSignedIn => {
        if (isSignedIn)
            props.signIn(googleAuthRef.current.currentUser.get().getId());
        else props.signOut();
    };

    //hacemos posible el cerrar sesion o iniciar sesion para luego actualizar el store con el aut.isSigned.listen()
    const onClickSign = () => {
        if (props.auth) googleAuthRef.current.signOut();
        else googleAuthRef.current.signIn();
    };

    if (props.auth === true) {
        return <ButtonGoogle text={'Sign Out'} onClickSign={onClickSign} />;
    } else if (props.auth === false) {
        return (
            <ButtonGoogle
                text={'Sign In with Google'}
                onClickSign={onClickSign}
            />
        );
    } else {
        return null;
    }
};

const mapState = state => {
    return { auth: state.auth.isSignedIn };
};

const Button = styled.button`
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 43px;
    background-color: tomato;

    > * {
        margin: 0px 4px;
    }

    &:hover {
        cursor: pointer;
    }
`;

//hacemos el button de google como un componente a parte
const ButtonGoogle = props => {
    return (
        <Button onClick={props.onClickSign}>
            <FontAwesomeIcon icon={faGoogle} />
            <p>{props.text}</p>
        </Button>
    );
};

export default connect(mapState, { signIn, signOut })(GoogleAuth);
