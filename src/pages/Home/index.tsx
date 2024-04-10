import { useState } from "react";
import TextBox from "../../components/TextBox"
import { StyledHomeForm, StyledHomePage, StyledHomeSubmit, StyledLabelResult, StyledTitle } from "./styles"
import TextBoxWithButton from "../../components/TextBoxWithButton";

function Home() {
    const [percentage, setPercentage] = useState<string>('');
    const [valuation, setValuation] = useState<string>('');
    const [fullCashFlow, setfullCashFlow] = useState<string[]>([])
    const [LabelResultState, setLabelState] = useState<boolean>(true)

    const cashFlowList = (novoArray: string[]) => {
        const newFullCashFlow = typeof novoArray === 'string' ? [novoArray] : novoArray;

        // Verifica se todos os elementos de newFullCashFlow são strings
        if (newFullCashFlow.every(item => typeof item === 'string')) {
            setfullCashFlow(newFullCashFlow);
        } else {
            console.error('O novo fluxo de caixa contém elementos que não são strings.');
        }
    
    }

    const calcValuation = () => {
        event?.preventDefault();
        const newPercentage = parseInt(percentage)
        const result = fullCashFlow.map(c => {
            const newCash = parseInt(c)
            const deduction = newCash * (newPercentage/100)
            const calculation = newCash - deduction;
            return calculation
        })
        const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setValuation(sum.toString())      
        setLabelState(false)
    }

    return (
        <StyledHomePage>
            <StyledTitle>Bem vindo a ferramenta gratuita para calculo da valuation
                de sua startup!
            </StyledTitle>
                <StyledHomeForm onSubmit={calcValuation}>
                <TextBoxWithButton 
                    sendCashFlowList={cashFlowList}
                    label={"Faturamento bruto"}
                />
                <TextBox 
                    label={"Percentual de deduções"}
                    value={percentage}
                    onChange={setPercentage}
                />
                <StyledLabelResult hidden={LabelResultState}>Valuation aproximado: R$ {valuation}</StyledLabelResult>
                <StyledHomeSubmit type="submit">Calcular</StyledHomeSubmit>
            </StyledHomeForm>
        </StyledHomePage>
    )
  }
  
  export default Home