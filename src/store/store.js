import {create} from 'zustand';
import {persist} from 'zustand/middleware'
import axios from 'axios';

const useSeriesStore = create(persist((set) => ({
  series: [],
  selectedSerie: {},
  fetchSeries: async () => {
    const res = await axios.get('https://kyber-swart.vercel.app/api/series');
    const data = await res.data;
    set({ series: data });
  },
  fetchSerieById: (id) => {
    set((state) => {
      const serie = state.series.find((serie) => serie._id === id);
      return { selectedSerie: serie };
    });
  },
}),
{name: 'Kyber-storage', }));

export default useSeriesStore;
   