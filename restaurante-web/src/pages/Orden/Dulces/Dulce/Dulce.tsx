import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import CardContent from '../../../../components/Card/Content/Content';
import CardFooter from '../../../../components/Card/Footer/Footer';
import CardHeader from '../../../../components/Card/Header/Header';
import './Dulce.css';

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

export type DulceProps = {
	// types...
} & React.HTMLProps<HTMLDivElement>;

const Dulce: React.FC<DulceProps> = ({ className, ...props }) => {
	return (
		<div
			className={`${className} grid gap-6 md:grid-cols-3 lg:grid-cols-3 border-2 border-dotted`}>
			{dulces.map((dulce, index) => (
				<Card>
					<CardHeader className='pb-4'>
						<img
							className='w-full h-64 object-cover'
							src='https://picsum.photos/100'
							alt='Imagen de dulce'
						/>
					</CardHeader>
					<CardContent className='flex flex-col gap-2'>
						<p className='text-lg font-semibold'>{dulce.nombre}</p>
						<p className='text-md text-gray-400'>
							{dulce.descripcion}
						</p>
						<p className='text-lg font-semibold'>
							{dulce.precio_por_unidad} por unidad
						</p>
					</CardContent>
					<CardFooter>
						<Button label='Agregar' />
					</CardFooter>
				</Card>
			))}
		</div>
	);
};

export default Dulce;
