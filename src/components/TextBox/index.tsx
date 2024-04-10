import { ChangeEvent } from "react"
import { TextBoxContainer, TextBoxInput, TextBoxLabel } from "./styles"
import ITextBoxProps from "../../interfaces/TextBoxProps"



function TextBox({ value, onChange, label }:ITextBoxProps) {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }


    return (
        <TextBoxContainer>
            <TextBoxLabel>{label}</TextBoxLabel>
            <TextBoxInput 
                value={value} 
                type="text" 
                onChange={handleInputChange}
            />
        </TextBoxContainer>
    )
  }
  
  export default TextBox