# zione utils

Practical developer utilities for real-world projects.

## Utilities
- debounce
- throttle
- sleep

## Goal
Improve developer experience with simple, reliable utilities.

## Contact
Telegram: @zione_o
## debounce

Delay function execution until after a specified time has passed
since the last call.

### Usage
```js
import { debounce } from './index.js';

const onResize = debounce(() => {
  console.log('resized');
}, 300);

window.addEventListener('resize', onResize);
