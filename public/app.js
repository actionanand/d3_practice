
const countryData = {
    items: ['India', 'Sri Lanka', 'USA', 'Germany', 'UK'],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(index) {
        this.items.splice(index, 1);
    },
    updateItem(index, newItem) {
        this.items[index] = newItem;
    }
};

d3.select('ul')
.selectAll('li')
.data(countryData.items)
.enter()
.append('li')
.text(data => data);