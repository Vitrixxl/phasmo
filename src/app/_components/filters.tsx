import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQueryState } from '@/hooks/use-search-params-state';
import { type Proof, proofs } from '@/lib/game-data';
export const Filters = () => {
  const [selectedProofs, setSelectedProofs] = useQueryState<Proof[]>({
    key: 'proofs',
  });
  return (
    <div className='flex gap-8'>
      <Card className='gap-2 flex-1'>
        <CardHeader className=''>
          <CardTitle className='text-xl'>Preuves de base :</CardTitle>
        </CardHeader>
        <CardContent className='pt-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-cols-min gap-4'>
            {proofs.map((p) => (
              <Button
                className=''
                size='lg'
                variant={selectedProofs.includes(p) ? 'primary' : 'default'}
                onClick={() =>
                  setSelectedProofs((prev) =>
                    prev.includes(p)
                      ? prev.filter((pf) => pf != p)
                      : [...prev, p]
                  )}
              >
                {p}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className='gap-2 flex-1'>
        <CardHeader className=''>
          <CardTitle className='text-xl'>Preuves de base :</CardTitle>
        </CardHeader>
        <CardContent className='pt-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-cols-min gap-4'>
            {proofs.map((p) => (
              <Button
                className='flex-1'
                size='lg'
                variant={selectedProofs.includes(p) ? 'primary' : 'default'}
                onClick={() =>
                  setSelectedProofs((prev) =>
                    prev.includes(p)
                      ? prev.filter((pf) => pf != p)
                      : [...prev, p]
                  )}
              >
                {p}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
