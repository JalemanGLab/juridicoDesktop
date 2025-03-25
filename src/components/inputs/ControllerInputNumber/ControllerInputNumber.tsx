import { ControllerInputBasicDTO } from "../DTO/ControllerInputDTO";
import { MdNumbers } from "react-icons/md";

const ControllerInputNumber = ({ name, register, errors, rules }: ControllerInputBasicDTO) => {
	return (
		<div className="relative w-full h-[36px] ">
			<input
				{...register(name, rules)}
				type="number"
				className={`absolute top-0 left-0 w-full h-full rounded-md overflow-hidden pl-[34px] pr-1 text-neutral-600
				border ${errors?.[name] ? 'border-red-500' : 'border-neutral-800'} text-right`}
			/>
			<div className="absolute top-[6px] left-[6px] w-6 h-6 flex items-center justify-center border-r text-neutral-400 text-xl">
				<MdNumbers />
			</div>
		</div>
	);
};

export default ControllerInputNumber;