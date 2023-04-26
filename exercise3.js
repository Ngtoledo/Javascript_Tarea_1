class Carro {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {

      const productoExistente = this.productos.find(producto => producto.nombre === nombre);
      
      if (productoExistente) {
        productoExistente.unidades += unidades;
        console.log(`El producto ${nombre} ya está en el carrito con ${productoExistente.unidades} unidades.`);
      } 
      else {
        this.productos.push({nombre, precio, unidades});
        this.montoTotal += precio * unidades;
      }
    }
  }
  
  const carrito = new Carro();
  carrito.agregarProducto("Fideos", 2, 3);
  carrito.agregarProducto("Mermelada", 5, 2);
  carrito.agregarProducto("", 2, 1);
  console.log(carrito);
  