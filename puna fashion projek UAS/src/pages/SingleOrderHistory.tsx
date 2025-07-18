import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import customFetch from "../axios/custom";
import { nanoid } from "nanoid";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const response = await customFetch(`orders/${id}`);
  return response.data;
};

const SingleOrderHistory = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const navigate = useNavigate();
  const singleOrder = useLoaderData() as Order;

  useEffect(() => {
    if (!user?.id) {
      toast.error("Please login to view this page");
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-screen-2xl mx-auto pt-20 px-5">
      <h1 className="text-3xl font-bold mb-8">Detail Order</h1>
      <div className="bg-white border border-gray-200 p-5 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Nama Orderan: {singleOrder.id}
        </h2>
       
        <p className="mb-2">Subtotal: Rp{ singleOrder.subtotal }</p>
        <p className="mb-2">Pengiriman: Rp15000</p>
        <p className="mb-2">Pajak: Rp{ singleOrder.subtotal / 5000 }</p>
        <p className="mb-2">
          Total: Rp
          {(singleOrder.subtotal + 5 + singleOrder.subtotal / 5).toFixed(2)}
        </p>
        <p className="mb-2">Status: {singleOrder.orderStatus}</p>
        <h3 className="text-xl font-semibold mt-6 mb-4">Items</h3>
        <table className="singleOrder-table min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Nama Produk</th>
              <th className="py-3 px-4 border-b">Jumlah</th>
              <th className="py-3 px-4 border-b">Harga</th>
            </tr>
          </thead>
          <tbody>
            {singleOrder.products.map((product) => (
              <tr key={nanoid()}>
                <td className="py-3 px-4 border-b">{product?.title}</td>
                <td className="py-3 px-4 border-b text-center">
                  {product?.quantity}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  Rp{product?.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleOrderHistory;

// halaman atau komponen yang menampilkan detail dari satu pesanan
