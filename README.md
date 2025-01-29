# Video Player with Key Generation, Quality Control, and Admin Controls

This project is a **custom video player** built with features like **key generation** (valid for 48 hours), **video quality change**, **video speed control**, and **admin toggles** for controlling key generation. The project is designed to work seamlessly and is deployable on platforms like **Netlify** and **Heroku**.

---

## Features

- **Key Generation**: A unique key is generated, which works for 48 hours. After 48 hours, a new key needs to be generated.
- **Quality Control**: Users can change the video quality (e.g., 1080p, 720p, 480p).
- **Video Speed Control**: Users can adjust the playback speed of the video.
- **Two Server Options**: Allows users to choose between two servers to access the content.
- **Admin Control**: Admins can toggle the key generation feature on or off.
- **Tutorial Link**: Provides a tutorial video for users on how to generate keys.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (with Fetch API for key generation)
- **Backend**: Node.js (for key generation and validation)
- **Hosting**:
  - **Frontend**: Netlify (for static hosting)
  - **Backend**: Heroku (fornpm install
 dynamic backend hosting)

---

## Getting Started

### Prerequisites

To run this project locally, you need the following tools installed:

- **Node.js** (for backend)
- **Git** (to clone the repository)

### Clone the Repository

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/video-player.git
cd video-player

node server.js
heroku login
heroku create your-app-name
git init
git add .
git commit -m "Initial commit"
git push heroku master
