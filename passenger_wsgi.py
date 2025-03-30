import sys
import os

# Add the project directory to the Python path
PATH = os.path.dirname(os.path.abspath(__file__))
if PATH not in sys.path:
    sys.path.append(PATH)

# Import the Flask application as 'application' for WSGI
from app import app as application  # noqa

# Enable debugging on PythonAnywhere
import logging
logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)

# Configuration for PythonAnywhere WSGI path
# Using PythonAnywhere username 'portfilioprince'
SCRIPT_NAME = '/portfilioprince'
if SCRIPT_NAME:
    from werkzeug.middleware.dispatcher import DispatcherMiddleware
    application = DispatcherMiddleware(application, {
        SCRIPT_NAME: application
    })