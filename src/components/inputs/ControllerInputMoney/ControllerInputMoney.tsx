import { ControllerInputBasicDTO } from "../DTO/ControllerInputDTO";
import { MdAttachMoney } from "react-icons/md";
import { formateNumber } from "../../../utils/formateNumber";
import { useState } from "react";
const ControllerInputMoney = ({ name, register,  errors, rules }: ControllerInputBasicDTO) => {
	const [value, setValue] = useState('');

	return (
		<div className="relative w-full h-[36px] ">
			<input
				{...register(name, rules)}
				onChange={(e) => {
					setValue(formateNumber(e.target.value));
				}}
				type="text"
				value={value}
				min={1}
				className={` absolute top-0 left-0 w-full h-full rounded-md overflow-hidden pl-[34px] pr-1 text-neutral-600
				border ${errors?.[name] ? 'border-red-500' : 'border-neutral-800'} text-right `}
			/>
			<div className="absolute  top-[6px] left-[6px] w-6 h-6 flex items-center justify-center border-r text-neutral-400 text-xl">
				<MdAttachMoney />
			</div>
		</div>
	)
}
export default ControllerInputMoney;