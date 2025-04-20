import { CardProps } from '../Card';
import './Description.css';

const CardDescription: React.FC<CardProps> = ({ className, children }) => {
	return (
		<div className={`${className} text-sm p-6 text-gray-600`}>
			{children}
		</div>
	);
};

export default CardDescription;
