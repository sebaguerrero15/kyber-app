import {create} from 'zustand';

const useSeriesStore = create((set) => ({
  series: [],
  selectedSerie: {},
  fetchSeries: async () => {
    const res = await fetch('http://localhost:3000/api/series');
    const data = await res.json();
    set({ series: data });
  },
  fetchSerieById: (id) => {
    set((state) => {
      const serie = state.series.find((serie) => serie._id === id);
      return { selectedSerie: serie };
    });
  },
}));

export default useSeriesStore;
   