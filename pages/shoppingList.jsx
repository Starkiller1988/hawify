import { Link } from "react-router-dom";
import HeaderShop from '../Header_Footer_Components/header_shoppingList/header_shop'
import Main from '../components/shopping_components/Main'
import Basket from '../components/shopping_components/Basket'
import '../components/shopping_components/shoppingList.css';
import data from '../components/shopping_components/Data'

const ShoppingList = () => {

  const { products } = data;
  return (
    <div className="shop">
      <Link to="/" className="start">
        Startseite
      </Link>

      <HeaderShop></HeaderShop>
      <div className="row">
        <Main products={products}></Main>
        <Basket></Basket>
      </div>
      
      



    </div>
  );
};

export default ShoppingList;
