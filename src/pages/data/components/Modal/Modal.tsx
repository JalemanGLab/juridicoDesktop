import { IoMdClose } from "react-icons/io";
import { LuDatabase } from "react-icons/lu"; //base de datos
import { BiWallet } from "react-icons/bi"; //cartera
import { RiDiscountPercentLine } from "react-icons/ri"; //campañas
import { RiUserReceivedLine } from "react-icons/ri"; //asignacion
import { LuChartNoAxesCombined } from "react-icons/lu"; //decil
import { RiMoneyDollarCircleLine } from "react-icons/ri"; //saldo
import { FaHandHoldingUsd } from "react-icons/fa"; //aportes

import ControllerButton from "../../../../components/buttons/ControllerButton/ControllerButton";

const Modal = ({option, setOption}: {option: string, setOption: (option: string) => void}) => {

    const icon = () => {
        switch (option) {
            case "Base":
                return <LuDatabase />
            case "Cartera":
                return <BiWallet />
            case "Campañas":
                return <RiDiscountPercentLine />
            case "Asignacion":
                return <RiUserReceivedLine />
            case "Decil":
                return <LuChartNoAxesCombined />
            case "Saldo":
                return <RiMoneyDollarCircleLine />
            case "Aportes":
                return <FaHandHoldingUsd />
            default:
                return ''
        }
    }

    const title = () => {
        switch (option) {
            case "Base":
                return "Base"
            case "Cartera":
                return "Cartera"
            case "Campañas":
                return "Campañas"
            case "Asignacion":
                return "Asignación"
            case "Decil":
                return "Decil"
            case "Saldo":
                return "Saldo"
            case "Aportes":
                return "Aportes"
            default:    
                return 'nada'
        }
    }

    return ( 
        <div onClick={() => setOption("")} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white flex flex-col p-5 w-[550px] h-[450px] rounded-[20px]" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <div className="text-3xl text-neutral-700">{icon()}</div>
                            <div className="text-xl font-semibold text-neutral-700">{title()}</div>
                        </div>
                        <div className="text-2xl font-semibold cursor-pointer" onClick={() => setOption("")}>
                            <IoMdClose className="text-neutral-700" />
                        </div>
                    </div>
                    <div className="">Actualiza la información de tu {title()} en <span className="font-semibold">este formato</span></div>
                </div>
                <div className="flex flex-col gap-4 flex-grow justify-between py-6">
                    <div className="flex-grow gap-2 border-2 border-dashed border-neutral-300 rounded-2xl flex flex-col items-center justify-center p-6">
                        <div className="text-6xl text-neutral-400 mb-4">
                            {icon()}
                        </div>
                        <div className="text-center">
                            <p className="text-neutral-500 text-xl font-medium">
                                Arrastra y suelta o haz clic para subir
                            </p>
                            <p className="text-neutral-500 text-md">Formato: Archivo.xls</p>
                        </div>
                        <div className="w-full max-w-[200px]">
                            <ControllerButton
                                label="Seleccionar archivo"
                            onClick={() => {
                                console.log("Has seleccionado actualizar:", option);
                            }}
                            type="primary"
                                size="md"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[150px]">
                            <ControllerButton 
                                label="Cancelar" 
                                onClick={() => setOption("")} 
                                type="outline" 
                                size="md" 
                            />
                        </div>
                        <div className="w-[150px]">
                            <ControllerButton 
                                label="Subir archivo" 
                                onClick={() => {
                                    console.log("Subir archivo para:", option);
                                }} 
                                type="primary" 
                                size="md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;
