import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import peliculas from "../peliculas.json"
import series from "../series.json"


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
      
        set({ series: series });
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    },
    fetchPeliculas: async () => {
      try {
     
        set({ peliculas: peliculas });
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
