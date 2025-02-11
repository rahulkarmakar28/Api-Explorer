# API Explorer

API Explorer is a web application that allows users to explore, search, and interact with various API resources dynamically. Users can log in, browse a list of people, view detailed information, and toggle between light and dark modes for an enhanced user experience.

## Features

- **User Authentication**: Login functionality with user session management.
- **API Data Fetching**: Uses React Query to fetch and display data from APIs.
- **Search Functionality**: Easily search and filter through resources.
- **Dark & Light Mode**: Toggle between light and dark themes.
- **Responsive UI**: Built with Mantine UI for a smooth and modern interface.

## Technologies Used

- **React** – Frontend framework for building the UI.
- **React Query** – For efficient data fetching and caching.
- **Mantine UI** – For styling and UI components.
- **React Router** – For navigation and routing.
- **SCSS** – For theme-based styling.
- **React Icons** – For theme toggling icons.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rahulkarmakar28/Api-Explorer.git
   ```
2. Navigate into the project directory:
   ```sh
   cd Api-Explorer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Visit `http://localhost:5175/` to start exploring the API resources.
- Use the login button to authenticate and access protected resources.
- Toggle between light and dark mode using the theme switch in the navbar.
- Click on a resource to view detailed information.

## File Structure

```
api-explorer/
│── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   ├── api/
│   ├── App.tsx
│   ├── main.tsx
│── public/
│── package.json
│── README.md
```

## License

This project is open-source and available under the [MIT License](LICENSE).