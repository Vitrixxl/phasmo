import { type Entity, type Proof } from '@/lib/game-data';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { useProofs } from '@/hooks/use-proofs';
import { useState } from 'react';
import { Button } from './ui/button';
import { LucideX } from 'lucide-react';

type EntityCardProps = {
  entity: Entity;
  selectedProofs: Proof[];
  possible: boolean;
};

export const EntityCard = (
  { entity, possible }: EntityCardProps,
) => {
  const [isDitched, setIsDitched] = useState(false);
  const navigate = useNavigate();
  const { bannedProofs, selectedProofs } = useProofs();
  const [searchParams] = useSearchParams();
  const { name } = useParams();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        navigate(entity.name + '?' + searchParams.toString());
      }}
      className={cn(
        'p-4 bg-card border rounded-lg flex flex-col gap-4 transition-colors relative',
        !possible && 'opacity-40',
        name == entity.name && 'border-border-focused',
        isDitched && 'border-destructive ring-destructive/50 ring-2 opacity-40',
      )}
    >
      <div className='flex gap-4 items-center'>
        <div className='rounded-md bg-primary border size-10' />
        <p className={'font-semibold text-lg'}>
          {entity.name}
        </p>
      </div>
      <div className='w-full border-t' />
      <div className='flex flex-wrap gap-2 h-fit'>
        {entity.proofs.map((p, i) => (
          <Badge
            className='h-fit'
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
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setIsDitched((prev) => !prev);
        }}
        variant='destructive'
        className={cn(
          'bg-transparent! border-none hover:bg-destructive/50!  hover:text-foreground! ml-auto absolute top-2 right-2',
          isDitched && 'bg-destructive/50!',
        )}
        size='icon'
      >
        <LucideX />
      </Button>
    </div>
  );
};
