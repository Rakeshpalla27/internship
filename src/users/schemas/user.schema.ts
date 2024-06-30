import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: Object, default: { id: 1, value: 1, children: [] } })
    tree: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
