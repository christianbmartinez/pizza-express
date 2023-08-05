[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![alt text](https://github.com/christianbmartinez/pizza-express/blob/main/public/assets/img/pizza-express.jpg)

# Tech Blog

A full pizza ordering application built with MVC architecture using node, tailwindcss, mysql2, sequelize, express-handlebars, express-session, connect-session-sequelize, and bcrypt

### Table of Contents

**[User Story](#user-story)**<br>
**[Acceptance Criteria](#acceptance-criteria)**<br>
**[Installation Instructions](#installation)**<br>
**[Usage Instructions](#usage)**<br>
**[License](#license)**<br>
**[Contributing](#contributing)**<br>
**[Questions](#questions)**<br>
**[Special Thanks](#thanks)**<br>

# User Story

- AS A business owner who wants extra sales
- I WANT a pizza ordering web application that lets my customers order a pizza
- SO THAT I am able to make and deliver the order for them

# Acceptance Criteria

- GIVEN a pizza ordering system
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes a navbar, all of our pizzas, and a footer; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create an account with name, email, password, and address details
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the order page, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with featured pizzas
- WHEN I click on an featured pizza card
- THEN I am presented with the pizza title, contents, pizza image, and a checkout button
- WHEN I click on the order option in the navigation
- THEN I am taken to the order page with all of our pizzas
- WHEN I click on the button to order the pizza
- THEN I am presented with the pizza title, contents, pizza image, and a checkout button for that pizza
- WHEN I click on the checkout button
- THEN the pizza and it's contents are saved and I am taken to a checkout page
- WHEN I click on the delete button
- THEN I am able to delete my pizza order
- WHEN I click on the place order button
- THEN I can finish the order process and a page thanks me for ordering
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
- THEN I am able to view pizzas on the homepage, but I am prompted to log in again before I can order.

# Installation

`git clone https://github.com/christianbmartinez/pizza-express.git`

# Usage

First, install all dependencies:

```
npm install
```

Next, create a .env file in the root directory and insert your db config:

```
DB_NAME='pizza_db'
DB_USER='root'
DB_PASSWORD='Your Password'
```

Assuming you have mysql setup, run this command and enter your password:

```
mysql -u root -p
```

Then you need to initiate the db/schema:

```
source db/schema.sql
```

Exit the mysql cli and run the seed script:

```
npm run seed
```

Finally, you can run the application:

```
npm start
```

You can view the app locally at http://localhost:3001/

Or view the app [live](https://nameless-river-58365-d5c2867a5c56.herokuapp.com/)

# License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

# Contributing

Contributing is welcomed! Please submit a pull request.

# Questions

Feel free to [email](mailto:hello@christianbmartinez.com?subject=[GitHub]%20Pizza%20Express) me with any questions or view [my github profile](https://github.com/christianbmartinez) to check out my other repos!

# Thanks

A special thanks to:

https://google.com/images
https://tailwindcomponents.com/component/responsive-layout-with-pizza-parlour-example-site
https://componentland.com/component/checkout-page-2

For the ready made components which sped up the development process :)
