# FileHive

FileHive is a MERN (MongoDB, Express, React, Node.js) web application that allows users to upload files and generate download links to share with others. It utilizes Next.js for the frontend and TypeScript for the backend, with MongoDB as the database. Cloudinary is used for file storage, and SendInBlue is used for email services to share download links.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Upload files and generate unique download links.
- Copy and send download links to other users.
- Share download links via email using SendInBlue.
- No authentication required.

## Demo

Check out the live demo of FileHive: [FileHive](https://filehive.netlify.app/)

## Prerequisites

Before running FileHive locally, make sure you have the following installed:

- Node.js and npm: [https://nodejs.org/](https://nodejs.org/)
- MongoDB database: [https://www.mongodb.com/](https://www.mongodb.com/)
- Cloudinary account: [https://cloudinary.com/](https://cloudinary.com/)
- SendInBlue account: [https://www.sendinblue.com/](https://www.sendinblue.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamshivanshyadav/filehive.git
   ```

2. Navigate to the server directory:

   ```bash
   cd filehive/server
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the server directory and configure the following environment variables:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   SENDINBLUE_API_KEY=<your-sendinblue-api-key>
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

6. Open a new terminal and navigate to the client directory:

   ```bash
   cd ../client
   ```

7. Install client dependencies:

   ```bash
   npm install
   ```

8. Start the client:

   ```bash
   npm run dev
   ```

## Usage

1. Access the FileHive application by visiting [http://localhost:3000](http://localhost:3000) in your web browser.
2. Drag and drop or click the file upload area to select files for upload.
3. Once the upload is complete, a unique download link will be generated.
4. Copy the download link and share it with others or send it via email using the provided option.

## Technologies Used

- Next.js - Frontend framework
- TypeScript - Backend language
- Express - Backend framework
- MongoDB - Database
- Mongoose - Object Data Modeling (ODM)
- Cloudinary - File storage
- SendInBlue - Email services
- Tailwind CSS - CSS framework

## Contributing

Contributions are welcome! If you find any issues or want to enhance the application, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
