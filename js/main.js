let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    draggedPieces;

    function changeBGImage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg`;
    }

    function handleStartDrag() {
        console.log('started dragging this piece', this);
        draggedPiece = this;
    }

    theButtons.forEach(button => button.addEventListener('click', changeBGImage));
    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
