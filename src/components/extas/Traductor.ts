
export const traducir = (fieldName: string) => {

    switch (fieldName) {
        case 'buyerName':
            return 'Nombre y Apellido';
        case 'businessName':
            return 'Nombre del comercio';
        case 'businessAddress':
            return 'Direccion del comercio';
        case 'cuit':
            return 'Cuit';
        case 'userName':
            return 'Usuario';
        case 'password':
            return 'Contraseña';
        default:
            return 'Error Field';
    }
}