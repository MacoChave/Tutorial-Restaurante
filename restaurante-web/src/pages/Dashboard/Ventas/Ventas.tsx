import Card from '../../../components/Card/Card';
import CardContent from '../../../components/Card/Content/Content';
import CardDescription from '../../../components/Card/Description/Description';
import CardHeader from '../../../components/Card/Header/Header';
import CardTitle from '../../../components/Card/Title/Title';
import './Ventas.css';

export type VentasProps = {
	// types...
} & React.HTMLAttributes<HTMLDivElement>;

const Ventas: React.FC<VentasProps> = ({ className, ...props }) => {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Ventas</CardTitle>
				<CardDescription>
					Ventas diarias durante la última semana
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Gráfico de líneas</p>
				<p>Actualizado: 16 de abril, 2025</p>
			</CardContent>
		</Card>
	);
};

export default Ventas;
