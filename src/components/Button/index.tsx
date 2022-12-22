import React from "react";

import { ButtonContainer } from "./styles";
import { IButton } from './types';

const Button = ({title, variant="primary", valid, onClick}: IButton) => {
  return (
    <ButtonContainer variant={variant} valid={valid} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export { Button }
