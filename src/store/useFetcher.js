"use client";

import { useEffect } from 'react';
import useSeriesStore from '../store/store';

const SeriesFetcher = ({ children }) => {
  const fetchSeries = useSeriesStore((state) => state.fetchSeries);
  const fetchPeliculas = useSeriesStore((state) => state.fetchPeliculas);

  useEffect(() => {
    fetchSeries();
    fetchPeliculas();
  }, [fetchSeries, fetchPeliculas]);

  return children;
};

export default SeriesFetcher;
