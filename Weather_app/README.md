# 🌤️ Weather App

A simple and visually appealing **Weather Application** built using **HTML, CSS, and JavaScript**.  
This app allows users to get the **current weather information** for any city in the world using the [WeatherAPI](https://www.weatherapi.com/).

---

## 📌 Features

- Search for any city worldwide and get **real-time weather information**.  
- Displays:
  - City Name
  - Current Temperature (°C)
  - Weather Condition
  - Weather Icon
- **Loading indicator** while fetching data.  
- **Error handling** for invalid cities.  
- Clean, responsive, and modern UI with gradient background.  

---

## 💻 How to Use

1. Open the project folder.  
2. Open `index.html` in your browser.  
3. Enter the city name in the input box.  
4. Click **Get Weather**.  
5. Weather details will be displayed below the button.

---

## 🛠️ Technologies Used

- **HTML** – Structure of the web page.  
- **CSS** – Styling and layout, including gradients and responsive design.  
- **JavaScript** – Fetch API, DOM manipulation, and dynamic weather updates.  

---

## 🌐 API Used

This project uses [WeatherAPI](https://www.weatherapi.com/) to fetch live weather data.  
Make sure to **replace the API key** in `first.js` with your own if needed:

```javascript
const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${place}&aqi=yes`);




📂 Project Structure
Weather-App/
│
├── index.html       # Main HTML file
├── style.css        # CSS styling
├── first.js         # JavaScript functionality
└── README.md        # Project documentation




📫 Contact

For any queries or contributions, feel free to reach out at [ankitjoshi8860@gmail.com] or GitHub profile.