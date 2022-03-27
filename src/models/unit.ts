import { Schema } from 'mongoose';

export interface Unit {
  name: string;
  shortName: string;
}

// MongoDB Translation
export const Unit = new Schema<Unit>({
  name: String,
  shortName: String,
});
