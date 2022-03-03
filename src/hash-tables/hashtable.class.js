class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  };

  set(key, value) {
    const index = this.hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return this.data;
  };

  get(key){
    const index = this.hash(key);
    const currentBucket = this.data[index];
    if (!currentBucket) return undefined;

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
  };

  del(key){
    const index = this.hash(key);
    const currentBucket = this.data[index];
    if (!currentBucket) return undefined;

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket.splice(i, 1)[0];
      }
    }
    return undefined;
  }

  getKeys(){
    let keys = [];

    this.data.forEach(bucket => {
      if (bucket) {
        bucket.forEach(keyValuePair => {
          keys.push(keyValuePair[0]);
        });
      }
    });

    return keys;
  }
}

module.exports = HashTable;