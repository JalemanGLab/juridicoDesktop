import { UseControllerButtonPropsDTO } from "../DTO/ControllerButtonDTO";

const useControllerButton = ({ type, size }: UseControllerButtonPropsDTO) => {

	const stylesType = () => {
		switch (type) {
			case 'outline':
				return 'border-[1px] border-neutral-700 bg-neutral-100 text-neutral-800 hover:bg-neutral-200  transition-all duration-300';
			case 'primary':
				return 'bg-neutral-700 text-white hover:bg-neutral-800 transition-all duration-300';

		}
	}

	const stylesSize = () => {
		switch (size) {
			case 'sm':
				return 'h-[30px] text-sm';
			case 'md':
				return 'h-[40px] text-md';
			case 'lg':
				return 'h-[50px] text-lg';
		}
	}

	return {
		stylesType,
		stylesSize
	}

}



export default useControllerButton;