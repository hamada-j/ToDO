export class Tarea {
  titulo: string;

  texto: string;
  completa: boolean;

  constructor(pTitulo: string, pTexto: string, pColmleta: boolean = false) {
    this.titulo = pTitulo;
    this.texto = pTexto;
  }
}
