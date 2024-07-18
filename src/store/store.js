import {create} from 'zustand';
import {persist} from 'zustand/middleware'
import axios from 'axios';

const useSeriesStore = create(persist((set) => ({
  series: [],
  selectedSerie: {},
  peliculas: [],
  selectedPelicula: {},
  fetchSeries:  async() => {
    const res =  await axios.get('https://kyber-swart.vercel.app/api/series');
    const data =  await res.data;
    set({ series: data });
  },
  fetchPeliculas:  async() => {
    const res =  await axios.get('https://kyber-swart.vercel.app/api/peliculas');
    const data =  await res.data;
    set({ peliculas: data });
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
}),
{name: 'Kyber-storage', }));

export default useSeriesStore;
   