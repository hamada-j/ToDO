import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arrTarea: any[];

  constructor() {
    this.arrTarea = new Array();
  }
  /**
   * ------------------------------------------------------------------------
   *                   Crear Tarea -----> arrTareas
   * ------------------------------------------------------------------------
   */

  manejarTareaEnviada($event) {
    // let nuevatarea = {
    //   titulo: $event.titulo,
    //   texto: $event.texto
    // };
    // this.arrTarea.push(nuevatarea);
    // SpletOperator pasa todas las propiedades y sus valores
    const nuevaTarea = { ...$event };

    this.arrTarea.push(nuevaTarea);
    console.log(this.arrTarea);
  }
}
