# sleepwalker

## app description:

A Swedish job search tracker that pulls listings from Arbetsförmedlingen's API. Users create custom search filters, get daily/weekly updates on new matching jobs, and manage their entire application pipeline. Track which jobs you've applied to, their status (applied/no response/rejected/got in), add quick notes, and see basic statistics on your job search progress. Includes simple reminders for follow-ups and a compatibility score based on your skills.

### basic first test:

spring boot backend with in memory storage, react + vite frontend - whole app should just be a page that displays 10 jobs fetched and filtered from the jobtech API.

## documentation:

### structure

this project started as a simple spring boot application.
it was initialized with start.spring.io.
it uses maven with added dependency "spring-boot-starter-web".

### the mvc

this project uses spring mvc - how we handle web requests.
model - data + logic. where our app's data is. often connected to a database.
view - what the user sees. this can be something like html and css, or react files.
controller - the mediator. handles incoming requests from the user, interacts with the model to get data, and tells the view what to update.
