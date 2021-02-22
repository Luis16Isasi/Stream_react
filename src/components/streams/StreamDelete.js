import React from 'react';

import history from '../../history';
import { deleteStream, fecthStream } from '../../actions/index';
import { connect } from 'react-redux';

import Modal from '../Modal';

const StreamDelete = ({ stream, ...props }) => {
  React.useEffect(() => {
    props.fecthStream(props.match.params.id);
  }, []);

  console.log(stream);
  const onClickDelete = () => {
    props.deleteStream(props.match.params.id);
    history.push('/');
  };

  const actions = () => {
    return (
      <>
        <button onClick={onClickDelete}>Delete</button>
        <button onClick={() => history.push('/')}>Cancel</button>
      </>
    );
  };
  if (stream)
    return (
      <div>
        DESDE STREAM DELETE
        <Modal
          title={`Delete Stream ${stream.title}`}
          description={`Are you sure to delete this stream with title: ${stream.description} ?`}
          actions={actions}
          onDismiss={() => history.push('/')}
        />
      </div>
    );

  return <p>Cargando...</p>;
};

const mapStatetoProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStatetoProps, { deleteStream, fecthStream })(
  StreamDelete
);
