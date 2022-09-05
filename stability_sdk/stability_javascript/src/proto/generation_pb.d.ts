// package: gooseai
// file: generation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Token extends jspb.Message { 

    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): Token;
    getId(): number;
    setId(value: number): Token;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Token.AsObject;
    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Token;
    static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
    export type AsObject = {
        text?: string,
        id: number,
    }
}

export class Tokens extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<Token>;
    setTokensList(value: Array<Token>): Tokens;
    addTokens(value?: Token, index?: number): Token;

    hasTokenizerId(): boolean;
    clearTokenizerId(): void;
    getTokenizerId(): string | undefined;
    setTokenizerId(value: string): Tokens;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tokens.AsObject;
    static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tokens;
    static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
    export type AsObject = {
        tokensList: Array<Token.AsObject>,
        tokenizerId?: string,
    }
}

export class Artifact extends jspb.Message { 
    getId(): number;
    setId(value: number): Artifact;
    getType(): ArtifactType;
    setType(value: ArtifactType): Artifact;
    getMime(): string;
    setMime(value: string): Artifact;

    hasMagic(): boolean;
    clearMagic(): void;
    getMagic(): string | undefined;
    setMagic(value: string): Artifact;

    hasBinary(): boolean;
    clearBinary(): void;
    getBinary(): Uint8Array | string;
    getBinary_asU8(): Uint8Array;
    getBinary_asB64(): string;
    setBinary(value: Uint8Array | string): Artifact;

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): Artifact;

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): Tokens | undefined;
    setTokens(value?: Tokens): Artifact;

    hasClassifier(): boolean;
    clearClassifier(): void;
    getClassifier(): ClassifierParameters | undefined;
    setClassifier(value?: ClassifierParameters): Artifact;
    getIndex(): number;
    setIndex(value: number): Artifact;
    getFinishReason(): FinishReason;
    setFinishReason(value: FinishReason): Artifact;
    getSeed(): number;
    setSeed(value: number): Artifact;

    getDataCase(): Artifact.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Artifact.AsObject;
    static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Artifact;
    static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
    export type AsObject = {
        id: number,
        type: ArtifactType,
        mime: string,
        magic?: string,
        binary: Uint8Array | string,
        text: string,
        tokens?: Tokens.AsObject,
        classifier?: ClassifierParameters.AsObject,
        index: number,
        finishReason: FinishReason,
        seed: number,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        BINARY = 5,
        TEXT = 6,
        TOKENS = 7,
        CLASSIFIER = 11,
    }

}

export class PromptParameters extends jspb.Message { 

    hasInit(): boolean;
    clearInit(): void;
    getInit(): boolean | undefined;
    setInit(value: boolean): PromptParameters;

    hasWeight(): boolean;
    clearWeight(): void;
    getWeight(): number | undefined;
    setWeight(value: number): PromptParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromptParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PromptParameters): PromptParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromptParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromptParameters;
    static deserializeBinaryFromReader(message: PromptParameters, reader: jspb.BinaryReader): PromptParameters;
}

export namespace PromptParameters {
    export type AsObject = {
        init?: boolean,
        weight?: number,
    }
}

export class Prompt extends jspb.Message { 

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): PromptParameters | undefined;
    setParameters(value?: PromptParameters): Prompt;

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): Prompt;

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): Tokens | undefined;
    setTokens(value?: Tokens): Prompt;

    hasArtifact(): boolean;
    clearArtifact(): void;
    getArtifact(): Artifact | undefined;
    setArtifact(value?: Artifact): Prompt;

    getPromptCase(): Prompt.PromptCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prompt.AsObject;
    static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prompt;
    static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
}

export namespace Prompt {
    export type AsObject = {
        parameters?: PromptParameters.AsObject,
        text: string,
        tokens?: Tokens.AsObject,
        artifact?: Artifact.AsObject,
    }

    export enum PromptCase {
        PROMPT_NOT_SET = 0,
        TEXT = 2,
        TOKENS = 3,
        ARTIFACT = 4,
    }

}

export class AnswerMeta extends jspb.Message { 

    hasGpuId(): boolean;
    clearGpuId(): void;
    getGpuId(): string | undefined;
    setGpuId(value: string): AnswerMeta;

    hasCpuId(): boolean;
    clearCpuId(): void;
    getCpuId(): string | undefined;
    setCpuId(value: string): AnswerMeta;

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): string | undefined;
    setNodeId(value: string): AnswerMeta;

    hasEngineId(): boolean;
    clearEngineId(): void;
    getEngineId(): string | undefined;
    setEngineId(value: string): AnswerMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerMeta.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerMeta): AnswerMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerMeta;
    static deserializeBinaryFromReader(message: AnswerMeta, reader: jspb.BinaryReader): AnswerMeta;
}

export namespace AnswerMeta {
    export type AsObject = {
        gpuId?: string,
        cpuId?: string,
        nodeId?: string,
        engineId?: string,
    }
}

export class Answer extends jspb.Message { 
    getAnswerId(): string;
    setAnswerId(value: string): Answer;
    getRequestId(): string;
    setRequestId(value: string): Answer;
    getReceived(): number;
    setReceived(value: number): Answer;
    getCreated(): number;
    setCreated(value: number): Answer;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): AnswerMeta | undefined;
    setMeta(value?: AnswerMeta): Answer;
    clearArtifactsList(): void;
    getArtifactsList(): Array<Artifact>;
    setArtifactsList(value: Array<Artifact>): Answer;
    addArtifacts(value?: Artifact, index?: number): Artifact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
    export type AsObject = {
        answerId: string,
        requestId: string,
        received: number,
        created: number,
        meta?: AnswerMeta.AsObject,
        artifactsList: Array<Artifact.AsObject>,
    }
}

export class SamplerParameters extends jspb.Message { 

    hasEta(): boolean;
    clearEta(): void;
    getEta(): number | undefined;
    setEta(value: number): SamplerParameters;

    hasSamplingSteps(): boolean;
    clearSamplingSteps(): void;
    getSamplingSteps(): number | undefined;
    setSamplingSteps(value: number): SamplerParameters;

    hasLatentChannels(): boolean;
    clearLatentChannels(): void;
    getLatentChannels(): number | undefined;
    setLatentChannels(value: number): SamplerParameters;

    hasDownsamplingFactor(): boolean;
    clearDownsamplingFactor(): void;
    getDownsamplingFactor(): number | undefined;
    setDownsamplingFactor(value: number): SamplerParameters;

    hasCfgScale(): boolean;
    clearCfgScale(): void;
    getCfgScale(): number | undefined;
    setCfgScale(value: number): SamplerParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SamplerParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SamplerParameters): SamplerParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SamplerParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SamplerParameters;
    static deserializeBinaryFromReader(message: SamplerParameters, reader: jspb.BinaryReader): SamplerParameters;
}

export namespace SamplerParameters {
    export type AsObject = {
        eta?: number,
        samplingSteps?: number,
        latentChannels?: number,
        downsamplingFactor?: number,
        cfgScale?: number,
    }
}

export class ConditionerParameters extends jspb.Message { 

    hasVectorAdjustPrior(): boolean;
    clearVectorAdjustPrior(): void;
    getVectorAdjustPrior(): string | undefined;
    setVectorAdjustPrior(value: string): ConditionerParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConditionerParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ConditionerParameters): ConditionerParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConditionerParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConditionerParameters;
    static deserializeBinaryFromReader(message: ConditionerParameters, reader: jspb.BinaryReader): ConditionerParameters;
}

export namespace ConditionerParameters {
    export type AsObject = {
        vectorAdjustPrior?: string,
    }
}

export class StepParameter extends jspb.Message { 
    getScaledStep(): number;
    setScaledStep(value: number): StepParameter;

    hasSampler(): boolean;
    clearSampler(): void;
    getSampler(): SamplerParameters | undefined;
    setSampler(value?: SamplerParameters): StepParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepParameter.AsObject;
    static toObject(includeInstance: boolean, msg: StepParameter): StepParameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepParameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepParameter;
    static deserializeBinaryFromReader(message: StepParameter, reader: jspb.BinaryReader): StepParameter;
}

export namespace StepParameter {
    export type AsObject = {
        scaledStep: number,
        sampler?: SamplerParameters.AsObject,
    }
}

export class TransformType extends jspb.Message { 

    hasDiffusion(): boolean;
    clearDiffusion(): void;
    getDiffusion(): DiffusionSampler;
    setDiffusion(value: DiffusionSampler): TransformType;

    hasUpscaler(): boolean;
    clearUpscaler(): void;
    getUpscaler(): Upscaler;
    setUpscaler(value: Upscaler): TransformType;

    getTypeCase(): TransformType.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransformType.AsObject;
    static toObject(includeInstance: boolean, msg: TransformType): TransformType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransformType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransformType;
    static deserializeBinaryFromReader(message: TransformType, reader: jspb.BinaryReader): TransformType;
}

export namespace TransformType {
    export type AsObject = {
        diffusion: DiffusionSampler,
        upscaler: Upscaler,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
        DIFFUSION = 1,
        UPSCALER = 2,
    }

}

export class ImageParameters extends jspb.Message { 

    hasHeight(): boolean;
    clearHeight(): void;
    getHeight(): number | undefined;
    setHeight(value: number): ImageParameters;

    hasWidth(): boolean;
    clearWidth(): void;
    getWidth(): number | undefined;
    setWidth(value: number): ImageParameters;
    clearSeedList(): void;
    getSeedList(): Array<number>;
    setSeedList(value: Array<number>): ImageParameters;
    addSeed(value: number, index?: number): number;

    hasSamples(): boolean;
    clearSamples(): void;
    getSamples(): number | undefined;
    setSamples(value: number): ImageParameters;

    hasSteps(): boolean;
    clearSteps(): void;
    getSteps(): number | undefined;
    setSteps(value: number): ImageParameters;

    hasTransform(): boolean;
    clearTransform(): void;
    getTransform(): TransformType | undefined;
    setTransform(value?: TransformType): ImageParameters;
    clearParametersList(): void;
    getParametersList(): Array<StepParameter>;
    setParametersList(value: Array<StepParameter>): ImageParameters;
    addParameters(value?: StepParameter, index?: number): StepParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ImageParameters): ImageParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageParameters;
    static deserializeBinaryFromReader(message: ImageParameters, reader: jspb.BinaryReader): ImageParameters;
}

export namespace ImageParameters {
    export type AsObject = {
        height?: number,
        width?: number,
        seedList: Array<number>,
        samples?: number,
        steps?: number,
        transform?: TransformType.AsObject,
        parametersList: Array<StepParameter.AsObject>,
    }
}

export class ClassifierConcept extends jspb.Message { 
    getConcept(): string;
    setConcept(value: string): ClassifierConcept;

    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): number | undefined;
    setThreshold(value: number): ClassifierConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifierConcept.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifierConcept): ClassifierConcept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifierConcept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifierConcept;
    static deserializeBinaryFromReader(message: ClassifierConcept, reader: jspb.BinaryReader): ClassifierConcept;
}

export namespace ClassifierConcept {
    export type AsObject = {
        concept: string,
        threshold?: number,
    }
}

export class ClassifierCategory extends jspb.Message { 
    getName(): string;
    setName(value: string): ClassifierCategory;
    clearConceptsList(): void;
    getConceptsList(): Array<ClassifierConcept>;
    setConceptsList(value: Array<ClassifierConcept>): ClassifierCategory;
    addConcepts(value?: ClassifierConcept, index?: number): ClassifierConcept;

    hasAdjustment(): boolean;
    clearAdjustment(): void;
    getAdjustment(): number | undefined;
    setAdjustment(value: number): ClassifierCategory;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): Action | undefined;
    setAction(value: Action): ClassifierCategory;

    hasClassifierMode(): boolean;
    clearClassifierMode(): void;
    getClassifierMode(): ClassifierMode | undefined;
    setClassifierMode(value: ClassifierMode): ClassifierCategory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifierCategory.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifierCategory): ClassifierCategory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifierCategory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifierCategory;
    static deserializeBinaryFromReader(message: ClassifierCategory, reader: jspb.BinaryReader): ClassifierCategory;
}

export namespace ClassifierCategory {
    export type AsObject = {
        name: string,
        conceptsList: Array<ClassifierConcept.AsObject>,
        adjustment?: number,
        action?: Action,
        classifierMode?: ClassifierMode,
    }
}

export class ClassifierParameters extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<ClassifierCategory>;
    setCategoriesList(value: Array<ClassifierCategory>): ClassifierParameters;
    addCategories(value?: ClassifierCategory, index?: number): ClassifierCategory;
    clearExceedsList(): void;
    getExceedsList(): Array<ClassifierCategory>;
    setExceedsList(value: Array<ClassifierCategory>): ClassifierParameters;
    addExceeds(value?: ClassifierCategory, index?: number): ClassifierCategory;

    hasRealizedAction(): boolean;
    clearRealizedAction(): void;
    getRealizedAction(): Action | undefined;
    setRealizedAction(value: Action): ClassifierParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifierParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifierParameters): ClassifierParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifierParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifierParameters;
    static deserializeBinaryFromReader(message: ClassifierParameters, reader: jspb.BinaryReader): ClassifierParameters;
}

export namespace ClassifierParameters {
    export type AsObject = {
        categoriesList: Array<ClassifierCategory.AsObject>,
        exceedsList: Array<ClassifierCategory.AsObject>,
        realizedAction?: Action,
    }
}

export class Request extends jspb.Message { 
    getEngineId(): string;
    setEngineId(value: string): Request;
    getRequestId(): string;
    setRequestId(value: string): Request;
    getRequestedType(): ArtifactType;
    setRequestedType(value: ArtifactType): Request;
    clearPromptList(): void;
    getPromptList(): Array<Prompt>;
    setPromptList(value: Array<Prompt>): Request;
    addPrompt(value?: Prompt, index?: number): Prompt;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): ImageParameters | undefined;
    setImage(value?: ImageParameters): Request;

    hasConditioner(): boolean;
    clearConditioner(): void;
    getConditioner(): ConditionerParameters | undefined;
    setConditioner(value?: ConditionerParameters): Request;

    hasClassifier(): boolean;
    clearClassifier(): void;
    getClassifier(): ClassifierParameters | undefined;
    setClassifier(value?: ClassifierParameters): Request;

    getParamsCase(): Request.ParamsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        engineId: string,
        requestId: string,
        requestedType: ArtifactType,
        promptList: Array<Prompt.AsObject>,
        image?: ImageParameters.AsObject,
        conditioner?: ConditionerParameters.AsObject,
        classifier?: ClassifierParameters.AsObject,
    }

    export enum ParamsCase {
        PARAMS_NOT_SET = 0,
        IMAGE = 5,
    }

}

export enum FinishReason {
    NULL = 0,
    LENGTH = 1,
    STOP = 2,
    ERROR = 3,
    FILTER = 4,
}

export enum ArtifactType {
    ARTIFACT_NONE = 0,
    ARTIFACT_IMAGE = 1,
    ARTIFACT_VIDEO = 2,
    ARTIFACT_TEXT = 3,
    ARTIFACT_TOKENS = 4,
    ARTIFACT_EMBEDDING = 5,
    ARTIFACT_CLASSIFICATIONS = 6,
}

export enum DiffusionSampler {
    SAMPLER_DDIM = 0,
    SAMPLER_DDPM = 1,
    SAMPLER_K_EULER = 2,
    SAMPLER_K_EULER_ANCESTRAL = 3,
    SAMPLER_K_HEUN = 4,
    SAMPLER_K_DPM_2 = 5,
    SAMPLER_K_DPM_2_ANCESTRAL = 6,
    SAMPLER_K_LMS = 7,
}

export enum Upscaler {
    UPSCALER_RGB = 0,
    UPSCALER_GFPGAN = 1,
    UPSCALER_ESRGAN = 2,
}

export enum Action {
    ACTION_PASSTHROUGH = 0,
    ACTION_REGENERATE_DUPLICATE = 1,
    ACTION_REGENERATE = 2,
    ACTION_OBFUSCATE_DUPLICATE = 3,
    ACTION_OBFUSCATE = 4,
    ACTION_DISCARD = 5,
}

export enum ClassifierMode {
    CLSFR_MODE_ZEROSHOT = 0,
    CLSFR_MODE_MULTICLASS = 1,
}
