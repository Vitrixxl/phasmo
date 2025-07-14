import { proofs } from '@/lib/game-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProofs } from '@/hooks/use-proofs';
import { LucideRotateCcw } from 'lucide-react';
export const ProofCard = () => {
  const { bannedProofs, selectedProofs, toggleProof, resetProofs } =
    useProofs();
  return (
    <div className='flex flex-col gap-4'>
      <Card className='gap-2  h-max max-w-[550px]'>
        <CardContent className='pt-0'>
          <div className='flex flex-col auto-rows-min gap-4'>
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
      <Button className='' onClick={resetProofs}>
        <LucideRotateCcw />
        Reset
      </Button>
    </div>
  );
};
