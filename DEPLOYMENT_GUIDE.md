# Deployment Guide for Portfolio Website to PythonAnywhere

This guide will walk you through the process of deploying your Flask portfolio website to PythonAnywhere, a popular platform for hosting Python web applications.

## Prerequisites

- A PythonAnywhere account (Free tier works, but paid accounts offer more resources)
- Your complete Flask application code (which you already have)

## Step 1: Sign Up/Login to PythonAnywhere

1. Go to [PythonAnywhere](https://www.pythonanywhere.com/) and sign up for an account or log in if you already have one.
2. The username you choose will be part of your website's URL (e.g., `yourusername.pythonanywhere.com`)

## Step 2: Upload Your Files

### Option 1: Using the Web Interface

1. In the PythonAnywhere dashboard, click on the **Files** tab
2. Create a new directory for your project (e.g., `mysite`)
3. Navigate into the directory
4. Upload all your project files using the **Upload a file** button
   - You'll need to upload all files and folders: app.py, passenger_wsgi.py, requirements.txt, static folder, templates folder, etc.

### Option 2: Using Git (Recommended)

1. In the PythonAnywhere dashboard, open a **Bash console**
2. Clone your repository (if your code is on GitHub, GitLab, etc.):
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git mysite
   ```
3. If your code is not in a repository, you can create a zip file of your project, upload it, and extract it:
   ```bash
   mkdir mysite
   cd mysite
   unzip ~/your-uploaded-file.zip
   ```

## Step 3: Set Up a Virtual Environment

1. Open a **Bash console** in PythonAnywhere
2. Navigate to your project directory:
   ```bash
   cd mysite
   ```
3. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
4. Activate the virtual environment:
   ```bash
   source venv/bin/activate
   ```
5. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Step 4: Configure a Web App

1. Go to the **Web** tab in the PythonAnywhere dashboard
2. Click on **Add a new web app**
3. Choose your domain name (it will be in the format `yourusername.pythonanywhere.com`)
4. Select **Manual configuration**
5. Choose the Python version that matches your local development environment (Python 3.8 or newer recommended)

## Step 5: Configure WSGI File

1. In the web app configuration page, look for the **WSGI configuration file** link and click on it
2. Replace the contents with the following (adjust paths as needed):

```python
import sys
import os

# Add the project directory to the Python path
path = '/home/yourusername/mysite'
if path not in sys.path:
    sys.path.append(path)

# Import the Flask application
from app import app as application
```

3. Save the file

## Step 6: Set Up Static Files

1. In the web app configuration page, scroll down to **Static files**
2. Add the following mappings:
   - URL: `/static/` → Directory: `/home/yourusername/mysite/static`

## Step 7: Set Environment Variables

1. In the web app configuration page, scroll to the **Environment variables** section
2. Add any environment variables your application needs (e.g., `SECRET_KEY`)
3. Make sure to set `FLASK_ENV=production`

## Step 8: Update Your Flask App Configuration

1. Make sure your app.py doesn't have `debug=True` when running in production
2. Ensure your app has a proper secret key set

## Step 9: Reload Your Web App

1. Click the **Reload** button for your web app in the PythonAnywhere dashboard

## Step 10: Test Your Website

1. Visit your website at `yourusername.pythonanywhere.com`
2. Test all functionality, especially the contact form

## Troubleshooting

### Contact Form Issues

If your contact form isn't working:

1. Check the Web3Forms API integration in your app.py
2. Make sure your access key is correctly set
3. Check PythonAnywhere error logs in the **Web** tab

### Static Files Not Loading

If CSS, JavaScript, or images aren't loading:

1. Verify your static files configuration in PythonAnywhere
2. Make sure all file paths in your templates use `{{ url_for('static', filename='...') }}`

### General Issues

1. Check the error logs in the **Web** tab
2. Use the **Bash console** to debug and test your application

## Maintenance

### Updating Your Website

1. Upload new files or pull changes from your repository
2. If you've added new dependencies, update your requirements.txt and reinstall:
   ```bash
   pip install -r requirements.txt
   ```
3. Click the **Reload** button for your web app

### Database Backups (if applicable)

1. Set up regular database backups if your application uses a database

## Additional Resources

- [PythonAnywhere Help Pages](https://help.pythonanywhere.com/)
- [Flask Deployment Documentation](https://flask.palletsprojects.com/en/2.3.x/deploying/)
- [Web3Forms Documentation](https://web3forms.com/docs) for contact form integration