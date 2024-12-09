import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const ShowProduct = () => {
    
  };

  const Product ={
    id: 1,
    name: 'iPhone',
    price : '999$' ,
    description: 'This  product is available'
  }
   
  const [isVisible,setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };




  return (
    <div className="ms-2">
      <h1>Counter : {count} </h1>
      <button onClick={Increment} className="btn btn-success">
        Increment
      </button>
      <button onClick={Decrement} className="btn btn-danger">
        Decrement
      </button>
      <br />
      <br />
      <button onClick={handleToggle}>{isVisible? 'Hide Product' : 'Show Product'}</button>
      <br />
      <br />
      {isVisible ?(
      <div>
        <h6>Product Name : {Product.name}</h6>
        <h6>Product Price : {Product.price}</h6>
        <h6>Description : {Product.description}</h6>
      </div>
      ): null}

    </div>
  );
}
