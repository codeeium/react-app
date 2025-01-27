
![img_2.png](img_2.png)

Update env file for both frontend and backend 

index file
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://13.42.26.150:3000'];

profile file
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL||'http://13.42.26.150:5038';

Registration form
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL||'http://13.42.26.150:5038';

