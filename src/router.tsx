import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/app/layout';
import { EntityPage } from './app/[entity]/page';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/:name' element={<EntityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
