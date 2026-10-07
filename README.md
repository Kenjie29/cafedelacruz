# Café de la Cruz

A warm, responsive **static showcase website** for Café de la Cruz. The public site does not use a database, API, login, feedback form, or online ordering.

## Local development

Serve the project root with any static server, for example:

```bash
npx serve .
```

The website works on GitHub Pages, Vercel, or any static web host.

## Updating showcase content

Products and customer photos are manually maintained in [`app.js`](app.js):

- Add product image paths to `productImages`
- Add customer image paths to `customerImages`
- Put product photos in `images/products/`
- Put customer photos in `images/customers/`

No product names, prices, feedback, or database records are required.

## Deploy on GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`.
5. Save and open the generated Pages URL.
