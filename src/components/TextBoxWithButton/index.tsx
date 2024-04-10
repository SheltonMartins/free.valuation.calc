import { ChangeEvent, useState } from "react"
import { StyledBoxButton, TextBoxContainer, TextBoxInput, TextBoxLabel } from "./styles"
import ITextBoxWithButtonProps from "../../interfaces/TextBoxWithButtonProps";
import Alert from "../Alert";



function TextBoxWithButton({ label, sendCashFlowList }:ITextBoxWithButtonProps) {
    const [cashFlow, setCashFlow] = useState<string>('');
    const [cashFlowList, setCashFlowList] = useState<string[]>([])
    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCashFlow(event.target.value)
        setShowAlert(false)
    }
    
    const addCashFlow = () => {
        const newCashFlowList = [...cashFlowList, cashFlow]
        setCashFlowList(newCashFlowList)
        sendCashFlowList(newCashFlowList)
        setCashFlow('')
        setShowAlert(true)
    }
    
    return (
        <TextBoxContainer>
            {showAlert && <Alert message="Faturamento anual adicionado!" onClose={handleCloseAlert} />}
            <TextBoxLabel>{label}</TextBoxLabel>
            <TextBoxInput 
                value={cashFlow} 
                type="text" 
                onChange={handleInputChange}
            />
            <StyledBoxButton type="button" onClick={addCashFlow}>Adicionar faturamento anual </StyledBoxButton>
        </TextBoxContainer>
    )
  }
  
  export default TextBoxWithButton