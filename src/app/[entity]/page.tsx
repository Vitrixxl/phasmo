import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQueryState } from '@/hooks/use-search-params-state';
import { entities, type Proof } from '@/lib/game-data';
import { useNavigate, useParams } from 'react-router';

export const EntityPage = () => {
  const [selectedProofs] = useQueryState<Proof[]>({ key: 'proofs' });
  const navigate = useNavigate();
  const { name } = useParams();
  const entity = entities.find((e) => e.name == name);
  if (!entity) {
    navigate('/');
    return;
  }

  return (
    <Card className='w-[400px] max-h-full h-fit'>
      <CardHeader>
        <CardTitle className='flex gap-4 text-xl font-semibold items-center'>
          <div className='rounded-md bg-primary border size-12' />
          {entity.name}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex gap-4'>
          <div className='flex flex-wrap items-center justify-center gap-2'>
            {entity.proofs.map((p) => (
              <Badge
                variant={selectedProofs.includes(p) ? 'primary' : 'default'}
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>
        <p className='text-muted-foreground text-sm'>{entity.hint}</p>
        <p className='font-semibold text-sm text-foreground'>
          Données caractéristiques :
        </p>
        <ul className='list-disc pl-4 space-y-4 text-sm'>
          {entity.specifications.map((sp) => (
            <li className='text-muted-foreground'>{sp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
