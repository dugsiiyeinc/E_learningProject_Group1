const apiUrl = 'https://youtube-v3-alternative.p.rapidapi.com/playlist';

async function fetchPlaylistVideos(playlistId) {
  try {
    const response = await fetch(`${apiUrl}?id=${playlistId}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8e119f3017msh255fbb053b268bbp115f95jsnbe6dc0fa5480', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      }
    });

    const data = await response.json();

    if (data.data) {
      displayCourses(data.data);
    } else {
      console.error("No videos found.");
    }
  } catch (error) {
    console.error("Error fetching playlist videos:", error);
  }
}

function displayCourses(videos) {
  const courseContainer = document.querySelector(".course-id");
  courseContainer.innerHTML = '';

  videos.forEach(video => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("course");

    // Course structure with click-to-expand feature
    courseElement.innerHTML = `
      <div class="course-header" data-video-id="${video.videoId}">
        <img src="${video.thumbnail[0].url}" alt="${video.title}" class="course-thumbnail">
        <div class="course-info">
          <h3 class="course-title">${video.title}</h3>
          <p class="course-description">${video.description || "No description available."}</p>
        </div>
        <button class="expand-btn">View Videos</button>
      </div>
      <div class="video-list" style="display: none;">
        <p>Loading videos...</p>
      </div>
    `;

    // Add click event to the course header to expand and fetch videos
    courseElement.querySelector('.expand-btn').addEventListener('click', function() {
      const videoList = courseElement.querySelector('.video-list');
      videoList.style.display = videoList.style.display === 'none' ? 'block' : 'none';
      videoList.innerHTML = ''; // Clear existing videos before loading new ones
      displayVideos(videoList, video.videoId);
    });

    courseContainer.appendChild(courseElement);
  });
}

async function displayVideos(videoList, videoId) {
  try {
    const response = await fetch(`${apiUrl}?id=${videoId}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      }
    });

    const data = await response.json();

    if (data.data) {
      data.data.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
          <img src="${video.thumbnail[0].url}" alt="${video.title}" class="video-thumbnail">
          <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">${video.title}</a>
        `;
        videoList.appendChild(videoElement);
      });
    } else {
      videoList.innerHTML = '<p>No videos found.</p>';
    }
  } catch (error) {
    console.error("Error fetching video list:", error);
    videoList.innerHTML = '<p>Error loading videos.</p>';
  }
}

// Initialize with a specific playlist ID
document.addEventListener("DOMContentLoaded", () => fetchPlaylistVideos('PL7usCIRV1hCPA7cH3MV41SPrDoal7qFOk'));
