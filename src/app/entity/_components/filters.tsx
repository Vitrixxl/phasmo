import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useDrains } from '@/hooks/use-drains';
import { useHuntSpeed } from '@/hooks/use-speed';
import { huntSpeeds } from '@/lib/game-data';
import { $health } from '@/stores/health';
import { useAtom } from 'jotai';
import { useState } from 'react';
export const Filters = () => {
  const [health, setHealth] = useAtom($health);

  const [localHealth, setLocalHealth] = useState(
    health != undefined ? health : 50,
  );

  const { selectedHuntSpeeds, toggleHuntSpeed } = useHuntSpeed();
  const { toggleDrains, drains } = useDrains();

  return (
    <div className='flex gap-4  min-h-0 h-max'>
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
                onValueCommit={(e) => setHealth(e[0])}
              />
            </div>
          </CardContent>
        </Card>
        <div className='bg-card border rounded-xl p-4 flex items-center  w-fit h-fit  gap-4'>
          <CardTitle>Vitesse en chasse</CardTitle>
          <div className='flex gap-2'>
            {huntSpeeds.map((hs, i) => (
              <Button
                key={i}
                variant={selectedHuntSpeeds.includes(hs)
                  ? 'primary'
                  : 'default'}
                onClick={() => toggleHuntSpeed(hs)}
              >
                {hs}
              </Button>
            ))}
          </div>
        </div>
        <div className='bg-card border rounded-xl p-4 flex items-center  w-fit h-fit  gap-4'>
          <CardTitle>Drain de santé mentale</CardTitle>
          <Button
            variant={drains == true
              ? 'primary'
              : drains == false
              ? 'destructive'
              : 'default'}
            onClick={toggleDrains}
          >
            Actif
          </Button>
        </div>
      </div>
    </div>
  );
};
