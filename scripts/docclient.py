import requests



response = requests.post('http://localhost:400/docclient/a6f9ea06641bba53ff5d593ba3dc6776')

print(response.status_code)