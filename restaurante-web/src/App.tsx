import { Route, Switch } from 'wouter';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Combos from './pages/Orden/Combos/Combos';
import Dulces from './pages/Orden/Dulces/Dulces';
import Orden from './pages/Orden/Orden';
import Platillos from './pages/Orden/Platillos/Platillos';

function App() {
	return (
		<div className='w-screen h-screen'>
			<Switch>
				<Route path='/'>
					<MainLayout
						title='Dashboard'
						subtitle='Resumen de actividad del restaurante'
						goHome={true}>
						<Dashboard />
					</MainLayout>
				</Route>
				<Route path='/orden'>
					<MainLayout
						title='Ordenar'
						subtitle='Configura tus platillos, selecciona dulces o escoge uno de nuestros combos especiales'>
						<Orden />
					</MainLayout>
				</Route>
				<Route path='/orden/platillos'>
					<MainLayout
						title='Platillos'
						subtitle='Configura tus platillos seleccionando el tipo de carne, término de cocción y 3 guarniciones'>
						<Platillos />
					</MainLayout>
				</Route>
				<Route path='/orden/dulces'>
					<MainLayout
						title='Dulces'
						subtitle='Escoge tus dulces favoritos y selecciona la unidad de medida'>
						<Dulces />
					</MainLayout>
				</Route>
				<Route path='/orden/combos'>
					<MainLayout
						title='Combos'
						subtitle='Selecciona uno de nuestros combos y personaliza tus platillos y dulces'>
						<Combos />
					</MainLayout>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
