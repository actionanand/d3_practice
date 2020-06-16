const dummy_data1 = [
    { id: 1, value: 13, name: 'India'},
    { id: 2, value: 10, name: 'England'},
    { id: 3, value: 17, name: 'USA'},
    { id: 4, value: 7, name: 'Germany'},
    { id: 5, value: 3, name: 'Sri Lanka'}
];

// d3.select('div')
// .selectAll('p')
// .data(dummy_data)
// .enter()
// .append('p')
// .text(data => data.name);


const container1 = d3.select('div')
.classed('container1', true)
.style('border', '1px solid #079191');

const bar1 = container1.selectAll('.bar')
.data(dummy_data1)
.enter()
.append('div')
.classed('bar1', true)
.style('width', '30px')
.style('height', data => data.value * 11 + 'px' );

