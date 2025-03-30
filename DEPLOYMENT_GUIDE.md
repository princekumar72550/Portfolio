# Flask Portfolio Deployment Guide

## 5 Easy Steps

1. **PythonAnywhere Account Setup**
   - Create new account at [pythonanywhere.com](https://www.pythonanywhere.com)
   - Choose $5/month "Hacker" plan

2. **Upload Files**
   ```bash
   git clone https://github.com/YOUR-USERNAME/mysite.git
   ```
   Or manual upload (all files including .htaccess)

3. **Virtual Environment**
   ```bash
   pip install -r requirements.txt
   ```

4. **WSGI Configuration**
   - Dashboard > Web > WSGI configuration:
   ```python
   from app import app as application
   ```
   - Set environment variables:
     ```
     FLASK_ENV=production
     SECRET_KEY=your-secret-key
     ```

5. **Test Website**
   - Click 'Reload web app' in PythonAnywhere dashboard
   - Open your website: [yourusername.pythonanywhere.com](http://yourusername.pythonanywhere.com)

## Important Tips
- .htaccess file is pre-configured
- Always 'Reload' after portfolio updates
- Check dashboard logs for errors