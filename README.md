# Story Book app



Blog/social network style web app prototype. Made only for some educational purposes. </br>
</br>
</br>
![alt text](https://github.com/pouzak/storyapp/blob/master/screen.jpg)
</br>
</br>
### Features


- Create/delete posts;
- Data stored on MongoDB, mlab.com online hosted database;
- Image files stored in Cloudinary cloud storage and auto resized;
- Search, multi-step post add form, rich-text input form, image slider and other cool features!;
</br>
</br>

### Tech

 - Node/Express REST API based back-end;
 - Multer/Cloudinary setup for image cloud storage;
 - ReactJS based front-end;
 - Material Design and Bootstrap 4 framework elements and animations;
 
 </br>
</br>

### Installation


 Create .env file for environment variables in main directory:
 ```sh
MONGO_URI=mongodb://user:xxxxxxxx3@ds74415.mlab.com:12345/project01    //mlab DB example for data storage
CLOUD_NAME='xxxxxx'     //Cloudinary API info
API_KEY='xxxxxxxxxxxx'      
API_SECRET='_xxxxxxxxxxxx'
```

Node modules and React client install

 ```sh
npm install
npm run client-install
```
Start
 ```sh
npm run dev
```

