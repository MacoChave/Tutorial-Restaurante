import { z } from 'zod';

export type Dulce = {
	nombre: string;
	descripcion: string;
	precio_por_unidad: number | null;
};

export type DulcesFormData = {
	candyType: string;
	unitMeasure: string;
	quantity: number;
};

export const DulceSchema = z.object({
	candyType: z.string({ message: 'Seleccione un tipo de dulce' }),
	unitMeasure: z.string({ message: 'Seleccione una unidad de medida' }),
	quantity: z
		.number({ invalid_type_error: 'Ingrese una cantidad válida' })
		.min(1, { message: 'La cantidad debe ser mayor a 0' }),
});

export type FormData = z.infer<typeof DulceSchema>;
