var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	banner:String,
	eventType:String,
	externalLink:String,
	name:String,//
	date:{//
		full:Date,
		string:String,
	},
	eventTime:{
		full:Date,
		string:String
	},
	location:String,
	capacity:Number,
	description:String,
	price:Number,
	memberPrice:Number,
	sponsors:[String],
	regLink:String,
	registration:{
		url:String,
		date:{
			full:Date,
			string:String
		}
	},
	year:Number,
	past:Boolean,
	speakers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Speaker'}]
})
exports.Event = mongoose.model('Event',EventSchema);

var UpdateSchema = new mongoose.Schema({
	title:String,//
	date:{//
		full:Date,
		string:String,
	},
	description:String
})
exports.Update = mongoose.model('Update',UpdateSchema);

var SpeakerSchema = new mongoose.Schema({
	name:String,//
	position:String,
	company:String,
	bio:String,
	image:String,
	events:[{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
})
exports.Speaker = mongoose.model('Speaker',SpeakerSchema);

var BlogSchema = new mongoose.Schema({
	title:String,//
	date:{//
		full:Date,
		string:String,
	},
	text:String
})
exports.Blog = mongoose.model('Blog',BlogSchema);

var CarouselSchema = new mongoose.Schema({
	title:String,
	text:String,
	image:String,
	order:Number
})
exports.Carousel = mongoose.model('Carousel',CarouselSchema);

var BoardSchema = new mongoose.Schema({
	type:[String],
	name:String,
	image:String,
	position:String,
	company:{name:String, position:String, wesite:String},
	bio:String
})
exports.Board = mongoose.model('Board',BoardSchema);

var ContentSchema = new mongoose.Schema({
	page:String,
	type:String,
	text:String,
	image:String
})
exports.Content = mongoose.model('Content',ContentSchema);