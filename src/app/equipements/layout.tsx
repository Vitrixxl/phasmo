import { equipements } from '@/lib/game-data';
import { Outlet, useNavigate } from 'react-router';

export const EquipementsLayout = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-4 h-full min-h-0 max-h-full px-4'>
      <div className='flex-1 flex gap-4 flex-wrap mt-1 max-h-full'>
        {equipements.map((e) => (
          <div
            className='bg-card rounded-xl size-fit  max-w-96 w-full p-4 border flex flex-col gap-4'
            onClick={() => navigate(e.name)}
          >
            <p className='font-semibold'>{e.name}</p>
            <div className='relative overflow-hidden w-3/4 aspect-video border rounded-lg mx-auto'>
              <img
                className='absolute object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none'
                src={e.img}
              />
            </div>
            <p className='text-muted-foreground text-sm line-clamp-3'>
              {e.description}
            </p>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
