let previousWidth = window.innerWidth;

function updateAllLines() {
    const svg = document.getElementById('svgContainer');
    const boxPairs = svg.querySelectorAll('.box-pair');

    boxPairs.forEach(pair => {
        const boxes = pair.querySelectorAll('.box');

        if (boxes.length === 2) {
            const box1 = boxes[0];
            const box2 = boxes[1];

            const boxGroup1 = box1.closest('.box-group') || box1;
            const boxGroup2 = box2.closest('.box-group') || box2;

            const corners1 = getBoxCorners(box1, boxGroup1);
            const corners2 = getBoxCorners(box2, boxGroup2);

            const lines = pair.querySelectorAll('.connector-line');

            if (lines.length >= 4) {
                updateLine(lines[0], corners1.topLeft, corners2.topLeft);
                updateLine(lines[1], corners1.topRight, corners2.topRight);
                updateLine(lines[2], corners1.bottomRight, corners2.bottomRight);
                updateLine(lines[3], corners1.bottomLeft, corners2.bottomLeft);
            }
        }
    });
}

function getBoxCorners(element, group = null) {
    const svg = document.getElementById('svgContainer');
    const bbox = element.getBBox();
    const matrix = (group || element).getScreenCTM();

    const corners = {
        topLeft: svg.createSVGPoint(),
        topRight: svg.createSVGPoint(),
        bottomRight: svg.createSVGPoint(),
        bottomLeft: svg.createSVGPoint()
    };

    corners.topLeft.x = bbox.x;
    corners.topLeft.y = bbox.y;
    corners.topRight.x = bbox.x + bbox.width;
    corners.topRight.y = bbox.y;
    corners.bottomRight.x = bbox.x + bbox.width;
    corners.bottomRight.y = bbox.y + bbox.height;
    corners.bottomLeft.x = bbox.x;
    corners.bottomLeft.y = bbox.y + bbox.height;

    for (let key in corners) {
        if (matrix) {
            corners[key] = corners[key].matrixTransform(matrix);
        }

        corners[key].y += window.scrollY; 
    }

    return corners;
}

function updateLine(line, point1, point2) {
    line.setAttribute('x1', point1.x);
    line.setAttribute('y1', point1.y);
    line.setAttribute('x2', point2.x);
    line.setAttribute('y2', point2.y);
}

window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    if (currentWidth !== previousWidth) {
        previousWidth = currentWidth;
        updateAllLines();
    }
});

window.addEventListener('load', updateAllLines);
window.addEventListener('scroll', updateAllLines);

updateAllLines();
