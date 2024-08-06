import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { dateRangeAtom } from '../stores/useStore';

export const useDateRange = (initialDays = 10) => {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - initialDays);

    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];

    setDateRange({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });
  }, [initialDays, setDateRange]);

  return { dateRange, setDateRange, showPicker, setShowPicker };
};
