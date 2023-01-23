import { confirmPasswordReset } from "firebase/auth";
import styled from "styled-components";    

export const OrderSentPage = styled.div`    
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    padding: 20px 80px;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }   
`;
export const OrderSentText = styled.p`   
    font-size: 16px;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }   
`;
