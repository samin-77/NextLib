import { NextResponse } from 'next/server';
import booksData from '../../../lib/data.json';

export async function GET() {
  try {
    return NextResponse.json(booksData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}
