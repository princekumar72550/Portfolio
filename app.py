from flask import Flask, render_template, send_from_directory, request, flash, redirect, url_for
import os
import json
import requests

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Change this to a random secret key in production

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/certificates')
def certificates():
    return render_template('certificates.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        # Web3Forms API integration
        data = {
            'access_key': request.form.get('access_key'),
            'name': name,
            'email': email,
            'message': message
        }
        
        # Add proper headers to request JSON response
        headers = {
            'Accept': 'application/json'
        }
        
        response = requests.post('https://api.web3forms.com/submit', data=data, headers=headers)
        
        try:
            response_data = response.json()
            if response.status_code == 200 and response_data.get('success'):
                flash('Message sent successfully!', 'success')
            else:
                flash(f'Error: {response_data.get("error")}', 'danger')
        except json.JSONDecodeError:
            # If HTML is returned instead of JSON, check if it was successful
            if response.status_code == 200 and '<html' in response.text.lower():
                flash('Message sent successfully!', 'success')
            else:
                flash('Error processing form submission', 'danger')
        except Exception as e:
            flash(f'Connection error: {str(e)}', 'danger')
        
        return redirect(url_for('home'))
    
    return render_template('index.html')

@app.route('/download_cv')
def download_cv():
    # Path to your CV file
    cv_path = os.path.join(app.root_path, 'static', 'files')
    return send_from_directory(cv_path, 'resume.pdf')

if __name__ == '__main__':
    app.run(debug=True)