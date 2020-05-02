You will continue to work with the React application that you have been developing in the exercises. You will add a new component named CampsiteInfo that will display the details of a selected campsite. You will then design the view for the component using the card component. At the end of this assignment, you should have completed the following tasks:

Created a new CampsiteInfo component and added it to your React application.
Updated the view of the CampsiteInfo component to display the details of the selected campsite using an reactstrap card component.
Updated the view of the CampsiteInfo component to display the list of comments about the campsite using the Bootstrap.

Instructions
In this assignment, you will add a new component to the React application to show the details of a selected campsite. You will use the Card component and the Bootstrap unstyled list component to prepare the view for this new component.

Task 1
Add a CampsiteInfoComponent.js file in the components folder.
Create a class component named CampsiteInfo inside it, and export it as the default.
Inside its render method, check if an object with the name "campsite" (passed in via props) can be evaluated as truthy (i.e.g is not null, is not undefined)
If so, then return an empty div that has the Bootstrap row class as an attribute.
If not, return an empty <div> with no classes applied to it.
Inside DirectoryComponent, go to the main return from the Directory component's render method. There, remove the second set of row and column divs, the ones that surround the call to the method renderSelectedCampsite, and remove the method call as well.
Replace it all with a render of the CampsiteInfo component.
Pass the selectedCampsite object as props to the Campsite component, using the attribute name of "campsite".
Make sure to import the CampsiteInfo component into DirectoryComponent.js.
At this point, clicking on one of the campsites will not do anything because you are just returning an empty div. If you want to make sure it is working, you can open your React Developer Tools Components tab and you should see the CampsiteInfo component at the bottom. It will have a campsite prop of "null" at first, but once you click on a campsite, the corresponding object will populate the campsite prop.

Task 2
In this task, you will be adding a card component to the CampsiteInfo component view to display more information about the campsite given above:

In the CampsiteInfo component, add a method named renderCampsite(), above the render() method.
Give it a variable named "campsite" as the only parameter inside its parameter list.
Write a return statement for this component, with parentheses following the return. Inside the parentheses, add a JSX div element with the classes col-md-5 and m-1.
Inside this div, copy over the <Card> component from the renderSelectedCampsite(campsite) method in the Directory component, and all the other Card components inside it. Make sure to import the Card components from Reactstrap.
You can now delete the rest of the renderSelectedCampsite method from the Directory component.
Inside the CampsiteInfo component's render() method, inside the empty <div> with the row class you set up earlier, call the renderCampsite method (remember to use this) and pass the campsite to it.
Check your app in your browser. Make sure that when you click a campsite from the Directory, you see a Card appear at the bottom with the campsite information.

Task 3
In this task, you will use the comments that are included in the campsites object to display a list of the comments for the campsite, as shown in the image below.

This task involves the following steps:

Implement a method inside the CampsiteInfo component named renderComments() that takes the comments array stored in the campsite object as a parameter -- i.e. renderComments(comments).
Inside this method, first check that the comments are not null or undefined. You can do this simply by checking: if (comments) because a null or undefined value would evaluate as falsy.
Inside this if statement, set up a return statement with parentheses.
Inside the parentheses, return a <div> with Bootstrap column classes such that it occupies 5 columns for viewports md and above.
Also apply a class of m-1 to this <div>. This <div> should look identical to the one you made to enclose the campsite Card in Task 2.
Inside this <div>, add a <h4> header with the word "Comments" inside it.
Below the header, set up a pair of curly braces -- this is so that you can embed a JavaScript expression within JSX.
Inside this pair of curly braces, set up an expression as follows:
Use the array method map on the comments array. You do not need to set up a variable to store the new array. See the example in the Code Challenge from this week on constructing lists.
Inside the body of the callback function for the map method, return the comment in two lines - the first line should show the comment text, and the second line should show the comment author and date.
Use this code to format the date correctly:
{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
After the closing curly brace for the if statement, return an empty div.

Inside the CampsiteInfo component's render() function, under where you called the renderCampsite method, add the renderComments method, passing in the campsite object's comments array.
