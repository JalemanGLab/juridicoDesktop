import { UseControllerButtonActionPropsDTO } from "../DTO/ControllerButtonDTO";

const useControllerButtonAction = ({ size, state }: UseControllerButtonActionPropsDTO) => {

	const stylesState = () => {
		switch (state) {
			case 'disabled':
				return 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-all duration-300';
			case 'enabled':
				return 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 transition-all duration-300';
			case 'selected':
				return 'bg-emerald-400 text-neutral-100 hover:bg-emerald-500 transition-all duration-300';
			case 'call':
				return 'bg-red-400 text-neutral-100 hover:bg-red-500 transition-all duration-300';
		}
	}

	const stylesSize = () => {
		switch (size) {
			case 'sm':
				return 'w-[30px] ';
			case 'md':
				return 'w-[40px] ';
			case 'lg':
				return 'w-[60px] ';
			case 'xl':
				return 'w-[120px] ';

		}
	}

	return {
		stylesState,
		stylesSize
	}

}

export default useControllerButtonAction;