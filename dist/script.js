const hp = document.getElementById('hp')
const btn = document.getElementById('click');
let initHp = 5;

show = () => {
    initHp = initHp + 10;
    hp.innerText = `${initHp} HP`;

}
add = () => {
    btn.classList.add('animate');
    setTimeout(() => {
        btn.classList.remove('animate')

    }, 5000);
}

let throttled = _.throttle(show, 5000, { 'trailing': false }
);
let throlledAn = _.throttle(add, 5000, { 'trailing': false });
btn.addEventListener('click', throttled);
btn.addEventListener('click', throlledAn);

document.querySelector