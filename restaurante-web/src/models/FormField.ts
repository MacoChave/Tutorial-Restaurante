export type FieldType = 'text' | 'number' | 'select' | 'checkbox' | 'radio';

export interface Option {
	label: string;
	value: string | number;
}

export interface DynamicFormField {
	type: FieldType;
	name: string;
	label?: string;
	placeholder?: string;
	options?: Option[];
	valueAsNumber?: boolean;
}
