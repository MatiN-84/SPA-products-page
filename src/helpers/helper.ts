import { current } from "@reduxjs/toolkit";

const shortProducts = (productName: string): string => {
  return productName.split(" ").slice(0, 3).join(" ");
};

const give3PupolarProducts = (data: object) => {
  let sortedData = [...data];
  sortedData.forEach((user, i, arr) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].rating.rate < arr[j].rating.rate) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  });
  return sortedData.slice(0, 3);
};

const searchProducts = (products, search) => {
  if (!search) return products;
  return products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
};
const filterProducts = (products, category) => {
  if (!category || category === "all") return products;
  return products.filter((item) => item.category === category);
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const PriceRange = searchParams.get("priceRange")
  const sortedOption = searchParams.get("sortby")
  if (category) query.category = category;
  if (search) query.search = search;
  if (PriceRange) query.priceRange = PriceRange;
  if (sortedOption) query.sortby = sortedOption.value;
  
  return query;
};

const createQueryObject = (currentQuery, newQuery) => {

  if(+newQuery.priceRange===1000){

    const {priceRange , ...rest} = currentQuery
    return rest
  }
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const giveProductsNumber = (products) => {
  // if(!products) return -123
  if (products.length === 0) return 0;
  return products.reduce((count, product) => count + 1, 0);
};

const getInRangeProducts = (products, range = 1000) => {
  const newProducts = products.filter((product) => product.price < range);
  const newProducts2 = products.filter((product) => product.price > range);

  return newProducts;
};

const sortTheProducts = (products, sortOption) => {
  switch (sortOption) {
    case undefined :
      return products
    case "a-z":
      const sortedProductsAtoZ = products.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      return sortedProductsAtoZ;

    case "z-a":
      const sortedProductsZtoA = products.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
      return sortedProductsZtoA;

    case "highest":
      const sortedProductsHighPrice = products.sort((a,b)=>b.price - a.price)
      return sortedProductsHighPrice;

    case "lowest":
      const sortedProductsLowPrice = products.sort((a,b)=>  a.price- b.price)
      return sortedProductsLowPrice;

    default:
   
      throw new Error("unknown option");
  }
};

const findDetails = (id, products) => {
  const item = products.find((product) => product.id === +id);
  return item;
};
export {
  shortProducts,
  give3PupolarProducts,
  getInitialQuery,
  searchProducts,
  filterProducts,
  createQueryObject,
  giveProductsNumber,
  getInRangeProducts,
  sortTheProducts,
  findDetails,
};
