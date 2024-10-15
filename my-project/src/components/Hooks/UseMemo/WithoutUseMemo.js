import React, { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
  },
  {
    id: 2,
    name: "Smartphone",
  },
  {
    id: 3,
    name: "Tablet",
  },
  {
    id: 4,
    name: "Smartwatch",
  },
  {
    id: 5,
    name: "Headphones",
  },
];

function WithoutUseMemo() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = products.filter((product) => {
    console.log("Filtering and sorting products...");
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filterProducts?.length > 0 &&
          filterProducts.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <li>{product.name}</li>
              </React.Fragment>
            );
          })}
      </ul>
    </>
  );
}

export default WithoutUseMemo;
