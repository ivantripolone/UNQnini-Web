
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
        case 'fullname':
            return 'Nombre y Apellido';
        case 'businessName':
            return 'Nombre del comercio';
        case 'businessAddress':
            return 'Direccion del comercio';
        case 'debe coincidir con \"^[a-zA-Z ]*$\"':
            return 'solo puede contener letras';
        case 'debe coincidir con \"^\\d{10}$\"':
            return 'debe contar con 10 digitos';
        case 'debe coincidir con \"^[1-9]*$\"':
            return 'no puede contener ceros';
        default:
            return fieldName;
    }
}