For now, let's ignore the floor operation, so an operation is merging two elements a_i and a_j into one element the fraction \frac{a_i + a_j}{2}.

Consider the end result. Each initial element in a must contribute a fractional coefficient to the final result. It turns out that the sum of the coefficients is fixed (it must be 1). That means we can greedily give the biggest values in a the biggest coefficients.

One way to do this is by sorting a in ascending order. We merge a_1 and a_2, then merge that result with a_3, then merge that result with a_4, and so on until a_n. If we do this, a_n contributes 1/2 times, a_{n-1} contributes 1/4 times, a_{n-2} contributes 1/8 times, and so on. This is the optimal way to get the maximum final result.

It turns out that the strategy above is also the optimal strategy for the original version of the problem. So we can simulate that process to get the answer.

Time complexity for each test case: *O(n log n)*
