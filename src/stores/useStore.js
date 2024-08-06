import { atom } from 'jotai';

export const isLoggedInAtom = atom(false);
export const dateRangeAtom = atom({ startDate: '', endDate: '' });
export const selectedRepoAtom = atom('average');
