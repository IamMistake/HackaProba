import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <nav className="flex items-center justify-between bg-gray-100 px-4 py-2 shadow-md pl-8 pr-8">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="../assets/srekja-circle-01.png" // Replace with the actual logo path
          alt="Logo"
          className="h-10 w-20 rounded-full shadow-md"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center bg-white rounded-full shadow-md px-6 py-2 space-x-10">
        <Link to="/" className="text-black font-bold">ИмамИдеја</Link>
        <Link to="/" className="text-black font-bold">Среќа-бар</Link>
        <Link to="/WebShop" className="text-black font-bold">Е-продавница</Link>
      </div>

      {/* User Icon */}
      <div className="flex items-center">
        <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md">
          <FaUser className="text-gray-600" />
          {/*<span className="ml-1 font-bold"></span>*/}
        </button>
      </div>
    </nav>
  );
}

export default NavBar