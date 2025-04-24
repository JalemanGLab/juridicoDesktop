
import  {ReactNode } from 'react';
import useModal from './useModal';

interface ModalOptions {  [key: string]: any; }

interface ModalReturn {
	toggleModal: () => void;
	closeModalAction: () => void;
	Render: ({ children }: { children: ReactNode }) => JSX.Element | null;
	isOpen: boolean;
}

const Modal = (options: ModalOptions = {}): ModalReturn => {
	const {
		isOpen,
		toggleModal,
		closeModalAction,
		classModal
	} = useModal(options)
 
const Render= ({ children }: { children: ReactNode }): JSX.Element | null => {
		
   return isOpen ? (
      <div onClick={closeModalAction} className="fixed z-[100] left-0 top-0 overflow-y-auto pt-20 w-full h-screen bg-[rgba(0,0,0,.3)] flex justify-center items-center p-5">
        	<div onClick={(e)=>e.stopPropagation()} className={`max-h-[90vh] overflow-y-auto p-6 ${classModal}`}>
				<div className='w-full font-semibold flex justify-between'>
                    <div className="flex flex-row items-center gap-2">
                        <div className="text-3xl">{options.icon?options.icon:null}</div>
					    <div className='text-xl'>{options.title?options.title:null}</div>
                    </div>
					<button 
						onClick={closeModalAction}
						className="text-gray-400">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
					</button> 
				</div>
				{children}
        	</div>
      </div>
    ) : null;
  };

  return {  toggleModal, Render, closeModalAction, isOpen };
};

export default Modal;
