// package: gooseai
// file: generation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as generation_pb from "../../generation_pb";

interface IGenerationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generate: IGenerationServiceService_IGenerate;
}

interface IGenerationServiceService_IGenerate extends grpc.MethodDefinition<generation_pb.Request, generation_pb.Answer> {
    path: "/gooseai.GenerationService/Generate";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<generation_pb.Request>;
    requestDeserialize: grpc.deserialize<generation_pb.Request>;
    responseSerialize: grpc.serialize<generation_pb.Answer>;
    responseDeserialize: grpc.deserialize<generation_pb.Answer>;
}

export const GenerationServiceService: IGenerationServiceService;

export interface IGenerationServiceServer {
    generate: grpc.handleServerStreamingCall<generation_pb.Request, generation_pb.Answer>;
}

export interface IGenerationServiceClient {
    generate(request: generation_pb.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<generation_pb.Answer>;
    generate(request: generation_pb.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<generation_pb.Answer>;
}

export class GenerationServiceClient extends grpc.Client implements IGenerationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public generate(request: generation_pb.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<generation_pb.Answer>;
    public generate(request: generation_pb.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<generation_pb.Answer>;
}
