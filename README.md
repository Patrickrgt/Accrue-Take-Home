# Next.js Project with REST API

This project is a [Next.js](https://nextjs.org/) application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is designed to demonstrate a RESTful API integration within a Next.js framework.

## Getting Started

Open `http://localhost:3000` with your browser to see the result. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

API routes can be accessed on `http://localhost:3000/api/hello`. This endpoint can be edited in `pages/api/hello.ts`. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes.

This project utilizes an environment variable to switch the API URL, making it flexible for different deployment environments.

## Integration of ChatGPT in Workflow

I do want to be transparent and say that I do use ChatGPT to assist with various development tasks, enhancing productivity and efficiency in my workflow.

## Technologies and Features

- **REST API**: Built on Next.js, this project demonstrates how to integrate and manage a RESTful API.

## Future Enhancements

Given more time, I would focus on:
- **Learning Jest**: To implement comprehensive automated testing.
- **Integrating Swagger**: For improved API documentation and testing.
- **State Management**: Fixing the refresh state issues that arise when items are deleted or updated, and enabling the editing of room names, numbers, and prices.
- **More Editing Features**: Manage the changes for hotel number, price and beds.

## API Overview

This project features a REST API with the following endpoints:

### 1. `/api/hotelRooms`

- **Description**: This endpoint retrieves a list of all hotel rooms, including their details.
- **Method**: `GET`
- **URL**: `http://localhost:3000/api/hotelRooms`
- **Response Example**:
  ```json
  [
    {
      "id": 1,
      "name": "Deluxe Room",
      "number": "101",
      "price": "150",
      "status": "available"
    },
    {
      "id": 2,
      "name": "Standard Room",
      "number": "102",
      "price": "100",
      "status": "occupied"
    }
  ]

### 2. `/api/hotelRooms/{id}`

- **Method**: `GET`
- **Description**: `Provides details about a specific hotel room identified by its ID.`
- **Example Response**:
   ```json
  {
  "id": 1,
  "name": "Deluxe Room",
  "number": "101",
  "price": "150",
  "status": "available"
   }

## Learn More

To learn more about Next.js, refer to the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Your feedback and contributions to [the Next.js GitHub repository](https://github.com/vercel/next.js/) are welcome!

## Deploy on Vercel

Deploy your Next.js app easily using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
