import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(256),
  price: z.number(),
});

export default schema;
