import { CardProps } from '../Card';
import './Content.css';

const CardContent: React.FC<CardProps> = ({ className, children }) => {
	return <div className={`${className} p-6 pt-0`}>{children}</div>;
};

export default CardContent;
