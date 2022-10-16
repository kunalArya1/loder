const $el = document.querySelector('[data-circletext]');
const text = $el.dataset.circletext;
const chars = text.split('');
const length = chars.length;
const html = chars.map((char, i) => `<i style="--i: ${i/length}"><b>${char}</b></i>`).join('');
$el.innerHTML = html;