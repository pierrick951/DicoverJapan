const imgMoves = document.querySelectorAll('.move');

imgMoves.forEach((imgMove) => {
    imgMove.addEventListener('mousemove', (event) => {
        const { offsetX, offsetY } = event;
        const { clientWidth, clientHeight } = imgMove.parentElement;

        const moveX = (offsetX - clientWidth / 2) / clientWidth * 20;
        const moveY = (offsetY - clientHeight / 2) / clientHeight * 20;

        imgMove.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    imgMove.addEventListener('mouseleave', () => {
        imgMove.style.transform = 'none';
    });
});
