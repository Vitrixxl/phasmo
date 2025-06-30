import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProofs } from '@/hooks/use-proofs';
import { entities } from '@/lib/game-data';
import { LucideGhost } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

export const EntityPage = () => {
  const { selectedProofs, bannedProofs } = useProofs();
  const navigate = useNavigate();
  const { name } = useParams();
  const entity = entities.find((e) => e.name == name);
  if (!entity) {
    navigate('/');
    return;
  }

  return (
    <Card className='absolute xl:relative w-[450px] max-h-full  ml-6 right-0 top-0 mt-1 mb-12 grid grid-rows-[auto_minmax(0,1fr)] min-h-0 h-fit'>
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
