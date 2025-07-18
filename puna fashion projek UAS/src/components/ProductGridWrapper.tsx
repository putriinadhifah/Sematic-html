import React, { ReactElement, useCallback, useEffect, useState } from "react";
import customFetch from "../axios/custom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setShowingProducts,
  setTotalProducts,
} from "../features/shop/shopSlice";

const ProductGridWrapper = ({
  searchQuery,
  sortCriteria,
  category,
  page,
  limit,
  children,
}: {
  searchQuery?: string;
  sortCriteria?: string;
  category?: string;
  page?: number;
  limit?: number;
  children:
    | ReactElement<{ products: Product[] }>
    | ReactElement<{ products: Product[] }>[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { totalProducts } = useAppSelector((state) => state.shop);
  const dispatch = useAppDispatch();

 // Memoisasi fungsi untuk mencegah render ulang yang tidak perlu
// getSearchedProducts hanya akan dipanggil ketika searchQuery atau sortCriteria berubah
  const getSearchedProducts = useCallback(
    async (query: string, sort: string, page: number) => {
      if (!query || query.length === 0) {
        query = "";
      }
      const response = await customFetch("/products");
      const allProducts = await response.data;
      let searchedProducts = allProducts.filter((product: Product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      if (category) {
        searchedProducts = searchedProducts.filter((product: Product) => {
          return product.category === category;
        });
      }

      if (totalProducts !== searchedProducts.length) {
        dispatch(setTotalProducts(searchedProducts.length));
      }

      // Urutkan produk berdasarkan sortCriteria
      if (sort === "price-asc") {
        searchedProducts = searchedProducts.sort(
          (a: Product, b: Product) => a.price - b.price
        );
      } else if (sort === "price-desc") {
        searchedProducts = searchedProducts.sort(
          (a: Product, b: Product) => b.price - a.price
        );
      } else if (sort === "popularity") {
        searchedProducts = searchedProducts.sort(
          (a: Product, b: Product) => b.popularity - a.popularity
        );
      }
      //  Batasi jumlah produk yang akan ditampilkan
      if (limit) {
        setProducts(searchedProducts.slice(0, limit));
       // Mengatur jumlah produk yang akan ditampilkan
      // Ini akan ditampilkan di komponen ShowingPagination
        dispatch(setShowingProducts(searchedProducts.slice(0, limit).length));
        // Jika halaman disediakan, bagi produk berdasarkan nomor halaman
        // ini akan digunakan untuk paginasi
      } else if (page) {
        setProducts(searchedProducts.slice(0, page * 9));
        // Mengatur jumlah produk yang akan ditampilkan
        // Ini akan ditampilkan di komponen ShowingPagination
        dispatch(
          setShowingProducts(searchedProducts.slice(0, page * 9).length)
        );
        // Jika tidak ada batasan atau halaman yang diberikan, tampilkan semua produk
      } else {
        setProducts(searchedProducts);
        // Mengatur jumlah produk yang ditampilkan
        dispatch(setShowingProducts(searchedProducts.length));
      }
    },
    []
  );

  useEffect(() => {
    getSearchedProducts(searchQuery || "", sortCriteria || "", page || 1);
  }, [searchQuery, sortCriteria, page]);

  // Kloning cust dan berikan produk sebagai properti kepada cust
// Ini akan menyebabkan acust dirender ulang dengan produk baru
// Ini juga akan menyebabkan banyak render ulang jika cust tidak di-memo-kan
// Jadi saya me-memo-kan komponen ProductGrid
  const childrenWithProps = React.Children.map(children, (child) => {
  //  Memeriksa isValidElement adalah cara yang aman dan menghindari
// kesalahan TypeScript juga.
    if (React.isValidElement(child) && products.length > 0) {
      return React.cloneElement(child, { products: products });
    }
    return null;
  });

  return childrenWithProps;
};
export default ProductGridWrapper;
