import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useScreenSize } from '@/hooks/use-mobile';
import { useProofs } from '@/hooks/use-proofs';
import { entities } from '@/lib/game-data';
import { useNavigate, useParams } from 'react-router';

export const EntityPage = () => {
  const { selectedProofs, bannedProofs } = useProofs();
  const { width } = useScreenSize();
  const navigate = useNavigate();
  const { name } = useParams();
  const entity = entities.find((e) => e.name == name);
  if (!entity) {
    navigate('/');
    return;
  }

  return (
    width > 1024
      ? (
        <Card className='absolute xl:relative w-[450px] max-h-full h-fit ml-8 right-0 top-0 mt-1'>
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
            <p className='text-muted-foreground '>{entity.hint}</p>
            <p className='font-semibold  text-foreground'>
              Données caractéristiques :
            </p>
            <ul className='list-disc pl-4 space-y-4'>
              {entity.specifications.map((sp) => (
                <li className='text-muted-foreground'>{sp}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )
      : (
        <Sheet open={true}>
          <SheetHeader>
            <SheetTitle className='flex gap-4 text-xl font-semibold items-center'>
              <div className='rounded-md bg-primary border size-12' />
              {entity.name}
            </SheetTitle>
          </SheetHeader>
        </Sheet>
      )
  );
};
