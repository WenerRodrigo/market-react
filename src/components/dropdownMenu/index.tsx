import React, { useRef, useState, useEffect } from "react";

export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const handleOutsideClick = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  return (
    <div>
        <div className="hidden md:flex w-full px-8">
          <button
            type="button"
            className="flex w-full justify-center  items-center text-sm text-white"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            Minha conta
          </button>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Meu perfil
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Meus favoritos
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
              >
                Minhas compras
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-3"
              >
                Sair
              </a>
            </div>
          </div>
        )}
    </div>
  );
};
