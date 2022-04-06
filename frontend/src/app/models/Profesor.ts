export class Profesor {
    id: number;
    nombre: String;
    apellido: String;
    curso: String;
    estudiante: Estudiante;
}

export class Estudiante {
    id: number;
    nombre: String;
    apellido: String;
    profesor_id: number;
}