import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema_3';

  codigo = '';
  descripcion = '';
  precio = '';

  articulos: any[] = [];
  articuloSeleccionado: any = null;

  agregarArticulo() {
    const nuevoArticulo = {
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    };

    if (this.codigo && this.descripcion && this.precio) {
      this.articulos.push(nuevoArticulo);
      this.codigo = '';
      this.descripcion = '';
      this.precio = '';
    }
  }

  seleccionarArticulo(articulo: any) {
    this.articuloSeleccionado = articulo;
  }

  modificarArticulo() {
    if (this.articuloSeleccionado) {
      // Obtener el índice del artículo seleccionado en la lista
      const index = this.articulos.findIndex(articulo => articulo === this.articuloSeleccionado);

      if (index !== -1) {
        // Crear un nuevo objeto con los datos actualizados
        const articuloModificado = {
          codigo: this.codigo,
          descripcion: this.descripcion,
          precio: this.precio
        };

        // Reemplazar el artículo existente con el objeto modificado
        this.articulos[index] = articuloModificado;

        // Limpiar los campos de entrada
        this.codigo = '';
        this.descripcion = '';
        this.precio = '';

        // Limpiar el artículo seleccionado
        this.articuloSeleccionado = null;
      }
    }
  }
}
