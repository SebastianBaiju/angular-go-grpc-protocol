/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for Product
 */
export class Product implements GrpcMessage {
  static id = 'Product';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Product();
    Product.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Product) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.price = _instance.price || 0;
    _instance.filename = _instance.filename || '';
    _instance.data = _instance.data || new Uint8Array();
    _instance.quantity = _instance.quantity || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Product,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.price = _reader.readFloat();
          break;
        case 5:
          _instance.filename = _reader.readString();
          break;
        case 6:
          _instance.data = _reader.readBytes();
          break;
        case 7:
          _instance.quantity = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Product.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Product, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.price) {
      _writer.writeFloat(4, _instance.price);
    }
    if (_instance.filename) {
      _writer.writeString(5, _instance.filename);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(6, _instance.data);
    }
    if (_instance.quantity) {
      _writer.writeString(7, _instance.quantity);
    }
  }

  private _id: string;
  private _name: string;
  private _description: string;
  private _price: number;
  private _filename: string;
  private _data: Uint8Array;
  private _quantity: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Product to deeply clone from
   */
  constructor(_value?: RecursivePartial<Product.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.price = _value.price;
    this.filename = _value.filename;
    this.data = _value.data;
    this.quantity = _value.quantity;
    Product.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
  get filename(): string {
    return this._filename;
  }
  set filename(value: string) {
    this._filename = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }
  get quantity(): string {
    return this._quantity;
  }
  set quantity(value: string) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Product.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Product.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      filename: this.filename,
      data: this.data ? this.data.subarray(0) : new Uint8Array(),
      quantity: this.quantity
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Product.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      filename: this.filename,
      data: this.data ? uint8ArrayToBase64(this.data) : '',
      quantity: this.quantity
    };
  }
}
export module Product {
  /**
   * Standard JavaScript object representation for Product
   */
  export interface AsObject {
    id: string;
    name: string;
    description: string;
    price: number;
    filename: string;
    data: Uint8Array;
    quantity: string;
  }

  /**
   * Protobuf JSON representation for Product
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    description: string;
    price: number;
    filename: string;
    data: string;
    quantity: string;
  }
}

/**
 * Message implementation for GetProductRequest
 */
export class GetProductRequest implements GrpcMessage {
  static id = 'GetProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProductRequest();
    GetProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProductRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProductRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    GetProductRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProductRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetProductRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module GetProductRequest {
  /**
   * Standard JavaScript object representation for GetProductRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for GetProductRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for CreateProductRequest
 */
export class CreateProductRequest implements GrpcMessage {
  static id = 'CreateProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateProductRequest();
    CreateProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateProductRequest) {
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.price = _instance.price || 0;
    _instance.filename = _instance.filename || '';
    _instance.data = _instance.data || new Uint8Array();
    _instance.quantity = _instance.quantity || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.description = _reader.readString();
          break;
        case 3:
          _instance.price = _reader.readFloat();
          break;
        case 5:
          _instance.filename = _reader.readString();
          break;
        case 6:
          _instance.data = _reader.readBytes();
          break;
        case 7:
          _instance.quantity = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(2, _instance.description);
    }
    if (_instance.price) {
      _writer.writeFloat(3, _instance.price);
    }
    if (_instance.filename) {
      _writer.writeString(5, _instance.filename);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(6, _instance.data);
    }
    if (_instance.quantity) {
      _writer.writeString(7, _instance.quantity);
    }
  }

  private _name: string;
  private _description: string;
  private _price: number;
  private _filename: string;
  private _data: Uint8Array;
  private _quantity: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateProductRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.description = _value.description;
    this.price = _value.price;
    this.filename = _value.filename;
    this.data = _value.data;
    this.quantity = _value.quantity;
    CreateProductRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
  get filename(): string {
    return this._filename;
  }
  set filename(value: string) {
    this._filename = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }
  get quantity(): string {
    return this._quantity;
  }
  set quantity(value: string) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateProductRequest.AsObject {
    return {
      name: this.name,
      description: this.description,
      price: this.price,
      filename: this.filename,
      data: this.data ? this.data.subarray(0) : new Uint8Array(),
      quantity: this.quantity
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateProductRequest.AsProtobufJSON {
    return {
      name: this.name,
      description: this.description,
      price: this.price,
      filename: this.filename,
      data: this.data ? uint8ArrayToBase64(this.data) : '',
      quantity: this.quantity
    };
  }
}
export module CreateProductRequest {
  /**
   * Standard JavaScript object representation for CreateProductRequest
   */
  export interface AsObject {
    name: string;
    description: string;
    price: number;
    filename: string;
    data: Uint8Array;
    quantity: string;
  }

  /**
   * Protobuf JSON representation for CreateProductRequest
   */
  export interface AsProtobufJSON {
    name: string;
    description: string;
    price: number;
    filename: string;
    data: string;
    quantity: string;
  }
}

/**
 * Message implementation for CreateProductResponse
 */
export class CreateProductResponse implements GrpcMessage {
  static id = 'CreateProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateProductResponse();
    CreateProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateProductResponse) {
    _instance.value = _instance.value || '';
    _instance.status = _instance.status || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.value = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.value) {
      _writer.writeString(1, _instance.value);
    }
    if (_instance.status) {
      _writer.writeInt32(2, _instance.status);
    }
  }

  private _value: string;
  private _status: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateProductResponse.AsObject>) {
    _value = _value || {};
    this.value = _value.value;
    this.status = _value.status;
    CreateProductResponse.refineValues(this);
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
  get status(): number {
    return this._status;
  }
  set status(value: number) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateProductResponse.AsObject {
    return {
      value: this.value,
      status: this.status
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateProductResponse.AsProtobufJSON {
    return {
      value: this.value,
      status: this.status
    };
  }
}
export module CreateProductResponse {
  /**
   * Standard JavaScript object representation for CreateProductResponse
   */
  export interface AsObject {
    value: string;
    status: number;
  }

  /**
   * Protobuf JSON representation for CreateProductResponse
   */
  export interface AsProtobufJSON {
    value: string;
    status: number;
  }
}

/**
 * Message implementation for UpdateProductRequest
 */
export class UpdateProductRequest implements GrpcMessage {
  static id = 'UpdateProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateProductRequest();
    UpdateProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateProductRequest) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.price = _instance.price || 0;
    _instance.filename = _instance.filename || '';
    _instance.data = _instance.data || new Uint8Array();
    _instance.quantity = _instance.quantity || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.price = _reader.readFloat();
          break;
        case 5:
          _instance.filename = _reader.readString();
          break;
        case 6:
          _instance.data = _reader.readBytes();
          break;
        case 7:
          _instance.quantity = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.price) {
      _writer.writeFloat(4, _instance.price);
    }
    if (_instance.filename) {
      _writer.writeString(5, _instance.filename);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(6, _instance.data);
    }
    if (_instance.quantity) {
      _writer.writeString(7, _instance.quantity);
    }
  }

  private _id: string;
  private _name: string;
  private _description: string;
  private _price: number;
  private _filename: string;
  private _data: Uint8Array;
  private _quantity: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateProductRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.price = _value.price;
    this.filename = _value.filename;
    this.data = _value.data;
    this.quantity = _value.quantity;
    UpdateProductRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
  get filename(): string {
    return this._filename;
  }
  set filename(value: string) {
    this._filename = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }
  get quantity(): string {
    return this._quantity;
  }
  set quantity(value: string) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateProductRequest.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      filename: this.filename,
      data: this.data ? this.data.subarray(0) : new Uint8Array(),
      quantity: this.quantity
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateProductRequest.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      filename: this.filename,
      data: this.data ? uint8ArrayToBase64(this.data) : '',
      quantity: this.quantity
    };
  }
}
export module UpdateProductRequest {
  /**
   * Standard JavaScript object representation for UpdateProductRequest
   */
  export interface AsObject {
    id: string;
    name: string;
    description: string;
    price: number;
    filename: string;
    data: Uint8Array;
    quantity: string;
  }

  /**
   * Protobuf JSON representation for UpdateProductRequest
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    description: string;
    price: number;
    filename: string;
    data: string;
    quantity: string;
  }
}

/**
 * Message implementation for DeleteProductRequest
 */
export class DeleteProductRequest implements GrpcMessage {
  static id = 'DeleteProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteProductRequest();
    DeleteProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteProductRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteProductRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteProductRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteProductRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteProductRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteProductRequest {
  /**
   * Standard JavaScript object representation for DeleteProductRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for DeleteProductRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for DeleteProductResponse
 */
export class DeleteProductResponse implements GrpcMessage {
  static id = 'DeleteProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteProductResponse();
    DeleteProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteProductResponse) {
    _instance.value = _instance.value || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.value = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.value) {
      _writer.writeString(1, _instance.value);
    }
  }

  private _value: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteProductResponse.AsObject>) {
    _value = _value || {};
    this.value = _value.value;
    DeleteProductResponse.refineValues(this);
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteProductResponse.AsObject {
    return {
      value: this.value
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteProductResponse.AsProtobufJSON {
    return {
      value: this.value
    };
  }
}
export module DeleteProductResponse {
  /**
   * Standard JavaScript object representation for DeleteProductResponse
   */
  export interface AsObject {
    value: string;
  }

  /**
   * Protobuf JSON representation for DeleteProductResponse
   */
  export interface AsProtobufJSON {
    value: string;
  }
}

/**
 * Message implementation for ListProductRequest
 */
export class ListProductRequest implements GrpcMessage {
  static id = 'ListProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProductRequest();
    ListProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProductRequest) {
    _instance.offset = _instance.offset || '0';
    _instance.limit = _instance.limit || '0';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.offset = _reader.readInt64String();
          break;
        case 2:
          _instance.limit = _reader.readInt64String();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeInt64String(1, _instance.offset);
    }
    if (_instance.limit) {
      _writer.writeInt64String(2, _instance.limit);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
  }

  private _offset: string;
  private _limit: string;
  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListProductRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset;
    this.limit = _value.limit;
    this.name = _value.name;
    ListProductRequest.refineValues(this);
  }
  get offset(): string {
    return this._offset;
  }
  set offset(value: string) {
    this._offset = value;
  }
  get limit(): string {
    return this._limit;
  }
  set limit(value: string) {
    this._limit = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProductRequest.AsObject {
    return {
      offset: this.offset,
      limit: this.limit,
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListProductRequest.AsProtobufJSON {
    return {
      offset: this.offset,
      limit: this.limit,
      name: this.name
    };
  }
}
export module ListProductRequest {
  /**
   * Standard JavaScript object representation for ListProductRequest
   */
  export interface AsObject {
    offset: string;
    limit: string;
    name: string;
  }

  /**
   * Protobuf JSON representation for ListProductRequest
   */
  export interface AsProtobufJSON {
    offset: string;
    limit: string;
    name: string;
  }
}

/**
 * Message implementation for ProductListResponse
 */
export class ProductListResponse implements GrpcMessage {
  static id = 'ProductListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductListResponse();
    ProductListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductListResponse) {
    _instance.products = _instance.products || [];
    _instance.count = _instance.count || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Product();
          _reader.readMessage(
            messageInitializer1,
            Product.deserializeBinaryFromReader
          );
          (_instance.products = _instance.products || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.count = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    ProductListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.products && _instance.products.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.products as any,
        Product.serializeBinaryToWriter
      );
    }
    if (_instance.count) {
      _writer.writeInt64String(2, _instance.count);
    }
  }

  private _products?: Product[];
  private _count: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductListResponse.AsObject>) {
    _value = _value || {};
    this.products = (_value.products || []).map(m => new Product(m));
    this.count = _value.count;
    ProductListResponse.refineValues(this);
  }
  get products(): Product[] | undefined {
    return this._products;
  }
  set products(value: Product[] | undefined) {
    this._products = value;
  }
  get count(): string {
    return this._count;
  }
  set count(value: string) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductListResponse.AsObject {
    return {
      products: (this.products || []).map(m => m.toObject()),
      count: this.count
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ProductListResponse.AsProtobufJSON {
    return {
      products: (this.products || []).map(m => m.toProtobufJSON(options)),
      count: this.count
    };
  }
}
export module ProductListResponse {
  /**
   * Standard JavaScript object representation for ProductListResponse
   */
  export interface AsObject {
    products?: Product.AsObject[];
    count: string;
  }

  /**
   * Protobuf JSON representation for ProductListResponse
   */
  export interface AsProtobufJSON {
    products: Product.AsProtobufJSON[] | null;
    count: string;
  }
}

/**
 * Message implementation for Search
 */
export class Search implements GrpcMessage {
  static id = 'Search';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Search();
    Search.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Search) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Search, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Search.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Search, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
  }

  private _id: string;
  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Search to deeply clone from
   */
  constructor(_value?: RecursivePartial<Search.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    Search.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Search.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Search.AsObject {
    return {
      id: this.id,
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Search.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name
    };
  }
}
export module Search {
  /**
   * Standard JavaScript object representation for Search
   */
  export interface AsObject {
    id: string;
    name: string;
  }

  /**
   * Protobuf JSON representation for Search
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
  }
}

/**
 * Message implementation for SearchResult
 */
export class SearchResult implements GrpcMessage {
  static id = 'SearchResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SearchResult();
    SearchResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SearchResult) {
    _instance.search = _instance.search || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SearchResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Search();
          _reader.readMessage(
            messageInitializer1,
            Search.deserializeBinaryFromReader
          );
          (_instance.search = _instance.search || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    SearchResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SearchResult,
    _writer: BinaryWriter
  ) {
    if (_instance.search && _instance.search.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.search as any,
        Search.serializeBinaryToWriter
      );
    }
  }

  private _search?: Search[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SearchResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<SearchResult.AsObject>) {
    _value = _value || {};
    this.search = (_value.search || []).map(m => new Search(m));
    SearchResult.refineValues(this);
  }
  get search(): Search[] | undefined {
    return this._search;
  }
  set search(value: Search[] | undefined) {
    this._search = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SearchResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SearchResult.AsObject {
    return {
      search: (this.search || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SearchResult.AsProtobufJSON {
    return {
      search: (this.search || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module SearchResult {
  /**
   * Standard JavaScript object representation for SearchResult
   */
  export interface AsObject {
    search?: Search.AsObject[];
  }

  /**
   * Protobuf JSON representation for SearchResult
   */
  export interface AsProtobufJSON {
    search: Search.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ProductSearchListRequest
 */
export class ProductSearchListRequest implements GrpcMessage {
  static id = 'ProductSearchListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductSearchListRequest();
    ProductSearchListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductSearchListRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductSearchListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ProductSearchListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductSearchListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductSearchListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductSearchListRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    ProductSearchListRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductSearchListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductSearchListRequest.AsObject {
    return {
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ProductSearchListRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module ProductSearchListRequest {
  /**
   * Standard JavaScript object representation for ProductSearchListRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for ProductSearchListRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}
