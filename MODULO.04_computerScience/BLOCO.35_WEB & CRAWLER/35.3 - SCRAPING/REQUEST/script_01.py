#  python3 -m pip install requests
import requests

request = requests.get('https://www.betrybe.com/')

print('request total >>', request)
print('request status >>', request.status_code)
print('headers >>', request.headers)
print('content-type >>', request.headers['Content-Type'])
# print('text >>', request.text)
# print('content >>', request.content)
