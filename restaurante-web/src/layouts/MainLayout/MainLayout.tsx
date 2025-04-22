import Header from '../../components/Header/Header';
import './MainLayout.css';

export type MainLayoutProps = {
	title?: string;
	subtitle?: string;
	goHome?: boolean;
	children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({
	title = 'Restaurante Web APP',
	subtitle,
	goHome = false,
	children,
}) => {
	return (
		<div className='w-full h-full flex flex-col border-4 border-dashed border-red-400'>
			<Header icon={`🍕`} title={title} subtitle={subtitle}>
				{goHome && (
					<a href='/' className='mainlayout__home'>
						<i className='fas fa-home'></i>
					</a>
				)}
			</Header>
			<main className='flex-auto border-4 border-dashed border-green-400'>
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
