# MERN_ecommerce
* You have to be using node < 17; I tested this with node 14.19.3
* You need to make an .env file in `./` with the following content:
```
MONGO_URI=<MONGODB_URI>
// PORT=<PORT>    use this if you don't want the server to run on 5000 but if you change it you need to also change it in proxy in frontend/package.json
JWT_SECRET=7245c404fc32dec19586b68c2348c39807035015f7f5366bf98e60fe16601b8c    // or any random string
```
## How to run it on local server
0. cd MERN_ecommerce
1. npm install
2. cd frontend
3. npm install
4. cd ../backend
5. npm install
6. node seeder.js
7. cd ../
8. npm run dev

TODO: Implement better UI <br>
TODO: Documentation

MERN
Bootstrap
JWT
