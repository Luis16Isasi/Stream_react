import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  //le pasamos el elemento modal
  return ReactDOM.createPortal(
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        opacity: '0.8',
        height: '100%',
        width: '100%',
        zIndex: '999',
        position: 'absolute',
        top: '0px',
        display: 'flex',
        flexFlow: 'nowrap row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={props.onDismiss}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '12px',
          width: '80%',
          maxWidth: '850px',
        }}
        onClick={e => e.stopPropagation()}
      >
        <h1
          style={{ margin: '15px 10px', fontWeight: 'bold', fontSize: '28px' }}
        >
          {props.title}
        </h1>
        <hr />
        <p
          style={{
            margin: '15px 10px',
            fontWeight: 'normal',
            fontSize: '20px',
          }}
        >
          {props.description}
        </p>
        <hr />
        <div
          style={{
            display: 'flex',
            flexFlow: 'nowrap row',
            justifyContent: 'flex-end',
          }}
        >
          {props.actions()}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
