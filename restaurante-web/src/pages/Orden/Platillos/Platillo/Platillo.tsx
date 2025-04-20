import { zodResolver } from '@hookform/resolvers/zod';
import DynamicForm from '../../../../components/DynamicForm/DynamicForm';
import { DynamicFormField } from '../../../../models/FormField';
import { FormData, PlatilloSchema } from '../../../../models/Platillo';
import './Platillo.css';

export type PlatilloProps = {
	// types...
};

const formFields: DynamicFormField[] = [
	{
		name: 'meatType',
		label: 'Tipo de carne',
		type: 'select',
		options: [
			{ label: 'Puyaso', value: 'puyaso' },
			{ label: 'Coulotte', value: 'coulotte' },
			{ label: 'Costilla', value: 'costilla' },
		],
	},
	{
		name: 'meatDoneness',
		label: 'Término de cocción',
		type: 'radio',
		options: [
			{ label: 'Medio', value: 'rare' },
			{ label: '3/4', value: 'medium' },
			{ label: 'Bien cocido', value: 'well-done' },
		],
	},
	{
		name: 'selectedSides',
		label: 'Guarniciones (Seleccione 3)',
		type: 'checkbox',
		options: [
			{ label: 'Frijol', value: 'frijol' },
			{ label: 'Chile de árbol', value: 'chile-de-arbol' },
			{ label: 'Cebollin', value: 'cebollin' },
			{ label: 'Tortillas', value: 'tortillas' },
			{ label: 'Chirmol', value: 'chirmol' },
		],
	},
];

const Platillo: React.FC<PlatilloProps> = ({}) => {
	return (
		<DynamicForm
			fields={formFields}
			onSubmit={(data: FormData) => {
				console.log(data);
			}}
			resolver={zodResolver(PlatilloSchema)}
		/>
	);
};

export default Platillo;
