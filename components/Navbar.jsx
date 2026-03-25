"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";
import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PackageIcon,
} from "lucide-react";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">Home</Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">Shop</Link>
        <Link href="/" className="hover:text-gray-900 transition">About Us</Link>
        <Link href="/" className="hover:text-gray-900 transition">Contact</Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Right Side (Desktop) */}
      <ul className="hidden md:flex items-center gap-6">
        {/* Search */}
        <Image
          className="w-4 h-4 cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
        />

        {/* User */}
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/">
            <UserButton.MenuItems>
              <UserButton.Action
                label="Home"
                labelIcon={<HomeIcon size={16} />}
                onClick={() => router.push("/")}
              />

              <UserButton.Action
                label="Products"
                labelIcon={<ShoppingBagIcon size={16} />}
                onClick={() => router.push("/all-products")}
              />

              <UserButton.Action
                label="Cart"
                labelIcon={<ShoppingCartIcon size={16} />}
                onClick={() => router.push("/cart")}
              />

              <UserButton.Action
                label="My Orders"
                labelIcon={<PackageIcon size={16} />}
                onClick={() => router.push("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn({ redirectUrl: "/" })}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      {/* Mobile View */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-3 py-1 rounded-full"
          >
            Seller
          </button>
        )}

        {isSignedIn ? (
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Action
                label="Home"
                labelIcon={<HomeIcon size={16} />}
                onClick={() => router.push("/")}
              />

              <UserButton.Action
                label="Products"
                labelIcon={<ShoppingBagIcon size={16} />}
                onClick={() => router.push("/all-products")}
              />

              <UserButton.Action
                label="Cart"
                labelIcon={<ShoppingCartIcon size={16} />}
                onClick={() => router.push("/cart")}
              />

              <UserButton.Action
                label="My Orders"
                labelIcon={<PackageIcon size={16} />}
                onClick={() => router.push("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn({ redirectUrl: "/" })}
            className="flex items-center gap-2"
          >
            <Image src={assets.user_icon} alt="user icon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;