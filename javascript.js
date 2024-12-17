// Функция для воспроизведения выбранной песни
function playSong(song) {
    const audioSource = document.getElementById('audioSource');
    audioSource.src = song;
    audioPlayer.load();
    audioPlayer.play();

    // Убираем класс серого цвета с других треков
    const listItems = playlist.getElementsByTagName('li');
    Array.from(listItems).forEach(item => {
        item.classList.remove('playing'); // Убираем серый цвет с других треков
    });

    // Добавляем класс серого цвета для текущего трека
    const currentSongItem = listItems[currentSongIndex];
    currentSongItem.classList.add('playing'); // Добавляем серый цвет для текущего трека
}
