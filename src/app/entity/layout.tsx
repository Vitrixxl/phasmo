import { EntityCard } from '@/components/entity-card';
import { entities, type Entity } from '@/lib/game-data';
import { Outlet } from 'react-router';
import { Filters } from './_components/filters';
import { useProofs } from '@/hooks/use-proofs';
import { ProofCard } from './_components/proofs-card';
import { useHuntSpeed } from '@/hooks/use-speed';
import { useAtom } from 'jotai';
import { $health } from '@/stores/health';
import { useDrains } from '@/hooks/use-drains';

export const EntityLayout = () => {
  const { bannedProofs, selectedProofs } = useProofs();
  const [health] = useAtom($health);
  const { drains } = useDrains();
  const { selectedHuntSpeeds } = useHuntSpeed();

  const sortedEntities: {
    possible: Entity[];
    impossible: Entity[];
  } = {
    possible: [],
    impossible: [],
  };

  for (const e of entities) {
    if (health > e.healthBeforeHunt) {
      sortedEntities.impossible.push(e);
      continue;
    }

    if (
      e.name == 'Mimic' &&
      ((selectedProofs.includes('Orbe fantomatique') &&
        !selectedProofs.includes('D.O.T.S.')) || drains && e.drains)
    ) {
      sortedEntities.possible.push(e);
      continue;
    }
    if (
      selectedHuntSpeeds.length > 0 && !selectedHuntSpeeds.includes(e.huntSpeed)
    ) {
      sortedEntities.impossible.push(e);
      continue;
    }

    if (drains != null) {
      if (e.drains === drains) {
        sortedEntities.possible.push(e);
        continue;
      } else {
        sortedEntities.impossible.push(e);
        continue;
      }
    }

    if (bannedProofs.some((p) => e.proofs.includes(p))) {
      sortedEntities.impossible.push(e);
      continue;
    }

    if (selectedProofs.some((p) => !e.proofs.includes(p))) {
      sortedEntities.impossible.push(e);
      continue;
    }
    sortedEntities.possible.push(e);
  }
  return (
    <div className='h-full bg-background dark px-4 pb-0 gap-4 flex flex-col w-full min-w-0 '>
      <Filters />
      <div className='grid grid-cols-[auto_minmax(0,1fr)_auto] gap-4  flex-1 w-full relative max-h-full overflow-hidden min-h-0'>
        <ProofCard />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 auto-rows-min h-full overflow-auto scrollbar-minimal '>
          {sortedEntities.possible.map((e, i) => (
            <EntityCard
              key={i}
              entity={e}
              selectedProofs={selectedProofs}
              possible={true}
            />
          ))}
          {sortedEntities.impossible.map((e, i) => (
            <EntityCard
              key={i}
              entity={e}
              selectedProofs={selectedProofs}
              possible={false}
            />
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
