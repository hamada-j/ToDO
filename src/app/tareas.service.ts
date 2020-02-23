import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TareasService {
  arrDeTareas: any;

  constructor(private http: HttpClient) {
    this.arrDeTareas = [];
  }
  getTareasBack() {
    this.http
      .get<any>("http://localhost:3000/api/tarea")
      .subscribe(tareasData => {
        this.arrDeTareas = tareasData.tareas;
      });
  }
  recuperarArr(pArr) {
    return (this.arrDeTareas = [...pArr]);
  }
}
