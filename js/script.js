// List of video data with YouTube IDs and titles
const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Introduction to Programming' },
    { id: 'kxopViU98Xo', title: 'Data Science Basics' },
    { id: 'w7ejDZ8SWv8', title: 'Web Development Crash Course' },
    { id: '3EoI-6lQFIE', title: 'Machine Learning Explained' }
];

// Function to dynamically load videos
function loadVideos() {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear existing videos

    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.id}/0.jpg" alt="${video.title}" onclick="openVideo('${video.id}')">
            <p class="video-title">${video.title}</p>
        `;
        videoList.appendChild(videoContainer);
    });
}

// Function to open a video in a new tab
function openVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// Function to filter videos by search query
function filterVideos() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear existing videos

    filteredVideos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.id}/0.jpg" alt="${video.title}" onclick="openVideo('${video.id}')">
            <p class="video-title">${video.title}</p>
        `;
        videoList.appendChild(videoContainer);
    });
}

// Function to navigate between pages
function navigate(page) {
    document.querySelectorAll('.page').forEach(section => {
        section.style.display = 'none'; // Hide all pages
    });
    document.getElementById(page).style.display = 'block'; // Show selected page
}

// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    navigate('home'); // Start at the home page
    loadVideos(); // Load videos for homework page
});