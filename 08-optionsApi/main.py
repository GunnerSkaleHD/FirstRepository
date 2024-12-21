import requests
import json
from datetime import datetime

# Set up the Client Portal Gateway base URL
BASE_URL = "https://localhost:4002/v1/api"

# Your conid and parameters for historical data
CONID = "713770975"  # Replace with your conid
ENDPOINT = f"{BASE_URL}/iserver/marketdata/history"

# Historical data parameters
params = {
    "conid": CONID,         # Contract ID
    "period": "1d",         # Historical data period (e.g., '1d', '1w', '1m', etc.)
    "bar": "5min",          # Bar size ('1min', '5min', '1hour', '1day', etc.)
    "outsideRth": False     # Include outside regular trading hours? (True/False)
}

# Disable SSL warnings (useful for localhost testing with self-signed certs)
requests.packages.urllib3.disable_warnings()

# HTTP headers (IBKR Client Portal Gateway requires authentication cookies)
headers = {
    "Content-Type": "application/json"
}

# Make the request
try:
    response = requests.get(ENDPOINT, params=params, verify=False)
    if response.status_code == 200:
        # Parse and print the historical data
        data = response.json()
        print(json.dumps(data, indent=4))
    else:
        print(f"Error: {response.status_code} - {response.text}")
except Exception as e:
    print(f"An error occurred: {e}")
