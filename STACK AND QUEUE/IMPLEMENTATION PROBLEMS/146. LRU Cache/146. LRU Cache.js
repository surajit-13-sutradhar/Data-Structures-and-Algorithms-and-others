/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // this is for maintaining insertion order
    
    // dummy head and tail
    // used for avoiding null checks
    this.head = new Node(0, 0); // by default, key = 0 and value = 0;
    this.tail = new Node(0, 0); // points to the end of the dll
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

// removing a node from the dll
LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

// Insert a node right after head
LRUCache.prototype._insert = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this._remove(node);
    this._insert(node); // Move to front
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this._remove(this.cache.get(key));
    }

    const newNode = new Node(key, value);
    this._insert(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size > this.capacity) {
        const lru = this.tail.prev;
        this._remove(lru);
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */