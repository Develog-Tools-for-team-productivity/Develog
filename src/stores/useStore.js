import { atom } from 'jotai';

export const isLoggedInAtom = atom(false);
export const dateRangeAtom = atom({
  startDate: new Date(new Date().setDate(new Date().getDate() - 10))
    .toISOString()
    .split('T')[0],
  endDate: new Date().toISOString().split('T')[0],
});
export const selectedRepoAtom = atom('average');
export const userDataAtom = atom(null);
export const statsAtom = atom([]);
export const extendedStatsAtom = atom({});
export const lastFetchedDateRangeAtom = atom({
  startDate: null,
  endDate: null,
});
export const stateFetchDateRangeAtom = atom({
  startDate: null,
  endDate: null,
});
export const cycleTimeListDataAtom = atom([]);
