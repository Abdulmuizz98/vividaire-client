import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "./productList/ProductCard";
import PlaceholderImage from "../../assets/boho_table_mats_img.png";
import { toggleFilterDropdown } from "../../utils";
import { VdAdd } from "../Icons";
import Pagination from "../Pagination";
import FilterDropdown from "../FilterDropdown";
import LoginPrompt from "../prompts/LoginPrompt";
import InlineButton from "../InlineButton";
import "./ProductList.css";

const collections = [
  {
    id: 1,
    name: "home items",
    unspacedName: "homeitems",
    url: "",
    tags: [
      "Bedroom",
      "Kitchen",
      "Living room",
      "Dining room",
      "Bathroom",
      "Outdoor",
      "Organization",
    ],
  },
  {
    id: 2,
    name: "lifestyle",
    url: "",
    tags: [
      "Beauty & personal care",
      "Fitness & wellness",
      "Books",
      "Electronics",
    ],
  },
  {
    id: 3,
    name: "easy travel",
    url: "",
    tags: ["Luggage & bags", "Gears & accessories"],
  },
  {
    id: 4,
    name: "car accessories",
    url: "",
    tags: ["Interior accessories", "Exterior accessories"],
  },
  {
    id: 5,
    name: "kids",
    url: "",
    tags: [
      "Toys and games",
      "Kid's kitchen",
      "Gears & electronics",
      "Sports & outdoor",
    ],
  },
  {
    id: 6,
    name: "workspace",
    url: "",
    tags: ["Writing & paper", "Desk accessories", "Organization"],
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
  const collection = collections[collectionId - 1];

  return (
    <>
      <Header displayLogo={false} />
      <main>
        <LoginPrompt />
        {collectionId && (
          <div className="collection">
            <div className="heading">
              <div className="fancy-line"></div>
              <h1>{collection.name}</h1>
            </div>
            <div className="product-filter">
              <InlineButton
                value={<VdAdd />}
                classString="position-left"
                onClick={toggleFilterDropdown}
              />
              <span className="position-middle">filter</span>
              <FilterDropdown tags={collection.tags} />
            </div>
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
            <Pagination />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
