const data1 =[];
let id = 0;

const listCart=()=>{
    return data1
}

const findOneCart =(id)=>{
    return data1.find((product)=> product.id === id)
}

const addCart = (timestamp, productos)=>{
    const cart = {id: ++id, timestamp, productos}
    data1.push(cart)
    return cart
}
const addItems =(idp, name, codigo, timestamp, descripcion, stock, price)=>{
    producto={} 
    producto.idp = idp; 
    producto.name = name; 
    producto.codigo= codigo; 
    producto.timestamp = timestamp; 
    producto.descripcion = descripcion;  
    producto.stock = stock;
    producto.price = price;
    return producto            
}
const findAllCart =(name)=>{
    const newArr = data1.filter((product)=>product.name===name)
    return newArr
}

const remove =(id)=>{
    data1.forEach((cart, i) =>{
        if (cart.id === id) data1.splice(i, 1)
    });
}
const removeProd = (producto,id)=>{   
    for (const key in data1) {
        if (producto==key) {
            data1[producto].splice(id, 1);
        }
        }
}
const updateCart =(id, newPrice)=>{
    const product = findOne(id);
    product.price = newPrice
}

module.exports= {addCart, findOneCart, findAllCart, updateCart, remove, listCart, addItems, removeProd}

let carts = [
    {
        timestamp: Date.now(),
        productos:[
            {
                idp:1,
                timestamp:Date.now(),
                name: "peras",
                descripcion: "fruta",
                codigo:2342,       
                price:10,
                stock:800,
                img:"https://res.cloudinary.com/riqra/image/upload/v1595008844/sellers/companyname/products/knhcmuwpfqe7e2ug86bl.jpg",
            },
            {
                idp:2,
                timestamp:Date.now(),
                name: "manzana",
                descripcion: "fruta",
                codigo:2342,       
                price:45,
                stock:700,
                img:"https://i.blogs.es/e44dc0/manzana/450_1000.webp",
            }
        ]        
    },
    {
        timestamp: Date.now(),
        productos:[
            {   
                idp:3,
                timestamp:Date.now(),
                name: "peras",
                descripcion: "fruta",
                codigo:2342,       
                price:456,
                stock:490,
                img:"https://res.cloudinary.com/riqra/image/upload/v1595008844/sellers/companyname/products/knhcmuwpfqe7e2ug86bl.jpg",
            }
        ]       
    },
    {
        timestamp: Date.now(),
        productos:[
            {
                idp:4,
                timestamp:Date.now(),
                name: "banana",
                descripcion: "fruta",
                codigo:2342,       
                price:90,
                stock:900,
                img:"https://image.shutterstock.com/image-photo/one-banana-yellow-isolated-on-260nw-1932710246.jpg",
            },
            {
                idp:5,
                timestamp:Date.now(),
                name: "naranja",
                descripcion: "fruta",
                codigo:2342,       
                price:50,
                stock:460,
                img:"https://i0.wp.com/pastofruver.com/wp-content/uploads/2020/03/Naranjas-Pastofruver-1.jpg?fit=800%2C800&ssl=1",
            }
        ]       
    }         
]
for (let i=0; i<carts.length; i++){
    module.exports.addCart(carts[i].timestamp, carts[i].productos)
}     