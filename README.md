First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



# Flight-Booking-App
This is a Flight Booking Front-End Project that supplies an user interface to book a flight ticket. 

## Technical Background
I have created a mock backend and mock data using json-server. When you open a new terminal on your ide and assign a port to the db.json file like that : 
```bash
npx json-server db.json --port 3001
```
That creates a backend and mock data that includes 20 different flights from 22-01-2024 to 29-02-2024. 
There are three different endpoints that you can use the data from different addresses : 
```bash
http://localhost:3001/airports
http://localhost:3001/flights
http://localhost:3001/airlines
```
You can send requests using these addresses and access the data to use on the UI. 

## Deficiencies
- It doesnt have a good responsive design.
- You can filter flights with respect to dates but not to airports.

## Images 
- https://github.com/7aslan/Flight-Booking-App/blob/main/public/amadeus.png
- https://github.com/7aslan/Flight-Booking-App/blob/main/public/Amadeus2.png

