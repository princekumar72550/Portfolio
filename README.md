# Portfolio Website with Flask

This is a portfolio website built with Flask that matches the design shown in the reference image. It features a dark theme with cyan accents, responsive design, and multiple pages including Home, About, Skills, Certificates, and Contact.

## Features

- Responsive design
- Dark theme with cyan accents
- Multiple pages (Home, About, Skills, Certificates, Contact)
- Download CV functionality
- Social media links

## Installation

1. Clone this repository
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

1. Make sure your virtual environment is activated
2. Run the Flask application:
   ```
   python app.py
   ```
3. Open your web browser and navigate to `http://127.0.0.1:5000/`

## Customization

- Replace the placeholder content in the HTML templates with your own information
- Replace the placeholder resume.pdf in the static/files directory with your actual CV
- Customize the CSS in static/css/style.css to match your preferences
- Add your own social media links in the index.html file

## Project Structure

```
Flask_Web/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation
├── static/                 # Static files
│   ├── css/
│   │   └── style.css       # CSS styles
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── files/
│       └── resume.pdf      # CV/Resume file
└── templates/              # HTML templates
    ├── index.html          # Home page
    ├── about.html          # About page
    ├── skills.html         # Skills page
    ├── certificates.html   # Certificates page
    └── contact.html        # Contact page
```