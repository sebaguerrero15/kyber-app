import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useSeriesStore = create(persist(
  (set, get) => ({
    series: [],
    selectedSerie: {},
    peliculas: [],
    selectedPelicula: {},
    searchResults: [],
    selectedBusqueda: {}, 
    fetchSeries: async () => {
      try {
        const res = await axios.get('https://kyber-swart.vercel.app/api/series');
        const data = res.data;
        set({ series: data });
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    },
    fetchPeliculas: async () => {
      try {
        const res = await axios.get('https://kyber-swart.vercel.app/api/peliculas');
        const data = res.data;
        set({ peliculas: data });
      } catch (error) {
        console.error("Error fetching peliculas:", error);
      }
    },
    fetchSerieById: (id) => {
      set((state) => {
        const serie = state.series.find((serie) => serie._id === id);
        return { selectedSerie: serie };
      });
    },
    fetchPeliculaById: (id) => {
      set((state) => {
        const pelicula = state.peliculas.find((pelicula) => pelicula._id === id);
        return { selectedPelicula: pelicula };
      });
    },
    fetchBusquedaById: (id) => {
      set((state) => {
        const busqueda = state.searchResults.find((resultado) => resultado._id === id);
        return { selectedBusqueda: busqueda };
      });
    },
    searchByName: (name) => {
      const seriesResults = get().series.filter((serie) =>
        serie.name.toLowerCase().includes(name.toLowerCase())
      );
      const peliculasResults = get().peliculas.filter((pelicula) =>
        pelicula.name.toLowerCase().includes(name.toLowerCase())
      );
      set({ searchResults: [...seriesResults, ...peliculasResults] });
    }
  }),
  { name: 'Kyber-storage' }
));

export default useSeriesStore;
