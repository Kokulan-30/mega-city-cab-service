import { Schema, models, model, Document } from "mongoose";

export interface IDistance extends Document {
  from: string;
  to: string;
  distance: number;
  createdAt: Date;
}

const DistanceSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: "Location" },
  to: { type: Schema.Types.ObjectId, ref: "Location" },
  distance: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const Distance = models.Distance || model("Distance", DistanceSchema);

export default Distance;
