import {FC, useContext} from 'react';
import styled from 'styled-components';
import {DarkModeProps} from '../styles/LightDarkThemes';
import DarkModeContext from '../../contexts/darkmode';

interface ToggleButtonProps{
    onClickHandler: () => void
}


const ButtonContainer = styled.div<DarkModeProps>`
    width: 50px;
    height: 20px;
    background: ${({isDarkMode}) => isDarkMode ? "#1f1f1f": "#FFFFFF"};
    border: 2px solid ${({isDarkMode}) => isDarkMode ? "#000000": "#e6e6e6"};
    border-radius: 16px;
    cursor: pointer;
    transition: all linear 0.3s;
`

const Button = styled.div<DarkModeProps>`
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border: 2px solid #e6e6e6;
    border-radius: 50%;
    transform: translate(${({isDarkMode}) => isDarkMode ? "30px": "-2px"}, -2px);
    transition: transform linear 0.3s;
`



const ToggleButton: FC<ToggleButtonProps> =({onClickHandler}) => {

    const {isDarkMode} = useContext(DarkModeContext);

    return(
        <ButtonContainer isDarkMode={isDarkMode} onClick={onClickHandler}>
            <Button isDarkMode={isDarkMode}/>
        </ButtonContainer>
    );

}

export default ToggleButton;