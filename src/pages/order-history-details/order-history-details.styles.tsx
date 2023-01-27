import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
    max-width: 800px;
    margin: 50px auto; 
    padding: 20px;
    h1 {
        text-align: center;
        margin-bottom: 50px;
    }
`
export const OrderDetailsRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fafafa;
`

export const OHD_image = styled.div`
    width: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`

export const OHD_details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
`

export const OHD_item = styled.div`
    display: flex;
    padding: 10px;
    background-color: #fafafa; 
    border: 1px solid #ddd;
`

export const OrderDetailsRowContainer = styled.div`
    border: 1px solid #ddd;
    margin-bottom: 20px;
`