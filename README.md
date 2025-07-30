# React + TypeScript + Vite + Tailwind CSS

This template repository provides a minimal setup to get React working in Vite with HMR and some ESLint rules, plus Tailwind CSS and Vitest configuration.

### Clone

To create a repo from this one:
```bash
gh repo create <new_repo_name> --template MatiNav/react-vite-boilerplate --clone --public && cd <new_repo_name> && npm i
```


### Tailwind CSS

This project is already configure with Tailwind CSS to be used across the entire app.

### Vitest

This project is configured to use vitest as the testing library. It was installed following these steps:

1. Install dependencies
```sh
npm i -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```
2. Create a [./test/setup.ts](./test/setup.ts) file with the code that will run after each test
3. Create [./vitest.config.ts](./vitest.config.ts) to define vitest config
4. Add `test: vitest` command in package.json
5. Add this option in the [tsConfig.json](./tsConfig.json)`:
```json
"compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
```
6. Add the same option inside the compilerOptions in the [tsConfig.app.json](./tsConfig.app.json):
```json
"types": ["vitest/globals", "@testing-library/jest-dom"]
```


