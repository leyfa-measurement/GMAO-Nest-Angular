import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Group } from './group.schema';

export type UserDocument = User & Document;

const Schema = require('mongoose').Schema;

@Schema()
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Group' }] })
    groups: Group[];
    
}

export const UserSchema = SchemaFactory.createForClass(User);