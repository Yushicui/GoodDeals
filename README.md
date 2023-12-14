# GoodDeals2.0 - This branch is for Project 4

## Project Objective

GoodDeals is an online platform designed for shoppers to discover, share, and discuss the best deals available across various categories. Users can post their found deals, comment on others, and rank them. With a focus on community interaction and ease of use, GoodDeals not only promotes savings but also facilitates a space for shoppers to interact and help each other find the best discounts around.

Link to GoodDeals Web Application: (https://gooddealsapp.onrender.com)

## Design Document

View Design Document: [Design Document](https://docs.google.com/document/d/1mLVD_t3ZOlR1Mv14g0WTbd8LCAE7koWyHlq9HfljEnw/edit?usp=sharing)

## Features

**Without User Account:**

- **View Deal:** Users and view deals based on different categories
- **Search Deal:** Users can search deals by title and description

**With User Account:**

- **User Management:** Users can register for a new account, login and logout
- **Post Deal:** Users can share new deals by posting links and relevant information
- **Edit Deal:** Users can modify their previously posted deals to update details
- **Delete Deal:** Users can remove their deals

- **Post Comment:** Users can comment on posted deals
- **Delete Comment:** Users have the option to remove their comments
- **Like:** Users can show appreciation for a deal by liking it
- **Cancel Like:** Users have the option to cancel their likes
- **View Posted Deal:** Users can view their posted deals in the Posted Deals section
- **View Liked Deal:** Users can view their liked deals in the Liked Deals section

- **Deals Ranking:** A dynamic ranking system that ranks deals based on user likes
- **Deals Display:** Deals are organized and displayed on their respective category pages

## Features2.0(new release)

## Screenshot

Home Page:
![Home page screenshot1](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/screenshot/HomePage01.jpg)
![Home page screenshot2](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/screenshot/HomePage02.jpg)

SignIn Page:
![SignIn page screenshot](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/screenshot/SigninPage.jpg)

Post Deal Page:
![Create Deal page screenshot](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/screenshot/PostDealPage.jpg)

Deal Detail Page:
![Deal Detail screenshot](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/screenshot/DealDetailPage.jpg)

User Liked Deal Page:
![User Liked Deal screenshot](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/screenshot/MyLikedDealPage1.jpg)

## Tech Stack

**Front End**

- React
- HTML5
- CSS3
- ES6+
- Bootstrap5
- JavaScript XML

**Backend**

- Node.js
- Express.js
- JavaScript

**Database**

- MongoDB

## Tech Requirements

- React: v18.2.0 or above
- Node.js: v20.6.1 or above
- MongoDB: v6.1.0 or above
- Express.js: v4.18.2 or above

## How to Install/Use

**1. Clone the repository:** <br>

`git clone https://github.com/Yushicui/GoodDeals.git`

**2. Navigate to the project directory:** <br>
`cd GoodDeals`

**3. Install dependencies:** <br>
`npm install`

**4. Connect Database:** <br>
Include a `.env` file in the project's root directory to set up the `MONGODB_URI` with your MongoDB connection string or have a MongoDB server running on `localhost:27017` to connect database.

**5. Import Data(Optional):** <br>
`npm run initDB` to initializing the database with the 1000 deals data.

**6. Navigate to the frontend directory:** <br>
`cd front`

**7. Install dependencies:** <br>
`npm install`

**8. Build the frontend:** <br>
`npm run build`

**9. Start the backend server:** <br>
In the project directory: `npm start`

Then, open your browser and navigate to http://localhost:3000/ to start using GoodDeals.

## Authors

**Yushi Cui**<br>
Link to Homepage:[Yushi's Homepage](https://yushicui.github.io/MyHomePage/)<br>

**Zexi Gong**<br>
Link to Homepage:[Zexi's Homepage](https://zexigong-ne.github.io/)<br>

## Reference to the Class

This project was created as a part of the Web Development class in Computer Science Master’s program at Northeastern University. [More about the class](https://johnguerra.co/classes/webDevelopment_fall_2023/)

## Link to the Google slides

View the presentation of the project in this [google slides](https://docs.google.com/presentation/d/1d3CExxyvhup0wrN0gQUahr-rCzsG22PvFK96ZnnTiEo/edit?usp=sharing)

## Link to the Video Demonstration

Watch a detailed walkthrough of the project in this [video demonstration](https://youtu.be/bW8c_UuXeh4)

## License

License: This project is licensed under the MIT License - see the [LICENSE](https://github.com/Yushicui/GoodDeals/blob/GoodDeals2.0-FinalProject/LICENSE) for details.
