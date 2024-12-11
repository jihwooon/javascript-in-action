'use server'

import { revalidatePath } from 'next/cache'

export async function createReviewAction(formData: FormData) {
    const bookId= formData.get("bookId")?.toString();
    const content = formData.get('content')?.toString();
    const author = formData.get('author')?.toString();

    if (!(bookId && content && author)) {
        return;
    }

    try {
        const response = await fetch(`http://localhost:12345/review`, {
            method: "POST",
            body: JSON.stringify({
                bookId, content,author
            })
        });

        revalidatePath(`/book/${bookId}`);
    } catch(err) {
        console.error(err)
        return;
    }
}