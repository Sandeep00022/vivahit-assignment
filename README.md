# Photo and Video Upload App

Welcome to our Photo and Video Upload App! This application allows users to seamlessly upload and view both photos and videos.

## Tech Stack

- **Frontend:**
  - ReactJS: A JavaScript library for building user interfaces.
  - Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
  - Flowbite: A Tailwind CSS component library for faster development.
  
- **Backend:**
  - Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Express.js: A web application framework for Node.js, designed for building web applications and APIs.
  - MongoDB: A NoSQL document database, using JSON-like documents with schema.
  
- **Database:**
  - Firebase: A platform developed by Google for creating mobile and web applications.


## .env Configuration

- `VITE_FIREBASE_API_KEY`: Firebase API key for authentication and data storage.
- `MONGO_URI`: MongoDB connection URI for database access.
- `JWTSECRET`: Secret key for JSON Web Token (JWT) authentication.
- `PORT`: Port number on which the server will run.


# Note:- The website is deployed on Render and will take atleast 1 min to start

## Video Explanation Drive link
https://drive.google.com/file/d/1K55SbxNudVZr2M4jv4EwsovOAYpo61qY/view?usp=sharing


## Getting Started Locally

To run this app locally, follow these steps:

1. **Clone the Repository:** Clone the repository to your local machine.

    ```bash
    git clone https://github.com/Sandeep00022/vivahit-assignment.git
    ```

2. **Install Node Modules:** In the root folder of the repository, install the required Node.js modules by running:

    ```bash
    npm install
    ```

3. **Install Frontend Node Modules:** Navigate to the `frontend` folder within the repository and install the frontend-specific Node.js modules by running:

    ```bash
    cd frontend
    npm install
    ```

4. **Set up Firebase Authentication:** Configure Firebase Authentication to enable user authentication. Follow these steps:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Obtain your Firebase project's configuration details.
    - Add your Firebase project's configuration details to your app's code.
    - Follow the Firebase documentation for detailed instructions.

5. **Get Storage Access from Firebase:** Set up Firebase Storage to allow access for uploading photos and videos. Follow these steps:
    - Enable Firebase Storage in your Firebase project.
    - Obtain the necessary Firebase Storage configuration details.
    - Integrate Firebase Storage access into your app's code.
    - Refer to the Firebase documentation for guidance.

## Screenshots
  - user can simply click on signup with google and login or signup her or himself.
    
![image](https://github.com/Sandeep00022/vivahit-assignment/assets/97525395/5505a988-508a-4036-ad67-e201a1615e08)



  - user can see all the importans stats alike total-size totalimageSize totalVideSize and can easily upload images and viodes
    
![image](https://github.com/Sandeep00022/vivahit-assignment/assets/97525395/4891559e-fc93-4f83-aeb5-92311ae8afd5)



- user can see all the gallery images in gallery section.
  
![image](https://github.com/Sandeep00022/vivahit-assignment/assets/97525395/68ef54f7-2f76-4d08-8111-923f384c7463)


## Mobile Responsive

![image](https://github.com/Sandeep00022/vivahit-assignment/assets/97525395/8add5c6d-1aa2-44b3-9385-de6da623836d)
![image](https://github.com/Sandeep00022/vivahit-assignment/assets/97525395/6a3383e7-400d-44ac-95f0-0abb368a1f1e)
![image](https://github.com/Sandeep00022/vivahit-assignment/assets/97525395/1e46fe6f-8b27-4421-b49c-365a06f2e7f6)




## Running the App

Once you've completed these steps, you're all set to run the app locally and start uploading and viewing photos and videos! To start the app, run the following command from the root directory:

```bash
npm run dev
