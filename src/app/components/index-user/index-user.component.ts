import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.scss']
})
export class IndexUserComponent {
  @Input() id!: string;
  @Input() maxSize!: number;
  @Output() pageChange!: EventEmitter<number>;
  @Output() pageBoundsCorrection!: EventEmitter<number>;

  listaSong = [] = [
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    },
    { 
      image:"../../../assets/index-usuario/image-song.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM"
    }
  ]
  songsList = [] = [
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/image-song.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png"
    }
  ]
  dropdownMenu: boolean = false;
  numberPage: number = 1;
  
  dropdownActive(){
    this.dropdownMenu = !this.dropdownMenu;
  }
}