window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    // resizing

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    window.addEventListener('resize', (e) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // canvas.height = window.innerHeight;
        // canvas.width = window.innerWidth;
        // draw(canvas)
    })
    window.addEventListener('mouseout', (e) => {
        clientX = null;
        clientY = null;
    })

    // context.beginPath();
    // context.moveTo(100, 100);
    // context.lineTo(200, 200)
    // context.lineTo(100, 100)
    // context.stroke()

    // variables
    let paintColor = '';
    let fillColor = '';
    let painting = false;

    const paintBrush = document.querySelector('#paintBrush');
    const lineBrush = document.querySelector('#lineBrush');
    function startPosition() {
        painting = true;
    }
    function finishedPosition() {
        painting = false;
        context.beginPath();
    }
    // function squareBrush(e) {
    //     if (!painting) return;
    //     context.lineWidth = brushSize;
    //     context.lineCap = 'square'
    //     context.strokeStyle = paintColor;

    //     context.lineTo(e.clientX, e.clientY);
    //     context.stroke();
    //     context.beginPath();
    //     context.moveTo(e.clientX, e.clientY)

    //     // context.beginPath();
    //     // context.moveTo(0, 0);
    //     // context.lineTo(300, 500);
    //     // context.stroke();

    // }
    function drawBrush(e) {
        if (!painting) return;
        context.lineWidth = brushSize;
        context.lineCap = 'round'
        context.strokeStyle = paintColor;

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY)
    }
    // tool selector
    // let selectedTool = drawBrush
    // EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', drawBrush);

    // lineBrush.addEventListener('click', function (e) {
    //     // selectedTool = squareBrush;
    //     // console.log(selectedTool);
    //     canvas.addEventListener('mousemove', squareBrush);
    // })
    // paintBrush.addEventListener('click', function (e) {
    //     // selectedTool = drawBrush;
    //     // console.log(selectedTool);
    //     canvas.addEventListener('mousemove', drawBrush);
    // })

    const toolBox = document.querySelector('#toolBox')
    const button = document.querySelector('button');
    const eraser = document.querySelector('#eraser');
    const black = document.querySelector('#black');
    const red = document.querySelector('#red');
    const blue = document.querySelector('#blue');
    const green = document.querySelector('#green');
    const pink = document.querySelector('#pink');
    const brown = document.querySelector('#brown');
    const yellow = document.querySelector('#yellow');
    const orange = document.querySelector('#orange');
    const purple = document.querySelector('#purple');
    const currentColor = document.querySelectorAll('.color')

    // eraser option
    eraser.addEventListener('click', function (e) {
        context.strokeStyle = `${eraser.value}`;
        toolBox.style.border = `5px solid ${eraser.value}`
    })
    // selected paint color
    currentColor.forEach((color) => {
        color.addEventListener('click', (e) => {
            context.strokeStyle = `${color.value}`;
            toolBox.style.border = `5px solid ${color.value}`
        });
    });
    // Selected Brush Size
    const selectedSize = document.querySelector('#brushSize')
    const currentSize = document.querySelector('#currentSize')
    let brushSize = '';

    selectedSize.addEventListener('input', (e) => {
        brushSize = selectedSize.value;
        currentSize.textContent = `${selectedSize.value}`;
    })
    // Clear Canvas
    const clearAll = document.querySelector('#clearAll')

    clearAll.addEventListener('click', () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.beginPath();
    })
});