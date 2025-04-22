import { useState } from 'react';
import Dulce from './Dulce/Dulce';
import './Dulces.css';

const dulces = [
	{
		nombre: 'Canillitas de leche',
		descripcion:
			'Dulce típico hecho a base de leche condensada y azúcar, suave y dulce.',
		precio_por_unidad: 2.99,
	},
	{
		nombre: 'Pepitoria',
		descripcion:
			'Dulce de semillas de ayote tostadas, a veces cubiertas con azúcar o chocolate.',
		precio_por_unidad: 30.0,
	},
	{
		nombre: 'Cocadas',
		descripcion: 'Dulce horneado hecho con coco rallado, azúcar y leche.',
		precio_por_unidad: 14.5,
	},
	{
		nombre: 'Dulces de higo',
		descripcion:
			'Higos cristalizados en almíbar, tradicionalmente preparados en Semana Santa.',
		precio_por_unidad: null,
	},
	{
		nombre: 'Mazapanes',
		descripcion: 'Dulce suave hecho a base de azúcar y maní molido.',
		precio_por_unidad: null,
	},
	{
		nombre: 'Chilacayotes',
		descripcion:
			'Dulce elaborado a partir del fruto del chilacayote cocido con panela y especias.',
		precio_por_unidad: 14.5,
	},
	{
		nombre: 'Conservas de coco',
		descripcion:
			'Dulce tradicional de coco cocido en almíbar hasta formar una pasta densa.',
		precio_por_unidad: null,
	},
	{
		nombre: 'Colochos de guayaba',
		descripcion:
			'Dulce en forma de rollo hecho con pasta de guayaba y azúcar.',
		precio_por_unidad: 6.38,
	},
];

export type DulcesProps = {
	// types...
};

const Dulces: React.FC<DulcesProps> = ({}) => {
	const [seleccion, setSeleccion] = useState([]);
	// PETICIÓN DE DULCES => DulcesData[]

	const agregarDulces = () => {};

	return (
		<div className='container mx-auto py-8 px-4'>
			<div className='flex justify-between items-center mb-6'>
				<div className='text-xl font-bold'>Catálogo de dulces</div>
			</div>
			<div className='flex border-dotted'>
				<div className='flex-2/3 flex flex-row flex-wrap gap-4 border-2 border-dotted border-sky-400'>
					{dulces.map((dulce, index) => (
						<Dulce className='flex-1/4' key={index} dulce={dulce} />
					))}
				</div>
				<div className='flex-1/3 border-2 border-dotted border-lime-400'></div>
			</div>
		</div>
	);
};

export default Dulces;
