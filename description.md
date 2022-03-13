Exercise1 (Required)
====================

Get up and running, install and start the app and make sure to understand the
functionality first, play with it and make sure to understand all commands
involved. You should see a simple three.js app running where you can select
different geometries and change their parameters, below you'll find a list:

- Cone: {radius, height, theta start, theta length, open ended}
- Sphere: {radius, width segments, height segments, change color}
- Cylinder: {radius top, radius bottom, height, open ended}
- Cone: {radius, height, theta start, theta length}

Your first task will be implement a command pattern and integrate with the app,
that means all the above geometry modifiers listed above will spawn a command.

You'll add a couple of buttons undo/redo in order to test your command manager.
Obviously both the scene graph and the widgets will update their content accordingly
once you've pressed the buttons.

Exercise2 (Required)
====================

Create all the unit tests you may consider necessary for the attached
reactjs application. Use whatever framework you may find suitable for
this task; mocha, jest, ...

Exercise3 (Required)
====================

Create ui tests for all existing widgets and for all cases you may find
relevant. You can use whatever framework you may find suitable for this
task; selenium, storybook, ...

Exercise4 (Optional)
====================

Add the necessary libs & scripts to add code coverage to the existing
reactjs application

Exercise5 (Optional)
====================

Explain the approach you'd take in order to implement a solution where
you could compare different renders of the render view to diagnose the
rendering is consistent between different versions of the application.
How could you quantify with a certain level of confidence such renders
will remain equal across versions, different machines, resolutions, ...

Notes
=====

\- Make sure to create a git repository (add the .gitignore you may consider)
where you can track all your changes. Make sure to follow
https://www.conventionalcommits.org/en/v1.0.0/ for your commits, that means
each commit shouldn't mix differentt types {feat, fix, refactor, ...}

\- You're allowed to add new code/functionality if you consider that
might help you to complete the above exercises more succesfully. It's
not about just testing the existing code but also to improve existing
one in case you consider that's necessar. Your code should use es6
syntax

\- One of the main goals of this exercise is to showcase your skills as
a qa tester but also basic fundamentals as a developer. First and foremost
we'll consider all the foundamentals but we'll also consider criterions such
as creativity, out of the box thinking or originality, amongst others.

\- Important to keep in mind would be that after completion of this
exercise we may wanted to add CI/CD integration and move this app into
production. So ask yourself, would we be able to do so with your
solution in place? Said otherwise, we'd like it be fully automatized
with NO manual testing.

\- Please write a little report where you briefly explain the
steps/approach you took as well as the remaining things you'd need to do
to say confidently the app is tested with a high level of confidence
