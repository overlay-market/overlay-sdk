import { useState, useRef, useEffect } from "react";
import { FlexContainer, FlexRow } from "../../components/Container/Container";
import ArbitrumLogo from "../../assets/images/arbitrum-logo.png";
import EthereumLogo from "../../assets/images/ethereum-logo.png";
import ArbitrumTestnetLogo from "../../assets/images/arbitrum-testnet-logo.png";
import ImolaLogo from "../../assets/images/imola-logo.png";
// import {useActiveWeb3React} from '../../hooks/web3'
import {
  SupportedChainId,
  DEFAULT_CHAINID,
  WORKING_CHAINS,
} from "../../constants/chains";
// import {
//   switchNetworkToArbitrum,
//   switchNetworkToImola,
// } from "../../utils/switchNetworkToArbitrum";
// import { useChainIdLocal, useSetChainId } from "../../state/application/hooks";
// import useGetCurrentChainId from "../../hooks/useGetCurrentChainId";
// import { useNetwork } from "../../connectors/connectors";
// import getLibrary from "../../utils/getLibrary";
import styled from "@emotion/styled";
import { Box, Menu, MenuItem } from "@mui/material";
// import { useWeb3Context } from 'web3-react'

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
};

const CHAIN_LIST: { [chainId in SupportedChainId | number]: string } = {
  [SupportedChainId.ARBITRUM_SEPOLIA]: "Arbitrum Sepolia",
  [SupportedChainId.IMOLA]: "Movement",
};

const CHAIN_LIST_ORDER: { [x: number]: number } = {
  [1]: SupportedChainId.ARBITRUM_SEPOLIA,
  [2]: SupportedChainId.IMOLA,
};

export default function ChainSwitch() {
  // const { account, chainId } = useActiveWeb3React();
  const account = "0x93cF46b09c17209f132F155494156f3C7491F1f9";
  const chainId = 421614;
  const supportedChainId: boolean = Boolean(
    chainId && WORKING_CHAINS.includes(SupportedChainId[chainId])
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeChainSrc, setActiveChainSrc] = useState("");
  // const chainIdLocal = useChainIdLocal()
  const chainIdLocal = Number(sessionStorage.getItem("chainId"));
  // const setChainId = useSetChainId();
  // const chainIdCurrent = useGetCurrentChainId();
  // const activeNetwork = useNetwork();
  // console.log({chainIdLocal}, {chainIdCurrent})

  useEffect(() => {
    if (account) {
      setActiveChainSrc(
        chainIdLocal > 0
          ? NETWORK_ICONS[chainIdLocal]
          : chainId && supportedChainId
          ? NETWORK_ICONS[chainId]
          : NETWORK_ICONS[DEFAULT_CHAINID as number]
      );
    } else {
      setActiveChainSrc(
        chainIdLocal > 0
          ? NETWORK_ICONS[chainIdLocal]
          : NETWORK_ICONS[DEFAULT_CHAINID as number]
      );
    }
  }, [account, chainId, supportedChainId, chainIdLocal]);

  const openDropdownMenu = Boolean(anchorEl);

  const clickSelectChain = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeSelectChain = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleSelectChain = async (chainId: number) => {
    // if (account) {
    //   Number(chainId) === Number(SupportedChainId.ARBITRUM_SEPOLIA)
    //     ? await switchNetworkToArbitrum()
    //     : Number(chainId) === Number(SupportedChainId.IMOLA)
    //     ? await switchNetworkToImola()
    //     : console.log("error");
    // }

    sessionStorage.setItem("chainId", String(chainId));
    setActiveChainSrc(NETWORK_ICONS[chainId]);
    setAnchorEl(null);
    // setChainId(chainId);
    // getLibrary(activeNetwork(chainId).provider);
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
        <ChainLogo src={activeChainSrc} />
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
              onClick={() => handleSelectChain(CHAIN_LIST_ORDER[id])}
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
