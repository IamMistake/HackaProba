# NeSePlasiNeBytam

This project is our hackathon solution for rebranding the website [Srekja.mk](https://srekja.mk). The web application is built using:

- **Frontend**: React  
- **Backend**: Django  
- **Database**: SQLite  
- **Containerization**: Docker Compose  

## Prerequisites
- **Docker & Docker Compose** installed on your system  
- **OpenAI API Key** (**Required**)  

## Setup & Run

1. Clone the repository:
   ```sh
   git clone https://github.com/IamMistake/Rebranding_SrekjaMk
   cd Rebranding_SrekjaMk
   ```

2. Create a folder inside `backend` named `common` and add your API key:
   ```sh
   mkdir -p backend/common
   echo "your-openai-api-key" > backend/common/api_key.txt
   ```

3. Start the application using Docker Compose:
   ```sh
   docker-compose up --build
   ```

4. Once everything is running, open the web application in your browser at:
   ```
   http://localhost:5173
   ```

## Notes
- The frontend runs on port **5173**  
- The backend runs on port **8000**  
- The SQLite database is stored within the `backend` container  

Enjoy! 🚀
