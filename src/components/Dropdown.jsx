"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const Dropdown = ({ serie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen container mx-auto">
      <div>
        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-white bg-transparent shadow-sm px-6 py-1 text-white text-lg font-medium hover:bg-black hover:border-black transition-all duration-300"
          onClick={toggleDropdown}
        >
          {selectedSeason ? `${selectedSeason.season}` : "Seleccionar Temporada"}
          <MdKeyboardArrowDown className="ml-2 -mr-1 h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <button className="flex flex-col gap-3 justify-start rounded-xl border border-black bg-black shadow-sm px-[76px] py-2 text-white text-lg font-medium">
          {serie.seasons.map((season, index) => (
            <p
              key={index}
              type="button"
              className="hover:text-amber-400 hover:transition-all hover:duration-200"
              onClick={() => handleSeasonSelect(season)}
            >
              {season.season}
            </p>
          ))}
        </button>
      )}

      {selectedSeason && (
        <div className="grid grid-cols-3 justify-center mt-12 gap-8">
          {selectedSeason.links.map((link, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center text-lg text-white'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='rounded-xl relative p-2 transition-all duration-75 border-4 border-transparent hover:border-white'
              >
                <Link href={`/caricatura/${serie._id}/${link.link}`} >
                  <iframe
                    src={`https://ok.ru/videoembed/${link.link}?autoplay=0&controls=1`}
                    className='realtive overflow-hidden pointer-events-none'
                    width={350}
                    height={200}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <p className='mt-2 text-center'>{link.name}</p>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
