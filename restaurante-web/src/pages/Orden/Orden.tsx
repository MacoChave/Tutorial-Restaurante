import { Link, useLocation } from 'wouter';
import Card from '../../components/Card/Card';
import CardContent from '../../components/Card/Content/Content';
import CardDescription from '../../components/Card/Description/Description';
import CardFooter from '../../components/Card/Footer/Footer';
import CardHeader from '../../components/Card/Header/Header';
import CardTitle from '../../components/Card/Title/Title';
import './Orden.css';
import Button from '../../components/Button/Button';

export type OrdenProps = {
	// types...
};

const Orden: React.FC<OrdenProps> = ({}) => {
	const [location, _] = useLocation();
	return (
		<div className='w-full h-full grid justify-center content-center items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto border-2 border-dotted border-blue-500 '>
			{/* PLATILLOS */}
			<Card>
				<CardHeader>
					<CardTitle>Platillos</CardTitle>
					<CardDescription>
						Configura platillos personalizados seleccionando tipo de
						carne, término y guarniciones
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ol className='text-sm space-y-2'>
						<li>Selecciona el tipo de carne</li>
						<li>Elige el término de cocción</li>
						<li>Escoge 3 guarniciones</li>
						<li>Configura múltiples platillos</li>
					</ol>
				</CardContent>
				<CardFooter>
					<Link href={`${location}/platillos`}>
						<Button label='Configurar platillos' />
					</Link>
				</CardFooter>
			</Card>
			{/* DULCES */}
			<Card>
				<CardHeader>
					<CardTitle>Dulces</CardTitle>
					<CardDescription>
						Selecciona tus dulces favoritos y escoje la unidad de
						medida que prefieras
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ol className='text-sm space-y-2'>
						<li>Escoge entre variadad de dulces</li>
						<li>Selecciona la unidad de medida</li>
						<li>Cajas de 6, 12 o 24 unidades</li>
						<li>Combina diferentes tipos</li>
					</ol>
				</CardContent>
				<CardFooter>
					<Link href={`${location}/dulces`}>
						<Button label='Seleccionar dulces' />
					</Link>
				</CardFooter>
			</Card>
			{/* COMBOS */}
			<Card>
				<CardHeader>
					<CardTitle>Combos</CardTitle>
					<CardDescription>
						Aprovecha nuestros combos especiales con platillos y
						dulces a un precio especial
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ol className='text-sm space-y-2'>
						<li>Selecciona uno de nuestros combos</li>
						<li>Configura tus platillos y dulces</li>
						<li>Obtén un precio especial por combo</li>
						<li>Combina diferentes tipos de combos</li>
					</ol>
				</CardContent>
				<CardFooter>
					<Link href={`${location}/combos`}>
						<Button label='Elegir combo' />
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Orden;
