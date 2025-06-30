import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useProofs } from '@/hooks/use-proofs';
import { useQueryState } from '@/hooks/use-search-params-state';
import { huntSpeeds, proofs } from '@/lib/game-data';
import { useState } from 'react';
export const Filters = () => {
  const { toggleProof, bannedProofs, selectedProofs } = useProofs();
  const [health, setHealth] = useQueryState({
    key: 'health',
    defaultValue: ['0'],
  });
  const [localHealth, setLocalHealth] = useState(
    health[0] ? Number([health[0]]) : 50,
  );
  const [queryHuntSpeeds, setQueryHuntSpeeds] = useQueryState({
    key: 'huntspeeds',
  });

  return (
    <div className='flex gap-4  min-h-0 h-fit'>
      <Card className='gap-2 flex-1 h-full'>
        <CardContent className='pt-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-min gap-4'>
            {proofs.map((p, i) => {
              return (
                <Button
                  key={i}
                  className=''
                  // size='lg'
                  variant={selectedProofs.includes(p)
                    ? 'primary'
                    : bannedProofs.includes(p)
                    ? 'destructive'
                    : 'default'}
                  onClick={() => toggleProof(p)}
                >
                  {p}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <div className='flex flex-wrap gap-4 flex-1'>
        <Card className='gap-2 w-fit h-fit'>
          <CardHeader>
            <CardTitle className='w-full flex j'>
              Santé mental avant chasse{' '}
              <span className='ml-auto'>{localHealth}%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2'>
            <div className='flex gap-2'>
              <Slider
                className='w-96'
                value={[localHealth]}
                onValueChange={(e) => setLocalHealth(e[0])}
                onValueCommit={(e) => setHealth([e[0].toString()])}
              />
            </div>
          </CardContent>
        </Card>
        <Card className='gap-2 w-fit h-fit'>
          <CardHeader>
            <CardTitle>Vitesse en chasse</CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2'>
            <div className='flex gap-2'>
              {huntSpeeds.map((hs, i) => (
                <Button
                  key={i}
                  variant={queryHuntSpeeds.includes(hs) ? 'primary' : 'default'}
                  onClick={() =>
                    setQueryHuntSpeeds((qhs) =>
                      qhs.includes(hs)
                        ? qhs.filter((qhs) => qhs != hs)
                        : [...qhs, hs]
                    )}
                >
                  {hs}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
