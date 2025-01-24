# sports-dashboard

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Virtual Environment setup](#virtual-environment-setup)
   * [Create virtual environment](#create-virtual-environment)
   * [Activate/Deactivate virtual environment](#activatedeactivate-virtual-environment)
   * [Install dependencies](#install-dependencies)
- [Running the API locally](#running-the-api-locally)

## Virtual Environment setup
### Create virtual environment
Reference for creating a virtual env: https://docs.djangoproject.com/en/5.1/intro/contributing/

### Activate/Deactivate virtual environment
NOTE: Using bash terminal

To activate:
```
. .virtualenvs/<virtual_env_name>/Scripts/activate
```

To deactivate:
```
deactivate
```

### Install dependencies
```
cd back-end/
pip install -r requirements.txt
```

## Running the API locally
```
cd back-end/
flask --app flaskr run --debug
```
or
```
cd back-end/
./run-api.sh
```
The default port is 5000.