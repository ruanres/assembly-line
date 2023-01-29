
class StageNode {
  items = [];

  constructor(name, next, previous) {
    this.name = name;
    this.next = next;
    this.previous = previous;
  }

  appendItem(item) {
    this.items.push(item);
  }

  insertItem(item) {
    this.items.splice(0, 0, item);
  }

  moveItemToNext(item) {
    if (this.next) {
      this.next.insertItem(item);
    }
    this.removeItem(item);
  }

  moveItemToPrevious(item) {
    if (this.previous) {
      this.previous.appendItem(item);
    }
    this.removeItem(item);
  }

  removeItem(item) {
    this.items = this.items.filter(currentItem => currentItem !== item);
  }


}

export default StageNode;