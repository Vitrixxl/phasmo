import type { Proof } from '@/lib/game-data';
import { useSearchParams } from 'react-router';

export const useProofs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlProofs = Array.from(searchParams.entries()) as [
    Proof,
    'true' | 'false',
  ][];

  return {
    bannedProofs: urlProofs.filter(([_, v]) => v == 'false').map(([p, _]) => p),
    selectedProofs: urlProofs.filter(([_, v]) => v == 'true').map(([p, _]) =>
      p
    ),
    toggleProof: (proof: string) => {
      setSearchParams((params) => {
        const p = params.get(proof);
        if (p == 'true') params.set(proof, 'false');
        else if (p == 'false') params.delete(proof);
        else params.set(proof, 'true');
        return params;
      });
    },
  };
};
