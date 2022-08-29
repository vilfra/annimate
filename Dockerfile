# Start from base image with CUDA (and pytorch for simplicity). TODO: Match with ECS/SageMaker versions
FROM --platform=linux/x86_64 pytorch/pytorch:1.12.1-cuda11.3-cudnn8-runtime

#set up environment
RUN apt-get update
RUN apt-get install --no-install-recommends --no-install-suggests -y \
    python3 \
    python3-pip

# Go to working directory inside container
WORKDIR /app

# Copy contents of current directory into container
COPY . .

# Install required packages
RUN pip3 install --no-cache-dir -r requirements.txt

# Download model into container
ARG TOKEN
ENV TOKEN ${TOKEN}
RUN python3 download_model.py

# Expose port 80 (?)
EXPOSE 80

# Start the app (?)
CMD ["gunicorn", "-b", "0.0.0.0:80","app:app","--workers","1","-k","uvicorn.workers.UvicornWorker"]