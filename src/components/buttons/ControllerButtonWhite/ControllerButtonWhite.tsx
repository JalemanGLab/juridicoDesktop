import { ControllerButtonWhitePropsDTO } from "../DTO/ControllerButtonDTO";


const ControllerButtonWhite = ({ label, onClick, childrenIcon }: ControllerButtonWhitePropsDTO) => {
	return (
		<div
			onClick={onClick}
			className="flex flex-row  justify-center items-center  w-full h-10 rounded-md cursor-pointer		bg-white hover:bg-neutral-200 text-neutral-900 font-medium text-sm">
			<div className="w-10 min-w-10 h-6 border-r border-neutral-900 flex justify-center items-center text-xl">
				{childrenIcon}
			</div>
			<div className="w-full flex justify-center items-center">
				{label}
			</div>
		</div>
	);

};

export default ControllerButtonWhite;