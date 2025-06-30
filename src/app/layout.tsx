import { EntityCard } from '@/components/entity-card';
import { AnimatePresence } from 'motion/react';
import { entities, type Proof } from '@/lib/game-data';
import { Outlet } from 'react-router';
import { Filters } from './_components/filters';
import { useProofs } from '@/hooks/use-proofs';
import { useQueryState } from '@/hooks/use-search-params-state';
import { Navbar } from './_components/navbar';

export const AppLayout = () => {
  const { bannedProofs, selectedProofs } = useProofs();
  const [health] = useQueryState({ key: 'health' });
  const [huntSpeeds] = useQueryState({ key: 'huntspeeds' });
  const isPossible = (
    entityProofs: Proof[],
    entityHealth: number,
    entityHuntSpeed: string,
    entityName: string,
  ) => {
    let possible = true;
    if (Number(health[0]) > entityHealth) possible = false;
    if (huntSpeeds.length > 0 && !huntSpeeds.includes(entityHuntSpeed)) {
      possible = false;
    }
    console.log({ selectedProofs, bannedProofs });
    for (const p of selectedProofs) {
      if (!entityProofs.includes(p)) possible = false;
    }
    for (const p of bannedProofs) {
      console.log(possible);
      if (entityProofs.includes(p)) possible = false;
    }
    if (
      entityName == 'Mimic' && selectedProofs.includes('Orbe fantomatique') &&
      !selectedProofs.includes('D.O.T.S.')
    ) {
      console.log(possible);
      return true;
    }
    return possible;
  };

  return (
    <AnimatePresence mode='wait'>
      <div className='h-svh bg-background dark p-6 pb-0 gap-5 grid grid-rows-[auto_auto_minmax(0,1fr)] w-full min-w-0 overflow-hidden'>
        <Navbar />
        <Filters />
        <div className='grid grid-cols-[minmax(0,1fr)_auto]  h-full w-full relative max-h-full overflow-hidden min-h-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 auto-rows-min h-full overflow-auto scrollbar-minimal pt-1 pb-6'>
            {entities.map((e, i) => (
              <EntityCard
                key={i}
                entity={e}
                selectedProofs={selectedProofs}
                possible={isPossible(
                  e.proofs,
                  e.healthBeforeHunt,
                  e.huntSpeed,
                  e.name,
                )}
              />
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </AnimatePresence>
  );
};
