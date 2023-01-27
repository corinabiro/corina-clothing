import styled from 'styled-components';

export const OrderHistoryRow = styled.div`
    background-color: #fafafa;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    &:hover {   
        cursor: pointer;
        background-color: #eee;
    }
`

export const OrderHistoryContainer = styled.div` 
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 50px auto;
    padding: 10px 20px;
    `
export const OrderHistoryTitle = styled.h2`
    text-align: center;
    margin-bottom: 50px;
    fons-size: 28px;
`   

export const OrderHistoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
`