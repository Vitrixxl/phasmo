import { EntityCard } from '@/components/entity-card';
import { useQueryState } from '@/hooks/use-search-params-state';
import { entities, type Proof } from '@/lib/game-data';
import { Outlet } from 'react-router';
import { Filters } from './_components/filters';

export const AppLayout = () => {
  const [selectedProofs] = useQueryState<Proof[]>({
    key: 'proofs',
  });
  const isPossible = (entitiesProofs: Proof[]) => {
    let possible = true;
    for (const p of selectedProofs) {
      if (!entitiesProofs.includes(p)) possible = false;
    }
    return possible;
  };
  return (
    <div className='h-svh bg-background dark p-12 gap-8 grid grid-rows-[auto_minmax(0,1fr)] w-full min-w-0'>
      <Filters />
      <div className='grid grid-cols-[minmax(0,1fr)_auto] gap-12 h-full w-full'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 auto-rows-min h-full overflow-auto'>
          {entities.map((e, i) => (
            <EntityCard
              key={i}
              entity={e}
              selectedProofs={selectedProofs}
              possible={isPossible(e.proofs)}
            />
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
