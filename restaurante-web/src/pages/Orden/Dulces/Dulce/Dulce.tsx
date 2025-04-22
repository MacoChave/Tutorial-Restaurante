import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import CardContent from '../../../../components/Card/Content/Content';
import CardFooter from '../../../../components/Card/Footer/Footer';
import CardHeader from '../../../../components/Card/Header/Header';
import { Dulce as DulceType } from '../../../../models/Dulces';
import './Dulce.css';

export type DulceProps = {
	dulce: DulceType;
} & React.HTMLProps<HTMLDivElement>;

const Dulce: React.FC<DulceProps> = ({ dulce, className, ...props }) => {
	return (
		<>
			<Card className={className}>
				<CardHeader className='pb-4'>
					<img
						className='w-full h-64 object-cover'
						src='https://picsum.photos/100'
						alt='Imagen de dulce'
					/>
				</CardHeader>
				<CardContent className='flex flex-col gap-2'>
					<p className='text-lg font-semibold'>{dulce.nombre}</p>
					<p className='text-md text-gray-400'>{dulce.descripcion}</p>
					<p className='text-lg font-semibold'>
						Q. {dulce.precio_por_unidad} por unidad
					</p>
				</CardContent>
				<CardFooter>
					<Button label='Agregar' />
				</CardFooter>
			</Card>
		</>
	);
};

export default Dulce;
