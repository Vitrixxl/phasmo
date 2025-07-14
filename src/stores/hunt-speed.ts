import type { HuntSpeed } from '@/lib/game-data';
import { atom } from 'jotai';

export const $huntSpeeds = atom<HuntSpeed[]>([]);
