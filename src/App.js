import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import ProductList from "./Components/productList";
import Footer from "./Components/footer";  
import AddItem from "./Components/addItem";

function App() {
  const [productList, setProductList] = useState([
    { price: 180000, name: "Iphone 14 Pro Max", quantity: 0 },
    { price: 95000, name: "Samsung S23 Ultra", quantity: 0 },
    { price: 70000, name: "OnePlus 11 Pro", quantity: 0 },
    { price: 50000, name: "Redmi Note 12 Pro", quantity: 0 },
    { price: 30000, name: "Realme 11 Pro", quantity: 0 },
  ]);

  //  totalPrice calculate
  const totalPrice = productList.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      quantity: newProductList[index].quantity + 1,
    };
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    if (productList[index].quantity === 0) return;  //  0 check
    let newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      quantity: newProductList[index].quantity - 1,
    };
    setProductList(newProductList);
  };

  const resetCart = () => {
  let newProductList = productList.map((product) => {
    return { ...product, quantity: 0 };  // quantity 0 set
  });
  setProductList(newProductList);
};

const removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1); 
    setProductList(newProductList);
  };

  const addProduct = (product) => {
  setProductList([...productList, product]);  
};


  return (
    <>
      <Navbar totalPrice={totalPrice} productCount={productList.length}/>
      <main className="container" mb-5 pb-5>

        <AddItem addProduct={addProduct} />

        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
          
        />
      </main>
        <Footer 
          totalAmount={totalPrice} 
          resetCart={resetCart}
      /> 
    </>
  );
}

export default App;
