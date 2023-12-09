<h1 align="center">Ignite Call</h1>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributing"> Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-live-demo">Live Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>  

</p>


<div align="center">

  ![Cover](https://github.com/enoquetembe/ignite-call/assets/98264322/c0ab0f9d-7e69-4b39-971c-2ba7bbac1417)


</div>

</p>

<br> 



## 🚀 Technologies

This project was developed with the following technologies:

- <span>[**Next.js**](https://nextjs.org/docs)</span>
- <span>[**Stitches**](https://stitches.dev/)</span>
- <span>[**Enoque-UI**](https://github.com/enoquetembe/design-system)</span>
- <span>[**TypeScript**](https://www.typescriptlang.org/)</span>
- <span>[**NextAuth**](https://next-auth.js.org/) </span>
- <span>[**Prisma**](https://www.prisma.io/) </span>
- <span>[**MySQL**](https://www.mysql.com/) </span>


## 💻 Project
The Ignite Call project was built for booking appointments from a calendar with Google Calendar integration. The user can register on the app from their Google account and indicate the days of the week and times when they will be available to schedule appointments. Every appointment registered in the application is integrated with Google Calendar, which allows the user to check their new appointments directly on the Google platform.
Ignite Call was built entirely on a Next.js project and used the mechanisms provided by the framework to create and integrate the front-end and back-end from a single code repository. Communication between the application and the database was done using the Prisma.io tool and using a MySQL database in a Docker container. The production database was published from the PlanetScale platform service and the Vercel service was used to host the application.
<br> 

## 🚀 Getting started

### Prerequisites
To get started you must have the following softwares installed:
- <a href="https://nodejs.org/en/"> Node.js </a>
- <a href="https://git-scm.com/downloads"> git </a>
- <a href="https://www.docker.com/"> Docker </a>


### Instalation 

Open a terminal follow the steps bellow

1. Clone the repository: 

``` bash 
 $ git clone https://github.com/enoquetembe/ignite-call.git
```

- Got to the project directory 
``` bash 
2. cd ignite-call
```

3. Install depedencies

``` bash 
npm install
```
4. Execute Docker Compose

``` bash 
docker compose up
```

5. create the .env file and fill in the environment variables that are in the .env.example <br>
Example:

``` bash 
DATABASE_URL="mysql://root:root@localhost:3306/yourdatabasename"
```

``` bash
# You can assign any value to this key

NEXTAUTH_SECRET=hhhh
```

``` bash
NEXTAUTH_URL=http://localhost:3000
```

``` bash
GOOGLE_CLIENT_ID=your google client id
```

``` bash
GOOGLE_CLIENT_SECRET=your google client secret key
```

<b>Note</b>: The values of the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET keys you can get them on <a href="https://console.cloud.google.com/"> Google Console </a> <br>
If you don't know how to get them, check out this <a href="https://youtu.be/pBVAyU4pZOU?si=mWdGXwTG-E9SirJl"> Youtube Tutorial </a>

6. Execute Prisma Migrations 

``` bash 
npx prisma migrate Dev
```


7. And finally runing the project locally

``` bash 
npm run dev
```
<br>

## 👨‍💻 Contributing

<p> 
  Pull Requests are welcome. For major changes, please open an issue to discuss what and which kind of changes you want to perform.<br>
  Follow these steps to make your contribution.
  
  #### 1. Fork the repository
  
  #### 2. Create your feature branch 
 ```bash
 # To make it easier name this branch with your username or with the name of the feature you added
 $ git checkout -b MyFeature
 ```
  
  #### 3. Commit your changes
  ```bash
   $ git commit -m 'Adding my feature'
  ```
  
  #### 4. Push to your feature branch
  ```bash
   $ git push origin MyFeature
  ```
  
  #### 5. Open a Pull Request
  
  <br>
  Let's work together. 😁
<p/>

<br>

## 💻 Live Demo
- You can see the application in live through [THIS LINK](https://ignite-calll.vercel.app/)

<br>

## 📄 License
This project is under MIT Lincese  [CLICK HERE](https://github.com/enoquetembe/ignite-call/blob/main/LICENSE) to read the file about the license.

<br>

Made with ❤  by [Enoque Tembe](https://github.com/enoquetembe)



