import { useState, useRef, useEffect } from 'react';
import * as XLSX from 'xlsx'; //descargar plantilla
import Modal from '../../components/modal/Modal';
import { IoMdClose } from "react-icons/io";
import { LuDatabase } from "react-icons/lu"; //base de datos
import { BiWallet } from "react-icons/bi"; //cartera
import { RiDiscountPercentLine } from "react-icons/ri"; //campañas
import { RiUserReceivedLine } from "react-icons/ri"; //asignacion
import { LuChartNoAxesCombined } from "react-icons/lu"; //decil
import { RiMoneyDollarCircleLine } from "react-icons/ri"; //saldo
import { FaHandHoldingUsd } from "react-icons/fa"; //aportes
import { MdSimCardDownload } from "react-icons/md"; //descargar plantilla
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { ImSpinner8 } from "react-icons/im";



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

type UploadStatus = 'idle' | 'loading' | 'success' | 'error';

const usePageData = () => {

    const [option, setOption] = useState<string>("");

    const icon = () => {
        const Icon = ICONS[option as keyof typeof ICONS];
        return Icon ? <Icon /> : null;
    };

    const title = () => TITLES[option as keyof typeof TITLES] || 'nada';

    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {Render,closeModalAction,toggleModal, isOpen} =Modal({icon:icon(),title:title()})

    useEffect(() => {
        if (option) {
            toggleModal();
        }
    }, [option]);

    useEffect(() => {
        if (!isOpen) {
            setOption("");
            resetModal();
        }
    }, [isOpen]);


    const getTemplateColumns = () => {
        switch (option) {
            case "Base":
                return ["ID Cliente", "Nombre", "Documento", "Teléfono"];
            case "Cartera":
                return ["ID Cliente", "Valor Deuda", "Fecha Vencimiento", "Estado"];
            case "Campañas":
                return ["ID Cliente", "Nombre Campaña", "Descuento", "Fecha Límite"];
            case "Asignacion":
                return ["ID Cliente", "Gestor", "Fecha Asignación", "Prioridad"];
            case "Decil":
                return ["ID Cliente", "Segmento", "Valor", "Categoría"];
            case "Saldo":
                return ["ID Cliente", "Saldo Total", "Última Actualización", "Estado"];
            case "Aportes":
                return ["ID Cliente", "Valor Aporte", "Fecha Aporte", "Tipo Aporte"];
            default:
                return ["Columna 1", "Columna 2", "Columna 3", "Columna 4"];
        }
    };

    const handleDownloadTemplate = () => {
        const columns = getTemplateColumns();
        const ws = XLSX.utils.aoa_to_sheet([columns]); // Crear hoja con solo los encabezados
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Plantilla");
        
        // Ajustar el ancho de las columnas
        const wscols = columns.map(() => ({ wch: 20 })); // Ancho de 20 para cada columna
        ws['!cols'] = wscols;

        // Generar el archivo y descargarlo
        XLSX.writeFile(wb, `plantilla_${option.toLowerCase()}.xls`);
    };

    const validateAndSetFile = (selectedFile: File) => {
        const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
        if (fileExtension !== 'xls' && fileExtension !== 'xlsx') {
            alert('Por favor, selecciona un archivo Excel (.xls o .xlsx)');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            return;
        }
        setFile(selectedFile);
    };

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            validateAndSetFile(droppedFile);
        }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            validateAndSetFile(selectedFile);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        try {
            setIsLoading(true);
            setUploadStatus('loading');
            const reader = new FileReader();
            
            reader.onload = async (e) => {
                try {
                    const data = new Uint8Array(e.target?.result as ArrayBuffer);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet);

                    // Simular un delay para ver el estado de carga
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    // Aquí puedes enviar jsonData a tu backend
                    console.log('Datos listos para enviar:', jsonData);
                    
                    // TODO: Implementar la llamada a la API para guardar los datos
                    // const response = await axios.post('/api/upload-data', {
                    //     type: option,
                    //     data: jsonData
                    // });

                    setUploadStatus('success');
                    // Ya no reseteamos automáticamente
                } catch (error) {
                    console.error('Error al procesar el archivo:', error);
                    setUploadStatus('error');
                }
            };

            reader.readAsArrayBuffer(file);
        } catch (error) {
            console.error('Error al procesar el archivo:', error);
            setUploadStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const clearFile = () => {
        setFile(null);
        setUploadStatus('idle');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const retryUpload = () => {
        setUploadStatus('idle');
    };

    const resetModal = () => {
        setFile(null);
        setUploadStatus('idle');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return {
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
        resetModal,
        Render,
        closeModalAction,
        toggleModal,
        icon,
        title,
        option,
        setOption
    };
};

export default usePageData;