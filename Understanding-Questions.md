# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event listener is triggered, invoking the handleAddOne() event handler
* handleAddOne() dispatches the addOne() action to the reducer()
* the reducer() uses addOne() to decide which set of actions to undergo
* the reducer() updates the app's state based on the decided case
* TotalDisplay gets its value from the updated application state
* TotalDisplay shows the total plus 1.
