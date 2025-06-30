import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQueryState } from '@/hooks/use-search-params-state';
import { equipements } from '@/lib/game-data';
import { LucideGhost, LucideX } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';

export const EquipementsPage = () => {
  const { name } = useParams();
  const [levelTab, setLevelTab] = useQueryState({
    key: 'levelTab',
    defaultValue: ['0'],
  });

  const navigate = useNavigate();

  const equipement = equipements.find((e) => e.name == name);
  if (!equipement || !name) {
    navigate('/equipements');
    return;
  }

  return (
    <Card className='w-[450px] max-h-full  ml-6 right-0 top-0 mt-1 mb-12 grid grid-rows-[auto_minmax(0,1fr)] min-h-0 h-fit px-2 py-6 relative'>
      <CardHeader>
        <CardTitle className='flex gap-4 text-xl font-semibold items-center'>
          <h1 className='text-lg font-semibold'>{equipement.name}</h1>
        </CardTitle>
        <Button
          className='absolute top-2 right-2'
          variant='destructive'
          size='icon'
        >
          <LucideX />
        </Button>
      </CardHeader>
      <CardContent className='space-y-4 max-h-full overflow-auto'>
        <div className='relative overflow-hidden w-full aspect-video border rounded-lg mx-auto'>
          <img
            className='absolute object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none'
            src={equipement.img}
          />
        </div>
        <p className='text-muted-foreground'>
          {equipement.description}
        </p>
        <Tabs value={levelTab[0]}>
          <TabsList>
            {Array.from({ length: 3 }).map((_, i) => (
              <TabsTrigger
                value={i.toString()}
                key={i.toString()}
                onClick={() => setLevelTab([i.toString()])}
              >
                Niveau {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          {Array.from({ length: 3 }).map((_, i) => (
            <TabsContent value={i.toString()} asChild key={i.toString()}>
              <div className='border p-4 bg-card rounded-lg flex flex-col gap-2'>
                {equipement.tiers[i]
                  ? equipement.tiers[i].map((t, i) => (
                    <div className='flex gap-2' key={i}>
                      <LucideGhost className='mt-1 size-4 text-muted-foreground' />
                      <p className='text-muted-foreground flex-1'>
                        {t}
                      </p>
                    </div>
                  ))
                  : (
                    <p className='text-sm text-muted-foreground mx-auto text-center'>
                      Aucune spécification
                    </p>
                  )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className='flex flex-wrap gap-2'>
          {equipement.relatedEntities.map((e, i) => (
            <Link
              to={`/entities/${e.name}`}
              className='rounded-sm border p-2 w-fit flex gap-2 items-center '
              key={i.toString()}
            >
              <div className='rounded-md bg-primary border size-6' />
              <div className='w-fit pr-1 text-sm font-semibold'>{e.name}</div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
