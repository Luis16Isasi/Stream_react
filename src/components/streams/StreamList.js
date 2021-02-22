import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { BtnA } from './styleComponents';

import { fetchStreams } from '../../actions/index';
import ButtonCreateNewStream from '../BtnCreateNewStream';

const StreamList = ({ fetchStreams, streams, ...props }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderButtonEditDelete = (userid, id) => {
    //si ese stream le pertecene al user, le damos las opciones de editar y eliminar
    return props.userid === userid ? (
      <div id='ContentButtons'>
        <Link to={`/streams/edit/${id}`} component={BtnOpcionStream}>
          Editar
        </Link>

        <Link to={`/streams/delete/${id}`} component={BtnOpcionStream} delete>
          Eliminar
        </Link>
      </div>
    ) : null;
  };

  const renderStreams = () => {
    return streams.map(stream => {
      return (
        <Li key={stream.id}>
          <div id='contentStream'>
            <FontAwesomeIcon icon={faStream} style={{ fontSize: '35px' }} />
            <div>
              <h3>{stream.title}</h3>
              <p>{stream.description}</p>
            </div>
          </div>
          {renderButtonEditDelete(stream.userid, stream.id)}
        </Li>
      );
    });
  };

  return (
    <div
      style={{
        minWidth: '570px',
        width: '70%',
        maxWidth: '900px',
        display: 'flex',
        flexFlow: 'wrap column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px auto',
      }}
    >
      <Ul>{renderStreams()}</Ul>
      <div
        style={{
          alignSelf: 'flex-end',
          margin: '10px',
        }}
      >
        <Link to='/streams/new' component={ButtonCreateNewStream}>
          Crear nuevo stream
        </Link>
      </div>
    </div>
  );
};

//styles-components

const Ul = styled.ul`
  margin: 10px 0px;
  padding: 5px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Li = styled.li`
  background-color: #f3e8fc;
  border-radius: 5px;
  margin: 5px 0px;
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;

  & > #contentStream {
    display: flex;
    flex-flow: wrap row;
    align-items: center;
  }
  & > #contentStream > * {
    margin: 7px;
  }
  & > #contentStream > div > * {
    margin: 5px;
  }
  & > #contentStream > div > h3 {
    font-size: 20px;
  }
  & > #contentStream > div > p {
    color: gray;
  }
`;

const BtnOpcionStream = React.forwardRef((props, ref) => {
  const onClick = event => {
    event.preventDefault();
    props.navigate();
  };

  if (props.delete)
    return (
      <BtnA ref={ref} onClick={onClick} delete>
        {props.children}
      </BtnA>
    );

  return (
    <BtnA ref={ref} onClick={onClick}>
      {props.children}
    </BtnA>
  );
});

const mapState = state => {
  return { streams: Object.values(state.streams), userid: state.auth.userid };
};
export default connect(mapState, { fetchStreams })(StreamList);
