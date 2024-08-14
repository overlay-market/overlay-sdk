import { useEffect } from "react";
import { ApplicationModal } from "../../state/application/actions";
import {
  useModalOpen,
  useWalletModalToggle,
} from "../../state/application/hooks";
import Modal from "../Modal/Modal";
import WalletOption from "./WalletOptions";
import usePrevious from "../../hooks/usePrevious";
import styled from "@emotion/styled";
import { useAccount } from "../../hooks/useAccount";
import { useConnect, useAccount as useAccountWagmi } from "wagmi";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
`;

export const WalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CloseIcon = styled.div`
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export default function ConnectWalletModal() {
  const { address: account } = useAccount();
  const { connector, isConnected } = useAccountWagmi();
  const { connectors, connect } = useConnect();
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET);

  const toggleWalletModal = useWalletModalToggle();

  const previousAccount = usePrevious(account);

  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal();
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]);

  function getOptions() {
    return (
      !isConnected &&
      connectors.map(
        (connector) =>
          ["injected", "walletConnect"].includes(connector.type) && (
            <WalletOption
              key={connector.uid}
              connector={connector}
              onClick={() => connect({ connector })}
            />
          )
      )
    );
  }

  return (
    <Modal
      isOpen={walletModalOpen}
      onDismiss={toggleWalletModal}
      minHeight={false}
      maxHeight={190}
      width="350px"
    >
      <ModalContent>
        <WalletHeader>
          <div style={{ color: "white", fontWeight: 600, margin: "auto 0" }}>
            Connect to a wallet
          </div>
          <CloseIcon onClick={toggleWalletModal}>
            <div
              style={{
                color: "white",
                height: "24px",
                width: "24px",
                marginLeft: "20px",
              }}
            >
              X
            </div>
          </CloseIcon>
        </WalletHeader>

        <>{getOptions()}</>
      </ModalContent>
    </Modal>
  );
}
