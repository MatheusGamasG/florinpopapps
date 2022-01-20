const allLights = document.querySelectorAll('.circle');
const colorLights = ['red', 'blue', 'purple', 'green', 'orange', 'brown', 'pink']
const offButton = document.querySelector('.off');
const onButton = document.querySelector('.on');

console.log(allLights[0].classList[1])

function apagaTudo() {
    let i = 0;

    while (i < allLights.length) {
        let classColor = allLights[i].classList[1];
        allLights[i].classList.remove(classColor);
        i++;
    }

}

function acendeTudo() {
    let i = 0;
    while (i < allLights.length) {
        allLights[i].classList.add(colorLights[i]);
        i++;
    }
}

offButton.addEventListener('click', apagaTudo);

onButton.addEventListener('click', acendeTudo);