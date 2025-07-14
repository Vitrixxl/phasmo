import { type HuntSpeed } from '@/lib/game-data';
import { $huntSpeeds } from '@/stores/hunt-speed';
import { useAtom } from 'jotai';

export const useHuntSpeed = () => {
  const [huntSpeeds, setHuntSpeeds] = useAtom($huntSpeeds);

  const toggleHuntSpeed = (huntSpeed: HuntSpeed) => {
    if (huntSpeeds.includes(huntSpeed)) {
      setHuntSpeeds((prev) => prev.filter((h) => h != huntSpeed));
    } else {
      setHuntSpeeds((prev) => [...prev, huntSpeed]);
    }
  };

  return { selectedHuntSpeeds: huntSpeeds, toggleHuntSpeed };
};
