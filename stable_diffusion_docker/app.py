import os

import torch

from fastapi import Request,FastAPI
from pydantic import BaseModel
import uvicorn

from diffusers import StableDiffusionPipeline
from diffusers.pipelines.stable_diffusion.safety_checker import (
    StableDiffusionSafetyChecker,
)

app = FastAPI()

torch.set_grad_enabled(False)
device = torch.cuda.get_device_name() if torch.cuda.is_available() else 'cpu'

print("Loading model...")
torch.set_grad_enabled(False)
pipe = StableDiffusionPipeline.from_pretrained("/app/models/stable-diffusion-v1-4", local_files_only=True)
safety = pipe.safety_checker
if torch.cuda.is_available():
    print(f"Moving model to {device}...")
    pipe.to(device)

print("Ready!")

def dummy_checker(images, **kwargs):
    return images, False

def inference(prompt,
              num_images,
              num_inference_steps,
              height,
              width,
              guidance_scale,
              seed,
              nsfw_filter):
    # for repeatable results
    generator = (
        torch.Generator(device).manual_seed(seed)
        if seed is not None and seed > 0
        else None
    )

    if nsfw_filter:
        pipe.safety_checker = safety
    else:
        pipe.safety_checker = dummy_checker

    prompt = [prompt] * num_images

    with torch.autocast(device):
        images = pipe(
            prompt,
            num_inference_steps=num_inference_steps,
            height=height,
            width=width,
            guidance_scale=guidance_scale,
            generator=generator,
        )["sample"]

    return images

class InferenceRequest(BaseModel):
    prompt: str
    num_images: int
    num_inference_steps: int
    height: int
    width: int
    guidance_scale: int
    seed: int
    nsfw_filter: bool

@app.get('/')
async def home():
    return {"message": "Hello World"}

@app.post("/inference")
async def inference_async(request: InferenceRequest):
    response = inference(request.prompt,
                         num_images=getattr(request, "num_images", 1),
                         num_inference_steps=getattr(request, "num_inference_steps", 50),
                         height=getattr(request, "height", 512),
                         width=getattr(request, "width", 512),
                         guidance_scale=getattr(request, "guidance_scale", 7),
                         seed=getattr(request, "seed", None),
                         nsfw_filter=getattr(request, "nsfw_filter", True))
    return response
