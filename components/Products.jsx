import React, { useState } from "react";
import data from "../copy.js";
import Image from "next/image";
import img_1 from "../public/Images/img.jpg";
import { Rate } from "antd";
function Products() {
  const [products, setProducts] = useState(data);

  // To get the data, follow these steps:
  // uncomment the next 4 lines, then paste the url instead of "url"

  // useEffect(() => {
  //   const { data } = axios.get(url)
  //   setProducts(data?.data?.data)
  // }, [])

  return (
    <div className="products">
      {products?.map((product) => (
        <div key={product.id} className="product">
          <div className="top">
            <Image
              src={img_1}
              // src={product?.images[0]?.url}
              fill={true}
              alt="product image"
            />
            <div className={`difficulty ${product?.difficulty}`}>
              {product?.difficulty}
            </div>
          </div>
          <div className="bottom">
            <div className="name">{product?.name}</div>
            <div className="ratings">
              <div className="stars">
                <Rate
                  style={{ color: "#e81818", fontSize: "15px" }}
                  defaultValue={product?.ratingsAverage}
                  disabled
                />
              </div>
              <div className="quantity"> ({product?.ratingsQuantity}) </div>
            </div>
            <div className="price">
              <span>$</span> {product?.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
