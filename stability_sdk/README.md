# stability-sdk
Using the stability API to query for stable-diffusion images.
* https://github.com/Stability-AI/stability-sdk

### 1. Install SDK:
```
pip3 install stability-sdk
```
### 2. Clone repo:
```
git clone https://github.com/Stability-AI/stability-sdk.git
```

### 2. Set API key:
Copy API key from https://beta.dreamstudio.ai/membership. And set as enviromnet variable:
```
export STABILITY_KEY=<your/stability/key>
```

### 3. Try out the Python client:
```
python3 stability-sdk/src/stability_sdk/client.py -W 512 -H 512 -n 1 --show "A stunning house."
```

### 4. Try out a simple Python implementation
```
pip3 install pillow
python3 test_python.py
```
### 5. Try out javascript API (TODO)