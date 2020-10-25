Foor order takeout app - Midterm Project for LHL 
=========
## This is a food order takeout app for a single restaurant use
### Main features:
1. Taking order on the app, the restaurant is notified via sms using twilio
2. Restaurant can reply back with estimated completion time of the order
3. Restaurant have start order button which notifies the customer : "Your order has started"
4. Restaurant has order complete button in their dashboard which notifies the customer: "Your order is ready for pickup"
5. Restaurant can add menu from their mobile device or the web.

## Screenshots

![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-51-08.png)
![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-52-03.png)
![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-52-23.png)
![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-52-39.png)
![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-52-59.png)
![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-53-19.png)
![Alt text](/public/screenshots/Screenshot%20from%202020-10-24%2022-53-37.png



## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `your postgresql username`
  - password: `your postgresql username password`
  - database: `your database name`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Ngrok
- Axios
