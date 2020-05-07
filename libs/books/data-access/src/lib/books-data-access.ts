import { Book } from '@myorg/shared-models';

export async function getBooks(): Promise<Book[]> {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data.json();
}
