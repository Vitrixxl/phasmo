import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/app/layout';
import { EntityLayout } from './app/entity/layout';
import { EntityPage } from './app/entity/[entity]/page';
import { UnknownRoutePage } from './app/unknown-page';
import { EquipementsLayout } from './app/equipements/layout';
import { EquipementsPage } from './app/equipements/[name]/page';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/entities' element={<EntityLayout />}>
            <Route path=':name' element={<EntityPage />} />
            <Route
              path='*'
              element={<UnknownRoutePage />}
            />
          </Route>
          <Route path='equipements' element={<EquipementsLayout />}>
            <Route path=':name' element={<EquipementsPage />} />
            <Route
              path='*'
              element={<UnknownRoutePage />}
            />
          </Route>
          <Route
            path='*'
            element={<UnknownRoutePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
