'use client';

import { Products } from "@/types/products";
import { useEffect, useState } from "react";
import { getCartItem, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import AuthGuard from "../components/AuthGuard";

export default function CartItems() {
    const [cartItem, setCarItem] = useState<Products[]>([]);

    useEffect(() => {
        setCarItem(getCartItem());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCarItem(getCartItem());
                Swal.fire("Removed!", "It has been removed successfully", "success");
            }
        });
    };

    const handleQuantity = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCarItem(getCartItem());
    };

    const handleIncrement = (id: string) => {
        const product = cartItem.find((item) => item._id === id);
        if (product) {
            handleQuantity(id, product.inventory + 1);
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItem.find((item) => item._id === id);
        if (product && product.inventory > 1) {
            handleQuantity(id, product.inventory - 1);
        }
    };

    const calculatedTotal = () => {
        return cartItem.reduce((total, item) => total + item.price * item.inventory, 0);
    };

    const router = useRouter()
    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to checkout?",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("success! your order has been successfully proceed")
                setCarItem([])
            }
            router.push("/checkout")
        });

    }

    return (
        <AuthGuard>
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItem.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItem.map((item) => (
                        <div key={item._id} className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4">
                            <div className="flex items-center space-x-4">
                                {item.image && (
                                    <Image
                                        src={urlFor(item.image).url()}
                                        alt="Image"
                                        className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
                                        width={500}
                                        height={500}
                                    />
                                )}
                                <div>
                                    <h2 className="text-lg font-semibold">{item.productName}</h2>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => handleDecrement(item._id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                <span className="px-4 py-1 border rounded">{item.inventory}</span>
                                <button onClick={() => handleIncrement(item._id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                            </div>
                            <button onClick={() => handleRemove(item._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg">Remove</button>
                        </div>
                    ))}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
                        <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
                        <button onClick={() => handleProceed()} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full md:w-auto">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
        </AuthGuard>
    );
}
