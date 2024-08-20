import { Link } from "react-scroll";
import React, { useState } from "react";
import { FaBars, FaTimes, FaCheckCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Anket tamamlama durumu
  const [completedSurveys, setCompletedSurveys] = useState({
    BitkiGozlemi: false,
    HavaGozlemi: false,
    SulamaVeBitkiGozlemi: false,
    TarımsalSavasımGozlemi: false,
    ToprakGozlemi: false,
  });

  // Anket tamamlama fonksiyonu
  const completeSurvey = (survey) => {
    setCompletedSurveys({ ...completedSurveys, [survey]: true });
  };

  const menuItems = [
    { to: "BitkiGozlemi", text: "Bitki Gözlemi" },
    { to: "HavaGozlemi", text: "Hava Gözlemi" },
    { to: "SulamaVeBitkiGozlemi", text: "Sulama ve Bitki Beslenmesi Gözlemi" },
    { to: "TarımsalSavasımGozlemi", text: "Tarımsal Savaşım Gözlemi" },
    { to: "ToprakGozlemi", text: "Toprak Gözlemi" },
  ];

  const renderMenuItems = (className) =>
    menuItems.map((item) => (
      <li
        key={item.to}
        className={className}
        onClick={() => completeSurvey(item.to)}
      >
        <Link to={item.to} spy={true} smooth={true} className="cursor-pointer">
          {item.text}
          {completedSurveys[item.to] && (
            <FaCheckCircle className="inline ml-2 text-green-400" />
          )}
        </Link>
      </li>
    ));

  return (
    <nav className="bg-green-900 py-4">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold text-white mb-4 bg-cover bg-center">
          <span>Bilgi Grup</span>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden lg:flex justify-center space-x-6">
          {renderMenuItems("text-green-200 hover:text-green-400")}
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex justify-center">
          <button className="text-white text-2xl" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>

        {/* Mobile Menu */}
        {click && (
          <div className="lg:hidden fixed inset-0 bg-green-100 bg-opacity-80 backdrop-blur z-10">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {renderMenuItems("text-green-900 hover:text-green-700")}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
