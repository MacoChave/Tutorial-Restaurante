import { useState } from 'react';
import Platillo, { PlatilloProps } from './Platillo/Platillo';
import './Platillos.css';
import CardHeader from '../../../components/Card/Header/Header';
import CardDescription from '../../../components/Card/Description/Description';
import CardContent from '../../../components/Card/Content/Content';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

export type PlatillosProps = {
	// types...
};

const Platillos: React.FC<PlatillosProps> = ({}) => {
	const [platillos, setplatillos] = useState<PlatilloProps[]>([]);

	const agregarPlatillo = () => {
		const nuevoPlatillo: PlatilloProps = {
			id: Math.random().toString(36).substring(2, 15),
			meatType: '',
			meatDoneness: '',
			selectedSides: [],
		};
		setplatillos([...platillos, nuevoPlatillo]);
	};

	return (
		<div className='container mx-auto py-8 px-4'>
			<div className='flex justify-between items-center mb-6'>
				<div className='text-sm font-medium'>
					{platillos.length} platillos configurados
				</div>
				<Button label='Añadir platillo' onClick={agregarPlatillo} />
			</div>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{platillos.map((platillo, index) => (
					<Card key={index} className='border-green-500'>
						<CardHeader className='pb-4'>Platillo</CardHeader>
						<CardDescription>
							Configura las opciones del platillo
						</CardDescription>
						<CardContent className='space-y-2'>
							<Platillo key={index} {...platillo} />
						</CardContent>
					</Card>
				))}
			</div>
			<div className='mt-8 flex justify-c'>
				<Button label='Confirmar platillos' />
			</div>
		</div>
	);
};

export default Platillos;
