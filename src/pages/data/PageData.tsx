import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import usePageData from "./usePageData";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImSpinner8 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { MdSimCardDownload } from "react-icons/md";

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

const LoadingState = () => (
    <div className="flex flex-col items-center justify-center gap-4">
        <ImSpinner8 className="text-6xl text-neutral-600 animate-spin" />
        <div className="text-center">
            <p className="text-neutral-600 text-xl font-medium">
                Procesando archivo...
            </p>
            <p className="text-neutral-500 text-sm">
                Esto puede tardar unos minutos
            </p>
        </div>
    </div>
);

const SuccessState = () => (
    <div className="flex flex-col items-center justify-center gap-4">
        <AiOutlineCheckCircle className="text-6xl text-green-500" />
        <div className="text-center">
            <p className="text-green-600 text-xl font-medium">
                ¡Archivo cargado con éxito!
            </p>
            <p className="text-neutral-500 text-sm">
                Los datos han sido actualizados correctamente.
            </p>
        </div>
    </div>
);

const ErrorState = () => (
    <div className="flex flex-col items-center justify-center gap-4">
        <BiErrorCircle className="text-6xl text-red-500" />
        <div className="text-center">
            <p className="text-red-600 text-xl font-medium">
                ¡Error al subir el archivo!
            </p>
            <p className="text-neutral-500 text-sm">
                Los datos no se pudieron actualizar.
            </p>
        </div>
    </div>
);



const PageData = () => {

    const {
        file, 
        isLoading, 
        isDragging,
        uploadStatus,
        fileInputRef, 
        handleFileSelect, 
        handleUpload, 
        handleDownloadTemplate,
        clearFile,
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        retryUpload,
        Render,
        closeModalAction,
        icon,
        title,
        option,
        setOption
    } = usePageData();

    const renderContent = () => {
        switch (uploadStatus) {
            case 'loading':
                return <LoadingState />;
            case 'success':
                return <SuccessState />;
            case 'error':
                return <ErrorState />;
            default:
                return (
                    <>
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
                    </>
                );
        }
    };



    return ( 
        <Layout>
            <div className="flex flex-col w-full h-full">
                <div className="flex w-full h-[50px] items-center px-2 border-b border-neutral-200">
                    <div className="text-lg font-semibold">
                        Panel de  actualizacion de  bases datos
                    </div>
                </div>
                <div className="flex justify-center items-start py-32 w-full h-[calc(100%-50px)]">
                    <Card option={option} setOption={setOption} />
                </div>
            </div>
            <div className="">
            <Render>
                <div className="flex flex-col gap-2 mt-2">
                    <div className="flex flex-row items-center gap-2">
                        Actualiza la información de tu {title()} en 
                        <span className="font-semibold">este formato</span> 
                        <MdSimCardDownload 
                            className="text-2xl cursor-pointer text-green-600 hover:text-green-700" 
                            onClick={handleDownloadTemplate}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-grow justify-between pt-4">
                    <div 
                        className={`
                            flex-grow gap-2 border-2 border-dashed rounded-2xl 
                            flex flex-col items-center justify-center p-6 
                            transition-colors duration-200
                            ${isDragging ? 'border-blue-500 bg-blue-50' : 
                            uploadStatus === 'success' ? 'border-green-500' :
                            uploadStatus === 'error' ? 'border-red-500' :
                            file ? 'border-green-500' : 'border-neutral-300'}
                        `}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {renderContent()}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[150px]">
                            <CustomButton 
                                label="Cancelar" 
                                onClick={closeModalAction}
                                type="outline"
                            />
                        </div>
                        <div className="w-[150px]">
                            {uploadStatus === 'error' ? (
                                <CustomButton 
                                    label="Intentar de nuevo" 
                                    onClick={retryUpload}
                                />
                            ) : uploadStatus === 'success' ? (
                                <CustomButton 
                                    label="Completado" 
                                    onClick={closeModalAction}
                                />
                            ) : (
                                <CustomButton 
                                    label="Subir archivo" 
                                    onClick={handleUpload}
                                    disabled={!file || isLoading}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Render>
            </div>
        </Layout>
     );
}
 
export default PageData;