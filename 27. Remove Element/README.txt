It performs an in-place filter. It overwrites unwanted elements while scanning once.

1. `k` tracks the next write position for a kept element.
2. Loop reads each element at index `i`.
3. If `nums[i]` is not equal to `val`, the element is kept. It is written to `nums[k]`, and `k` increments.
4. If `nums[i]` equals `val`, nothing is written and `k` does not move. This effectively compresses the array by skipping the removed value.
5. After the loop, the first `k` positions of `nums` contain all elements not equal to `val` in their original relative order.
6. The function returns `k`, the new logical length of the filtered array.
