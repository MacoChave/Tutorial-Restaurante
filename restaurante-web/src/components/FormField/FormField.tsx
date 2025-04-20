import { FieldError, UseFormRegister } from 'react-hook-form';
import './FormField.css';

export type FormFieldProps = {
	type: string;
	placeholder: string;
	name: string;
	register: UseFormRegister<any>;
	error: FieldError;
	valueAsNumber?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField: React.FC<FormFieldProps> = ({
	type = 'text',
	placeholder,
	name,
	register,
	error,
	valueAsNumber = false,
	...rest
}) => {
	return (
		<div className=''>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, { valueAsNumber })}
				{...rest}
			/>
			{error && <span>{error.message}</span>}
		</div>
	);
};

export default FormField;
