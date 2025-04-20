import { FieldError, UseFormRegister } from 'react-hook-form';
import { DynamicFormField } from '../../../models/FormField';
import './DynamicField.css';

export type DynamicFieldProps = {
	field: DynamicFormField;
	register: UseFormRegister<any>;
	error?: FieldError;
};

const DynamicField: React.FC<DynamicFieldProps> = ({
	field: { name, label, placeholder, type, options, valueAsNumber = false },
	register,
	error,
}) => {
	switch (type) {
		case 'select':
			return (
				<div className='flex flex-col gap-2 space-y-2'>
					<label htmlFor={name}>{label}</label>
					<select id={name} {...register(name, { valueAsNumber })}>
						<option value=''>{placeholder}</option>
						{options?.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					{error && <span className='error'>{error.message}</span>}
				</div>
			);
		case 'radio':
			return (
				<div className='flex flex-col gap-2 space-y-2'>
					{label && <p>{label}</p>}
					<div className='grid grid-cols-1 gap-2'>
						{options?.map((option) => (
							<label
								key={option.value}
								className='flex items-center space-x-2'>
								<input
									type={type}
									value={option.value}
									{...register(name, { valueAsNumber })}
								/>
								{option.label}
							</label>
						))}
					</div>
					{error && <span className='error'>{error.message}</span>}
				</div>
			);
		case 'checkbox':
			return (
				<div className='flex flex-col gap-2 space-y-2'>
					{label && <p>{label}</p>}
					<div className='grid grid-cols-2 gap-2'>
						{options?.map((option) => (
							<label key={option.value} className='text-sm'>
								<input
									type={type}
									value={option.value}
									className='space-x-2'
									{...register(name)}
								/>
								{option.label}
							</label>
						))}
					</div>
					{error && <span className='error'>{error.message}</span>}
				</div>
			);
		default:
			return (
				<div className='space-y-2'>
					<label htmlFor={name}>{label}</label>
					<input
						type={type}
						id={name}
						placeholder={placeholder}
						{...register(name, { valueAsNumber })}
					/>
					{error && <span className='error'>{error.message}</span>}
				</div>
			);
	}
};

export default DynamicField;
