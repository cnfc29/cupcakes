import { z } from 'zod';

export const SportSchema = z.object({
  id: z.number(),
  name: z.string(),
  img: z.string(),
});

export const SportSchemaList = z.array(SportSchema);

export type SportType = z.infer<typeof SportSchema>;
