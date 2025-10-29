class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let crawler = this.root;
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 97;
        if (!crawler.children[index]) {
            crawler.children[index] = new TrieNode();
        }
        // set crawler to the new index/node
        crawler = crawler.children[index];
    }
    // set crawler to the end of the word
    crawler.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let crawler = this.root;
    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i) - 97;
        if (!crawler.children[index]) {
            return false;
        }
        crawler = crawler.children[index];
    }
    // return true if the crawler is at the end of the word
    return crawler.isEndOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let crawler = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let index = prefix.charCodeAt(i) - 97;
        if (!crawler.children[index]) {
            return false;
        }
        crawler = crawler.children[index];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */