# ProFit Gym

This project was specifically designed in order to attracting new members, who want to know more about the gym functionality and available classes. 

**Link to live version - [ProFit Gym](https://adrian80z.github.io/CI-Milestone-1/)**

## UX

The main goal of this project is to interest new members and keep existing ones. I want  to make that project as simple as possible so I decided to divide it to separate pages to keep it clear and not overhelming users with huge quantity of information right after entering homepage. Project consist of three main pages(Home, Classes, Contact) and 6 subpages which provide particular class details. I have included a lots of eye catching images which explaining more than text.

#### User Stories
- As user I want to know about upcoming events
- As a user I want to easy navigate throught website
- As a user I want to know what classes are available and some details about it
- As a user with no proir experience want to see some helpful videos about exercises
- As a user I want to know available contact ways
- I want to know timetables and gym location
- I want to get confirmation message after registration or message sent (future feature to implement)
- As a member I want to know about all benefits for members
- As a gym owner I want to attract new members and retain old ones as many as possible

#### Wireframes
* [Mobile Layout](https://github.com/adrian80z/CI-Milestone-1/blob/master/wireframes/mobile_view.png)
* [Desktop Layaut](https://github.com/adrian80z/CI-Milestone-1/blob/master/wireframes/desktop_view.png)

## Features

Each page has sticky menu with company name and three links (Home, Classes, Contact). On the mobile versions instead links hamburger icon is displayed on the right top corner of the menu(links for desktop are hidden). After clicking it dropdown menu is shown. This is achieved by adding apropriate CSS class using JavaScript.
All resources on the site are easy to find, allowing users to navigate the layout of the site intuitively.
Each page include footer with social links and contact details.
On mobile version contact details are above the social links and all are centered.
Navigation and footer are consistent through all pages only main content changes.

#### Existing Features

-	Modal box with registration form
-	Subscription form
-	Fully responsive design
-	Sticky menu
-	Testimonials section
-	Zoom effect when hover over image on class page
-	Footer with social links
-	Contact form
-	Contact details
-	Map showing location
-	Intro text and video helping correctly performing excercise

#### Features Left to Implement
-	Add to registration form membership type
-	Create login form 
-	Create membership area
-	Create page with membership type
-	Create database to hold data of all registered users
-	Slider on homepage
-	Lightbox gallery for classes

## Technologies used

- **[HTML5](https://en.wikipedia.org/wiki/HTML5)** - standard markup language for creating Web pages.
- **[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)** - used to define styles for Web pages, including the design, layout and variations in display for different devices and screen sizes.
- **[JavaScript](https://en.wikipedia.org/wiki/JavaScript)** - used to program the behavior of Web pages
- **[VS Code](https://code.visualstudio.com/)** - code editor redefined and optimized for building and debugging modern web and cloud applications.
- **[Git](https://git-scm.com/)** - version-control system for tracking changes in source code during software development.
- **[GitHub](https://github.com/)** - provides hosting for software development version control using Git.
- **[Google Fonts](https://fonts.google.com/)** - library of free licensed fonts, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS ('_Lato_' font used in this project).
- **[Font-Awesome](https://fontawesome.com/)** - a font and icon toolkit based on CSS and LESS (icon used for mobile menu and social links in footer).

## Testing

For the testing was used following tools:
- **[Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)** - a set web authoring and debugging tools built into Google Chrome.
- **[CSS Validation](https://jigsaw.w3.org/css-validator/)** -service helps to check validity of Cascading Style Sheets (CSS).
- **[Markup Validation](https://validator.w3.org/)** - helps check the validity of Web documents.

All validation passed: no errors in the DevTools console, CSS and HTML have correct syntax as well.

The site’s navigation is consistent and reasoned. All links are working and pointing to correct place. Clicking the links in the footer will open them in a new tab.
All images resizing correctly also.

The site was tested across 3 browsers, Google Chrome, Mozilla Firefox, Opera. I used the Dev Tools in browsers to check for compatibility issues on mobile devices. 
Project also has been tested on Galaxy S3, Galaxy A20e and HTC One S.
The website looks consistent and fully responsive on all of them.

The website has two forms. One is on Home page. It is a registration form placed inside modal window and second one is on Contact page. Both forms have basic validation implemented using HTML5 features - _required_ property and for checking email address - _email_ property. After clicking submit without correcty filling the form error messages are displayed. As back-end functionality isn't implemented forms are not functional and does'nt display any confirmation message after sending data.

## Deployment
The project was developed, committed to git and pushed to GitHub using Visual Studio Code IDE. 
There are no differences between the deployed version and the development version.

#### GitHub Pages
This project was deployed to a hosting platform via GitHub Pages from the **_master branch_**.

To achieve this the following steps were taken:
1.	Go to the repository on GitHub: **https://github.com/adrian80z/CI-Milestone-1**
2.	Go to Settings (last tab under the Project title).
3.	Scroll and select GitHub Pages.
4.	From the Source dropdown select the **_master branch_**.
5.	The website being deployed and can be found at: **https://adrian80z.github.io/CI-Milestone-1/**

#### Local
To run this project locally:
1.	Go to the repository on GitHub: **https://github.com/adrian80z/CI-Milestone-1**
2.	Under the repository name, click "**_Clone or download_**".
3.	In the **_Clone with HTTPS_** section, copy the URL for the repository.
4.	In local IDE open Git Bash.
5.	Change the working directory to the location where you want the cloned directory to be made.
6.	Type `git clone`, and then paste the URL you copied in Step 3.
7.	Press Enter. Local clone will be created.

## Credits
 -	The text for the classes was taken from the https://en.wikipedia.org/ and https://www.thespencerhealthclub.com/
 
 ## Media
 -	The photos used in this site were obtained from https://pixabay.com/ and https://unsplash.com/ 
Images has been resized using online tool https://imageresizer.com
-	The videos used in this site were obtained from https://youtube.com.

## Code
-	Some of the JavaScript code was taken from the https://www.w3schools.com/
Code was used to create modal window( script placed in body section in index.html) appearing on the Homepage.

## Acknowledgements
-	I received inspiration for this project through internet research and compare functionality of other websites of that type.
-	I would like to thank you my mentor Victor Miclovich for any suggestions and feedback regarding to this project.