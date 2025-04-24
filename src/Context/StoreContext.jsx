import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Create and export context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
const url="http://localhost:4000" 
const [token,setToken]=useState("");
  // Load cart from localStorage (if available) on first render
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      } else {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updatedCart = { ...prev };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] -= 1;
      }

      return updatedCart;
    });
  };

  // Optional: Clear the cart
  const clearCart = () => {
    setCartItems({});
  };
useEffect(()=>{
if (localStorage.getItem("token")){
  setToken(localStorage.getItem(""))
}
},[])
  // Provide all values through context
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
