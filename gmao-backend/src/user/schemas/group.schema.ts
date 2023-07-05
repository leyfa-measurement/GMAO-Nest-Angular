import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroupDocument = Group & Document;

@Schema()
export class Group {

    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    description: string;
    
}

export const GroupSchema = SchemaFactory.createForClass(Group);