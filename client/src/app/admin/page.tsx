import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('@/modules/Admin'), { ssr: false });

const Admin: NextPage = () => <AdminApp />;

export default Admin;
