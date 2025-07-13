import { EntityCard } from '@/components/entity-card';
import { entities, type Entity } from '@/lib/game-data';
import { Outlet } from 'react-router';
import { Filters } from './_components/filters';
import { useProofs } from '@/hooks/use-proofs';
import { useQueryState } from '@/hooks/use-search-params-state';

export const EntityLayout = () => {
  const { bannedProofs, selectedProofs } = useProofs();
  const [health] = useQueryState({ key: 'health' });
  const [huntSpeeds] = useQueryState({ key: 'huntspeeds' });

  const sortedEntities: {
    possible: Entity[];
    impossible: Entity[];
  } = {
    possible: [],
    impossible: [],
  };

  for (const e of entities) {
    if (Number(health[0]) > e.healthBeforeHunt) {
      sortedEntities.impossible.push(e);
      continue;
    }
    if (huntSpeeds.length > 0 && !huntSpeeds.includes(e.huntSpeed)) {
      sortedEntities.impossible.push(e);
      continue;
    }
    if (bannedProofs.some((p) => e.proofs.includes(p))) {
      sortedEntities.impossible.push(e);
      continue;
    }

    if (
      e.name == 'Mimic' &&
      selectedProofs.includes('Orbe fantomatique') &&
      !selectedProofs.includes('D.O.T.S.')
    ) {
      sortedEntities.possible.push(e);
      continue;
    }

    if (selectedProofs.some((p) => !e.proofs.includes(p))) {
      sortedEntities.impossible.push(e);
      continue;
    }

    sortedEntities.possible.push(e);
  }
  return (
    <div className='h-full bg-background dark px-4 pb-0 gap-3 flex flex-col w-full min-w-0 '>
      <Filters />
      <div className='grid grid-cols-[minmax(0,1fr)_auto]  h-full w-full relative max-h-full overflow-hidden min-h-0'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 auto-rows-min h-full overflow-auto scrollbar-minimal mt-1 py-2'>
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
