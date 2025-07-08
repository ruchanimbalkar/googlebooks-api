# Google Books Finder

This is a simple web application that allows you to search for books using the Google Books API.

---

## Instructions

To run this application locally, simply open the `index.html` file in your web browser.

### How to Use the App:
1. Enter a book title into the search bar.
2. Click the "Search" button.
3. The app will display results from Google Books, including a link to the Play Store for each book where available.

---

## What this app does?

This application serves as a straightforward interface to the Google Books API. Its primary function is to:
* Find books based on a title provided by the user.
* Display relevant information for each book.
* Provide direct links to the Google Play Store for purchasing or viewing the books.

---

## Notes

This is a front-end vanilla JavaScript project, designed for simplicity and direct interaction with the Google Books API.

**Important regarding API Key Security:**

I understand that my API Key for the Google Books API is currently exposed to the public within the client-side code. This is not a secure practice for production applications.

**Future Plans for Security:**

I plan to address this security concern by creating a **React version** of this project in the future. The React version of this app will enable me to:
* Securely store my API Key using `.env` files (for local development) and GitHub Secrets (for CI/CD pipelines).
* In a more structured React environment, I will be able to fully conceal the API key from the public client-side.

The next version of this application will prioritize and ensure that my API key is not exposed to the public, adhering to best security practices.