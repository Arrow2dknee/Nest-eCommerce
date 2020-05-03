import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: String,
		price: {
			type: String,
			required: true,
		},
		isAvailable: {
			type: Boolean,
			required: true,
			default: true,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: {},
	},
);
