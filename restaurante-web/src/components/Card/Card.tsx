import './Card.css';

export type CardProps = {
	className?: string;
	children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
	return (
		<div
			className={`${className} rounded-lg border bg-gray-100 text-gray-950 shadow-sm`}
			{...props}>
			{children}
		</div>
	);
};

export default Card;
