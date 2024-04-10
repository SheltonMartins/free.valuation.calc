import AlertProps from "../../interfaces/AlertProps";
import { StyledAlertContainer, StyledAlertbox } from "./styles";

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <StyledAlertContainer className="alert-container">
      <StyledAlertbox className="alert">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </StyledAlertbox>
    </StyledAlertContainer>
  );
};

export default Alert;