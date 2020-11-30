import { from } from "rxjs";
import { Document } from 'mongoose';

export interface ICar extends Document {
  readonly id: number;
  readonly brand: string;
  readonly color: string;
  readonly model: string;
}
