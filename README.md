# Hercules Gym
User-Centric Frontend Development Project - Code Institute

This is a gym website for new and existing members. It has testamonials from existing members, 
classes currently running at the gym, the gyms address and opening times as well as a contact form for any other queries/information.

## Demo
You can try the live version of the website [Here](https://gazzamc.github.io/Milestone-Project-One/)

![Hercules Preview](https://github.com/gazzamc/Milestone-Project-One/blob/master/assets/images/herculesPreview.gif?raw=true "Hercules Preview")
## UX

#### User Stories
As an existing member, I expect to see currently running classes.  
![Classes Preview](https://github.com/gazzamc/Milestone-Project-One/raw/master/assets/images/classesScreen.PNG "Classes Preview")

As a new member, I expect to see the gyms address, opening hours.
![Address Preview](https://github.com/gazzamc/Milestone-Project-One/raw/master/assets/images/addressScreen.PNG "Address Preview")

#### Strategy

My goal was to design a website that was simple to navigate but still had a modern feel to it. 
I didn't want to overload the potential users with information so I opted to just provide enough with an option to seek more.

#### Scope

I wanted to provide new users with necessary information such as the gyms address, phone and a brief summary of the company. 
As for existing users who may have wanted more information on classes that would be running, 
I provided a section with the currently running classes, the days they were taking place and a brief description of the class.

#### Structure
I went with a hero image in the landing page and an inspirational quote with the Title/Gym name. 
When scrolling down you get to the first section "Testamonials", this consists of previous/current members stories along with a name/image.
Next section is the "Classes" section, this consists of cards with different classes, the days they take place and a brief description of it.
Then we come to the "About" section, this provides a brief statement about the gym, the gyms address and opening times.
Finally we come to the "Contact" form and the "Footer" where the user can contact the gym on their preferred social media or via the build-in form.

#### Skeleton

- [Landing/Home Wireframe](https://github.com/gazzamc/Milestone-Project-One/blob/master/wireframes/testamonial_wireframe.pdf)
- [Testamonials Wireframe](https://github.com/gazzamc/Milestone-Project-One/blob/master/wireframes/landing_wireframe.pdf)
- [Classes Wireframe](https://github.com/gazzamc/Milestone-Project-One/blob/master/wireframes/classes_wireframe.pdf)
- [About Wireframe](https://github.com/gazzamc/Milestone-Project-One/blob/master/wireframes/about_wireframe.pdf)
- [Contact/Footer Wireframe](https://github.com/gazzamc/Milestone-Project-One/blob/master/wireframes/contact_footer_wireframe.pdf)


#### Surface
I went with a combination of Orange, White and Black. I thought it gave a nice modern feel to the website and was easy on the eyes when viewing.

## Features
I combined bootstraps carousel and cards to create a dynamic testamonial section. 
The cards alternate every few seconds and i think it brings a bit of variation to the website.

My navbar remains a hamburger button on all resolutions as I think it fits the design better,
It's also fixed to the top left of the screen so navigating back to the landing section or any other part of the site is easier.

I have a contact form with validation using both HTML/jQuery so the users can contact the gym. I also added a confirmation
message with a modal after submitting the contact form.

### Features left to Implement
In the future I would like to add a seperate section for the payment plans, 
breakdown of the membership and any other commodities the gym provides to it's members.

I would also like to extend the jQuery validation in the form to check for the email pattern (@ sign and ending domain), 
Right now i'm only using regex to check for a valid input with a @ sign in the email field.
## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - I used **HTML5** to layout the basic structure of the site before applying the **Bootstrap** classes/grid layout.

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - I used **CSS3** to add custom styles, images and positioning to the HTML elements.

- [Bootstrap](https://getbootstrap.com/)
    - I used **Bootstrap** in my project for it's grid system to create the basic layout of the site. I also used the navbar, modal, buttons, cards and the built-in carousel.

- [JQuery](https://jquery.com)
    - I used **JQuery** to hide/show the modal when interacting with the form and do a simple validation. It's also used to add/remove classes depending on screen size.

- [Javascript](https://www.javascript.com/)
    - I used a **Javascript** function to check for screen orientation along with my jQuery.

- [FontAwesome](https://fontawesome.com/)
    - My social media icons were from FontAwesome.

- [Google Fonts](https://fonts.google.com/)


## Testing
I used the user stories above to ensure i had the necessary information a potential user could be searching for on my website.

I tested my website in a few browsers(Chrome, Firefox, and Edge) as well as using their built-in dev tools to change resolutions/device templates. 
This allowed me to correct any misalignments or overlapping elements using @media querys. 
On top of testing the website on different browsers i also used a few different devices. 
Two Android phones (One Plus 6t, Samsung Galaxy 7), two tablets (Fire HD 8, Windows tablet), a laptop and two seperate desktops.

#### Contact form:
To test the verification on the form (required attribute), 
I tried to submit the form with each field filled once, then two and finally all fields without a proper email format.

Once I knew this form was working with the standard HTML validation I then tested with my jQuery validation. Since I'm using a modal
to display a message on successfully sending the form 
I needed to validate all fields again in jQuery to prevent the modal from showing on button click (with invalid input). Unfortunely the 
validation is very simple and only checks for empty fields in both text inputs and the @ sign in the email field. 

The regex i used for validation only checks for the @ sign in the email field, so there is an issue where the modal will show but not
pass the HTML validation.

I also tested all links with target "_blank" to see if they did in fact open in a new tab and tested 
the navigation links to see if they brought me to the corresponding section.

I had an issue with my jQuery not loading and was able to fix it my first calling the function.
Fixed a bug with the jQuery code, where the orientation wasn't being updated and not running my else if statement in dev tools without a refresh to remove the background image, 
using boolean function i was able to get this working as intended.

## Deployment
The website was deployed/hosted on GitHub pages, the following is the process in which i took to deploy it.

#### GitHub Pages

1. On the repo page of the project go to "Settings" tab.
2. Scroll down to GitHub pages.
3. Select "Master Branch" under the source dropdown.
4. A link to the deployed site should show up under the GitHub Pages section.

The master branch should be the root folder with the index.html present for the deployment to work correctly. 
Any changes pushed to GitHub will be updated on the deployed site.

#### Locally
To run the website from your local machine you can clone the project using the below command.

```
    git clone https://github.com/gazzamc/Milestone-Project-One.git
```
Then open index.html in your browser of choice.


## Credits

### Content
- The text for the about us section was copied and modified from [PureGym - About Us Section](https://www.puregym.com/about-us/)
- The text for the classes summary was copied from [Gym Plus](https://gymplus.ie/classes-at-gymplus/) and [westpark.ie](https://www.westpark.ie/class/cardio-kickboxing/)
- The text for two of the Testamonials was copied from [corevaluefitness](http://www.corevaluefitness.com.au/testimonials)
- The text for one of the Testamonials was copied and modified from [bhaf.ie](https://www.bhaf.ie/testimonials)

### Media
- The photos used in this site were obtained from [PixaBay](https://pixabay.com/) and [UnSplash](https://unsplash.com/).
    - [equipment.jpg](https://pixabay.com/photos/fitness-weight-lifting-dumbbells-375472/)
    - [girlBack.jpg](https://pixabay.com/photos/training-rmuscles-back-shoulders-828741/)
    - [gymRoom.jpg](https://pixabay.com/photos/gym-room-fitness-sport-1180062/)
    - [woman.jpg](https://unsplash.com/photos/PvOtA9AtBII)
    - [man.jpg](https://unsplash.com/photos/MObvDHLX3jI)
    - [man2.jpg](https://unsplash.com/photos/RDUjwic7yw4/)
    - [kickboxing.jpg](https://unsplash.com/photos/45tcVh0M3kw)
    - [zumba.jpg](https://unsplash.com/photos/3ckWUnaCxzc)
    - [hiit.jpg](https://unsplash.com/photos/FMQBLyhD2HU)

### Acknowledgements

- In order to get the regex working in jQuery i used this example from 
[Here](https://stackoverflow.com/questions/2021053/finding-plus-sign-in-regular-expression),
and this useful website for testing regex [Here](https://regexr.com/).

- Fixed an issue with my jQuery where it wasn't firing on first load, was fixed using this example 
[Here](https://stackoverflow.com/questions/26524096/check-browser-width-after-resize-without-reload-javascript).

- Fixed an issue where the jQuery wasn't getting the correct orientation in dev tools without a refresh, with the help of this example.
[Here](https://stackoverflow.com/questions/30785642/jquery-detect-phone-orientation).

- Changed the hamburger toggler colour using this example [Here](https://stackoverflow.com/questions/42586729/bootstrap-4-change-hamburger-toggler-color)