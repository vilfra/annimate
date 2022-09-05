import {GenerationServiceClient} from "./src/proto/generation_grpc_pb";
import * as generation_pb from "./src/proto/generation_pb";
import {grpc} from "@grpc/grpc-js"
import {CallMetadataOptions} from "@grpc/grpc-js/build/src/call-credentials";

export function test() {
    let channel_credentials = grpc.credentials.createSsl();
    let call_credentials = grpc
        .credentials
        .createFromMetadataGenerator((options: CallMetadataOptions, cb: (err: Error | null, metadata: grpc.Metadata) => void) => {
            let metadata = new grpc.Metadata();
            metadata.add("authorization", `Bearer ${token}`);
            cb(null, metadata);
        });

    let credentials = grpc.credentials.combineChannelCredentials(channel_credentials, call_credentials);

    let client = new GenerationServiceClient("grpc.stability.ai:443", credentials);

    const request = new generation_pb.Request();
    request.setEngineId("stable-diffusion-v1");

    let response: grpc.ClientReadableStream<generation_pb.Answer> = client.generate(request);
    response.on("data", (data: generation_pb.Answer) => {
        console.log(`[generate] got image answer: ${JSON.stringify(data)}`)
    })
}


