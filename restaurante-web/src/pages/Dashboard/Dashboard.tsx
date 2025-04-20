import { Link } from 'wouter';
import Button from '../../components/Button/Button';
import './Dashboard.css';
import Distribucion from './Distribucion/Distribucion';
import Ingresos from './Ingresos/Ingresos';
import Pedidos from './Pedidos/Pedidos';
import Ranking from './Ranking/Ranking';
import Ventas from './Ventas/Ventas';

export type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({}) => {
	return (
		<div className='w-full h-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 border-2 border-dotted border-blue-500'>
			<Ingresos />
			<Pedidos />
			<Link href='/orden'>
				<Button
					className='self-center justify-self-center'
					label='Ordenar'
				/>
			</Link>
			<Ventas className='md:col-span-2' />
			<Distribucion className='md:col-span-2' />
			<Ranking className='md:col-span-2 lg:col-span-4' />
		</div>
	);
};

export default Dashboard;
