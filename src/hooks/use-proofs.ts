import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export const useProofs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProofs, setSelectedProofs] = useState<string[]>([]);

  useEffect(() => {
    const proofs = searchParams.getAll('proofs');
    setSelectedProofs(proofs);
  }, []);
  return {
    selectedProofs,
    setSelectedProofs: (proofs: string[]) => {
      setSearchParams((params) => {
        params.delete('proofs');
        proofs.forEach((p) => params.append('proofs', p));
        return params;
      });
    },
  };
};
