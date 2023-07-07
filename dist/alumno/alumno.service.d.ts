import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';
export declare class AlumnoService {
    private alumnos;
    create(createAlumnoDto: CreateAlumnoDto): Alumno;
    findAll(): Alumno[];
    findOne(id: number): Alumno;
    update(id: number, updateAlumnoDto: UpdateAlumnoDto): Alumno;
    remove(id: number): void;
}
