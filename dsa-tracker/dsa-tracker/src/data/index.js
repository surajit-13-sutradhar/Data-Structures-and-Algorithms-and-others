// Category order here = order on the page. Add a new topic by creating a file in ./categories and listing it below.

import cat01 from './categories/01-learn-the-basics.js';
import cat02 from './categories/02-basic-maths.js';
import cat03 from './categories/03-recursion-basics.js';
import cat04 from './categories/04-hashing.js';
import cat05 from './categories/05-sorting-techniques.js';
import cat06 from './categories/06-arrays.js';
import cat07 from './categories/07-binary-search.js';
import cat08 from './categories/08-strings-basic.js';
import cat09 from './categories/09-linked-list.js';
import cat10 from './categories/10-recursion-and-backtracking.js';
import cat11 from './categories/11-bit-manipulation.js';
import cat12 from './categories/12-stacks-and-queues.js';
import cat13 from './categories/13-sliding-window-and-two-pointer.js';
import cat14 from './categories/14-heaps.js';
import cat15 from './categories/15-greedy.js';
import cat16 from './categories/16-binary-trees.js';
import cat17 from './categories/17-binary-search-trees.js';
import cat18 from './categories/18-graphs.js';
import cat19 from './categories/19-dynamic-programming.js';
import cat20 from './categories/20-tries.js';
import cat21 from './categories/21-strings-advanced-algo.js';
import cat22 from './categories/22-maths.js';

export const categories = [
  cat01,
  cat02,
  cat03,
  cat04,
  cat05,
  cat06,
  cat07,
  cat08,
  cat09,
  cat10,
  cat11,
  cat12,
  cat13,
  cat14,
  cat15,
  cat16,
  cat17,
  cat18,
  cat19,
  cat20,
  cat21,
  cat22,
];

export const allProblems = categories.flatMap((c) => c.problems);
export const TOTAL = allProblems.length;
