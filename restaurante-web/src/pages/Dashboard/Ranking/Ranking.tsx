import Card from '../../../components/Card/Card';
import CardContent from '../../../components/Card/Content/Content';
import CardDescription from '../../../components/Card/Description/Description';
import CardHeader from '../../../components/Card/Header/Header';
import CardTitle from '../../../components/Card/Title/Title';
import './Ranking.css';

export type RankingProps = {
	// types...
} & React.HTMLAttributes<HTMLDivElement>;

const Ranking: React.FC<RankingProps> = ({ className, ...props }) => {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Platillos más vendidos</CardTitle>
				<CardDescription>
					Top 5 platillos más populares del mes
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Gráfico de barras</p>
				<p>Basado en los últimos 30 días</p>
			</CardContent>
		</Card>
	);
};

export default Ranking;
