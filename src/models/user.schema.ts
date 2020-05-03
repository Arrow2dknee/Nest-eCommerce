import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			maxlength: 32,
		},
		email: {
			type: String,
			required: true,
			maxlength: 254,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		seller: {
			type: Boolean,
			default: false,
			// a user created is by default considered as a buyer
		},
		address: {
			addr1: String,
			addr2: String,
			city: String,
			state: String,
			country: String,
			zipCode: Number,
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
