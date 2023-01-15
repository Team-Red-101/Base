##This is the Carbon Footprint App Official Readme

##This 24 hour timed based application will show a question
##to ask about the user's carbon footprint for the day
##and will display a prompt according to the yes or no
##response. It will then compare that user's data to the
##rest of the users' data held in the MongoDB Database
##which is analyzed by a Scikit-Learn Python Machine Learning
##algorithm.

##Project Structure
HackathonApp - React Native Parent Directory
    -app - src folder for React Native
        - assets - images and public styling folder
        - navigation - routing
        - screens - different mobile pages

appDatabase - PyMongo Parent Directory
    - main.py - PyMongo atlas connection
    - models.py - holds PyMongo schema
    - routes.py - holds PyMongo CRUD routing

models - holds database schema for CRUD
    - models.js

routes - holds CRUD file(s) for React Native
    - promptRoutes.js

package.json

server.js - NodeJS connection to MongoDB Atlas Cloud Database