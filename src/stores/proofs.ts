import type { Proof } from '@/lib/game-data';
import { atom } from 'jotai';
export const $proofs = atom<{ banned: Proof[]; selected: Proof[] }>({
  banned: [],
  selected: [],
});
