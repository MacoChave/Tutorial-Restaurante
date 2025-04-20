'use client';
import React from 'react';
import './Button.css';

export type ButtonProps = {
	variant?: 'primary' | 'secondary' | 'text';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	onClick?: () => void;
	label: string;
	rightChild?: React.ReactNode;
	leftChild?: React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	label,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	onClick = () => {},
	rightChild = null,
	leftChild = null,
	className = '',
	...props
}) => {
	let classes =
		'px-4 py-2 flex flex-row gap-2 justify-center items-center rounded-md cursor-pointer ' +
		className;
	switch (variant) {
		case 'primary':
			classes += ' bg-blue-500 text-white hover:bg-blue-600';
			break;
		case 'secondary':
			classes += ' bg-gray-500 text-white hover:bg-gray-600';
			break;
		case 'text':
			classes += ' text-blue-500 hover:bg-blue-100';
			break;
	}

	if (disabled) classes += ' opacity-50 cursor-not-allowed';
	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{leftChild}
			<span>{label}</span>
			{rightChild}
		</button>
	);
};

export default Button;
