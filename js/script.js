// List of video data with YouTube IDs and titles
const videos = [
    { id: 'MFKH89A66mY', title: 'Install Hadoop 3.3.6 in 4 Steps' },
    { id: 'op8AfMWdmQc', title: 'Hadoop Configuration Quick Start' },
    { id: 'YL3UWNd2V3U', title: 'Hadoop Word Count Example' },
    { id: 'cUJ9rjmCP7c', title: 'AWS EMR Setup And Run With Example (part1)' },
    { id: '9uAs798WwCI', title: 'AWS EMR Setup And Run With Example (part2)' },
    { id: '1HN7v0hBCNs', title: 'Run Hadoop MapReduce in IDE (IntelliJ)' },
    { id: 'H0SkMKN233I', title: 'Run Pig on AWS EMR' },
    { id: '3q_TWWxQg7w', title: 'Run HBase on AWS EMR' },
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
    
    // Highlight the active navigation button
    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`button[onclick="navigate('${page}')"]`).classList.add('active');
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