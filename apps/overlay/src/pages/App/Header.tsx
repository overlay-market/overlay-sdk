import { useState, useEffect } from "react";
import { FlexContainer, FlexRow } from "../../components/Container/Container";
// import Web3Status from "../Web3Status/Web3Status";
import OverlayLogoOnlyDark from "../../assets/images/overlay-logo-only-no-background.png";
// import WalletMenu from "./WalletMenu";
// import ChainSwitch from "./ChainSwitch";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
  padding: 24px 32px;
  position: sticky;
  z-index: 420;
`;

export const LogoContainer = styled.div`
  height: 30px;
  width: 30px;
  margin: auto 16px auto 0px;
  cursor: pointer;
`;

export const AccountContainer = styled(FlexRow)`
  width: auto;
  margin-left: auto;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <IconButton href="/" style={{ padding: 0 }}>
          <img
            src={OverlayLogoOnlyDark}
            alt={"Overlay Logo Light"}
            height={"100%"}
            width={"100%"}
          />
        </IconButton>
      </LogoContainer>

      <AccountContainer>
        <FlexContainer gap="12px">
          {/* <Web3Status /> */}
          {/* <ChainSwitch /> */}
          {/* <WalletMenu /> */}
          <div>Account</div>
        </FlexContainer>
      </AccountContainer>
    </HeaderContainer>
  );
}
