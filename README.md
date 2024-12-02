
# SysOps-Paris-Cite-

## Description
This project consists of a **front-end** developed in React and a **back-end** built with Express.js. Please follow the instructions below to clone, install dependencies, and get started with the project.

---

## Instructions for Cloning and Setting Up the Project

### 1. Clone the Repository
To begin, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Omar-Amaraa/SysOps-Paris-Cit-.git
```

Once the repository is cloned, navigate into the project directory:

```bash
cd SysOps-Paris-Cit-
```

---

### 2. Install Dependencies

#### Prerequisites:
Ensure that you have the following installed:
- **Node.js** (Recommended version: LTS)
  - [Download Node.js here](https://nodejs.org/)
- **npm** (Included with Node.js)
- **psql** (PostgreSQL command-line tool)
- **pgAdmin** (Optional: A GUI for managing PostgreSQL databases)  
  - [Download pgAdmin here](https://www.pgadmin.org/download/)
- **Postman** (Optional: For API testing)  
  - [Download Postman here](https://www.postman.com/downloads/)

#### Installing Project Dependencies:

##### Front-end:
1. Navigate to the front-end directory:
   ```bash
   cd front-end
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

##### Back-end:
1. Navigate to the back-end directory:
   ```bash
   cd ../back-end
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

---

### 3. Run the Project

#### Front-end:
To start the React development server:
```bash
cd front-end
npm start
```
The application will be available at `http://localhost:3000`.

#### Back-end:
To start the Express server:
```bash
cd back-end
npm start 
```
The server will be available at `http://localhost:5000` (or the configured port).

---

### 4. Optional: Serve the Production Build

If you want to test the production build locally:

1. Build the front-end application:
   ```bash
   cd front-end
   npm run build
   ```

2. Install `serve` globally (only once, if not already installed):
   ```bash
   npm install -g serve
   ```

3. Serve the production build:
   ```bash
   serve -s build
   ```


---

### 5. Contribution Guidelines

If you wish to contribute to this project, follow these steps:

1. Create a new branch:
   ```bash
   git checkout -b your-new-branch
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. Push the branch to the remote repository:
   ```bash
   git push origin your-new-branch
   ```

4. Open a Pull Request on GitHub.

---

## Summary of Commands

### Clone the repository:
```bash
git clone https://github.com/Omar-Amaraa/SysOps-Paris-Cit-.git
cd SysOps-Paris-Cit-
```

### Front-end:
1. Install dependencies:
   ```bash
   cd front-end
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

### Back-end:
1. Install dependencies:
   ```bash
   cd ../back-end
   npm install
   ```
2. Start the Express server:
   ```bash
   npm start
   ```

### Optional: Serve the production build:
1. Build the front-end:
   ```bash
   cd front-end
   npm run build
   ```
2. Serve the static files:
   ```bash
   serve -s build
   ```

---

## License
This project is licensed under [ISC](https://opensource.org/licenses/ISC).
