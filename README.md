# coding_test

Reusable library

I have not configured everything nor have I set up the Dialog to be a reusable component to be exported outside of the library.

I have configured a component to be called Scenario to match the unit tests.
From the unit tests I was able to derive that it's testing a dialog within the Scenarion component, hence I went ahead and created a Dialog component that is reusable that accepts, a isOpen, onClose and children properties.

These properties will allow the dialog to display, to have customization in how the body renders information and lastly we can costumize the closing workflow of the dialog.

In terms of developer configuration, I left most vite/react default configs for ts/node as it is, but I'm sure I can further configure the files to make developer's life easier when they are working in the repo.

The Scenario component is missing a Open Dialog button, due to the fact we did not recover any unit tests that cover that user's workflow but in the future we can add an open button to allow users to open and close dialogs as they see fit. And with that additional workflow, we can go ahead and add unit tests to make sure that it opens and closes as expected.

We also do not have unit tests testing that we can pass children components into the dialog, so future tests should be added to expect a dialog to render the provided children elements.
