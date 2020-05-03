import { Document } from 'mongoose';

interface Address {
	addr1: string;
	addr2: string;
	city: string;
	state: string;
	country: string;
	zipCode: number;
}

export interface User extends Document {
	username: string;
	email: string;
	readonly password: string;
	seller: boolean;
	address: Address;
	isDeleted: boolean;
}
