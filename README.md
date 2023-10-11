# Reproduction - Pinia middleware SSR

When using Pinia server-side, saved state leaks both on reload and cross-browser.

- Nuxt 3.7.4
- @pinia/nuxt: 0.4.11

### Setup

```bash
npm ci
# in nuxt.config.js, comment out `devServer` block if you don't want https. Then:
npm run dev
```

### Reproduction

1. Navigate to https://localhost:3000/. You should see the the word `tabby` printed on the screen.
2. Open `@/middleware/cat.js`
3. Comment out `store.setCat('tabby')` on line 6 to disable further saving of state to the store
4. Refresh or hard refresh the page → `tabby` is still printed even though it should not be. The default `shabby` should be visible.
5. Navigate to https://localhost:3000/ _in a different browser_ → `tabby` is still printed even though it should not be. The default `shabby` should be visible.
