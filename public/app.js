
const dummy_data = [
    { id: 1, value: 13, name: 'India'},
    { id: 2, value: 10, name: 'England'},
    { id: 3, value: 17, name: 'USA'},
    { id: 4, value: 7, name: 'Germany'},
    { id: 5, value: 3, name: 'Sri Lanka'}
];

const xScale = d3.scaleBand()
.domain(dummy_data.map((datapoint) => datapoint.name))
.rangeRound([0, 250]).padding(0.1);

const yScale = d3.scaleLinear().
domain([0, 18]).range([200, 0]);

const container = d3.select('svg')
.classed('container', true);

const bar = container.selectAll('.bar')
.data(dummy_data)
.enter()
.append('rect')
.classed('bar', true)
.attr('width', xScale.bandwidth())
.attr('height', (data) => 200 - yScale(data.value))
.attr('x', data => xScale(data.name))
.attr('y', data => yScale(data.value));

setTimeout(() => {
    bar.data(dummy_data.slice(0, 3)).exit().remove()
} , 4000);