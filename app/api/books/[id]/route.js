import { NextResponse } from 'next/server';
import booksData from '../../../../lib/data.json';

export async function GET(request, { params }) {
  try {
    const book = booksData.find(b => b.id === params.id);
    
    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(book);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch book' },
      { status: 500 }
    );
  }
}
