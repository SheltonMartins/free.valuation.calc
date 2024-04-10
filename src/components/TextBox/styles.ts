import { styled } from "styled-components"

export const TextBoxContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: end;
    padding: 25px;

    @media(max-width: 600px){
        flex-direction: column;
        padding: 0;
    }

`

export const TextBoxLabel = styled.label`
    font-size: 1.5em;
    color: white;
    margin-right: 10px;

    @media(max-width: 600px){
        font-size: 1.2em;
    }
`

export const TextBoxInput = styled.input`
    font-size: 20px;
    font-family: sans-serif;
    color: #363636;
    padding-left: 10px;
    outline: none;
    width: 400px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 4px;

    @media(max-width: 600px){
        width: 100%;
    }
   
`
