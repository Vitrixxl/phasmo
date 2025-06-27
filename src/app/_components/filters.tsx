import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProofs } from '@/hooks/use-proofs';
import { proofs } from '@/lib/game-data';
export const Filters = () => {
  const { toggleProof, bannedProofs, selectedProofs } = useProofs();
  return (
    <div className='flex gap-8  min-h-0 h-max'>
      <div className='border rounded-lg bg-card relative size-32 p-2'>
        <div className='relative'>
          <img
            src='phasmo.jpg'
            className='rounded-lg absolute inset-0'
          />
        </div>
      </div>
      <Card className='gap-2 flex-1 h-fit'>
        <CardHeader className=''>
          <CardTitle className='text-xl'>Preuves de base :</CardTitle>
        </CardHeader>
        <CardContent className='pt-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-min gap-4'>
            {proofs.map((p, i) => {
              return (
                <Button
                  key={i}
                  className=''
                  size='lg'
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
      <Card className='gap-2 flex-1 h-fit'>
        <CardHeader className=''>
          <CardTitle className='text-xl'>Preuves de base :</CardTitle>
        </CardHeader>
        <CardContent className='pt-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-min gap-4'>
            {proofs.map((p, i) => {
              return (
                <Button
                  key={i}
                  className=''
                  size='lg'
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
    </div>
  );
};
