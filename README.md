# annimate
Deploying text to image generator online. Currently following these two examples:
* https://github.com/ramsrigouthamg/GPU_Docker_Deployment_HuggingFace_Summarization
* https://github.com/NickLucche/stable-diffusion-nvidia-docker

1. Clone repo:
```
git clone https://github.com/vilfra/annimate.git
```

2. Build docker:

We need a huggingface token to download the model weights. Can be found here: https://huggingface.co/settings/tokens.
```
docker build --build-arg TOKEN=<your/huggingface/token> -t annimate/stable-diffusion .
```
3. Run docker (TODO):
```
docker run -p 80:80 --gpus all annimate/stable-diffusion
```
4. Query docker for inference results (TODO):

5. Redo everything on AWS ECR/ECS (?) (TODO):

6. Deploy on sagemaker (TODO):
## Inference
### Stable-diffusion
#### 1.  Pipeline

This seems like the way to go if we want to run stable diffusion.

* Example of docker using the pipeline - https://github.com/NickLucche/stable-diffusion-nvidia-docker

## Deployment
### Where to deploy
#### 1. SageMaker

Seems to be the way to go but don't really understand Amazons own guides.

* https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html
* Examples - https://github.com/aws/amazon-sagemaker-examples
* Guide - https://github.com/aws/amazon-sagemaker-examples/blob/main/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb

### How to deploy
#### 1. FastAPI
Simple and easy to follow good guide. I think this is a good starting point.
* Example: https://github.com/ramsrigouthamg/GPU_Docker_Deployment_HuggingFace_Summarization
#### 2. TorchServe

Seemed like a very good and simple option but I can't figure out how to archive the whole stable diffusion pipeline. The archiver seems to only accept single model files and model definitions are also needed.
* TorchServe - https://github.com/pytorch/serve
* Question about archiving multiple models - https://github.com/pytorch/serve/issues/633
* Introduction video: https://www.youtube.com/watch?v=6xaMskcWmXY


