export function canvas (num) { canvas_frames[num]() }

const canvas_frames = [
    canvas_0,
    canvas_1,
    canvas_2,
    canvas_3,
    canvas_4,
    canvas_5,
    canvas_6,
    canvas_7,
    canvas_8
]

const colors = {
    // Colors from CSS file 'style'
    cioccolato: '#582F0E',
    bull_shot: '#7F4F24',
    rangitoto: '#333D29',
    frost : '#E9F5DB'
}

function line (ctx, x, right, y, down, length, width, cap, color, speed, timeout = 0) {
    setTimeout(() => {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.lineCap = cap;
        ctx.moveTo(x, y)
        for (let i = 0; i <= length; i++) {
            setTimeout(() => {
                ctx.lineTo(x + right * i, y + down * i)
                ctx.stroke()
            }, i * speed, i)
        }
    }, timeout)
}

function disk (ctx, x, y, start, slice, anticlock, radius_1, color_1, radius_2, color_2, speed, timeout = 0) {
    let clock
    anticlock ? clock = 1 : clock = -1
    setTimeout(() => {
        for (let i = 0; i < slice; i++) {
            setTimeout(() => {
                // Outer disk
                ctx.beginPath();
                ctx.fillStyle = color_1
                ctx.moveTo(x, y)
                ctx.arc(x, y, radius_1,  Math.PI * start , Math.PI * start - clock * i / Math.PI / 5, anticlock)
                ctx.moveTo(x, y)
                ctx.fill()
                // Inner disk
                ctx.beginPath();
                ctx.fillStyle = color_2
                ctx.moveTo(x, y)
                ctx.arc(x, y, radius_2,  Math.PI * start , Math.PI * start - clock * i / Math.PI / 5, anticlock)
                ctx.moveTo(x, y)
                ctx.fill()
            }, i * speed, i)
        } 
    }, timeout)
}

function canvas_0 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    // Top
    line(ctx,  0, 1,  25,  0, 600, 50, 'butt', colors.cioccolato, 3)
    // Left
    line(ctx, 25, 0,   0,  1, 600, 50, 'butt', colors.cioccolato, 3, 1900)
    // Top corner
    line(ctx,  0, 1, 150, -1, 150, 40, 'butt', colors.cioccolato, 3, 3800)
    // Bottom
    line(ctx,  0, 1, 418,  0, 600, 20, 'butt', colors.cioccolato, 3, 4300)
}

function canvas_1 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    disk(ctx, 295, 150, 1.5, 100, true, 35, colors.rangitoto, 28, colors.frost, 6)
}

function canvas_2 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    line(ctx, 295, 0, 183, 1, 100, 10, 'round', colors.rangitoto, 6)
}

function canvas_3 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    line(ctx, 295, -1, 223, 1, 50, 10, 'round', colors.rangitoto, 12)
}

function canvas_4 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    line(ctx, 295, 1, 223, 1, 50, 10, 'round', colors.rangitoto, 12)
}

function canvas_5 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    line(ctx, 295, -1, 283, 2, 60, 10, 'round', colors.rangitoto, 10)
}

function canvas_6 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    line(ctx, 295, 1, 283, 2, 60, 10, 'round', colors.rangitoto, 10)
}

function canvas_7 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    // Rope
    line(ctx, 295, 0, 0, 1, 115, 10, 'butt', colors.bull_shot, 2)
    // Noose
    line(ctx, 290, 1, 190, 0, 10, 10, 'round', colors.bull_shot, 5, 545)
}

function canvas_8 () {
    let ctx = document.getElementById('canvas').getContext('2d')
    // Trapdoor
    ctx.beginPath()
    ctx.clearRect(215, 408, 160, 20)
    ctx.beginPath()
    ctx.fillStyle = colors.cioccolato
    ctx.fillRect(355, 428, 20, 160)
    // Left eye
    line(ctx, 275,  1, 140, 1, 10, 3, 'round', colors.rangitoto, 10)
    line(ctx, 285, -1, 140, 1, 10, 3, 'round', colors.rangitoto, 10, 150)
    // Right eye
    line(ctx, 305,  1, 140, 1, 10, 3, 'round', colors.rangitoto, 10, 300)
    line(ctx, 315, -1, 140, 1, 10, 3, 'round', colors.rangitoto, 10, 450)
    // Mouth
    disk(ctx, 295, 170, 1, 50, false, 10, colors.rangitoto, 7, colors.frost, 6, 600)
}