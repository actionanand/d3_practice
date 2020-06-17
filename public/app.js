
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
.data(countryData.items, data => data)
.enter()
.append('li')
.text(data => data);

setTimeout( () => {
    countryData.addItem('China');
    d3.select('ul')
    .selectAll('li')
    .data(countryData.items, data => data)
    .enter()
    .append('li')
    .classed('added', true)
    .text(data => data);
}, 2000);


setTimeout( () => {
    countryData.removeItem(0);
    d3.select('ul')
    .selectAll('li')
    .data(countryData.items, data => data)
    .exit()
    .classed('redundant', true);
}, 4000);

setTimeout( () => {
    countryData.updateItem(1, 'Canada');
    d3.select('ul')
    .selectAll('li')
    .data(countryData.items, data => data)
    .exit()
    .classed('updated', true)
    .text('Canada');
}, 6000);