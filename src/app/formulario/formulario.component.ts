import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  /**
   * ------------------------------------------------------------------------
   *  --Html-->TSparent-->TSchilled ========>>>>>>>>> secuencia del Output()
   * ------------------------------------------------------------------------
   */
  @Output() tareaEnviada: EventEmitter<any>;
  tarea: any;
  constructor() {
    this.tarea = {};
    this.tareaEnviada = new EventEmitter();
  }

  ngOnInit() {}

  manejarClick() {
    console.log(this.tarea);
    this.tareaEnviada.emit(this.tarea);
  }
}
