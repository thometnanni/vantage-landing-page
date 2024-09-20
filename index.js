function getTransformedBoxCorners(box) {
    const rect = box.getBoundingClientRect();
    const style = window.getComputedStyle(box);
    const transform = style.transform;
    const containerRect = document.getElementById('container').getBoundingClientRect();
    const borderWidth = parseFloat(style.borderWidth) || 0; 

    if (transform === 'none') {
        return {
            topLeft: { x: rect.left - containerRect.left + borderWidth / 2, y: rect.top - containerRect.top + borderWidth / 2 },
            topRight: { x: rect.right - containerRect.left - borderWidth / 2, y: rect.top - containerRect.top + borderWidth / 2 },
            bottomLeft: { x: rect.left - containerRect.left + borderWidth / 2, y: rect.bottom - containerRect.top - borderWidth / 2 },
            bottomRight: { x: rect.right - containerRect.left - borderWidth / 2, y: rect.bottom - containerRect.top - borderWidth / 2 },
        };
    }

    const matrix = new DOMMatrix(transform);

    const corners = {
        topLeft: applyMatrixToPoint({ x: rect.left, y: rect.top }, matrix, containerRect, borderWidth),
        topRight: applyMatrixToPoint({ x: rect.right, y: rect.top }, matrix, containerRect, borderWidth),
        bottomLeft: applyMatrixToPoint({ x: rect.left, y: rect.bottom }, matrix, containerRect, borderWidth),
        bottomRight: applyMatrixToPoint({ x: rect.right, y: rect.bottom }, matrix, containerRect, borderWidth)
    };

    return corners;
}

function applyMatrixToPoint(point, matrix, containerRect, borderWidth) {
    const transformedPoint = matrix.transformPoint(new DOMPoint(point.x, point.y));

    return {
        x: transformedPoint.x - containerRect.left + borderWidth / 2,
        y: transformedPoint.y - containerRect.top + borderWidth / 2
    };
}

function createLine(svg, point1, point2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", point1.x);
    line.setAttribute("y1", point1.y);
    line.setAttribute("x2", point2.x);
    line.setAttribute("y2", point2.y);
    line.setAttribute("stroke", "lime");
    line.setAttribute("stroke-width", "4");

    svg.appendChild(line);
}

function connectBoxesInPair(pair) {
    const boxes = pair.querySelectorAll('.box');
    const svg = document.getElementById('svgContainer');

    if (boxes.length === 2) {
        const box1 = boxes[0];
        const box2 = boxes[1];

        const corners1 = getTransformedBoxCorners(box1);
        const corners2 = getTransformedBoxCorners(box2);

        createLine(svg, corners1.topLeft, corners2.topLeft);
        createLine(svg, corners1.topRight, corners2.topRight);
        createLine(svg, corners1.bottomLeft, corners2.bottomLeft);
        createLine(svg, corners1.bottomRight, corners2.bottomRight);
    }
}

function connectAllPairs() {
    const pairs = document.querySelectorAll('.pair');
    const svg = document.getElementById('svgContainer');
    svg.innerHTML = '';  

    pairs.forEach(pair => connectBoxesInPair(pair));
}

function updateLines() {
    connectAllPairs();
    requestAnimationFrame(updateLines);
}

window.addEventListener('load', updateLines);
window.addEventListener('scroll', updateLines);
