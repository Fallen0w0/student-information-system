
# Student Information System

A web application designed to manage student records.

## Technologies Used
* **Frontend:** React, Vite (Runs on port 5173)
* **Backend:** Node.js, Express (Runs on port 3000)
* **Database:** XAMPP MySQL (`student_db`)
* **ORM:** Prisma

## Database Configuration
1. Open XAMPP Control Panel and start **Apache** and **MySQL**.
2. Open phpMyAdmin (`http://localhost/phpmyadmin/`) and create a new database named `student_db`.
3. In your `backend/` folder, create a `.env` file and add your MySQL connection string:
   ```env
   DATABASE_URL="mysql://root:@localhost:3306/student_db"

## How to Run the Project
1. Start the Backend Server
Open a terminal, navigate to the backend folder, generate the Prisma client, and start the server:
-Type in the terminal-
* cd backend
* npx prisma generate
* node server.js

(The backend API will run at http://localhost:3000)

2. Start the Frontend 
Open a second terminal, navigate to the frontend folder, and start the development server:
-Type in the terminal-
* cd frontend
* npm run dev

(Open your browser and visit http://localhost:5173 to use the application)

## How to Close the Project
1. Stop the Backend Server: Go to your backend terminal window and press Ctrl + C, then confirm if prompted.
2. Stop the Frontend App: Go to your frontend terminal window and press Ctrl + C.
3. Stop the Database: Open your XAMPP Control Panel and click Stop next to Apache and MySQL.