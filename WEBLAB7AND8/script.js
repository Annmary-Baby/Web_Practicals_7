document.addEventListener('DOMContentLoaded', () => {
    const fetchBooksButton = document.getElementById('fetchBooks');
    const bookList = document.getElementById('bookList');

    fetchBooksButton.addEventListener('click', async () => {
        try {
            // Replace 'books.json' with your API URL
            const apiUrl = 'https://openlibrary.org/works/OL45804W/editions.json'; // Replace with your API URL

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const booksData = await response.json();
            console.log(booksData)
            displayBooks(booksData.entries);
        } catch (error) {
            console.error(error.message);
        }
    });

    function displayBooks(booksData) {
        const bookListHTML = `
            <h2>Book List</h2>
            <ul>
                ${booksData.map(book => `<li>${book.title} by ${book.author}</li>`).join('')}
            </ul>
        `;

        bookList.innerHTML = bookListHTML;
    }
});
