import React from 'react';

import StreamForm from './StreamForm';
//importamos connect desde react-redux
import { connect } from 'react-redux';

//importamos nuestro action
import { createStream } from '../../actions/index';

const StreamCreate = props => {
  //Dentro de formik podemos crear nuestros metodos como onChange, onSubmit, etc
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'nowrap column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <h1
        style={{
          fontSize: '25px',
          margin: '20px 10px 15px 10px',
        }}
      >
        Crear Nuevo Stream
      </h1>
      <StreamForm onSubmit={props.createStream} />
    </div>
  );
};

// const mapState = state => {
//   return { userid: state.auth.userid };
// };

//le pasamos el createStream a nuestro StreamForm
export default React.memo(
  connect(null, {
    createStream,
  })(StreamCreate)
);
