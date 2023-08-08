import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Modal = ({ children, width = "648px", height = "414px" }) =>
  ReactDOM.createPortal(
    <React.Fragment>
      <ModalOverlay />
      <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <PopupContainer width={width} height={height}>
          {children}
        </PopupContainer>
      </ModalWrapper>
    </React.Fragment>,
    document.body
  );
export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const PopupContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
`;
