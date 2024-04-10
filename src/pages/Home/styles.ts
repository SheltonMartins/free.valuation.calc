import { styled } from "styled-components"

export const StyledHomePage = styled.div`
    padding: 50px;

    @media(max-width: 600px){
        padding: 70px 30px;
    }
`

export const StyledHomeForm = styled.form`
    text-align: center;
    margin-top: 50px;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;

    @media(max-width: 600px){
        width: 100%;
    }
`

export const StyledTitle = styled.h1`
    color: white;
    font-size: 1.5em;
    text-align: center;
`

export const StyledHomeSubmit = styled.button`
    width: 50%;
    height: 50px;
    margin: 10px auto;
    background-color: #00FA9A;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background-color: #2E8B57;
    }
`

export const StyledLabelResult = styled.label`
    font-size: 1.5em;
    color: white;
    padding: 10px;
`

