import { ControllerInputBasicDTO } from "../DTO/ControllerInputDTO";
const ControllerInputBasic = ({ name, register,inputType, childrenIcon, onChange, errors, rules }: ControllerInputBasicDTO) => {
	return (
		<div className="relative w-full h-[36px] ">
			<input
				{...register(name, rules)}
				onChange={(e) => {
					onChange?.(e);
				}}
				type={inputType}
				className={` absolute top-0 left-0 w-full h-full rounded-md overflow-hidden pl-10 pr-2 text-neutral-600 text-right
				border ${errors?.[name] ? 'border-red-500' : 'border-neutral-800'} `}
			/>
			<div className="absolute  top-0 left-0 w-9 h-full rounded-md   flex items-center justify-center  text-neutral-400">
				<div className="w-full h-5 flex items-center justify-center border-r border-neutral-400">
					{childrenIcon}
				</div>
			</div>
		</div>
	)
}
export default ControllerInputBasic;