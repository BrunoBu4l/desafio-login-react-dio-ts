export interface IButton{
    title: string;
    variant?: string;       //->opcional
    onClick?: () => void;
    type?: string;
    valid?: boolean;
}

export interface IButtonStyled{
    variant: string;
    valid?: boolean;
}