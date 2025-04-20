import { CardProps } from '../Card';
import './Title.css';

const CardTitle: React.FC<CardProps> = ({ className, children }) => {
	return (
		<div
			className={`${className} text-2xl font-semibold leading-none tracking-tight`}>
			{children}
		</div>
	);
};

export default CardTitle;
