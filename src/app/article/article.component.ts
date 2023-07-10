import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() data!: any[]; // Añadir el operador de inicialización '!' para indicar que no tendrá un valor asignado en el constructor
  @Output() seleccionar: EventEmitter<any> = new EventEmitter<any>();

  selectedRow: number | null = null;

  borrarFila(index: number) {
    this.data.splice(index, 1);
  }

  seleccionarFila(index: number) {
    this.selectedRow = index;
    this.seleccionar.emit(this.data[index]);
  }
}
