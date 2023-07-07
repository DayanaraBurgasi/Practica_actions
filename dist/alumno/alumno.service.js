"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoService = void 0;
const common_1 = require("@nestjs/common");
const alumno_entity_1 = require("./entities/alumno.entity");
let AlumnoService = class AlumnoService {
    constructor() {
        this.alumnos = [
            { id: 1, nombre: 'Dayanara ', apellido: 'Burgasi', identificacion: '1311460909' },
            { id: 2, nombre: 'Lenin', apellido: 'Moreira', identificacion: '1312250907' }
        ];
    }
    create(createAlumnoDto) {
        const alumno = new alumno_entity_1.Alumno();
        alumno.id = Math.max(...this.alumnos.map(elemento => elemento.id), 0) + 1;
        alumno.nombre = createAlumnoDto.nombre;
        alumno.apellido = createAlumnoDto.apellido;
        alumno.identificacion = createAlumnoDto.identificacion;
        this.alumnos.push(alumno);
        return alumno;
    }
    findAll() {
        return this.alumnos;
    }
    findOne(id) {
        const alumno = this.alumnos.find(alumno => alumno.id === id);
        if (!alumno)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return alumno;
    }
    update(id, updateAlumnoDto) {
        const { nombre, apellido, identificacion } = updateAlumnoDto;
        const alumno = this.findOne(id);
        if (nombre)
            alumno.nombre = nombre;
        if (apellido)
            alumno.apellido = apellido;
        this.alumnos = this.alumnos.map(elemento => {
            if (elemento.id === id)
                return alumno;
            return elemento;
        });
        return alumno;
    }
    remove(id) {
        this.findOne(id);
        this.alumnos = this.alumnos.filter(elemento => elemento.id !== id);
    }
};
AlumnoService = __decorate([
    (0, common_1.Injectable)()
], AlumnoService);
exports.AlumnoService = AlumnoService;
//# sourceMappingURL=alumno.service.js.map