import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnoService {

  private alumnos: Alumno[]=[
    {id:1,  nombre:'Dayanara ', apellido:'Burgasi',identificacion:'1311460909'},
    {id:2,  nombre:'Lenin', apellido:'Moreira',identificacion:'1312250907'}
    ]

  create(createAlumnoDto: CreateAlumnoDto) {
    const alumno = new Alumno();
    alumno.id=  Math.max( ... this.alumnos.map(elemento => elemento.id),0 )+1 ;
    alumno.nombre= createAlumnoDto.nombre;
    alumno.apellido= createAlumnoDto.apellido;
    alumno.identificacion= createAlumnoDto.identificacion;
    this.alumnos.push(alumno);
    return alumno;
  }

  findAll() : Alumno[] {
    return this.alumnos;
  }

  findOne(id: number) {
    const alumno =  this.alumnos.find(alumno=> alumno.id===id);
    if (!alumno) throw new NotFoundException(`ID ${id} not found`)
    return alumno;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    const { nombre, apellido, identificacion} = updateAlumnoDto;
    const alumno = this.findOne(id);
    if (nombre) alumno.nombre= nombre;
    if (apellido) alumno.apellido= apellido;

    this.alumnos =  this.alumnos.map( elemento=> {
      if (elemento.id===id) return alumno;
      return elemento;
    } )

    return alumno;

  }

  remove(id: number) {
    this.findOne(id);
    this.alumnos =  this.alumnos.filter(elemento=> elemento.id!== id);
  }
}
