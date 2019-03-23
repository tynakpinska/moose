const inputs = document.querySelectorAll('input');

console.log(inputs);

function changeStyle() {
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', changeStyle));
inputs.forEach(input => input.addEventListener('mousemove', changeStyle));
 