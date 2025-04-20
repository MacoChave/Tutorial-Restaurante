import Card from '../../../components/Card/Card';
import CardContent from '../../../components/Card/Content/Content';
import CardHeader from '../../../components/Card/Header/Header';
import CardTitle from '../../../components/Card/Title/Title';
import './Pedidos.css';

export type PedidosProps = {
	// types...
} & React.HTMLAttributes<HTMLDivElement>;

const Pedidos: React.FC<PedidosProps> = ({ className, ...props }) => {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Pedidos</CardTitle>
			</CardHeader>
			<CardContent>
				<p>524</p>
				<p>+8.2% vs semana anterior</p>
			</CardContent>
		</Card>
	);
};

export default Pedidos;
