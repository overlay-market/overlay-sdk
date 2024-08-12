import { useDisconnect } from "wagmi";
import { FlexRow } from "../../components/Container/Container";
import { useAccount } from "../../hooks/useAccount";
import { NETWORK_ICONS, NETWORK_LABELS } from "./ChainSwitch";
import styled from "@emotion/styled";

export const PlatformLogo = styled.div<{ src: string; open?: boolean }>`
  background: no-repeat center/contain url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  height: 17px;
  width: 17px;
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: all 0.2s linear;
`;

const MenuItem = styled.div<{ background?: string; clickable?: boolean }>`
  padding: 12px 20px;
  font-size: 14px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "")};
  background: ${({ background }) => background};
  &:first-child {
    padding-top: 30px;
  }

  :hover {
    background: ${({ clickable, background }) =>
      clickable ? "#474747" : background};
  }
`;

const UnstyledAnchorTag = styled.a`
  color: unset;
  text-decoration: none;
`;

export const MenuLink = ({
  background,
  link,
  onClick,
  children,
}: {
  background?: string;
  link?: string;
  onClick?: Function;
  children: any;
}) => {
  if (link) {
    return (
      <UnstyledAnchorTag href={link} target="_blank">
        <MenuItem clickable>{children}</MenuItem>
      </UnstyledAnchorTag>
    );
  }

  return (
    <MenuItem
      onClick={(event) => (onClick ? onClick(event) : null)}
      clickable={onClick ? true : false}
      background={background}
    >
      {children}
    </MenuItem>
  );
};

export default function ExternalLinks() {
  const { address: account, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  // const toggleWalletModal = useWalletModalToggle();
  // const setChainId = useSetChainId()

  const disconnectWallet = () => {
    // setChainId(Number(chainId))
    sessionStorage.setItem("chainId", String(chainId));
    localStorage.setItem("disconnected", "true");
    disconnect();
  };

  return (
    <>
      {account && chainId ? (
        <MenuLink background={"#303236"}>
          <FlexRow style={{ gap: "8px" }}>
            <PlatformLogo open={false} src={NETWORK_ICONS[chainId]} />
            <div>{NETWORK_LABELS[chainId]}</div>
          </FlexRow>
        </MenuLink>
      ) : (
        <MenuLink
          background={"#303236"}
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.stopPropagation();
            // toggleWalletModal();
          }}
        >
          <div style={{ textDecoration: "underline" }}>Connect Wallet</div>
        </MenuLink>
      )}

      {account && (
        <MenuLink onClick={disconnectWallet}>
          <div>Disconnect Wallet</div>
        </MenuLink>
      )}
    </>
  );
}
