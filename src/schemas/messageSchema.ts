import {z} from 'zod'
 
export const messageSchema = z.object ({
    content: z
    .string()
    .min(10, {message: "Content must contain 10 chars"})
    .max(300, {message: "Content must not contain more than 300 chars"}), 
})