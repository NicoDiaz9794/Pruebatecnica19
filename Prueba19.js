class Nodo {
  constructor(valor, peso) {
    this.valor = valor;
    this.peso = peso;
    this.izquierda = null;
    this.derecha = null;
  }
}

class Arbol {
  constructor() {
    this.raiz = null;
  }

  insertar(valor, peso) {
    const nuevoNodo = new Nodo(valor, peso);

    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let nodoActual = this.raiz;

    while (nodoActual) {
      if (peso < nodoActual.peso) {
        if (!nodoActual.izquierda) {
          nodoActual.izquierda = nuevoNodo;
          return;
        }
        nodoActual = nodoActual.izquierda;
      } else {
        if (!nodoActual.derecha) {
          nodoActual.derecha = nuevoNodo;
          return;
        }
        nodoActual = nodoActual.derecha;
      }
    }
  }
}

const arbol = new Arbol();

arbol.insertar("A", 10);
arbol.insertar("B", 5);
arbol.insertar("C", 15);
arbol.insertar("D", 12);

console.log(arbol);
