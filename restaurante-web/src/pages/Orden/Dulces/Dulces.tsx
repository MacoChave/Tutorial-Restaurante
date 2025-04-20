import { useState } from 'react';
import './Dulces.css';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/Header/Header';
import CardDescription from '../../../components/Card/Description/Description';
import CardContent from '../../../components/Card/Content/Content';
import CardFooter from '../../../components/Card/Footer/Footer';
import Dulce from './Dulce/Dulce';

export type DulcesProps = {
	// types...
};

const Dulces: React.FC<DulcesProps> = ({}) => {
	const [dulces, setdulces] = useState([]);

	const agregarDulces = () => {};

	return (
		<div className='container mx-auto py-8 px-4'>
			<div className='flex justify-between items-center mb-6'>
				<div className='text-xl font-bold'>Catálogo de dulces</div>
			</div>
			<div className='flex justify-between'>
				<Dulce className='fex-2/3' />
				<div className='flex-1/3 border-2 border-dotted'></div>
			</div>
		</div>
	);
};

export default Dulces;
