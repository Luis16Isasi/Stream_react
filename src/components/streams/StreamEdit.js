import React, { useEffect } from 'react';

import StreamForm from './StreamForm';

import { fecthStream, editStream } from '../../actions/index';
import { connect } from 'react-redux';

const StreamEdit = ({ stream, fecthStream, editStream, ...props }) => {
  useEffect(() => {
    //le pasamos el id de nustro Stream a editar
    fecthStream(props.match.params.id);
  }, []);

  if (Object.entries(stream).length === 0) return <h1> Loading...</h1>;
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
        Editar Stream
      </h1>
      <StreamForm onSubmit={editStream} type='edit' stream={stream} />
    </div>
  );
};

// el segundo parametro son las props que nuestro component recibe
const mapState = (state, ownProps) => {
  return { stream: { ...state.streams[ownProps.match.params.id] } };
};
export default connect(mapState, { editStream, fecthStream })(StreamEdit);
