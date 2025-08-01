import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProofs } from '@/hooks/use-proofs';
import { entities } from '@/lib/game-data';
import { LucideGhost, LucideX } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';

export const EntityPage = () => {
  console.log('page');
  const { selectedProofs, bannedProofs } = useProofs();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { name } = useParams();
  const entity = entities.find((e) => e.name == name);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code == 'Escape') {
      navigate('/entities' + '?' + searchParams.toString());
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!entity) {
    navigate('/entities' + '?' + searchParams.toString());
    return;
  }

  return (
    <Card className='w-[450px] max-h-full mt-1  right-0 top-0  grid grid-rows-[auto_minmax(0,1fr)] min-h-0 h-fit px-2 py-6 relative'>
      <Button
        className='absolute top-2 right-2'
        size='icon'
        variant='destructive'
        onClick={() => navigate('/entities' + '?' + searchParams.toString())}
      >
        <LucideX />
      </Button>
      <CardHeader>
        <CardTitle className='flex gap-4 text-xl font-semibold items-center'>
          <div className='rounded-md bg-primary border size-12' />
          {entity.name}
        </CardTitle>
        <div className='flex gap-4 mt-2'>
          <div className='flex flex-wrap gap-2'>
            {entity.proofs.map((p) => (
              <Badge
                className='text-sm'
                variant={selectedProofs.includes(p)
                  ? 'primary'
                  : bannedProofs.includes(p)
                  ? 'destructive'
                  : 'default'}
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className='space-y-4 max-h-full overflow-auto'>
        <p className='text-muted-foreground '>{entity.hint}</p>
        <p className='font-semibold  text-foreground'>
          Données caractéristiques :
        </p>
        <ul className=' space-y-4'>
          {entity.specifications.map((sp) => (
            <li className='text-muted-foreground flex gap-2'>
              <LucideGhost className='size-4 mt-1' />
              <span className='flex-1'>{sp}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
