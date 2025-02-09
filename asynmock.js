const misProductos = [
    {id: 1, nombre: "producto1", img: "./img/"},
    {id: 2, nombre: "producto2", img: "./img/"},
    {id: 3, nombre: "producto3", img: "./img/"},
    {id: 4, nombre: "producto4", img: "./img/"},
]
export const getProductos = () => {
    return new Promise ((resolve)=>{
    setTimeout (()=>{
        resolve (misProductos)
    },2000)
})
}