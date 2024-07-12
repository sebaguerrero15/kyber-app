"use client";

import { useEffect } from 'react';
import useSeriesStore from '../store/store';

const SeriesFetcher = ({ children }) => {
  const fetchSeries = useSeriesStore((state) => state.fetchSeries);

  useEffect(() => {
    fetchSeries();
  }, [fetchSeries]);

  return children;
};

export default SeriesFetcher;
