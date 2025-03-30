import sys
import os

# Add the project directory to the Python path
PATH = os.path.dirname(os.path.abspath(__file__))
if PATH not in sys.path:
    sys.path.append(PATH)

# Import the Flask application as 'application' for WSGI
from dotenv import load_dotenv
load_dotenv()

from app import app as application  # noqa

# Enable debugging on PythonAnywhere
import logging
logging.basicConfig(stream=sys.stderr, level=logging.WARNING)

# Configuration for PythonAnywhere WSGI path
# Using PythonAnywhere username 'portfilioprince'
# Configuration for PythonAnywhere WSGI
application = application