import Card from '../../../components/Card/Card';
import CardContent from '../../../components/Card/Content/Content';
import CardDescription from '../../../components/Card/Description/Description';
import CardHeader from '../../../components/Card/Header/Header';
import CardTitle from '../../../components/Card/Title/Title';
import './Distribucion.css';

export type DistribucionProps = {
	// types...
} & React.HTMLAttributes<HTMLDivElement>;

const Distribucion: React.FC<DistribucionProps> = ({ className, ...props }) => {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Distribución de ventas</CardTitle>
				<CardDescription>
					Porcentaje de ventas por categoria
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Gráfico de pie</p>
				<p>Basado en los últimos 30 días</p>
			</CardContent>
		</Card>
	);
};

export default Distribucion;
