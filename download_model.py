import os
import torch
from diffusers import StableDiffusionPipeline

TOKEN = os.environ.get("TOKEN", None)
fp16 = bool(os.environ.get("FP16", True))

pipe = StableDiffusionPipeline.from_pretrained(
	"CompVis/stable-diffusion-v1-4",
    revision="fp16" if fp16 else None,
    torch_dtype=torch.float16 if fp16 else None,
	use_auth_token=TOKEN,
)

pipe.save_pretrained('./models/stable-diffusion-v1-4')