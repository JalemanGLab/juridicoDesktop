import { UseControllerButtonActionGroupPropsDTO } from "../DTO/ControllerButtonDTO";

const useControllerButtonActionGroup = ({ stateLeft, stateRight, size }: UseControllerButtonActionGroupPropsDTO) => {



	const stylesStateLeft = () => {
		switch (stateLeft) {
			case 'disabled':
				return 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300  transition-all duration-300';
			case 'enabled':
				return 'bg-neutral-700 text-neutral-100 hover:bg-neutral-600 transition-all duration-300';
			case 'selected':
				return 'bg-emerald-400 text-neutral-100 hover:bg-emerald-500 transition-all duration-300';
			case 'call':
				return 'bg-red-400 text-neutral-100 hover:bg-red-500 transition-all duration-300';


		}
	}

	const stylesStateRight = () => {
		switch (stateRight) {
			case 'disabled':
				return 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300 transition-all duration-300';
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
				return 'w-[60px] h-[30px] text-md';
			case 'md':
				return 'w-[80px] h-[40px] text-lg';
			case 'lg':
				return 'w-[120px] h-[40px] text-xl';
		}
	}

	return {
		stylesStateLeft,
		stylesStateRight,
		stylesSize
	}


}



export default useControllerButtonActionGroup;