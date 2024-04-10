import { styled } from "styled-components"

export const StyledAlertContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
`

export const StyledAlertbox = styled.div`
    position: relative;

    span{
        position: absolute;
        top: -15px;
        right: -15px;
        cursor: pointer;

        &:hover{
            color: #ff0000;
        }
    }

    p {
        margin: 0;
    }
`