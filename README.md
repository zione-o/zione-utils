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
##
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

## throttle

Limit function execution to once per interval.

```js
import { throttle } from './index.js';

const onScroll = throttle(() => {
  console.log('scrolling');
}, 200);

window.addEventListener('scroll', onScroll);
```
## throttle

Limit function execution to once per interval.

```js
import { throttle } from './index.js';

const onScroll = throttle(() => {
  console.log('scrolling');
}, 200);

window.addEventListener('scroll', onScroll);
```
## sleep

Pause execution for a specified amount of time.

This utility is useful for delaying actions, retry logic, or simulating
async behavior in real-world applications.

### Usage

```js
import { sleep } from './index.js';

async function example() {
  console.log('waiting...');
  await sleep(1000);
  console.log('done');
}

example();

