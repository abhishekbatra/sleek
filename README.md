# sleek

## Backend Service
- Install python3 from https://python.org
- Install venv using `$ sudo apt install python3-venv`
- In the root of the project `$ python3 -m venv python-env`
- `$ source python-env/bin/activate`
- `$ cd backend`
- `$ pip install -r requirements.txt`
- `$ python manage migrate`
- `$ python manage runserver`

## To view admin on backend
- `$ python manage createsuperuser`
## Extension:
To run in dev mode:
- In command line, go to extensions directory
- `$ npm install`
- `$ npm run watch`
- Open Google Chrome's extension manager and click on Developer Mode
- Click Load Unpacked and select extension/build folder
- If this doesn't work, open your file browser and drag the extension/build folder into the extension manager tab in Google Chrome