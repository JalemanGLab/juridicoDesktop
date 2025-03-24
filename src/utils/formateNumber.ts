export const formateNumber = (value: string) => {
    // Convertir el string a número y remover caracteres no numéricos
    const numberValue = Number(value.replace(/[^0-9]/g, ''));
    
    // Verificar si es un número válido
    if (isNaN(numberValue)) {
        return '';
    }

    return new Intl.NumberFormat('es-CO', {   
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(numberValue);
};
