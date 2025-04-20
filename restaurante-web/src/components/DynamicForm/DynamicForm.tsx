import { FieldError, Resolver, useForm } from 'react-hook-form';
import { DynamicFormField } from '../../models/FormField';
import './DynamicForm.css';
import DynamicField from './DynamicField/DynamicField';
import Button from '../Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';

export type DynamicFormProps = {
	fields: DynamicFormField[];
	onSubmit: (data: any) => void;
	resolver: Resolver<any>;
};

const DynamicForm: React.FC<DynamicFormProps> = ({
	fields,
	onSubmit,
	resolver,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver,
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='dynamic-form'>
			{fields.map((field) => (
				<DynamicField
					key={field.name}
					field={field}
					register={register}
					error={errors[field.name] as FieldError}
				/>
			))}
			<Button label='Aceptar' type='submit' disabled={!errors}></Button>
		</form>
	);
};

export default DynamicForm;
