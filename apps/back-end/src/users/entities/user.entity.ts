import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop()
  age: number;
  @Prop()
  authorization: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
