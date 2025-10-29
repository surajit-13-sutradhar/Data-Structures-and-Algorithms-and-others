/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode{
    constructor() {
        this.word = "";
        this.isEndOfWord = false;
        this.children = new Array(26).fill(null);
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode;
    }

    insert(word) {
        let crawler = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if(!crawler.children[index]) {
                crawler.children[index] = new TrieNode();
            }
            crawler = crawler.children[index];
        }
        crawler.isEndOfWord = true;
        crawler.word = word;
    }
}

const dfs = function(board, i, j, node, result) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === "#") return;

    let char = board[i][j];
    let index = char.charCodeAt(0) - 97;

    // if the current node's children do not have char, return
    if (!node.children[index]) return;

    // we move the node to the index of the previous node's children
    node = node.children[index];

    // if reached the end of word
    if (node.isEndOfWord) {
        // push the word in the result array
        result.push(node.word)
        node.isEndOfWord = false;
    }

    // mark the cell as visited
    board[i][j] = "#";

    // now check all the cells in the four directions
    dfs(board, i - 1, j, node, result);
    dfs(board, i + 1, j, node, result);
    dfs(board, i, j - 1, node, result);
    dfs(board, i, j + 1, node, result);

    // unmark the cell again for backtracking step
    board[i][j] = char;

}

var findWords = function(board, words) {
    let trie = new Trie();

    // insert words in the trie
    for (let word of words) {
        trie.insert(word);
    }

    let result = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, trie.root, result);
        }
    }

    return result;
};