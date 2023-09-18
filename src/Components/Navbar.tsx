import * as React from "react";
//
import avatar from "../Assets/image-avatar.png";
import cart from "../Assets/icon-cart.svg";
import { useCart } from "./CartContext";
import CartOverlay from "./CartOverlay";
import { Link } from "react-router-dom";
export interface IAppProps {}

interface NavItems {
  label: string;
  link: string;
}

export function Navbar(props: IAppProps) {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };
  const handleCloseOverlay = () => {
    setIsCartOpen(false);
  };

  const navItems: NavItems[] = [
    { label: "Collections", link: "#" },
    { label: "Men", link: "#" },
    { label: "Women", link: "#" },
    { label: "About", link: "#" },
    { label: "Contact", link: "#" },
  ];

  return (
    <div className="px-20">
      <nav className="h-20 flex items-center justify-between  py-[40px]  border-b border-gray-300 ">
        <div className="left flex  ">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="font-bold text-4xl mr-6 cursor-pointer">
                sneakers
              </h1>
            </Link>{" "}
          </div>
          <ul className="flex gap-x-7 text-lg my-auto ">
            {navItems.map((item, index) => (
              <li className="cursor-pointer" key={index}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex items-center gap-x-8">
          <div className="relative">
            <img className="h-8 " onClick={toggle} src={cart} alt="" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-1 bg-red-500 text-white rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </div>
          <img className="h-10" src={avatar} alt="" />
        </div>
      </nav>
      {isCartOpen && <CartOverlay onCloseOverlay={handleCloseOverlay} />}
    </div>
  );
}
