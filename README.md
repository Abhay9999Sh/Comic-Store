# Comic Book Store Backend
This project implements a backend API for managing comic books in an e-commerce store using Node.js, Express.js, and MongoDB. The API supports full CRUD (Create, Read, Update, Delete) operations and includes features such as filtering, sorting, and pagination.

# Features
1. Create, update, delete, and view comic books in the store
2. Filter, sort, and paginate the list of comics
3. No authentication required for API requests
4. Built using MongoDB for storing data
   
# Prerequisites
Before setting up the project, ensure you have the following tools installed:

1. Node.js (Version 14.x or higher)
2. MongoDB (You can use local or cloud-based MongoDB)
   
# Setup Instructions
Follow these steps to clone the project, install dependencies, set up the database, initialize dummy data, and run the server.

1. Clone the Repository
To get started, first clone the repository and navigate to the project folder:

bash
Copy code:

 git clone https://github.com/Abhay9999Sh/Comic-Store.git

   cd Comic-Store
   
2. Install Dependencies: 
Install the required npm dependencies:

bash
Copy code: 
 npm install
   
This command will install all the necessary packages as defined in the package.json file.

3. Configure MongoDB
   
You can use either local MongoDB or a cloud MongoDB instance (e.g., MongoDB Atlas). Make sure you set up your MongoDB and it is running.

For Local MongoDB:

Start your MongoDB server locally. 
Ensure the local MongoDB server is running before moving to the next steps.

4. Initialize Dummy Data
The project includes a data.js file in the data folder with some dummy comic book data for testing purposes. To initialize the database with this data:

Navigate to the data folder:

bash
Copy code: 
 cd data

Run the data.js file to insert the dummy comic book data into your MongoDB collection:

bash
Copy code: 
 node data.js
 
Return to the main project directory:

bash
Copy code: 
 cd ..
 
This step populates your MongoDB collection with test data that can be used when testing the API endpoints.

5. Run the Application
Once MongoDB is running and the dummy data is initialized, you can start the server with:

bash
Copy code: 
node app.js

By default, the server runs on http://localhost:3000.

# Test the API Endpoints
To test the API, import the provided Postman Collection and use the available endpoints:

1. Open Postman.
2. Click Import in the top-left corner.
3. Select Import from File.
4. Import the Postman_Collection.json file provided in the project.
5. Run the provided requests to interact with the API.

# API endpoints include:

1. GET /comics - Fetch a list of comics (supports pagination, sorting, filtering)
2. GET /comics/:id - Fetch details of a single comic book
3. POST /comics - Add a new comic book (requires JSON body with details)
4. PUT /comics/:id - Update a comic book by ID
5. DELETE /comics/:id - Delete a comic book by ID
   
# Important Notes
1. Ensure that MongoDB is properly configured and running before starting the app.
2. All API routes are documented and included in the provided Postman Collection for easy testing.

# Project Structure
1. app.js: The main server file that sets up the Express app and routes.
2. routes/: Contains the API route definitions for handling comic book operations.
3. controllers/: Handles the logic behind each route.
4. models/: Defines the Mongoose schema for comic books.
5. data/: Contains a data.js file to seed the database with dummy comic book data.

# Conclusion
The backend API is fully functional and ready for testing with Postman. Follow the instructions above to get the server running and interact with the API using MongoDB as your database.
