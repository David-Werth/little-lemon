import connectMongoDB from '@/libs/mongodb';
import { Coupon } from '@/models/couponModel';
import { NextResponse } from 'next/server';

export async function GET() {
	await connectMongoDB();
	const coupons = await Coupon.find();
	return NextResponse.json({ coupons });
}
