import mongoose, { Schema } from "mongoose";
import moment from "moment";

const Counter = mongoose.model("Counter");

const UrlSchema = new Schema({
	_id: { type: Number },
	created: { type: Date },
	url: { type: String },
	count: { type: Number },
}, {toObject: { virtuals: true }});

UrlSchema.virtual("visitors", {
	ref: "Visitor",
	localField: "_id",
	foreignField: "url"
})


// Before creating a new URL, increment the counter 
UrlSchema.pre('save', function(next){
	let doc = this;

	Counter.findByIdAndUpdate({ _id: "count"}, {$inc: {seq: 1} }, function(err, counter){

		if(err)
			return next(error);
		
		// Setting values	
		doc._id = counter.seq;
		doc.created = moment();
		doc.count = 0;

		next();
	});


})

mongoose.model('Url', UrlSchema);
  