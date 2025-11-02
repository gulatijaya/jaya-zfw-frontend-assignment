# Star Wars Characters App

A responsive React application built using **Vite**, **Tailwind CSS**, and **Redux Toolkit** that displays Star Wars characters fetched from the **SWAPI API**.  
Clicking on a character opens a modal with detailed information.

---

## Features

- Fetches character data from [SWAPI](https://swapi.dev/)
- Displays character cards with:
  - Random images from [Picsum Photos](https://picsum.photos/)
  - Dynamic background colors based on species
- Modal view with detailed information:
  - Name  
  - Height (in meters)  
  - Mass (in kg)  
  - Birth year  
  - Films count  
  - Date formatted as `DD/MM/YYYY`  
  - Homeworld details (name, terrain, climate, population)
- Pagination
- Fully responsive (mobile to desktop)
- Tested using **React Testing Library**

---

## Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Testing Library + Vitest**

---

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/star-wars-app.git
   ```

2. **Navigate into the project folder:**
   
   cd star-wars-app

3. **Install dependencies:**
   
   npm install

3. **Run the development server:**
   
   npm run dev

## Running Tests

This project includes a simple integration test to verify that the character modal opens correctly.

**To run tests:**

    npm run test






