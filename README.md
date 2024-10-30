# ClimaTrack - Weather App 🌦️

**ClimaTrack** is a weather application built with React. It provides real-time weather updates for any city, featuring custom background videos for different weather conditions, sourced from the OpenWeatherMap API.

## Demo

![Screenshot 2024-10-13 121856](https://github.com/user-attachments/assets/776447f5-35fa-4dd2-a574-11fd8919b0dd)


## Features

- 🌍 Search for real-time weather in any city
- 🎥 Dynamic background videos for different weather conditions (cloudy, rain, snow, sunny, etc.)
- 🌡️ Displays temperature, humidity, and wind speed
- 🔄 Automatically fetches weather data for the default city on page load

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **API**: OpenWeatherMap
- **Deployment**: Netlify

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

- Node.js and npm should be installed
- OpenWeatherMap API key

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ryana265/ClimaTrack-Weather-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ClimaTrack-Weather-App
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file at the root of your project and add your OpenWeatherMap API key:

    ```bash
    VITE_APP_ID=your_openweathermap_api_key
    ```

### Running the App Locally

To start the app locally, run the following command:

```bash
npm run dev

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
