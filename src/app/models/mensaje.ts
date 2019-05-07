export class Mensaje {
    nombreCompleto: string;
    numeroDeContacto: number;
    correoElectronico: string;
    contenido: string;
    fecha: Date;

    Mensaje(nombreCompleto: string, numeroDeContacto: number,
         correoElectronico: string, contenido: string, fecha: Date)
    {
        this.nombreCompleto = nombreCompleto;
        this.numeroDeContacto = numeroDeContacto;
        this.correoElectronico = correoElectronico;
        this.contenido = contenido;
        this.fecha = fecha;
    }      
}
