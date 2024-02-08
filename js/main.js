let theButtons = document.querySelectorAll('#buttonHolder img')
    puzzleBoard = document.querySelector('.puzzle-board');

    function changeBGImage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg`;
    }

    theButtons.forEach(button => button.addEventListener('click', changeBGImage));