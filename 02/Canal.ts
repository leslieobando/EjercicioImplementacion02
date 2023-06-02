import { Streamer } from "./Streamer.js";

export class Canal{
    nombre: string;
    streamer: Streamer[];
    banner: String;
    descripcion: String;


    constructor(nombre: string, streamer: Streamer[], banner: string, nombreTrasmisor: String, descripcion: string){
        this.nombre = nombre;
        this.streamer = streamer;
        this.banner = banner;
        this.descripcion = descripcion;

        }
}