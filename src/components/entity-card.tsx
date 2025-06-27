import { type Entity, type Proof } from '@/lib/game-data';
import { Link } from 'react-router';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

type EntityCardProps = {
  entity: Entity;
  selectedProofs: Proof[];
  possible: boolean;
};

export const EntityCard = (
  { entity, selectedProofs, possible }: EntityCardProps,
) => {
  return (
    <Link
      to={entity.name}
      className={cn(
        'p-4 bg-card border rounded-lg flex flex-col gap-4',
        possible ? '' : 'opacity-40',
      )}
    >
      <div className='flex gap-4 items-center'>
        <div className='rounded-md bg-primary border size-10' />
        <p className='font-semibold text-lg'>{entity.name}</p>
      </div>
      <div className='w-full border-t' />
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {entity.proofs.map((p) => (
          <Badge
            variant={selectedProofs.includes(p) ? 'primary' : 'default'}
          >
            {p}
          </Badge>
        ))}
      </div>
    </Link>
  );
};
