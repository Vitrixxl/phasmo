import { $drains } from '@/stores/drais';
import { useAtom } from 'jotai';

export const useDrains = () => {
  const [drains, setDrains] = useAtom($drains);

  const toggleDrains = () => {
    if (drains) {
      setDrains(false);
    } else if (drains == false) {
      setDrains(null);
    } else {
      setDrains(true);
    }
  };
  return {
    toggleDrains,
    drains,
  };
};
