import { ControllerButtonPropsDTO } from "../DTO/ControllerButtonDTO";
import useControllerButton from "./useControllerButton";

const ControllerButton = ({ label, onClick, type, size }: ControllerButtonPropsDTO) => {
	const { stylesType, stylesSize } = useControllerButton({ type, size });
	return (
		<button
			onClick={onClick}
			className={`
				flex justify-center items-center  w-full rounded-md cursor-pointer
				${stylesType()} ${stylesSize()}
			`}>
				{label}
		</button>
	);

};

export default ControllerButton;