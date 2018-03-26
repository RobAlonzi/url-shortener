import mongoose, { Schema } from "mongoose";
import moment from "moment";

const VisitorSchema = new Schema({
	url : { type: Number },
	browser: { type: String },
	browserVersion: { type: String },
	date: { type: Date, default: moment },
	deviceType: { type: String },
	engine: { type: String },
	ipAddress: { type: String },
	os: { type: String },
	userAgent: { type: String }
});

mongoose.model('Visitor', VisitorSchema);
