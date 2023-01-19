import{  z } from 'zod';
import { BadRequestException } from "../../Erros/bad-request-exception";

const schema = z.object({
    id: z.string(),
    document: z.string()
})

export  type Data = z.infer<typeof schema>

export const handler = async (event: any) => {

 const { Data } = event;
 try {
    const data = schema.parse(Data);
    return { ...event, Data: data};
 } catch (err) {
    throw new BadRequestException(err);
 }

}