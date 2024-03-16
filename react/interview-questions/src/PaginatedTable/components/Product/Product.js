import React, { useEffect, useState } from "react";
// import Table from "../../commonComponents/Table";
import { getAPI } from "../../services/api";
import { ProductTableHeader } from "../../utils/constants";
import PaginatedTable from "../../commonComponents/Table/PaginatedTable";
// import Table from "../../commonComponents/Table/Table";

const Loading = () => {
  return <div>Loading...</div>;
};

const Product = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async function () {
      try {
        const data = await getAPI("https://dummyjson.com/products");
        if (data?.length && isMounted) {
          setProducts(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        isMounted && setError(err);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="product-page-container">
      {loading ? (
        <Loading />
      ) : (
        <PaginatedTable
          header={ProductTableHeader}
          body={products}
          itemPerPage={10}
        />
      )}
    </div>
  );
};

export default Product;
