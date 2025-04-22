import { z } from 'zod';

export type PlatilloFormData = {
	meatType: string;
	meatDoneness: string;
	selectedSides: string[];
};

export const PlatilloSchema = z.object({
	meatType: z.string({ message: 'Seleccione un tipo de carne' }),
	meatDoneness: z.string({ message: 'Seleccione un término de cocción' }),
	selectedSides: z
		.array(z.string({ message: 'Seleccione 3 guarniciones' }))
		.length(3, { message: 'Seleccione 3 guarniciones' }),
});

export type FormData = z.infer<typeof PlatilloSchema>;
