import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.css";
import { add, remove } from "../app/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;

  const [ isInCart, setIsInCart ] = useState(false);

  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cartList);
  

  useEffect(() => {
    const selectedProduct = cartList.find(productInCart => {
      return productInCart.id === id;
    });

    if(selectedProduct){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }

  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (<button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)}
      </div>
    </div>
  )
}
