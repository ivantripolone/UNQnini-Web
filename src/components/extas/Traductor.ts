
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
        case 'debe coincidir con \"^\\d{11}$\"':
            return 'no puede tener mas de 11 digitos';
        default:
            return fieldName;
    }
}