import { Link } from "react-scroll";

function Navbar() {
  const content = (
    <>
      <ul >
        <li >
          <Link to="BitkiGozlemi" className="cursor-pointer">
            Bitki Gözlemi
          </Link>
        </li>
        <li >
          <Link to="HavaGozlemi" className="cursor-pointer">
            Hava Gözlemi
          </Link>
        </li>
        <li >
          <Link to="SulamaVeBitkiGozlemi" className="cursor-pointer">
            Sulama ve Bitki Beslenmesi Gözlemi
          </Link>
        </li>
        <li >
          <Link to="TarımsalSavasımGozlemi" className="cursor-pointer">
            Tarımsal Savaşım Gözlemi
          </Link>
        </li>
        <li >
          <Link to="ToprakGozlemi" className="cursor-pointer">
            Toprak Gözlemi
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <nav className="bg-green-900 py-4">
      <div className="container mx-auto text-center">
        <div
          className="text-2xl font-bold text-white mb-4 bg-cover bg-center"
          style={{
            backgroundImage: `../assets/tileable-wood-colored.png`,
          }}
        >
          <span>Bilgi Grup</span>
        </div>
        <div>
          <ul className="flex justify-center space-x-6">
            <li className="text-green-200 hover:text-green-400">
              <Link to="BitkiGozlemi" className="cursor-pointer">
                Bitki Gözlemi
              </Link>
            </li>
            <li className="text-green-200 hover:text-green-400">
              <Link to="HavaGozlemi" className="cursor-pointer">
                Hava Gözlemi
              </Link>
            </li>
            <li className="text-green-200 hover:text-green-400">
              <Link to="SulamaVeBitkiGozlemi" className="cursor-pointer">
                Sulama ve Bitki Beslenmesi Gözlemi
              </Link>
            </li>
            <li className="text-green-200 hover:text-green-400">
              <Link to="TarımsalSavasımGozlemi" className="cursor-pointer">
                Tarımsal Savaşım Gözlemi
              </Link>
            </li>
            <li className="text-green-200 hover:text-green-400">
              <Link to="ToprakGozlemi" className="cursor-pointer">
                Toprak Gözlemi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
