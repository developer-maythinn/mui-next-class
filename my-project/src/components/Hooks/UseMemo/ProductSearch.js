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
function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = useMemo(() => {
    console.log("Filtering and sorting products...");
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filtered;
  }, [searchTerm]);

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

export default ProductSearch;
