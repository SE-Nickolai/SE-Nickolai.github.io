let canvas = document.getElementById("c1");
let painter = canvas.getContext("2d");
painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);
painter.fillStyle = "#ff0000";
painter.fillRect(20, 20, 10, 10);

let y = 10;
for (let j = 0; j < 13; ++j) {
    let x = 10;
    for (let i = 0; i < 13; ++i) {
        if (i % 2 == 1 && j % 2 === 1 || i % 2 === 0 && j % 2 === 0) {
            painter.fillRect(x, y, 20, 20);
        }
        x = x + 30;
    }
    y = y + 30;
}

let canvas2 = document.getElementById("c2");
let painter2 = canvas2.getContext("2d");
painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400);
painter2.fillStyle = "#ff0000";
painter2.fillRect(20, 20, 10, 10);

let y2 = 10; 
for (let j = 0; j < 13; ++j) {
    let x2 = 10;
    for (let i = 0; i < 13; ++i) {
        painter2.fillRect(x2, y2, 20, 20);
        x2 = x2 + 30;
    }
    y2 = y2 + 30;

    let canvas3 = document.getElementById("c3");
    let painter3 = canvas3.getContext("2d");
    painter3.fillStyle = "#000000";
    painter3.fillRect(0, 0, 400, 400);
    painter3.fillStyle = "#ff0000";
    painter3.fillRect(20, 20, 10, 10);
    
    let i = 0;
    const P = 13;
    let x3 = 10;
    let y3 = 10;
    
    while (i < P) {
        painter3.fillRect(x3, y3, 20, 20);
        x3 += 30;
        ++i;
    }
    
}
