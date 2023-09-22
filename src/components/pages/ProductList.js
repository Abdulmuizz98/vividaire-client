import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "./productList/ProductCard";
import PlaceholderImage from "../../assets/boho_table_mats_img.png";

import "./ProductList.css";

const collections = [
  {
    id: 1,
    name: "home items",
    unspacedName: "homeitems",
    url: "",
  },
  {
    id: 2,
    name: "lifestyle",
    url: "",
  },
  {
    id: 3,
    name: "easy travel",
    url: "",
  },
];

const products = [
  {
    id: 1,
    name: "boho mat",
    url: PlaceholderImage,
  },
  {
    id: 2,
    name: "boho mat",
    url: PlaceholderImage,
  },
  {
    id: 3,
    name: "boho mat",
    url: PlaceholderImage,
  },
];

const ProductList = () => {
  const params = useParams();
  const collectionId = params.id;
  console.log("Collectionid", collectionId);
  const collection = collections[collectionId - 1];

  return (
    <>
      <Header />
      <main>
        {collectionId && (
          <div className="collection">
            <div className="heading">
              <h1>{collection.name}</h1>
            </div>
            <div className="product-filter"></div>
            <div className="product-list">
              {products.length &&
                products.map((product) => (
                  <ProductCard name={product.name} image={product.url} />
                ))}
            </div>
            <div className="pagination"> </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
