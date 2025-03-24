import { UseFormRegister, FieldErrors, RegisterOptions } from "react-hook-form";

export interface ControllerInputBasicDTO {
    name: string;
    inputType: string;
    register: UseFormRegister<any>;
    childrenIcon?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: FieldErrors<any>;
    rules?: RegisterOptions; // Agregamos las reglas como prop opcional
}

