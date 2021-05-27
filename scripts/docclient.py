import requests



response = requests.get('http://localhost:7000/docclient/a6f9ea06641bba53ff5d593ba3dc6776')

print(response.status_code)