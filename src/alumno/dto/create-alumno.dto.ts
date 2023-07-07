import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlumnoDto {
    
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    apellido:string;
    
    @IsString()
    @IsNotEmpty()
    identificacion:string;
}
