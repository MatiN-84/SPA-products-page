const shortProducts  = (productName:string):string=>{
    return productName.split(" ").slice(0, 3).join(" ");
}

const give3PupolarProducts = (data:object)=> {

let sortedData = [...data]
sortedData.forEach((user, i, arr) => {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].rating.rate > arr[j].rating.rate) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
});
return sortedData.slice(0 ,3)
}
export {shortProducts ,give3PupolarProducts}