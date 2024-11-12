import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import Logo from "../../src/img/logocoruru.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  // Función para el desplazamiento suave
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Desplazamiento con un pequeño offset (80px) para el navbar
        behavior: "smooth", // Desplazamiento suave
      });
    }
  };

  return (
    <NextUINavbar isBordered variant="sticky" className="bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <NavbarBrand>
        <a href="/" className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <div className="p-2">
            <img src={Logo} alt="Logo" style={{ height: '4rem', width: 'auto' }} />
          </div>
        </a>
      </NavbarBrand>

      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" onClick={() => setIsOpen(!isOpen)} />
        
        <div className={`flex items-baseline space-x-4 ${isOpen ? 'block' : 'hidden md:flex'}`}>

          {/* Enlace de "Inicio" */}
          <NavbarItem>
            <a
              href="/"
              className={`relative px-3 py-2 text-sm font-medium ${location.pathname === "/" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Inicio
              {location.pathname === "/" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          {/* Enlaces con desplazamiento suave */}
          <NavbarItem>
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "sobre-nosotros")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#sobre-nosotros" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Acerca de Nosotros
              {location.hash === "#sobre-nosotros" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "proyectos")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#proyectos" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Proyectos
              {location.hash === "#proyectos" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "servicios")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#servicios" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Servicios
              {location.hash === "#servicios" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "socios")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#socios" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Socios
              {location.hash === "#socios" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "contacto")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#contacto" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Contacto
              {location.hash === "#contacto" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

        </div>
      </NavbarContent>

      <NavbarItem className="flex items-center">
        <button onClick={toggleTheme}>
          {isDark ? (
            <Sun className="h-6 w-6" color="primary" variant="shadow" />
          ) : (
            <Moon className="h-6 w-6" color="primary" variant="light" />
          )}
        </button>
      </NavbarItem>

      <NavbarItem className="md:hidden">
        <div className={`absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 p-4 flex flex-col items-start space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="text-gray-700 dark:text-white">Inicio</a>
          <a href="#sobre-nosotros" className="text-gray-700 dark:text-white">Acerca de Nosotros</a>
          <a href="#proyectos" className="text-gray-700 dark:text-white">Proyectos</a>
          <a href="#servicios" className="text-gray-700 dark:text-white">Servicios</a>
          <a href="#socios" className="text-gray-700 dark:text-white">Socios</a>
          <a href="#contacto" className="text-gray-700 dark:text-white">Contacto</a>
        </div>
      </NavbarItem>

    </NextUINavbar>
  );
}
