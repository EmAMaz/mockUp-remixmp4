import { Component, EventEmitter, Input, Output, Renderer2, ElementRef, HostListener } from '@angular/core';

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
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }
  isElementVisible = false;

  listaSong = [] = [
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg",
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    { 
      image:"../../../assets/index-usuario/caratularecomendadosytop10.png",
      autor:"Bad Bunny",
      nombre:"Un preview",
      subtitulo:"Intro Outro",
      genero:"Reggaeton",
      puntaje:"958 PM",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    }
  ]
  songsList = [] = [
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    },
    {
      fecha: "10/03/2023",
      remixerLogo: "../../../assets/index-usuario/caratulatabla.png",
      artista: "Alok, The Chainsmokers Y Mae Stephens",
      tema: "One In A Millon",
      version: "Intro Outro",
      bpm: "121",
      genero:"Latin Pop",
      descarga: "../../../assets/index-usuario/image-song.png",
      iconStart: "../../../assets/index-usuario/start.svg",
      iconDownload: "../../../assets/index-usuario/download.svg",
      iconLove: "../../../assets/index-usuario/love.svg"
    }
  ]
  listRemixers = [] = [
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"}
  ]
  listGeneros = [] = [
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"},
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"},
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"},
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"}
  ]
  dropdownMenu: boolean = false;
  submenuRemixe: boolean = false;
  submenuGeneros: boolean = false;
  submenuActivado: boolean = false;
  itemForPage: number = 20;
  numberPage: number = 1;
  
  totalPageList = Math.round(this.songsList.length / this.itemForPage)
  dropdownActive(){
    this.dropdownMenu = !this.dropdownMenu;
  }
  openSubmenu($event:any){
    if($event.target.innerHTML === "remixes"){
      this.submenuGeneros = false;
      this.dropdownMenu = false;
      this.submenuRemixe = true;
    }else if($event.target.innerHTML === "generos"){
      this.submenuRemixe = false;
      this.dropdownMenu = false;
      this.submenuGeneros = true;
    }else if($event.target.innerText === "MI CUENTA"){
      this.submenuRemixe = false;
      this.submenuGeneros = false;
      this.dropdownMenu = true;
    }else{
      this.submenuRemixe = false;
      this.submenuGeneros = false;
    }
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('submenu-excluido')) {
      this.submenuRemixe = false;
      this.submenuGeneros = false;
      this.dropdownMenu = false;
    }
  }
}