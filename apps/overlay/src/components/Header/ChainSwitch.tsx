import { useState, useCallback } from "react";
import { FlexContainer, FlexRow } from "../../components/Container/Container";
import BscLogo from "../../assets/images/bsc-logo.png";
import { SupportedChainId } from "../../constants/chains";
import styled from "@emotion/styled";
import { Box, Menu, MenuItem } from "@mui/material";
import { useMultichainContext } from "../../state/multichain/useMultichainContext";
import useSelectChain from "../../hooks/useSelectChain";

export const ChainLogo = styled.div<{ src: string }>`
  background: no-repeat center/contain url(${({ src }) => src});
  height: 24px;
  width: 24px;
`;

const ChainSwitchButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledMenu = styled(Menu)({
  marginTop: "40px",

  "& .MuiPaper-root": {
    backgroundColor: `#2E3343`,
    borderTop: "1px solid #333",
    maxWidth: "232px",
    width: "232px",
    boxSizing: "border-box",
    color: `#E5F6FF`,
    borderRadius: "8px",
    padding: "10px 0px",
  },
  "& .MuiList-root": {
    padding: "0",
  },
  "& .MuiListItem-root": {
    justifyContent: "start",
    padding: "0",
  },

  "& .MuiButtonBase-root": {
    padding: "8px 18px",
  },
  "& .MuiButtonBase-root:hover": {
    backgroundColor: `#202431`,
    fontWeight: "700",
  },
});

export const PlatformLogo = styled.div<{ src: string; open?: boolean }>`
  background: no-repeat center/contain url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  height: 17px;
  width: 17px;
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: all 0.2s linear;
`;

export const NETWORK_ICONS: { [chainId in SupportedChainId | number]: string } =
  {
    [SupportedChainId.BSC_TESTNET]: BscLogo,
    [SupportedChainId.BSC_MAINNET]: BscLogo,
  };

export const NETWORK_LABELS: {
  [chainId in SupportedChainId | number]: JSX.Element;
} = {
  [SupportedChainId.BSC_TESTNET]: (
    <FlexRow>
      <div>BSC Testnet -</div>
      <div style={{ color: "#FF648A" }}>Testnet</div>
    </FlexRow>
  ),
  [SupportedChainId.BSC_MAINNET]: (
    <FlexRow>
      <div>BSC Mainnet -</div>
      <div style={{ color: "#FF648A" }}>Mainnet</div>
    </FlexRow>
  ),
};

const CHAIN_LIST: { [chainId in SupportedChainId | number]: string } = {
  [SupportedChainId.BSC_TESTNET]: "BSC Testnet",
  [SupportedChainId.BSC_MAINNET]: "BSC Mainnet",
};

const CHAIN_LIST_ORDER: { [x: number]: number } = {
  [7]: SupportedChainId.BSC_TESTNET,
  [8]: SupportedChainId.BSC_MAINNET,
};

export default function ChainSwitch() {
  const { chainId, setSelectedChainId } = useMultichainContext();
  const selectChain = useSelectChain();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onSelectChain = useCallback(
    async (targetChainId: number | null) => {
      if (!targetChainId) {
        setSelectedChainId(targetChainId);
      } else {
        setSelectedChainId(targetChainId);
        selectChain(targetChainId);
        sessionStorage.setItem("chainId", String(targetChainId));
      }
      setAnchorEl(null);
    },
    [setSelectedChainId, selectChain]
  );

  const openDropdownMenu = Boolean(anchorEl);

  const clickSelectChain = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeSelectChain = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <ChainSwitchButton
        id="dropdown"
        onClick={clickSelectChain}
        aria-controls={openDropdownMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openDropdownMenu ? "true" : undefined}
      >
        {chainId ? (
          <ChainLogo src={NETWORK_ICONS[chainId as number]} />
        ) : (
          <div>⚠️</div>
        )}
      </ChainSwitchButton>
      <StyledMenu
        id="basic-menu"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={openDropdownMenu}
        onClose={closeSelectChain}
      >
        {Object.keys(CHAIN_LIST_ORDER).map((idValue: string) => {
          const id = Number(idValue);
          return (
            <MenuItem
              key={id}
              onClick={() => onSelectChain(CHAIN_LIST_ORDER[id])}
              disableRipple
            >
              <FlexContainer gap="16px">
                <ChainLogo src={NETWORK_ICONS[CHAIN_LIST_ORDER[id]]} />
                <Box style={{ fontFamily: "Inter", color: "#fff" }}>
                  {CHAIN_LIST[CHAIN_LIST_ORDER[id]]}
                </Box>
              </FlexContainer>
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
}
