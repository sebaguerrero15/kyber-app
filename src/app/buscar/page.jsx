"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import useSeriesStore from '../../store/store';
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import FooterComponent from "../../components/Footer";

const SearchComponent = () => {
  const { searchByName, searchResults } = useSeriesStore();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    searchByName(query);
  };

  return (
    <>
      <Navbar />
      <Menu />
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar series o películas"
            className="m-2 text-lg text-black bg-gray-400 border border-gray-300 rounded-lg block p-2.5 w-[600px] placeholder:text-gray-700 mt-12"
          />
          <button
            className="m-2 mt-12 px-5 py-2.5 text-center text-white bg-gradient-to-br from-sky-950 to-teal-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 border-transparent uppercase rounded-lg hover:border-4 hover:border-white hover:bg-black transition-all duration-100"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>

        {searchResults.length === 0 ? (
          <h2 className="text-2xl text-gray-300 font-bold mt-4 mx-4">No se encontraron resultados</h2>
        ) : (
          <>
            <h2 className="text-2xl text-gray-300 font-bold mt-4 mx-4">Resultados Encontrados :</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-5">
              {searchResults.map((result) => (
                <article key={result._id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-center rounded-xl m-4"
                    >
                      <Link href={`/buscar/${result._id}`}>
                        <Image
                          src={result.image}
                          width={300}
                          height={250}
                          alt={result.name}
                          className="w-[150px] h-[250px] sm:w-[200px] sm:h-[300px] rounded-xl transition-all duration-75 border-4 border-transparent hover:border-white"
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default SearchComponent;
