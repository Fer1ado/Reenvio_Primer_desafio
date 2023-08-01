
class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct(input){
        //chequeo si todos los campos estan completos
        const check = Object.values(input).some(valor => valor === undefined);
        //chequeo si el producto no esta repetido
        const prod = this.products.find(prod => prod.code === input.code)

        if (check){
            console.log("Producto Incompleto")
            return
        } 

        if(prod){
            console.log("Producto ya agregado")
            return
        } 

        else {
            this.products.push(input)
        }
    } 
    

    getProducts(){
        console.table(this.products)
    }

    getProductById(id){
        const prod = this.products.find(prod => prod.id === id)
        if(prod) {
            console.log(prod)
            return
        } else {
            console.warn("Producto no encontrado")
        }
    }


}

class Product{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.agregarId()

    }

    static agregarId(){
        if(this.incrementoId){
            this.incrementoId++
        } 
        else{
            this.incrementoId = 1
        }
        return this.incrementoId
    }
    
}

////////////////////////////////////////////////////////////////////////////////////////
///CREACION DE ITEMS

const producto1 = new Product("manzana", "roja", 550, "http://thumbnail.com", "MM284", 76)
const producto2 = new Product("pera", "verde", 687, "http://thumbnail.com", "MM248", 54)
const producto3 = new Product("mandarina", "naranja", 354, "http://thumbnail.com", "MA275", 206)
const producto4 = new Product("Piña", "dulce", 845, [], "PI265", 126)
const productofallido = new Product("casona de la esquina antigua","","")

const agregarProducto = new ProductManager()
console.log(agregarProducto.getProducts()) /// DEVOLUCIÓN DE ARRAY VACÍO

agregarProducto.addProduct(producto1)
agregarProducto.addProduct(producto2)
agregarProducto.addProduct(producto3)
agregarProducto.addProduct(producto4) // producto con array vacio
agregarProducto.addProduct(producto4) // producto ya agregado
agregarProducto.addProduct(productofallido) // producto que no cumple con criterio


//////////////////////////////////////////////////////////////////////////////////////


console.log(agregarProducto.getProducts()) // DEVUELVE EL LISTADO COMPLETO

console.log(agregarProducto.getProductById(4)) /// BUSCAR PRODUCTO POR ID

console.log(agregarProducto.getProductById(18)) /// ID NO ENCONTRADO
