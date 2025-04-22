import Card from '../../../components/Card/Card';
import CardContent from '../../../components/Card/Content/Content';
import CardHeader from '../../../components/Card/Header/Header';
import CardTitle from '../../../components/Card/Title/Title';
import './Ingresos.css';

export type IngresosProps = {
	// types...
} & React.HTMLAttributes<HTMLDivElement>;

const Ingresos: React.FC<IngresosProps> = ({ className, ...props }) => {
	// PETICION PARA OBTENER LOS INGRESOS
	// const { data, error, isLoading } = useQuery(
	// 	['ingresos'],
	// 	() => fetch('/api/ingresos').then((res) => res.json()),
	// 	{
	// 		keepPreviousData: true,
	// 		refetchOnWindowFocus: false,
	// 	}
	// );
	// if (isLoading) return <div>Cargando...</div>;
	// if (error) return <div>Error: {error.message}</div>;
	// if (!data) return <div>No hay datos</div>;
	// console.log(data);

	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Ingresos totales</CardTitle>
			</CardHeader>
			<CardContent>
				<p>$ 38,450</p>
				<p>+12.5% vs semana anterior</p>
			</CardContent>
		</Card>
	);
};

export default Ingresos;
