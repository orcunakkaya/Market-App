import Header from "./components/Header";
import Products from "./components/Products";
import products from "./products.json"
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react'
function App() {

  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [money] = useState(100);

  useEffect(() => {
		setTotal(
			basket.reduce((acc, item) => {
				return acc + (item.amount * (products.find(product => product.id === item.id).price))
			}, 0),
		)
	}, [basket])


  return (
    <div>
      <Header id="top" total={total} money={money} />
      <div className="container products">
        {products.map(product => (
          <Products key={product.id} product={product} basket={basket} setBasket={setBasket} total={total} money={money} />
        ))}
      </div>
      {total > 0 && (
        <Basket setBasket={setBasket} total={total} products={products} basket={basket} />
      )}
      <Footer />
    </div>
  );
}

export default App;
