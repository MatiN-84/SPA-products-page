const shortProducts  = (productName:string):string=>{
    return productName.split(" ").slice(0, 3).join(" ");
}
export {shortProducts}