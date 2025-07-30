# monorepo-paths

This is an example project for a monorepo-paths issue.

### Use Vite alias

packages/website/vite.config.ts

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@server': path.resolve(__dirname, '../server/src')
    }
  }
})
```

**Work (dev & build)**

packages/server/src/api/index.ts

```ts
export { test } from '../utils'
```

**Not work (dev & build)**

packages/server/src/api/index.ts

```ts
export { test } from '@/utils'
```

### Use vite-tsconfig-paths

packages/website/vite.config.ts

```ts
export default defineConfig({
  plugins: [react(), tsconfigPaths({})]
})
```

**Work (dev & build)**

packages/server/src/api/index.ts

```ts
export { test } from '../utils'
```

**work (dev)**

packages/server/src/api/index.ts

`pnpm dev`

```ts
export { test } from '@/utils'
```

**Not work (build)**

packages/server/src/api/index.ts

`pnpm build`

```ts
export { test } from '@/utils'
```
