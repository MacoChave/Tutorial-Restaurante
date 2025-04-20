import { CardProps } from '../Card';
import './Footer.css';

const CardFooter: React.FC<CardProps> = ({ className, children }) => {
	return (
		<div className={`${className} flex items-center p-6 pt-0`}>
			{children}
		</div>
	);
};

export default CardFooter;
