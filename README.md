# Steps to display site in browser:

1. Download Files: Download the HTML, CSS, JavaScript files to your computer
2. Set Up File Structure: Ensure all files are in the same directory. 
3. Open HTML File: Right-click on index.html and select "Open with" then choose your preferred web browser.
4. View the Site: Your web browser should open, displaying the Investment Profile site.

# Design Choices and Explanations:
**Header Design:**
Utilized Flexbox for the .header class to align the logo and heading horizontally with space between.
Used a beige background color for the header to create visual separation from the rest of the content.
**Font Choice:**
Chose the "Nunito" font for the heading and body text for its readability and modern appearance.
**Footer Design:**
Positioned the footer at the bottom of the page using position: absolute; bottom: 0;.
Gave the footer a beige background and grey text color for consistency with the header.
**Table Styling:**
Styled the table to collapse borders and align text to the left for better readability.
Added a light grey border-bottom to each <tr> for clear separation between table rows.
**Button Styling:**
Styled buttons with a red background, white text, and bold font for emphasis.
Utilized border-radius for rounded button corners and margin-right for spacing between buttons.
**Responsive Design:**
Incorporated a media query to adjust button layout for screens smaller than 600px, ensuring readability and usability on mobile devices.

# Code/File Structure and Explanations:
**HTML Structure:**
Divided content into sections such as header, stock information, buttons container, and footer.
Used semantic HTML elements (<header>, <footer>) for better accessibility and SEO.
**CSS Structure:**
Organized CSS rules by grouping related styles together (e.g., header, table, buttons).
Maintained consistency in naming conventions and indentation for readability.
**JavaScript Structure:**
Defined event listeners for button clicks to toggle visibility of corresponding sections.
Used conditional statements for showing/hiding sections based on their current state.
