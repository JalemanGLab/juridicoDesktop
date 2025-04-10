import { IoMdClose } from "react-icons/io";
import { LuDatabase } from "react-icons/lu"; //base de datos
import { BiWallet } from "react-icons/bi"; //cartera
import { RiDiscountPercentLine } from "react-icons/ri"; //campañas
import { RiUserReceivedLine } from "react-icons/ri"; //asignacion
import { LuChartNoAxesCombined } from "react-icons/lu"; //decil
import { RiMoneyDollarCircleLine } from "react-icons/ri"; //saldo
import { FaHandHoldingUsd } from "react-icons/fa"; //aportes
import { MdSimCardDownload } from "react-icons/md"; //descargar plantilla
import useModal from "./useModal";

const TITLES = {
    Base: "Base",
    Cartera: "Cartera",
    Campañas: "Campañas",
    Asignacion: "Asignación",
    Decil: "Decil",
    Saldo: "Saldo",
    Aportes: "Aportes"
} as const;

const ICONS = {
    Base: LuDatabase,
    Cartera: BiWallet,
    Campañas: RiDiscountPercentLine,
    Asignacion: RiUserReceivedLine,
    Decil: LuChartNoAxesCombined,
    Saldo: RiMoneyDollarCircleLine,
    Aportes: FaHandHoldingUsd
} as const;

const CustomButton = ({ 
    label, 
    onClick, 
    type = "primary", 
    disabled = false 
}: { 
    label: string; 
    onClick: () => void; 
    type?: "primary" | "outline"; 
    disabled?: boolean;
}) => {
    const baseStyles = "w-full rounded-lg font-medium transition-all duration-200 px-4 py-2 text-base";
    const typeStyles = type === "primary" 
        ? "bg-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed" 
        : "border border-neutral-300 hover:bg-neutral-100 text-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${typeStyles}`}
        >
            {label}
        </button>
    );
};

const Modal = ({option, setOption}: {option: string, setOption: (option: string) => void}) => {
    const { 
        file, 
        isLoading, 
        isDragging,
        fileInputRef, 
        handleFileSelect, 
        handleUpload, 
        handleDownloadTemplate,
        clearFile,
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop
    } = useModal({option});

    const icon = () => {
        const Icon = ICONS[option as keyof typeof ICONS];
        return Icon ? <Icon /> : null;
    };

    const title = () => TITLES[option as keyof typeof TITLES] || 'nada';

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
                    <div className="flex flex-row items-center gap-2">
                        Actualiza la información de tu {title()} en 
                        <span className="font-semibold">este formato</span> 
                        <MdSimCardDownload 
                            className="text-2xl cursor-pointer text-green-600 hover:text-green-700" 
                            onClick={handleDownloadTemplate}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-grow justify-between py-6">
                    <div 
                        className={`
                            flex-grow gap-2 border-2 border-dashed rounded-2xl 
                            flex flex-col items-center justify-center p-6 
                            transition-colors duration-200
                            ${isDragging ? 'border-blue-500 bg-blue-50' : file ? 'border-green-500' : 'border-neutral-300'}
                        `}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div className="text-6xl text-neutral-400 mb-4">
                            {icon()}
                        </div>
                        <div className="text-center">
                            <p className="text-neutral-500 text-xl font-medium">
                                {isDragging ? 'Suelta el archivo aquí' : 'Arrastra y suelta o haz clic para subir'}
                            </p>
                            <p className="text-neutral-500 text-md">Formato: Archivo.xls</p>
                        </div>
                        <input
                            type="file"
                            accept=".xls,.xlsx"
                            onChange={handleFileSelect}
                            ref={fileInputRef}
                            className="hidden"
                        />
                        <div className="w-full max-w-[200px]">
                            <CustomButton
                                label="Seleccionar archivo"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={!!file}
                            />
                        </div>
                        {file && (
                            <div className="flex items-center gap-2 text-green-600 mt-2">
                                <span>Archivo seleccionado: {file.name}</span>
                                <IoMdClose 
                                    className="text-xl cursor-pointer text-neutral-700 hover:text-neutral-800" 
                                    onClick={clearFile}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[150px]">
                            <CustomButton 
                                label="Cancelar" 
                                onClick={() => setOption("")} 
                                type="outline"
                            />
                        </div>
                        <div className="w-[150px]">
                            <CustomButton 
                                label="Subir archivo" 
                                onClick={handleUpload}
                                disabled={!file || isLoading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;
