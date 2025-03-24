
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PageLogin from '../pages/login/PageLogin';
import PageDashboard from '../pages/dashboard/PageDashboard';
import PageSearch from '../pages/search/PageSearch';
import PageManagement from '../pages/management/PageManagement';
import PageAlerts from '../pages/alerts/PageAlerts';
import PageProfile from '../pages/profile/PageProfile';
import PageData from '../pages/data/PageData';
import PageReports from '../pages/reports/PageReports';
import PageUsers from '../pages/users/PageUsers';
import PageComunication from '../pages/comunication/PageComunication';

function RouterApp() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<PageLogin />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/dashboard" element={<PageDashboard />} />
      <Route path="/search" element={<PageSearch />} />
      <Route path="/management" element={<PageManagement />} />
      <Route path="/alerts" element={<PageAlerts />} />
      <Route path="/profile" element={<PageProfile />} />
      <Route path="/data" element={<PageData />} />
      <Route path="/reports" element={<PageReports />} />
      <Route path="/users" element={<PageUsers />} />
      <Route path="/comunication" element={<PageComunication />} />

      {/* <Route path="/public" element={<PageNotFound />} />
      <Route path="/dashboard" element={<PageDashboard />} />
      <Route path="/search" element={<PageSearch />} />
      <Route path="/test" element={<PageTest />} />
      <Route path="/users" element={<PageUsers />} />
      <Route path="/update-data" element={<PageUpdateDate />} />
      <Route path="/reports" element={<PageReports />} /> */}
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={<PageNotFound />} />
        <Route path="/profile" element={<PageNotFound />} /> */}
      </Route>

      {/* Ruta para manejar páginas no encontradas */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default RouterApp;