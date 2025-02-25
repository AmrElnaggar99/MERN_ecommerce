# MERN E-Commerce

This is a full-stack e-commerce web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides user authentication, product management, a shopping cart, and order processing with PayPal integration.

## Demo
[Live Deployment](https://mern-ecommerce-yuvr.onrender.com/)
> ⚠️ **Warning:** The first time you open this demo it can take up to 50 seconds of loading time, this is because it is deployed on the free tier version of Render which spins down the server with inactivity to save resources.

## Features
- User authentication (Login/Register)
- Admin dashboard for managing products, users, and orders
- Shopping cart with order tracking
- PayPal integration for secure payments
- Image upload functionality
- Responsive design

## Tech Stack
- **Frontend:** React, Redux, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Payment Processing:** PayPal API
- **Deployment:** Render (backend and Frontend), MongoDB Atlas (database)

## Installation
* You need to have node < 16.x to run this project. It was built on node `14.19.3`.
### Clone the Repository
```sh
git clone https://github.com/AmrElnaggar99/MERN_ecommerce.git
cd MERN_ecommerce
```

### Install Dependencies
#### Backend and Frontend
```sh
npm install && npm install --prefix frontend
```

## Environment Variables Setup
You need to create a `.env` file in the `/` directory and define the following variables:
```ini
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

## 🌱 Seeding the Database
Before using the app, you can seed the database with sample data (products & users).
> ⚠️ Warning: Running the seed script will delete existing data before inserting new sample data.

Run the script:
```sh
npm run data:import
```
To delete all data, use:
```sh
npm run data:destroy
```

## Running the Application
### Development Mode
#### Backend
```sh
cd backend
npm run dev
```

#### Frontend
Ensure the `proxy` in `frontend/package.json` is set correctly to match the backend port:
```json
"proxy": "http://localhost:5000"
```
Then start the frontend:
```sh
cd frontend
npm start
```

### Production Mode
1. Build the frontend:
   ```sh
   cd frontend
   npm run build
   ```
2. Start the backend (serving frontend as well):
   ```sh
   cd backend
   npm start
   ```

## Deployment
### Deployment on Render
1. Push the code to GitHub
2. Create a new web service on [Render](https://render.com/)
3. Set the environment variables in Render's dashboard
4. Set the root folder to `/` and the build command to `npm run build`.
4. Deploy

## Default Users
You can log in with these test users:

```json
[
  {
    "name": "John Due",
    "email": "john@mernshop.com",
    "password": "123456"
  },
  {
    "name": "Jane Doe",
    "email": "jane@mernshop.com",
    "password": "123456"
  }
]
```
And you can use this admin user to view admin privileges, but please don't delete products that are not your own.
```json
{
    "email": "admin@mernsho.com",
    "password": "123456"
}

```
## License
This project is open-source and available under the MIT License.
