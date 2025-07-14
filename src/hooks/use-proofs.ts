import type { Proof } from '@/lib/game-data';
import { $proofs } from '@/stores/proofs';
import { useAtom } from 'jotai';

export const useProofs = () => {
  const [proofs, setProofs] = useAtom($proofs);

  const toggleProof = (proof: Proof) => {
    if (proofs.selected.includes(proof)) {
      setProofs((prev) => ({
        banned: [...prev.banned, proof],
        selected: prev.selected.filter((p) => p == proof),
      }));
    } else if (proofs.banned.includes(proof)) {
      setProofs((prev) => ({
        ...prev,
        banned: prev.banned.filter((p) => p == proof),
      }));
    } else {
      setProofs((prev) => ({
        ...prev,
        selected: [...prev.selected, proof],
      }));
    }
  };

  const resetProofs = () => {
    setProofs({
      selected: [],
      banned: [],
    });
  };

  return {
    bannedProofs: proofs.banned,
    selectedProofs: proofs.selected,
    toggleProof,
    resetProofs,
  };
};
