document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = document.getElementById('musicPlayer');
    const shuffleButton = document.getElementById('shuffleButton');
    const playButton = document.getElementById('playButton');

    
    let songs = [
        'file:///C:/Users/anupa/OneDrive/Desktop/FC%20website/t1.mp3',
        'file:///C:/Users/anupa/OneDrive/Desktop/FC%20website/t2.mp3',
        'file:///C:/Users/anupa/OneDrive/Desktop/FC%20website/t3.mp3'
    ];

    let currentSongIndex = 0;
    let isShuffled = false;

    
    const shufflePlaylist = () => {
        for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]]; 
        }
    };

    
    const playNextSong = () => {
        if (currentSongIndex >= songs.length) currentSongIndex = 0; 
        musicPlayer.src = songs[currentSongIndex];
        musicPlayer.play().catch((err) => console.error('Error playing song:', err));
        currentSongIndex++;
    };

    
    shuffleButton.addEventListener('click', () => {
        isShuffled = !isShuffled;
        if (isShuffled) shufflePlaylist(); 
        else songs = songs.sort((a, b) => a - b); 

        currentSongIndex = 0; 
        playNextSong(); 
    });

    playButton.addEventListener('click', playNextSong);

    musicPlayer.addEventListener('ended', playNextSong);
});
