# Aaron Sweeney - Chooose Technical Assessment


<br>

**Position:** Senior Frontend Engineer

**Date:** 3 July 2023

[Github Repository](https://github.com/aaronsweeneyweb/chooose-test)

<br>

---

<br>
<br>


## How to run the project

<br>


First, install all dependencies:

`npm install`

<br>

Run the mock backend server:

`npm run server`

<br>
<br>

*You can then run the project in either **development** mode or **production** mode.*

<br>



Run project in **development** mode:

`npm run dev`

<br>

Run project in production mode:

`npm run build`

`npm run serve`


<br>
<br>


Run tests:

`npm run test`

<br>
<br>

---

<br>


### Requirements:

<br>

**1. The website should be responsive and built with ReactJS functional components and Typescript.**

Trips will wrap and title text will truncate when longer than 2 lines. Styles should hold up for screen widths as low as 200px. React & Typescript were used for this project.

<br>

**2. Data should be downloaded asynchronously from a mock server - serving json files (any technology).**

I used the json-server library to act as a mock server & axios in order to fetch data. Basic loading and error state handling is present.

<br>

**3. Changing the number of elements in the json file should change the number of elements on the page.**

I took the approach of treating the trips.json file as a database. As long as the mock server is running, any changes to this file should be reflected on the UI after refreshing the browser.

<br>

**4. The code should be placed in any repository along with instructions on how to run the project.**

You can find the repository [here](https://github.com/aaronsweeneyweb/chooose-test)

<br>

**5. [Optional] Usage of Chakra UI will be a plus.**

I have no proir experience using Chakra UI, but made a best attempt at implementing styles using Chakra.

<br>

**6. [Nice to have] Unit tests.**

United tests were added for the following cases:
- The loading spinner renders while data fetching is in progress. 
- The correct data is rendered to the page upon a successful fetch.
- An error message renders when there is an problem fetching the data. 

<br>
<br>

---

<br>

### Potential Improvements:

<br>

Given that this was an assessment with only a few requirements and no plans to scale the project, I didn't feel the need to go too extreme with features.

Handling specific error cases to provide a better user experience in the event that a problem occurs. React rrror boundaries is usually good practice for handling these situations.

Since I have no prior experience using Chakra UI, there may be some bad practices present. This is something that I could learn more about over time and observe through good standards in an existing project. 

File locations & folder structure should be improved if considering scaling this project.