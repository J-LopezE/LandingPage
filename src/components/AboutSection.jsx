import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection.jsx";

export const AboutSection = () => {
  return (
    <AnimatedSection className="py-20 bg-blue-100">
      <div id="sobre-nosotros" className="container mx-auto px-4 w-full max-w-full">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-blue-900">
          Nuestra Esencia
        </h2>
        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            className="bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-blue-700">Misión</h3>
            <p className="text-blue-800">
              Nuestra misión es crear soluciones innovadoras diseñadas para
              satisfacer necesidades únicas de cada cliente mediante el
              desarrollo web e infraestructura tecnológica a través del diagnóstico,
              instalación y mantenimiento de plataformas, optimizando y asegurando
              el rendimiento y eficiencia de sus procesos operativos o administrativos.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-blue-700">Visión</h3>
            <p className="text-blue-800">
              En nuestra empresa trabajamos cada día para generar un entorno
              organizacional estimulante y positivo donde cada colaborador que
              forme parte de la familia COR Computadoras se sienta valorado y
              parte de un gran equipo. Creemos que la vivencia de valores como la
              integridad, honestidad, pasión, inclusión, innovación y curiosidad
              es fundamental para construir un equipo sólido y motivado. Nuestro
              propósito es que cada miembro de nuestro capital humano crezca, se
              capacite y disfrute de su trabajo en un clima sano que fomente la
              colaboración y la proactividad de modo que brinde soluciones para
              nuestros clientes, pero también vías de desarrollo y éxito para
              esta familia.
            </p>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
};
