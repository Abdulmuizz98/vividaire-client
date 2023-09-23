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
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: true,
  },
  {
    id: 2,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: true,
  },
  {
    id: 4,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
  },
  {
    id: 7,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
  },
  {
    id: 8,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
  },
  {
    id: 9,
    name: "Boho table mat",
    url: PlaceholderImage,
    isFavorite: false,
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
                  <ProductCard
                    name={product.name}
                    image={product.url}
                    isFavorite={product.isFavorite}
                  />
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
