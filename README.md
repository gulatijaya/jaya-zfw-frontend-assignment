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
   git clone https://github.com/gulatijaya/jaya-zfw-frontend-assignment.git
   ```

2. **Navigate into the project folder:**

   ```bash
   cd star-wars-app
   ```

3. **Install dependencies:**
   
    ```bash
   npm install
   ```

3. **Run the development server:**

    ```bash
   npm run dev
   ```

## Running Tests

This project includes a simple integration test to verify that the character modal opens correctly.

  1. **Run the development server:**

    ```bash
   npm run dev
   ```






