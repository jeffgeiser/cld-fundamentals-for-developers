# Cloudinary Fundamentals for Developers

This code repository supports the Cloudinary Customer Education course offered [Self Service offered in the Cloudinary Academy](https://training.cloudinary.com/learn/course/cloudinary-fundamentals-for-developers/) and virtual online courses offered throughout the year. 

Download, clone or fork this repository so that you can work along with the code.

## Setup

Install the latest version of node.js/npm to follow along with node exercises.
[Download node.js and npm](https://nodejs.org/en/download/). You must be at Node.js Version 10 or greater. 
 

You can update node/npm with this command: `npm i npm@latest -g` 

## IDE

We'll be using [Visual Studio Code](https://code.visualstudio.com/) to manage code in demos.

A text editor will work, but we recommend these IDE's for working with JavaScript as well:

* [Atom](https://atom.io/)
* [AWS Cloud 9](https://aws.amazon.com/cloud9/)
* [Brackets](http://brackets.io/)
* [WebStorm](https://www.jetbrains.com/webstorm/)
* [Sublime](https://www.sublimetext.com/)

## Setting up an HTTP Server

I’ll be using [Visual Studio Code](https://code.visualstudio.com/) with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to serve HTML files on localhost.  

Another alternative to using the VS Code live server extension is to install the npm http-server
```bash
npm i -g http-server
``` 
and open the server from the terminal with 
```
npx http-server
```

If you're using a Mac, you can use the built in python server
```bash 
python -m SimpleHTTPServer 8000
```
## .env
Your `.env` file is `.gitignored ` and can’t be accidentally checked into a repository
because it will contain your `API_SECRET`.   

In the root of the project, you’ll find a `.env.template` file.
Copy it to an `.env` file and add your information: 
```bash
cp .env.template .env
```
This link will take you to the Console, where you can copy the Cloudinary 
URL into your buffer: https://www.cloudinary.com.

The .env file should contain the CLOUDINARY_URL and a USER_NAME which is the email you used to sign up for the account.

```bash
CLOUDINARY_URL=<cloudinary URL from console>
USER_NAME=<cloudinary account email>
```

## How to Run the node.js scripts 
Before running any scripts you need to run `npm install` in the terminal.  



