
function getBoxCornersWithRotation(box) {
    const rect = box.getBoundingClientRect();
    const containerRect = document.getElementById('container').getBoundingClientRect();
    const style = window.getComputedStyle(box);
    const transform = style.transform;

    if (transform === 'none') {
        return {
            topLeft: { x: rect.left - containerRect.left, y: rect.top - containerRect.top },
            topRight: { x: rect.right - containerRect.left, y: rect.top - containerRect.top },
            bottomLeft: { x: rect.left - containerRect.left, y: rect.bottom - containerRect.top },
            bottomRight: { x: rect.right - containerRect.left, y: rect.bottom - containerRect.top },
        };
    }

    const matrixValues = transform.match(/matrix\((.+)\)/)[1].split(',').map(parseFloat);
    const [a, b, c, d, e, f] = matrixValues;

    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;

    const corners = {
        topLeft: applyMatrixToPoint({ x: rect.left, y: rect.top }, centerX, centerY, a, b, c, d, e, f, containerRect),
        topRight: applyMatrixToPoint({ x: rect.right, y: rect.top }, centerX, centerY, a, b, c, d, e, f, containerRect),
        bottomLeft: applyMatrixToPoint({ x: rect.left, y: rect.bottom }, centerX, centerY, a, b, c, d, e, f, containerRect),
        bottomRight: applyMatrixToPoint({ x: rect.right, y: rect.bottom }, centerX, centerY, a, b, c, d, e, f, containerRect),
    };

    return corners;
}


function applyMatrixToPoint(point, centerX, centerY, a, b, c, d, e, f, containerRect) {
    const x = point.x - centerX;
    const y = point.y - centerY;

    const transformedX = a * x + c * y + centerX + e - containerRect.left; 
    const transformedY = b * x + d * y + centerY + f - containerRect.top;  

    return { x: transformedX, y: transformedY };
}


function createLine(container, point1, point2) {
    const line = document.createElement('div');
    line.className = 'line';

    const length = Math.hypot(point2.x - point1.x, point2.y - point1.y);
    const angle = Math.atan2(point2.y - point1.y, point2.x - point1.x) * 180 / Math.PI;

    line.style.width = `${length}px`;
    // line.style.height = '2px';
    line.style.position = 'absolute';
    // line.style.backgroundColor = 'black';
    line.style.transformOrigin = '0 0';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.top = `${point1.y}px`;
    line.style.left = `${point1.x}px`;

    container.appendChild(line);
}


function connectBoxesInPair(pair) {
    const boxes = pair.querySelectorAll('.box');
    const container = document.getElementById('container');

    if (boxes.length === 2) {
        const box1 = boxes[0];
        const box2 = boxes[1];

        const corners1 = getBoxCornersWithRotation(box1);
        const corners2 = getBoxCornersWithRotation(box2);

        
        createLine(container, corners1.topLeft, corners2.topLeft);
        createLine(container, corners1.topRight, corners2.topRight);
        createLine(container, corners1.bottomLeft, corners2.bottomLeft);
        createLine(container, corners1.bottomRight, corners2.bottomRight);
    }
}


function connectAllPairs() {
    const pairs = document.querySelectorAll('.pair');
    const existingLines = document.querySelectorAll('.line');

    
    existingLines.forEach(line => line.remove());

    
    pairs.forEach(pair => connectBoxesInPair(pair));
}


function updateLines() {
    connectAllPairs();
    requestAnimationFrame(updateLines); 
}


window.addEventListener('load', updateLines);
window.addEventListener('scroll', updateLines);  
