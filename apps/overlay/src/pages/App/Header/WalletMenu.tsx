import { useState, useRef, useEffect } from "react";
import HeaderHamburger from "./HeaderHamburger";
import ExternalLinks from "./ExternalLinks";
import styled from "@emotion/styled";

const RelativeContainer = styled.div`
  position: relative;
  display: block;
`;

const WalletMenuButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  gap: 8px;
  background: #2e3343;
  position: relative;
  outline: none;
  border: 0;
  cursor: pointer;
`;

const MenuContent = styled.div<{ open?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 8px;
  background: #2e3343;
  overflow: hidden;
  transition: all 0.2s linear;
  padding-bottom: 16px;

  width: ${({ open }) => (open ? "240px" : "0px")};
  max-height: ${({ open }) => (open ? "500px" : "0px")};
  opacity: ${({ open }) => (open ? "1" : "0")};
`;

const MenuItem = styled.div<{ background?: string; clickable?: boolean }>`
  padding: 8px 20px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "")};
  background: ${({ background }) => background};

  :hover {
    background: ${({ clickable, background }) =>
      clickable ? `#474747` : background};
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

export default function WalletMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = (val: boolean) => {
    setIsMenuOpen(val);
  };

  useEffect(() => {
    const closeMenu = (event: MouseEvent | TouchEvent) => {
      // Check if the clicked element is outside the div
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        event.target !== document.getElementById("showButton")
      ) {
        setIsMenuOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <RelativeContainer>
        <div onClick={() => showMenu(true)}>
          <WalletMenuButton
            id="showButton"
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              event.stopPropagation();
              showMenu(true);
            }}
          >
            <HeaderHamburger
              open={isMenuOpen}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
                setIsSubMenuOpen(false);
              }}
            />
          </WalletMenuButton>
        </div>
        <MenuContent open={isMenuOpen} ref={menuRef}>
          <ExternalLinks
          // isSubMenuOpen={isSubMenuOpen}
          // setIsSubMenuOpen={setIsSubMenuOpen}
          />
        </MenuContent>
      </RelativeContainer>
    </>
  );
}
