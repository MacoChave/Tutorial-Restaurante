'use client';
import React, { ReactNode } from 'react';
import './Header.css';

export type HeaderProps = {
	title: string;
	subtitle?: string;
	icon?: ReactNode;
	children?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({
	title,
	subtitle,
	icon = undefined,
	children = [],
}) => {
	return (
		<header className='w-full h-20 px-4 py-2 gap-4 flex flex-row place-content-start place-items-center'>
			{icon}
			<div className='flex flex-col place-content-center place-items-start'>
				<p className='text-4xl font-bold text-black'>{title}</p>
				{subtitle && (
					<p className='text-sm text-gray-500'>{subtitle}</p>
				)}
			</div>
			<div className='flex-1'></div>
			{children}
		</header>
	);
};

export default Header;
