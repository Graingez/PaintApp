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
        draw(canvas)
    })

    // context.beginPath();
    // context.moveTo(100, 100);
    // context.lineTo(200, 200)
    // context.lineTo(100, 100)
    // context.stroke()

    // variables
    let paintColor = '';
    let painting = false;

    function startPosition() {
        painting = true;
    }
    function finishedPosition() {
        painting = false;
        context.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        context.lineWidth = brushSize;
        context.lineCap = 'round'
        context.strokeStyle = paintColor;

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY)
    }
    // EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

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
    eraser.addEventListener('click', function (e) {
        context.strokeStyle = `${eraser.value}`;
        toolBox.style.border = `5px solid ${eraser.value}`
    })

    currentColor.forEach((color) => {
        color.addEventListener('click', (e) => {
            context.strokeStyle = `${color.value}`;
            toolBox.style.border = `5px solid ${color.value}`
        });
    });

    // currentColor.addEventListener('click', (e) => {
    //     console.log(target.value);
    // })

    // black.addEventListener('click', function (e) {
    //     context.strokeStyle = `${black.value}`;
    //     toolBox.style.border = `5px solid ${black.value}`
    // })
    // red.addEventListener('click', function (e) {
    //     context.strokeStyle = `${red.value}`;
    //     toolBox.style.border = `5px solid ${red.value}`
    // })
    // blue.addEventListener('click', function (e) {
    //     context.strokeStyle = `${blue.value}`;
    //     toolBox.style.border = `5px solid ${blue.value}`
    // })
    // green.addEventListener('click', function (e) {
    //     context.strokeStyle = `${green.value}`;
    //     toolBox.style.border = `5px solid ${green.value}`
    // })
    // pink.addEventListener('click', function (e) {
    //     context.strokeStyle = `${pink.value}`;
    //     toolBox.style.border = `5px solid ${pink.value}`
    // })
    // brown.addEventListener('click', function (e) {
    //     context.strokeStyle = `${brown.value}`;
    //     toolBox.style.border = `5px solid ${brown.value}`
    // })
    // yellow.addEventListener('click', function (e) {
    //     context.strokeStyle = `${yellow.value}`;
    //     toolBox.style.border = `5px solid ${yellow.value}`
    // })
    // orange.addEventListener('click', function (e) {
    //     context.strokeStyle = `${orange.value}`;
    //     toolBox.style.border = `5px solid ${orange.value}`
    // })
    // purple.addEventListener('click', function (e) {
    //     context.strokeStyle = `${purple.value}`;
    //     toolBox.style.border = `5px solid ${purple.value}`
    // })

    const selectedSize = document.querySelector('#brushSize')
    const currentSize = document.querySelector('#currentSize')
    let brushSize = '';

    selectedSize.addEventListener('input', (e) => {
        brushSize = selectedSize.value;
        currentSize.textContent = `${selectedSize.value}`;
    })

    const clearAll = document.querySelector('#clearAll')

    clearAll.addEventListener('click', () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.beginPath();
    })
});