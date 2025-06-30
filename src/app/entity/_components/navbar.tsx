import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LucideSun } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const links = [
  {
    label: 'Entités',
    path: '/entities',
  },
  {
    label: 'Equipements',
    path: '/equipements',
  },
  {
    label: 'Maps',
    path: '/maps',
  },
];
export const Navbar = () => {
  const location = useLocation();
  return (
    <div className='rounded-lg py-2 flex gap-4 items-center border bg-card px-4 mt-4 mx-4'>
      <Button size='icon' variant={'outline'}>
        <img className='rounded-md overflow-hidden ' src='/phasmo.jpg' />
      </Button>
      <h1 className='text-lg font-semibold text-nowrap'>Phasmo-Tracker</h1>
      <div className='flex gap-4 w-full'>
        <div className='grid grid-cols-3 gap-2 items-center '>
          {links.map((l) => (
            <Button
              key={l.path}
              variant={location.pathname == l.path ? 'primary' : 'default'}
              className='px-4'
              asChild
            >
              <Link to={l.path}>
                {l.label}
              </Link>
            </Button>
          ))}
        </div>
        <Input className='w-fit' placeholder=' Rechercher...' />
      </div>
      <div className='flex gap-4 ml-auto'>
        <Button size='icon'>
          <LucideSun />
        </Button>
      </div>
    </div>
  );
};
