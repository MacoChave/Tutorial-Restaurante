import { CardProps } from '../Card';
import './Header.css';

const CardHeader: React.FC<CardProps> = ({ className, children }) => {
	return (
		<div className={`${className} flex flex-col space-y-1.5 p-6`}>
			{children}
		</div>
	);
};

export default CardHeader;
