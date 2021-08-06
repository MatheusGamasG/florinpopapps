const inputTop = document.querySelector('.inputTopSize');
const inputRight = document.querySelector('.inputRightSize');
const inputBottom = document.querySelector('.inputBottomSize');
const inputLeft = document.querySelector('.inputLeftSize');
const container = document.querySelector('.previewer');
const inputCopyContent = document.querySelector('.invContent');
const divCopyCommand = document.querySelector('.clickableContent');

inputTop.addEventListener('mousemove', controlaContainerBorder);
inputRight.addEventListener('mousemove', controlaContainerBorder);
inputBottom.addEventListener('mousemove', controlaContainerBorder);
inputLeft.addEventListener('mousemove', controlaContainerBorder);

function controlaContainerBorder() {
    let topValue = inputTop.value / 2;
    let rightValue = inputRight.value / 2;
    let bottomValue = inputBottom.value / 2;
    let leftValue = inputLeft.value / 2;
    container.style.borderRadius = `${topValue}% ${rightValue}% ${bottomValue}% ${leftValue}%`;
    inputCopyContent.value = `border-radius: ${topValue}% ${rightValue}% ${bottomValue}% ${leftValue}%`;
    
    divCopyCommand.addEventListener('click', function () {
        inputCopyContent.select();
        document.execCommand("copy");
    })
}