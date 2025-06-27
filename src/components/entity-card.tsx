import { type Entity, type Proof } from '@/lib/game-data';
import { LucideCheck } from 'lucide-react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { useProofs } from '@/hooks/use-proofs';

type EntityCardProps = {
  entity: Entity;
  selectedProofs: Proof[];
  possible: boolean;
};

export const EntityCard = (
  { entity, possible }: EntityCardProps,
) => {
  const navigate = useNavigate();
  const { bannedProofs, selectedProofs } = useProofs();
  const [searchParams] = useSearchParams();
  const { name } = useParams();
  return (
    <button
      onClick={() => navigate(entity.name + '?' + searchParams.toString())}
      className={cn(
        'p-4 bg-card border rounded-lg flex flex-col gap-4',
        possible ? '' : 'opacity-40',
        name == entity.name ? 'border-border-focused' : '',
      )}
    >
      <div className='flex gap-4 items-center'>
        <div className='rounded-md bg-primary border size-10' />
        <p className='font-semibold text-lg'>{entity.name}</p>
        {selectedProofs.length == 3 && possible && (
          <LucideCheck className=' ml-auto text-violet-600 stroke-[4]' />
        )}
      </div>
      <div className='w-full border-t' />
      <div className='flex flex-wrap items-center justify-center gap-2 h-full'>
        {entity.proofs.map((p, i) => (
          <Badge
            variant={selectedProofs.includes(p)
              ? 'primary'
              : bannedProofs.includes(p)
              ? 'destructive'
              : 'default'}
            key={i}
          >
            {p}
          </Badge>
        ))}
      </div>
    </button>
  );
};
