import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "@emotion/styled";

const StyledDialogOverlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 420;
    background-color: rgba(32, 36, 49, 0.5);
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  overflow-y: auto;
  &[data-reach-dialog-content] {
    margin: auto;
    background-color: black;
    border: 1px solid #12b4ff;
    box-shadow: 0 4px 8px 0 black;
    padding: 0px;
    max-width: 80%' !important;
    overflow-y: auto;
    overflow-x: hidden;
    align-self: center;
    display: flex;
    border-radius: 20px;   
  }
`;

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  minHeight?: number | false;
  maxHeight?: number;
  width?: string;
  borderColor?: string;
  boxShadow?: string;
  initialFocusRef?: React.RefObject<any>;
  children?: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onDismiss,
  width,
  minHeight = false,
  maxHeight = 90,
  borderColor,
  boxShadow,
  initialFocusRef,
  children,
  maxWidth,
}: ModalProps) {
  return (
    isOpen && (
      <>
        <StyledDialogOverlay onDismiss={onDismiss}>
          <StyledDialogContent aria-label="dialog content">
            {children}
          </StyledDialogContent>
        </StyledDialogOverlay>
      </>
    )
  );
}
