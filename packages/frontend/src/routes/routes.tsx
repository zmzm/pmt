import { Route, Routes as ReactRouterDOM } from 'react-router-dom';
import { AppLayout } from '@pmt/main/layouts/app';
import { Dashboard } from '../app/components/Dashboard';

export function Routes() {
  return (
    <ReactRouterDOM>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </ReactRouterDOM>
  );
}
