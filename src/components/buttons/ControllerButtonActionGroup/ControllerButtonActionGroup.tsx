import { ControllerButtonActionGroupPropsDTO } from "../DTO/ControllerButtonDTO";
import useControllerButtonActionGroup from "./useControllerButtonActionGroup";

const ControllerButtonActionGroup = ({ childrenLeft, childrenRight, onClickLeft,onClickRight,stateLeft,stateRight,size}: ControllerButtonActionGroupPropsDTO) => {
	const {stylesSize,stylesStateLeft,stylesStateRight} =  useControllerButtonActionGroup({stateLeft,stateRight,size})
	return (
		<div className={`flex flex-row justify-center items-center bg-red-300 rounded-md ${stylesSize()}`}>
			<button 
			onClick={onClickLeft}
			className={`flex justify-center items-center w-full h-full rounded-l-md cursor-pointer ${stylesStateLeft()}`}>
				{childrenLeft}
			</button>
			<button 
			onClick={onClickRight}
			className={`flex justify-center items-center w-full h-full rounded-r-md cursor-pointer ${stylesStateRight()}`}>
				{childrenRight}
			</button>
		</div>
	);


};

export default ControllerButtonActionGroup;