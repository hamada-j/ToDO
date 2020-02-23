import { Component, OnInit, Input } from "@angular/core";
import { TareasService } from "../tareas.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  colores: any[];
  @Input() tareas: any[];

  constructor(private tareasService: TareasService) {
    /**
     * ------------------------------------------------------------------------
     * colores desde boostrap con un For cambiar en funcion de la nueva tarea
     * ------------------------------------------------------------------------
     */
    this.colores = ["primary", "secondary", "success", "danger", "warning"];
  }

  ngOnInit() {
    this.tareasService.recuperarArr(this.tareas);
  }

  pintarLista() {
    let resultado = `<ul class="list-group">`;
    let i = 0;
    for (const tarea of this.tareas) {
      resultado += `<li class="list-group-item list-group-item-${this.colores[i]}">titulo: ${tarea.titulo}, texto:${tarea.texto}`;
      if (i > 4) {
        i = 0;
      }
      i++;
    }
    return resultado + "</ul>";
  }
}
