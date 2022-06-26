# 🥉 Cubic equation

Javascript implementation calculating roots of cubic equation. Based on [Alexander Shtuchkin's](https://stackoverflow.com/a/27176424) implementation.

## Installation

```bash
npm install @alesmenzel/cubic-equation
```

## Usage

```ts
import { calculateCubicRoots } from "@alesmenzel/cubic-equation"

// ax^3 + bx^2 + cx + d = 0
const a = 1
const b = 2
const c = 3
const d = 4
calculateCubicRoots(a, b, c, d)
calculateCubicRoots(a, b, c, d, {
  isZero(value) {
    return value === 0 // or use the default that treats numbers < 1e10 as zeros
  }
})
```
