# SaaS E-commerce Admin Panel

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [What I Learned](#what-i-learned)

## Overview
This project consists of a robust platform for managing multiple online stores, which is a SaaS service, offering various functionalities ready to set up an e-commerce store in record time. It handles user management, a complete product catalog, website content, and orders. Additionally, it provides a summary of all store statistics.

## Tech-Stack

List the technologies, programming languages, and frameworks that I have used to build this project.

- Frontend: Next.js, JS, Tailwind, Shadcn/UI, Recharts, and many others.
- Backend: Clerk Authentication, PrismaDB, MySQL, PlanetScale, Cloudinary, Stripe, and others.
- Deployment: Vercel

## Installation
A step-by-step to run this project and test it in a local environment.

```bash
# Clone the repository
git clone [https://github.com/elian-dev/ecommerce-store.git](https://github.com/elian-dev/ecommerce-admin.git)

# Navigate to the project directory
cd ecommerce-admin

# Install dependencies
npm install

```


## Create the .env file (Create the API Keys and add it to the each variable)

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

## Connect to PlanetScale and Push Prisma

```bash
npx prisma generate
npx prisma db push
```

## Usage

```bash
# Run the project
npm run dev
```

## Features
- Authentication feature: This project uses the clerk module to keep the security and authentication logic.
- Create multiple stores: Is allowed to create multiple instances of stores and keep a separate configuration.
- Provide endpoints to consume data: Provide a documented API endpoint for different purposes to the front end side.
- Manage images and content: Enabled the functionality to get, create, edit, and remove the content of each table, and manage efficiently the images with Cloudinary.
- Toggle themes: This project has the feature to have a dark or light mode of the UI.
- UX/UI: Simple and very friendly interface to allow any user to use the platform.

## What I Learned
- Javascript modern features: This project has allowed me to use modern features of JS, and understand more about how to use them and how they work. Additionally, has allowed me to use good practices and keep a clean code.
- Use the correct library and optimize development time: One of the main goals for this project was to code a SASS platform and the frontend app optimizing the time, and thanks to keeping a good organization of the project and using different very useful libraries those goals were achieved in the end.
- Integrate a payment platform: That was something very new for me, but it is something that always wanted to learn, and this project allowed me to do it, I have learned to setup a local environment, use special tools to do testing, and about the endpoints and events when a person buys a product.
- Validate the data, cath errors, and provide the information of any event.

Special thanks to @codewithantonio on YouTube.
