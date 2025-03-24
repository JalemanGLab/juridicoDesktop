
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'outline' | 'primary';
type ButtonState = 'disabled' | 'enabled' | 'selected' | 'call';

export interface ControllerButtonPropsDTO {
    label: string;
    onClick: () => void;
    type: ButtonType;
    size: ButtonSize;
}

export interface ControllerButtonWhitePropsDTO {
    label: string;
    onClick: () => void;
    childrenIcon: React.ReactNode;
}

export interface UseControllerButtonPropsDTO extends Pick<ControllerButtonPropsDTO, 'type' | 'size'> {}

export interface ControllerButtonFormPropsDTO {
    label: string;
    loader: boolean;
    children: React.ReactNode;
}

export interface ControllerButtonActionPropsDTO {
    onClick: () => void;
    children: React.ReactNode;
    size: ButtonSize;
    state: ButtonState;
}

export type UseControllerButtonActionPropsDTO = Pick<ControllerButtonActionPropsDTO, 'size' | 'state'>;

export interface ControllerButtonActionGroupPropsDTO {
    onClickLeft: () => void;
    onClickRight: () => void;
    childrenLeft: React.ReactNode;
    childrenRight: React.ReactNode;
    stateLeft: ButtonState;
    stateRight: ButtonState;
    size: ButtonSize;
}

export type UseControllerButtonActionGroupPropsDTO = Pick<ControllerButtonActionGroupPropsDTO, 'size' | 'stateLeft' | 'stateRight'>;
