import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoDto } from './create-alumno.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {
    
}
