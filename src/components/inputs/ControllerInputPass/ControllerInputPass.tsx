import { ControllerInputBasicDTO } from "../DTO/ControllerInputDTO";
import { RiLockPasswordFill } from "react-icons/ri";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
const ControllerInputPass = ({ name, register,  onChange, errors, rules }: ControllerInputBasicDTO) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="relative w-full h-[36px] ">
			<input
				{...register(name, rules)}
				onChange={(e) => {
					onChange?.(e);
				}}
				type={showPassword ? 'text' : 'password'}
				className={` absolute top-0 left-0 w-full h-full rounded-md overflow-hidden pl-10 pr-10 text-neutral-600 text-right
				border ${errors?.[name] ? 'border-red-500' : 'border-neutral-800'} `}
			/>
			<div className="absolute  top-0 left-0 w-9 h-full rounded-md   flex items-center justify-center  text-neutral-400">
				<div className="w-full h-5 flex items-center justify-center border-r border-neutral-400">
					<RiLockPasswordFill />
				</div>
			</div>
			<div className="absolute  top-0 right-0 w-9 h-full rounded-md   flex items-center justify-center  text-neutral-400">
				<div 
					onClick={() => setShowPassword(!showPassword)}
				className="w-full h-5 flex items-center justify-center border-l border-neutral-400 cursor-pointer">
					{showPassword ? <GoEye /> : <GoEyeClosed />}
				</div>
			</div>
		</div>
	)
}
export default ControllerInputPass;