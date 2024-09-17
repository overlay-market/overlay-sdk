import styled from "@emotion/styled";
import { Connector } from "wagmi";

const InfoCard = styled.button<{ active?: boolean }>`
  background-color: transparent;
  padding: 1rem;
  outline: none;
  border-radius: 12px;
  width: 100% !important;
`;

const OptionCard = styled(InfoCard as any)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px !important;
  padding: 1rem;
  background: #1f222d;
  border: none;
`;

export const CardHeader = styled.div`
  justify-content: center;
  text-align: left;
`;

export const OptionCardClickable = styled(OptionCard as any)<{
  clickable?: boolean;
}>`
  margin-top: 0;
  border: ${({ active }) => (active ? "1px solid green !important" : "")};
  background: ${({ active }) => (active ? "#154015 !important" : "")};

  &:hover {
    cursor: ${({ clickable }) => (clickable ? "pointer" : "")};
    border: ${({ clickable, theme }) =>
      clickable ? `1px solid ${theme.primary1}` : ``};
    background: #2e3348;
  }
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubHeader = styled.div`
  color: white;
  margin-top: 10px;
  font-size: 12px;
`;

export const IconWrapper = styled.div<{ size?: number | null }>`
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${({ size }) => (size ? size + "px" : "24px")};
    width: ${({ size }) => (size ? size + "px" : "24px")};
  }
`;

export default function WalletOption({
  connector,
  onClick = null,
  active = false,
}: {
  connector: Connector;
  onClick?: null | (() => void);
  active?: boolean;
}) {
  const content = (
    <OptionCardClickable onClick={onClick} active={active}>
      <CardHeader>
        <SubHeader>{connector.name}</SubHeader>
      </CardHeader>
    </OptionCardClickable>
  );

  return content;
}
