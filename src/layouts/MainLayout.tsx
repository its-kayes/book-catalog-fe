import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="pt-6">
        <Outlet />
      </div>
    </div>
  );
}
