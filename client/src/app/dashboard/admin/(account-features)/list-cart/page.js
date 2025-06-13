"use client";

import Inform from "@/components/icons/Inform";
import Dashboard from "@/components/shared/layouts/Dashboard";
import { setCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

// ✅ Import Firestore helpers
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/services/firebase";

const Page = () => {
  const [cartDocs, setCartDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const db = getFirestore(app);

  // ✅ Firestore data instead of old API
  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      toast.loading("Fetching Cart...", { id: "cart" });

      try {
        const cartSnapshot = await getDocs(collection(db, "cart"));
        const cartData = cartSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCartDocs(cartData);

        toast.success("Cart fetched!", { id: "cart" });
        dispatch(setCart(cartData)); // Redux store if needed
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch cart", { id: "cart" });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, [db, dispatch]);

  const cart = useMemo(() => cartDocs || [], [cartDocs]);

  return (
    <Dashboard>
      {cart?.length === 0 ? (
        <p className="text-sm flex flex-row gap-x-1 items-center justify-center">
          <Inform /> No Cart Found!
        </p>
      ) : (
        <section className="w-full h-full">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-slate-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Avatar
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Thumbnail
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Gallery
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((crt) => (
                  <tr key={crt?.id} className="odd:bg-white even:bg-gray-100 hover:odd:bg-gray-100">
                    <td className="px-6 py-4">
                      <Image
                        src={crt?.user?.avatar?.url}
                        alt={crt?.user?.name}
                        height={30}
                        width={30}
                        className="h-[30px] w-[30px] rounded-secondary border border-green-500/50 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <span className="whitespace-nowrap text-sm">{crt?.user?.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Image
                        src={crt?.product?.thumbnail?.url}
                        alt={crt?.product?.title}
                        height={30}
                        width={30}
                        className="h-[30px] w-[30px] rounded-secondary border border-green-500/50 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <span className="whitespace-nowrap w-60 overflow-x-auto block scrollbar-hide text-sm">
                        {crt?.product?.title}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex -space-x-4">
                        {crt?.product?.gallery?.map((thumbnail) => (
                          <Image
                            key={thumbnail?.id}
                            src={thumbnail?.url}
                            alt={thumbnail?.url}
                            height={30}
                            width={30}
                            className="h-[30px] w-[30px] rounded-secondary border border-green-500/50 object-cover"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="whitespace-nowrap scrollbar-hide text-sm">{crt?.product?.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="whitespace-nowrap scrollbar-hide text-sm">{crt?.quantity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="whitespace-nowrap scrollbar-hide text-sm">
                        {crt?.product?.price * crt?.quantity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/product?product_id=${crt?.product?.id}&product_title=${crt?.product?.title?.replace(/ /g, "-").toLowerCase()}`}
                        target="_blank"
                        className="underline text-sm"
                      >
                        view
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </Dashboard>
  );
};

export default Page;
