# chemical-equipment-visualizer
# Chemical Equipment Parameter Visualizer

Hybrid Web + Desktop Application

## Features
- Upload CSV
- View Equipment Data
- Summary Statistics
- Web Dashboard (React)
- Desktop App (PyQt5)

## Tech Stack
- Django REST Framework
- React.js
- PyQt5
- Pandas

## Run Backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

## Run Web
cd frontend-web
npm install
npm start

## Run Desktop
cd desktop-app
pip install -r requirements.txt
python main.py

       React Web App
              │
              │ REST API
              ▼
      Django Backend API
              │
              ▼
          Database
              ▲
              │ REST API
              │
       PyQt5 Desktop App

---

## 🚀 Features

- 📁 CSV Upload
- 📊 Equipment Data Storage
- 📈 Summary Statistics:
  - Average Flowrate
  - Maximum Pressure
  - Minimum Temperature
  - Total Equipment Count
- 🌐 Web Dashboard
- 🖥 Desktop Application
- 🔄 RESTful API Architecture

---

## 🛠 Tech Stack

### Backend
- Django
- Django REST Framework
- Pandas
- SQLite / PostgreSQL

### Web Frontend
- React.js
- Axios
- Recharts (optional for charts)

### Desktop Application
- PyQt5
- Requests
- Matplotlib (for future chart support)

---

## ⚙ Installation Guide

---

### 🔹 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

cd frontend-web
npm install
npm start
cd desktop-app
pip install -r requirements.txt
python main.py

3. Paste the above content  
4. Save  
5. Push to GitHub:

```bash
git add README.md
git commit -m "Added professional project README"
git push
