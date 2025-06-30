import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LucideSun } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const links = [
  {
    label: 'Entités',
    path: '/',
  },
  {
    label: 'Maps',
    path: '/maps',
  },
  {
    label: 'Equipement',
    path: '/equipement',
  },
  {
    label: 'Objet maudit',
    path: '/cursed',
  },
];
export const Navbar = () => {
  const location = useLocation();
  return (
    <div className='rounded-lg py-2 flex gap-4 items-center border bg-card px-4 '>
      <Button size='icon' variant={'outline'}>
        <img className='rounded-md overflow-hidden ' src='/phasmo.jpg' />
      </Button>
      <h1 className='text-lg font-semibold'>Phasmotracker</h1>
      <div className='flex gap-2 items-center'>
        {links.map((l) => (
          <Button
            variant={location.pathname == l.path ? 'primary' : 'default'}
            asChild
          >
            <Link to={l.path}>
              {l.label}
            </Link>
          </Button>
        ))}
        <Input className='ml-4' placeholder='Rechercher...' />
      </div>
      <div className='flex gap-4 ml-auto'>
        <Button size='icon'>
          <LucideSun />
        </Button>
      </div>
    </div>
  );
};
