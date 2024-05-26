Project Name: WWL Meal Planner

Description:
The Meal Planner application allows users to plan their meals for the week by adding recipes for breakfast, lunch, and dinner. Users can drag and drop recipes into desired slots and view their meal plan for the entire week.

Project Structure:
The project files are organized as follows:
- src/
  - components/ : Contains React components for building the UI
  - assets/ : Contains images and other static assets
  - features/ : Contains Redux slice files for managing state
  - pages/ : Contains top-level pages of the application
  - store/ : Contains Redux store configuration
  - App.js : Entry point of the application
- public/ : Contains index.html and other static files

Installation Steps:
1. Clone the repository:
   git clone (https://github.com/ammarsharif/mealPlan.git)

2. Navigate to the project directory:
   cd wwl-meal-planner

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Open your browser and visit http://localhost:3000 to view the application.

Usage:
- To add a recipe to the meal planner, click on the "Add Recipe" button in the sidebar, select a recipe, and choose the meal type and day.
- To move a recipe within the meal planner, drag and drop it into the desired slot.

Dependencies:
- @reduxjs/toolkit: ^2.2.5
- @testing-library/jest-dom: ^5.17.0
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- autoprefixer: ^10.4.19
- postcss: ^8.4.38
- react: ^18.3.1
- react-dnd: ^16.0.1
- react-dnd-html5-backend: ^16.0.1
- react-dom: ^18.3.1
- react-icons: ^5.2.1
- react-redux: ^9.1.2
- react-router-dom: ^6.23.1
- react-scripts: 5.0.1
- react-slick: ^0.30.2
- redux-persist: ^6.0.0
- slick-carousel: ^1.8.1
- tailwindcss: ^3.4.3
- web-vitals: ^2.1.4

Contributing:
1. Fork the repository.
2. Create a new branch: git checkout -b feature-name
3. Make your changes and commit them: git commit -m 'Add new feature'
4. Push to the branch: git push origin feature-name
5. Submit a pull request.

License:
This project is licensed under the MIT License - see the LICENSE file for details.
