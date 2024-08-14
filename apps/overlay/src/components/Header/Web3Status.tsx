import { useEffect, useState } from "react";
import { shortenAddress } from "../../utils/web3";
import { SupportedChainId } from "../../constants/chains";
import { FlexColumn, FlexRow } from "../../components/Container/Container";
import { useWalletModalToggle } from "../../state/application/hooks";
import ConnectWalletModal from "../ConnectWalletModal/ConnectWalletModal";
import { ethers } from "ethers";
import styled from "@emotion/styled";
import { useAccount } from "../../hooks/useAccount";

export const Web3StatusConnected = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Web3StatusUnconnected = styled.button`
  background: #202431;
  color: white;
  border: 0px;
  border-radius: 25px;
  font-size: 12px;
  cursor: pointer;
`;

export const Web3StatusError = styled(Web3StatusConnected)`
  opacity: 0.8;
  cursor: default;
  font-size: 12px;
  border: 1px solid white;
  border-radius: 15px;
  padding: 4px 8px;
`;

export const Account = styled(FlexRow)`
  font-size: 12px;
  font-weight: 400;
  margin: auto 24px auto auto;
  display: flex;
  flex-direction: row;
`;

const WalletDetails = styled(FlexColumn)`
  position: relative;
  top: 2px;
`;

export const NETWORK_LABELS: {
  [chainId in SupportedChainId | number]: string;
} = {
  [SupportedChainId.MAINNET]: "Ethereum Mainnet",
  [SupportedChainId.GÖRLI]: "Goerli Testnet",
  [SupportedChainId.RINKEBY]: "Rinkeby Testnet",
  [SupportedChainId.ARBITRUM]: "Arbitrum One",
  [SupportedChainId.ARBITRUM_GÖRLI]: "Arbitrum Goerli Testnet",
  [SupportedChainId.ARBITRUM_SEPOLIA]: "Arbitrum Sepolia Testnet",
  [SupportedChainId.IMOLA]: "Movement Testnet",
};

const providerEth = new ethers.InfuraProvider(
  "mainnet",
  process.env.REACT_APP_INFURA_KEY
);

function Web3StatusInner() {
  const { address: account } = useAccount();

  const toggleWalletModal = useWalletModalToggle();
  const [ens, setEns] = useState<string | null>(null);
  useEffect(() => {
    const fetchENS = async () => {
      if (account) {
        const storedENS = localStorage.getItem(`ens-${account}`);
        if (storedENS) {
          if (storedENS === "null") {
            const result = await providerEth.lookupAddress(account);
            setEns(result);
            localStorage.setItem(`ens-${account}`, result ?? "null");
          } else {
            setEns(storedENS);
          }
        } else {
          const result = await providerEth.lookupAddress(account);
          setEns(result);
          localStorage.setItem(`ens-${account}`, result ?? "null");
        }
      }
    };

    fetchENS();
  }, [account]);

  if (account) {
    // connected
    return (
      <Web3StatusConnected>
        <WalletDetails align="start">
          <div>{ens ?? shortenAddress(String(account))}</div>
        </WalletDetails>
      </Web3StatusConnected>
    );
    // }
    // else if (error && isUnsupportedChainIdError) {
    //   // switchNetworkToArbitrum();
    //   console.error("Network Error: ", error);
    //   // either wrong network or error
    //   return (
    //     <Web3StatusError>
    //       <StyledAlertTriangle color={"white"} size={15} />
    //       ERR - Unsupported network
    //     </Web3StatusError>
    //   );
    // } else if (error) {
    //   console.error("Connection Error: ", error);
    //   // either wrong network or error
    //   return (
    //     <Web3StatusError>
    //       <StyledAlertTriangle color={"white"} size={15} />
    //       ERROR - Refresh browser
    //     </Web3StatusError>
    //   );
  } else {
    return (
      // not connected
      <Web3StatusUnconnected onClick={toggleWalletModal}>
        <div>Connect wallet</div>
      </Web3StatusUnconnected>
    );
  }
}

export default function Web3Status() {
  return (
    <>
      <Web3StatusInner />
      <ConnectWalletModal />
    </>
  );
}
