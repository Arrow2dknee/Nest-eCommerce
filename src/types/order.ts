import { Document } from 'mongoose';

import { User } from './user';
import { Product } from './product';

interface PurchaseInfo {
	product: Product;
	quantity: number;
}

export interface Order extends Document {
	owner: User;
	totalCartValue: number;
	products: PurchaseInfo[];
}
