const data =[];
let id = 0;

const list=()=>{
    return data
}

const findOne =(id)=>{
    return data.find((product)=> product.id === id)
}

const add = (timestamp, name ,descripcion,codigo, price, stock, img)=>{
    const product = {id: ++id, timestamp, name ,descripcion, codigo, price, stock, img}
    data.push(product)
    return product
}
const findAllProduct =(name)=>{
    const newArr = data.filter((product)=>product.name===name)
    return newArr
}

const remove =(id)=>{
    data.forEach((product, i) =>{
        if (product.id === id) data.splice(i, 1)
    });
}

const update =(id, newProduct)=>{
    const indice = data.findIndex((product)=> product.id == id)
    if (indice > 0){
        return data[indice] = newProduct
    }
}

module.exports= {add, findOne, findAllProduct, update, remove, list}

let products = [
    {
        timestamp:Date.now(),
        name: "peras",
        descripcion: "fruta",
        codigo:2342,       
        price:40,
        stock:400,
        img:"https://res.cloudinary.com/riqra/image/upload/v1595008844/sellers/companyname/products/knhcmuwpfqe7e2ug86bl.jpg",
    },
    {
        timestamp:Date.now(),
        name: "manzana",
        descripcion: "fruta",
        codigo:2342,       
        price:40,
        stock:400,
        img:"https://i.blogs.es/e44dc0/manzana/450_1000.webp",
    },
    {
        timestamp:Date.now(),
        name: "mandarinas",
        descripcion: "fruta",
        codigo:2342,       
        price:40,
        stock:400,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8Ikk4nfc5r6myF26Uus3XVUNr28ufRohzLoIUYwN9yTlsgEnBfpUuSA4zpPLmpprClc&usqp=CAU",
    },
    {
        timestamp:Date.now(),
        name: "banana",
        descripcion: "fruta",
        codigo:2342,       
        price:40,
        stock:400,
        img:"https://image.shutterstock.com/image-photo/one-banana-yellow-isolated-on-260nw-1932710246.jpg",
    },
    {
        timestamp:Date.now(),
        name: "naranja",
        descripcion: "fruta",
        codigo:2342,       
        price:40,
        stock:400,
        img:"https://i0.wp.com/pastofruver.com/wp-content/uploads/2020/03/Naranjas-Pastofruver-1.jpg?fit=800%2C800&ssl=1",
    },
]
for (let i=0; i<products.length; i++){
    module.exports.add(products[i].timestamp, products[i].name,products[i].descripcion,products[i].codigo, products[i].price,products[i].stock, products[i].img)
}