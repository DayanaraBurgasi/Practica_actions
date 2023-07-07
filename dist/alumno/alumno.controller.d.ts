import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';
export declare class AlumnoController {
    private readonly alumnoService;
    constructor(alumnoService: AlumnoService);
    create(CreateAlumnoDto: CreateAlumnoDto): Alumno;
    findAll(): Alumno[];
    findOne(id: number): Alumno;
    update(id: string, updateAlumnoDto: UpdateAlumnoDto): Alumno;
    remove(id: string): void;
}
