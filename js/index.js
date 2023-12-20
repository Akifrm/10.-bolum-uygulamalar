function test() {
    const btn = document.getElementById('button');
    const btn2 = document.getElementById('button1');
    const menu = document.getElementById('bg-blue');

    btn.style.display = 'none';
    btn2.style.display = 'flex';
    menu.classList.add('active');
}

function test2() {
    const btn = document.getElementById('button');
    const btn2 = document.getElementById('button1');
    const menu = document.getElementById('bg-blue');

    btn.style.display = 'flex';
    btn2.style.display = 'none';
    menu.classList.remove('active');
}