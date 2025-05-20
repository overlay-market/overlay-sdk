import { useState, useCallback } from "react";
import { FlexContainer, FlexRow } from "../../components/Container/Container";
import ArbitrumLogo from "../../assets/images/arbitrum-logo.png";
import EthereumLogo from "../../assets/images/ethereum-logo.png";
import ArbitrumTestnetLogo from "../../assets/images/arbitrum-testnet-logo.png";
import ImolaLogo from "../../assets/images/imola-logo.png";
import BartioLogo from "../../assets/images/bartio-logo.png";
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
    [SupportedChainId.MAINNET]: EthereumLogo,
    [SupportedChainId.ARBITRUM]: ArbitrumLogo,
    [SupportedChainId.ARBITRUM_SEPOLIA]: ArbitrumTestnetLogo,
    [SupportedChainId.IMOLA]: ImolaLogo,
    [SupportedChainId.BARTIO]: BartioLogo,
    [SupportedChainId.BEPOLIA]: BartioLogo,
    [SupportedChainId.BSC_TESTNET]: BartioLogo,
  };

export const NETWORK_LABELS: {
  [chainId in SupportedChainId | number]: JSX.Element;
} = {
  [SupportedChainId.MAINNET]: <div>Ethereum Mainnet</div>,
  [SupportedChainId.ARBITRUM]: <div>Arbitrum One</div>,
  [SupportedChainId.ARBITRUM_SEPOLIA]: (
    <FlexRow>
      <div>Arbitrum Sepolia -</div>
      <div style={{ color: "#FF648A" }}>Testnet</div>
    </FlexRow>
  ),
  [SupportedChainId.IMOLA]: (
    <FlexRow>
      <div>Movement -</div>
      <div style={{ color: "#FF648A" }}>Testnet</div>
    </FlexRow>
  ),
  [SupportedChainId.BARTIO]: (
    <FlexRow>
      <div>Berachain-bArtio -</div>
      <div style={{ color: "#FF648A" }}>Testnet</div>
    </FlexRow>
  ),
  [SupportedChainId.BEPOLIA]: (
    <FlexRow>
      <div>Berachain-Bepolia -</div>
      <div style={{ color: "#FF648A" }}>Testnet</div>
    </FlexRow>
  ),
  [SupportedChainId.BSC_TESTNET]: (
    <FlexRow>
      <div>BSC Testnet -</div>
      <div style={{ color: "#FF648A" }}>Testnet</div>
    </FlexRow>
  ),
};

const CHAIN_LIST: { [chainId in SupportedChainId | number]: string } = {
  [SupportedChainId.ARBITRUM_SEPOLIA]: "Arbitrum Sepolia",
  [SupportedChainId.IMOLA]: "Movement",
  [SupportedChainId.ARBITRUM]: "Arbitrum",
  [SupportedChainId.MAINNET]: "Mainnet",
  [SupportedChainId.BARTIO]: "Berachain",
  [SupportedChainId.BEPOLIA]: "Berachain",
  [SupportedChainId.BSC_TESTNET]: "BSC Testnet",
};

const CHAIN_LIST_ORDER: { [x: number]: number } = {
  [1]: SupportedChainId.ARBITRUM_SEPOLIA,
  [2]: SupportedChainId.ARBITRUM,
  [3]: SupportedChainId.MAINNET,
  [4]: SupportedChainId.IMOLA,
  [5]: SupportedChainId.BARTIO,
  [6]: SupportedChainId.BEPOLIA,
  [7]: SupportedChainId.BSC_TESTNET,
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
