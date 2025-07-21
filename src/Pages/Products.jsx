import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from "../features/fetch/fetchSlice"
function Products() {
    const store = useSelector(store=> store)
  console.log(store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>Products</div>
  )
}

export default Products