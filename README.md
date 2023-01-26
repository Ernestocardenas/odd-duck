# odd-duck

## Lab 11

Instructions
As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

Create a constructor function that creates an object associated with each product, and has the following properties:
Name of the product
File path of image
Times the image has been shown
Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

For each of the three images, increment its property of times it has been shown by one.

Attach an event listener to the section of the HTML page where the images are going to be displayed.

Once the users ‘clicks’ a product, generate three new products for the user to pick from.
As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.
In the constructor function define a property to hold the number of times a product has been clicked.

After every selection by the viewer, update the newly added property to reflect if it was clicked.

As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
By default, the user should be presented with 25 rounds of voting before ending the session.
Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

After voting rounds have been completed, remove the event listeners on the product.

Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

In this module, try for a score higher than 80. Make necessary adjustments based on the report to achieve that score.
Add a screenshot of your score to your README.md file.
Stretch Goals
Handle the display and voting for an arbitrary number of images
Using a variable, declare in your JS how many images to show.
Based on that value, dynamically create that many <img> tags
Also based on that value, ensure that your randomizer is properly handling the specified number of images for display and repeat tracking.

## Lab 12 

Instructions
Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.
Update your algorithm to randomly generate three unique product images from the images directory.
Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.

Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
Place the bar chart in the section located beneath your three product images
The bar charts should only appear after all voting data has been collected.
Run a Lighthouse Accessbility report. Make necessary updates to your application based on the report to get your score above 80.

Add a screenshot of your score to your README.md file.
Stretch Goals
Try some additional charting types based off of some of the other data you collected and display them in addition to the required bar chart

## Lab 13

Instructions
Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.

Implement local storage into your current application
Make sure the data persists across both browser refreshes and resets
Hints:

Store the products array into local storage as a formatted JSON string
Retrieve the products array from local storage and then utilize the JSON.Parse() function. Remember, if your constructor utilizes prototype methods, you will have to send each item in the array back through the constructor function.

Run a Lighthouse Accessbility report. Make necessary updates to your application based on the report to get your score above 80.

Add a screenshot of your score to your README.md file.
Stretch Goals
No additional stretch goals for this assignment
