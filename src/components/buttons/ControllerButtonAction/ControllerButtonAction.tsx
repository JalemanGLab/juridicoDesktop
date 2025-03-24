import { ControllerButtonActionPropsDTO } from "../DTO/ControllerButtonDTO";
import useControllerButtonAction from "./useControllerButtonAction";

const ControllerButtonAction = ({ onClick, size, state, children }: ControllerButtonActionPropsDTO) => {
	const { stylesState, stylesSize } = useControllerButtonAction({ state, size });
	return (
		<button
			onClick={onClick}
			className={`
				flex justify-center items-center rounded-md cursor-pointer text-lg h-[30px]
				${stylesState()} ${stylesSize()}
			`}>
			{children}
		</button>
	);


};

export default ControllerButtonAction    ;