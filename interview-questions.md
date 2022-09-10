# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: When you forget to add a column to your model when you generate it, you can fix it two ways. The first is if you haven't migrated yet. Just destroy the the model with rails destroy Student and redo it correctly. If you already migrated, then you'll have to add a column through migrations. In terminal, you'll run "rails generate migrations add_foreign_key", then you'll want to open up your app in the code editor and go to your "migrate" folder and find the new migration (it should be at the bottom of the list), once you're in there you'll see a method called "change". Inside of that method, you'll put this code "add_column :students, :cohort_id, :integer". Then you'll go back to your terminal and run "rails db:migrate". The new column should be added and you can double check your "schema.rb" file in the code editor to see it there. The name of the foreign key is "modelNameLinking_id" and it would be on the Student model.

Researched answer: As stated above.

2. Which RESTful routes must always be passed params? Why?

Your answer: All of them because they need the params to navigate to a specific page

Researched answer: This question confused me a little, I'm considering anything that you have to put in a URL to be a parameter, but I am not sure if it's just for stuff like id or dates.

3. Name three rails generator commands. What is created by each?

Your answer: model generates a table in the database with columns that you state when creating it, controller generates a controller file which is responsible for the actions of the model it was made for, resource creates a model, controller, and all the routes associated with it. 

Researched answer:

The generate model command creates a new model with a name you choose and takes in the name of each column and the data type of each column as arguments. The name of the model is uppercase and singular by convention

ex. rails generate model Supermodel name:"string" age:"integer"

the generate controller command creates the logical center of the rails application and coordinates actions between the user, the view, and the model.

ex. rails generate controller Supermodel

the generate resource command creates a model with given columns and data types, a controller, a view folder, and the necessary RESTful routes.

ex. rails generate resource Supermodel name:"string" age:"integer"

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

Controller: index / Action: gives JSON code listing all the students in the students table

action: "POST" location: /students

Controller: create / Action: Creates a database entry

action: "GET" location: /students/new

Controller: new / Action: Returns a form to the user

action: "GET" location: /students/2

Controller: show / Action: Returns a specific entry in the database associated with id 2

action: "GET" location: /students/2/edit

Controller: edit / Action: returns a form to the user

action: "PATCH" location: /students/2

Controller: update / Action: Allows you to change a database entry

action: "DELETE" location: /students/2

Controller: destroy / Action: Removes a database entry

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can view a list of tasks
As a user, I can create new tasks
As a user, I can give a task a priority
As a user, I can see the date the task was created
As a user, I can set a deadline for a task
As a user, I can archive a task and view it later
As a user, I can edit tasks
As a user, I can delete tasks
As a user, I can change the status of a task
As a user, I can sort tasks by date
As a user, I can sort tasks by priority

