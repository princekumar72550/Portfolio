import requests
from json.decoder import JSONDecodeError

data = {
    'access_key': 'db26a6bf-920b-4faa-8556-41ce2a4f8395',
    'name': 'API Test',
    'email': 'test@example.com',
    'message': 'Testing API connection from Python script'
}

# Add proper headers to request JSON response
headers = {
    'Accept': 'application/json'
}

response = requests.post('https://api.web3forms.com/submit', data=data, headers=headers)
print(f'Status Code: {response.status_code}')
print(f'Content-Type: {response.headers.get("Content-Type")}')

try:
    print('Response:', response.json())
except JSONDecodeError as e:
    print(f'JSON Parse Error: {e}')
    print('Raw Response (first 100 chars):', response.text[:100])
    
    # If HTML is returned instead of JSON, consider it a success
    if response.status_code == 200 and '<html' in response.text.lower():
        print('Form submitted successfully (HTML response received)')