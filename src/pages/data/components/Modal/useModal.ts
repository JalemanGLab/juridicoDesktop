import { useState, useRef } from 'react';
import * as XLSX from 'xlsx'; //descargar plantilla

interface UseModalProps {
    option: string;
}

const useModal = ({ option }: UseModalProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
            const reader = new FileReader();
            
            reader.onload = async (e) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // Aquí puedes enviar jsonData a tu backend
                console.log('Datos listos para enviar:', jsonData);
                
                // TODO: Implementar la llamada a la API para guardar los datos
                // const response = await axios.post('/api/upload-data', {
                //     type: option,
                //     data: jsonData
                // });

                alert('Archivo procesado correctamente');
                setFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            };

            reader.readAsArrayBuffer(file);
        } catch (error) {
            console.error('Error al procesar el archivo:', error);
            alert('Error al procesar el archivo');
        } finally {
            setIsLoading(false);
        }
    };

    const clearFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return {
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
    };
};

export default useModal;