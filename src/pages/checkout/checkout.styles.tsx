import styled from "styled-components";
import Button from "../../components/button/button.component";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    margin: 10px auto 0;
    width: 80%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const GoToPayment = styled(Button)`
  margin-top: 30px;
  margin-left: auto;
  font-size: 25px;
  width: 100%;
  font-weight: 100;
`;
