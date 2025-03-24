import { ControllerButtonFormPropsDTO } from "../DTO/ControllerButtonDTO";
import { BiLoaderAlt } from "react-icons/bi";
const ControllerButtonForm = ({ label, loader, children }: ControllerButtonFormPropsDTO) => {
	return (
		<button
			type="submit"
			disabled={loader}
			className="w-full h-[40px] rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
			{loader ? (
				<div className="flex w-full h-full justify-center items-center">
					<BiLoaderAlt className="animate-spin text-white text-md" />
				</div>
			) : (
				<div className="flex flex-row w-full h-full justify-between items-center p-1">
					<div className="flex w-full h-full justify-center items-center text-xs">
						{label.toUpperCase()}
					</div>
					<div className="flex w-10 h-full justify-center items-center border-l-[1px] border-neutral-500 text-white text-xl">
					{children}
					</div>
				</div>
			)}
		</button>
	);
}


export default ControllerButtonForm;