import { current } from "@reduxjs/toolkit";

const shortProducts = (productName: string): string => {
  return productName.split(" ").slice(0, 3).join(" ");
};

const give3PupolarProducts = (data: object) => {
  let sortedData = [...data];
  sortedData.forEach((user, i, arr) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].rating.rate > arr[j].rating.rate) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  });
  return sortedData.slice(0, 3);
};

const searchProducts =(products , search)=> {
  if(!search) return products;
  return products.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()));

}
const filterProducts = (products, category) => {
  if(!category||category === 'all') return products;
  return products.filter((item)=> item.category === category);
  
}

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get ("category")
  const search = searchParams.get("search")
  if(category) query.category = category
  if(search) query.search = search
  return query;
};

const createQueryObject = (currentQuery , newQuery)=> {
  if(newQuery.category === "all"){
    const { category , ...rest} = currentQuery;
    return rest
  }
  if(newQuery.search === "") {
    const {search , ...rest} = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
}

const giveProductsNumber  = (products) => {

  if(products.length===0)return 0;
  return products.reduce((count, product) => count + 1, 0);
}
export { shortProducts, give3PupolarProducts, getInitialQuery, searchProducts , filterProducts , createQueryObject, giveProductsNumber};

