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
