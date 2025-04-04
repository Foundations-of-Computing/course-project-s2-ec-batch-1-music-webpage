document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = document.getElementById('musicPlayer');
    const shuffleButton = document.getElementById('shuffleButton');
    const playButton = document.getElementById('playButton');

    // Song list
    let songs = [
        'file:///C:/Users/anupa/OneDrive/Desktop/FC%20website/e1.mp3',
        'file:///C:/Users/anupa/OneDrive/Desktop/FC%20website/e2.mp3',
        'file:///C:/Users/anupa/OneDrive/Desktop/FC%20website/e3.mp3'
    ];

    let currentSongIndex = 0;
    let isShuffled = false;

    // Function to shuffle the song list
    const shufflePlaylist = () => {
        for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]]; // Swap songs
        }
    };

    // Play the next song
    const playNextSong = () => {
        if (currentSongIndex >= songs.length) currentSongIndex = 0; // Restart if at the end
        musicPlayer.src = songs[currentSongIndex];
        musicPlayer.play().catch((err) => console.error('Error playing song:', err));
        currentSongIndex++;
    };

    // Handle shuffle button click
    shuffleButton.addEventListener('click', () => {
        isShuffled = !isShuffled;
        if (isShuffled) shufflePlaylist(); // Shuffle songs if enabled
        else songs = songs.sort((a, b) => a - b); // Restore original order

        currentSongIndex = 0; // Reset index
        playNextSong(); // Play the first song
    });

    // Play the first song when user clicks the play button
    playButton.addEventListener('click', playNextSong);

    // Automatically play the next song when the current one ends
    musicPlayer.addEventListener('ended', playNextSong);
});
