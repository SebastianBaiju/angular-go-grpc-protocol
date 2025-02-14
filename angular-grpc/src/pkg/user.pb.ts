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
 * Message implementation for Role
 */
export class Role implements GrpcMessage {
  static id = 'Role';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Role();
    Role.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Role) {
    _instance.id = _instance.id || '';
    _instance.role = _instance.role || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Role, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.role = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Role.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Role, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.role) {
      _writer.writeString(2, _instance.role);
    }
  }

  private _id: string;
  private _role: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Role to deeply clone from
   */
  constructor(_value?: RecursivePartial<Role.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.role = _value.role;
    Role.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get role(): string {
    return this._role;
  }
  set role(value: string) {
    this._role = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Role.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Role.AsObject {
    return {
      id: this.id,
      role: this.role
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
  ): Role.AsProtobufJSON {
    return {
      id: this.id,
      role: this.role
    };
  }
}
export module Role {
  /**
   * Standard JavaScript object representation for Role
   */
  export interface AsObject {
    id: string;
    role: string;
  }

  /**
   * Protobuf JSON representation for Role
   */
  export interface AsProtobufJSON {
    id: string;
    role: string;
  }
}

/**
 * Message implementation for User
 */
export class User implements GrpcMessage {
  static id = 'User';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new User();
    User.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: User) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.role = _instance.role || undefined;
    _instance.filename = _instance.filename || '';
    _instance.data = _instance.data || new Uint8Array();
    _instance.username = _instance.username || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: User, _reader: BinaryReader) {
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
          _instance.role = new Role();
          _reader.readMessage(_instance.role, Role.deserializeBinaryFromReader);
          break;
        case 4:
          _instance.filename = _reader.readString();
          break;
        case 5:
          _instance.data = _reader.readBytes();
          break;
        case 6:
          _instance.username = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    User.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: User, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.role) {
      _writer.writeMessage(
        3,
        _instance.role as any,
        Role.serializeBinaryToWriter
      );
    }
    if (_instance.filename) {
      _writer.writeString(4, _instance.filename);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(5, _instance.data);
    }
    if (_instance.username) {
      _writer.writeString(6, _instance.username);
    }
  }

  private _id: string;
  private _name: string;
  private _role?: Role;
  private _filename: string;
  private _data: Uint8Array;
  private _username: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of User to deeply clone from
   */
  constructor(_value?: RecursivePartial<User.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.role = _value.role ? new Role(_value.role) : undefined;
    this.filename = _value.filename;
    this.data = _value.data;
    this.username = _value.username;
    User.refineValues(this);
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
  get role(): Role | undefined {
    return this._role;
  }
  set role(value: Role | undefined) {
    this._role = value;
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
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    User.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): User.AsObject {
    return {
      id: this.id,
      name: this.name,
      role: this.role ? this.role.toObject() : undefined,
      filename: this.filename,
      data: this.data ? this.data.subarray(0) : new Uint8Array(),
      username: this.username
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
  ): User.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      role: this.role ? this.role.toProtobufJSON(options) : null,
      filename: this.filename,
      data: this.data ? uint8ArrayToBase64(this.data) : '',
      username: this.username
    };
  }
}
export module User {
  /**
   * Standard JavaScript object representation for User
   */
  export interface AsObject {
    id: string;
    name: string;
    role?: Role.AsObject;
    filename: string;
    data: Uint8Array;
    username: string;
  }

  /**
   * Protobuf JSON representation for User
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    role: Role.AsProtobufJSON | null;
    filename: string;
    data: string;
    username: string;
  }
}

/**
 * Message implementation for GetUserRequest
 */
export class GetUserRequest implements GrpcMessage {
  static id = 'GetUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserRequest();
    GetUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserRequest,
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

    GetUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    GetUserRequest.refineValues(this);
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
    GetUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserRequest.AsObject {
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
  ): GetUserRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module GetUserRequest {
  /**
   * Standard JavaScript object representation for GetUserRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for GetUserRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for CreateUserRequest
 */
export class CreateUserRequest implements GrpcMessage {
  static id = 'CreateUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateUserRequest();
    CreateUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateUserRequest) {
    _instance.name = _instance.name || '';
    _instance.role = _instance.role || '';
    _instance.filename = _instance.filename || '';
    _instance.username = _instance.username || '';
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.role = _reader.readString();
          break;
        case 3:
          _instance.filename = _reader.readString();
          break;
        case 6:
          _instance.username = _reader.readString();
          break;
        case 4:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.role) {
      _writer.writeString(2, _instance.role);
    }
    if (_instance.filename) {
      _writer.writeString(3, _instance.filename);
    }
    if (_instance.username) {
      _writer.writeString(6, _instance.username);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(4, _instance.data);
    }
  }

  private _name: string;
  private _role: string;
  private _filename: string;
  private _username: string;
  private _data: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateUserRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.role = _value.role;
    this.filename = _value.filename;
    this.username = _value.username;
    this.data = _value.data;
    CreateUserRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get role(): string {
    return this._role;
  }
  set role(value: string) {
    this._role = value;
  }
  get filename(): string {
    return this._filename;
  }
  set filename(value: string) {
    this._filename = value;
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateUserRequest.AsObject {
    return {
      name: this.name,
      role: this.role,
      filename: this.filename,
      username: this.username,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
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
  ): CreateUserRequest.AsProtobufJSON {
    return {
      name: this.name,
      role: this.role,
      filename: this.filename,
      username: this.username,
      data: this.data ? uint8ArrayToBase64(this.data) : ''
    };
  }
}
export module CreateUserRequest {
  /**
   * Standard JavaScript object representation for CreateUserRequest
   */
  export interface AsObject {
    name: string;
    role: string;
    filename: string;
    username: string;
    data: Uint8Array;
  }

  /**
   * Protobuf JSON representation for CreateUserRequest
   */
  export interface AsProtobufJSON {
    name: string;
    role: string;
    filename: string;
    username: string;
    data: string;
  }
}

/**
 * Message implementation for UpdateUserRequest
 */
export class UpdateUserRequest implements GrpcMessage {
  static id = 'UpdateUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateUserRequest();
    UpdateUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateUserRequest) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.role = _instance.role || '';
    _instance.filename = _instance.filename || '';
    _instance.username = _instance.username || '';
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateUserRequest,
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
          _instance.role = _reader.readString();
          break;
        case 4:
          _instance.filename = _reader.readString();
          break;
        case 6:
          _instance.username = _reader.readString();
          break;
        case 5:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.role) {
      _writer.writeString(3, _instance.role);
    }
    if (_instance.filename) {
      _writer.writeString(4, _instance.filename);
    }
    if (_instance.username) {
      _writer.writeString(6, _instance.username);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(5, _instance.data);
    }
  }

  private _id: string;
  private _name: string;
  private _role: string;
  private _filename: string;
  private _username: string;
  private _data: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateUserRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.role = _value.role;
    this.filename = _value.filename;
    this.username = _value.username;
    this.data = _value.data;
    UpdateUserRequest.refineValues(this);
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
  get role(): string {
    return this._role;
  }
  set role(value: string) {
    this._role = value;
  }
  get filename(): string {
    return this._filename;
  }
  set filename(value: string) {
    this._filename = value;
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateUserRequest.AsObject {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      filename: this.filename,
      username: this.username,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
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
  ): UpdateUserRequest.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      filename: this.filename,
      username: this.username,
      data: this.data ? uint8ArrayToBase64(this.data) : ''
    };
  }
}
export module UpdateUserRequest {
  /**
   * Standard JavaScript object representation for UpdateUserRequest
   */
  export interface AsObject {
    id: string;
    name: string;
    role: string;
    filename: string;
    username: string;
    data: Uint8Array;
  }

  /**
   * Protobuf JSON representation for UpdateUserRequest
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    role: string;
    filename: string;
    username: string;
    data: string;
  }
}

/**
 * Message implementation for DeleteUserRequest
 */
export class DeleteUserRequest implements GrpcMessage {
  static id = 'DeleteUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserRequest();
    DeleteUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserRequest,
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

    DeleteUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteUserRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteUserRequest.refineValues(this);
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
    DeleteUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserRequest.AsObject {
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
  ): DeleteUserRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteUserRequest {
  /**
   * Standard JavaScript object representation for DeleteUserRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for DeleteUserRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for UserResponse
 */
export class UserResponse implements GrpcMessage {
  static id = 'UserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserResponse();
    UserResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserResponse) {
    _instance.value = _instance.value || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.value = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.value) {
      _writer.writeString(1, _instance.value);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
  }

  private _value: string;
  private _password: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserResponse.AsObject>) {
    _value = _value || {};
    this.value = _value.value;
    this.password = _value.password;
    UserResponse.refineValues(this);
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserResponse.AsObject {
    return {
      value: this.value,
      password: this.password
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
  ): UserResponse.AsProtobufJSON {
    return {
      value: this.value,
      password: this.password
    };
  }
}
export module UserResponse {
  /**
   * Standard JavaScript object representation for UserResponse
   */
  export interface AsObject {
    value: string;
    password: string;
  }

  /**
   * Protobuf JSON representation for UserResponse
   */
  export interface AsProtobufJSON {
    value: string;
    password: string;
  }
}

/**
 * Message implementation for ListUserRequest
 */
export class ListUserRequest implements GrpcMessage {
  static id = 'ListUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserRequest();
    ListUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserRequest) {
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
    _instance: ListUserRequest,
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

    ListUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserRequest,
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
   * @param _value initial values object or instance of ListUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset;
    this.limit = _value.limit;
    this.name = _value.name;
    ListUserRequest.refineValues(this);
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
    ListUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserRequest.AsObject {
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
  ): ListUserRequest.AsProtobufJSON {
    return {
      offset: this.offset,
      limit: this.limit,
      name: this.name
    };
  }
}
export module ListUserRequest {
  /**
   * Standard JavaScript object representation for ListUserRequest
   */
  export interface AsObject {
    offset: string;
    limit: string;
    name: string;
  }

  /**
   * Protobuf JSON representation for ListUserRequest
   */
  export interface AsProtobufJSON {
    offset: string;
    limit: string;
    name: string;
  }
}

/**
 * Message implementation for UserListResponse
 */
export class UserListResponse implements GrpcMessage {
  static id = 'UserListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserListResponse();
    UserListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserListResponse) {
    _instance.users = _instance.users || [];
    _instance.count = _instance.count || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new User();
          _reader.readMessage(
            messageInitializer1,
            User.deserializeBinaryFromReader
          );
          (_instance.users = _instance.users || []).push(messageInitializer1);
          break;
        case 2:
          _instance.count = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    UserListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.users as any,
        User.serializeBinaryToWriter
      );
    }
    if (_instance.count) {
      _writer.writeInt64String(2, _instance.count);
    }
  }

  private _users?: User[];
  private _count: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserListResponse.AsObject>) {
    _value = _value || {};
    this.users = (_value.users || []).map(m => new User(m));
    this.count = _value.count;
    UserListResponse.refineValues(this);
  }
  get users(): User[] | undefined {
    return this._users;
  }
  set users(value: User[] | undefined) {
    this._users = value;
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
    UserListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserListResponse.AsObject {
    return {
      users: (this.users || []).map(m => m.toObject()),
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
  ): UserListResponse.AsProtobufJSON {
    return {
      users: (this.users || []).map(m => m.toProtobufJSON(options)),
      count: this.count
    };
  }
}
export module UserListResponse {
  /**
   * Standard JavaScript object representation for UserListResponse
   */
  export interface AsObject {
    users?: User.AsObject[];
    count: string;
  }

  /**
   * Protobuf JSON representation for UserListResponse
   */
  export interface AsProtobufJSON {
    users: User.AsProtobufJSON[] | null;
    count: string;
  }
}

/**
 * Message implementation for UserSearchListRequest
 */
export class UserSearchListRequest implements GrpcMessage {
  static id = 'UserSearchListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserSearchListRequest();
    UserSearchListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserSearchListRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserSearchListRequest,
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

    UserSearchListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserSearchListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserSearchListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserSearchListRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    UserSearchListRequest.refineValues(this);
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
    UserSearchListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserSearchListRequest.AsObject {
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
  ): UserSearchListRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module UserSearchListRequest {
  /**
   * Standard JavaScript object representation for UserSearchListRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for UserSearchListRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for UserSearch
 */
export class UserSearch implements GrpcMessage {
  static id = 'UserSearch';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserSearch();
    UserSearch.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserSearch) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserSearch,
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
        default:
          _reader.skipField();
      }
    }

    UserSearch.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserSearch, _writer: BinaryWriter) {
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
   * @param _value initial values object or instance of UserSearch to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserSearch.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    UserSearch.refineValues(this);
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
    UserSearch.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserSearch.AsObject {
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
  ): UserSearch.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name
    };
  }
}
export module UserSearch {
  /**
   * Standard JavaScript object representation for UserSearch
   */
  export interface AsObject {
    id: string;
    name: string;
  }

  /**
   * Protobuf JSON representation for UserSearch
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
  }
}

/**
 * Message implementation for UserSearchResult
 */
export class UserSearchResult implements GrpcMessage {
  static id = 'UserSearchResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserSearchResult();
    UserSearchResult.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserSearchResult) {
    _instance.search = _instance.search || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserSearchResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new UserSearch();
          _reader.readMessage(
            messageInitializer1,
            UserSearch.deserializeBinaryFromReader
          );
          (_instance.search = _instance.search || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    UserSearchResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserSearchResult,
    _writer: BinaryWriter
  ) {
    if (_instance.search && _instance.search.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.search as any,
        UserSearch.serializeBinaryToWriter
      );
    }
  }

  private _search?: UserSearch[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserSearchResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserSearchResult.AsObject>) {
    _value = _value || {};
    this.search = (_value.search || []).map(m => new UserSearch(m));
    UserSearchResult.refineValues(this);
  }
  get search(): UserSearch[] | undefined {
    return this._search;
  }
  set search(value: UserSearch[] | undefined) {
    this._search = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserSearchResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserSearchResult.AsObject {
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
  ): UserSearchResult.AsProtobufJSON {
    return {
      search: (this.search || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module UserSearchResult {
  /**
   * Standard JavaScript object representation for UserSearchResult
   */
  export interface AsObject {
    search?: UserSearch.AsObject[];
  }

  /**
   * Protobuf JSON representation for UserSearchResult
   */
  export interface AsProtobufJSON {
    search: UserSearch.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for RoleRequest
 */
export class RoleRequest implements GrpcMessage {
  static id = 'RoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RoleRequest();
    RoleRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RoleRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    RoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RoleRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RoleRequest.AsObject>) {
    _value = _value || {};
    RoleRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RoleRequest.AsObject {
    return {};
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
  ): RoleRequest.AsProtobufJSON {
    return {};
  }
}
export module RoleRequest {
  /**
   * Standard JavaScript object representation for RoleRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for RoleRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for RoleResponse
 */
export class RoleResponse implements GrpcMessage {
  static id = 'RoleResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RoleResponse();
    RoleResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RoleResponse) {
    _instance.result = _instance.result || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RoleResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Role();
          _reader.readMessage(
            messageInitializer1,
            Role.deserializeBinaryFromReader
          );
          (_instance.result = _instance.result || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    RoleResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RoleResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.result && _instance.result.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.result as any,
        Role.serializeBinaryToWriter
      );
    }
  }

  private _result?: Role[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RoleResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RoleResponse.AsObject>) {
    _value = _value || {};
    this.result = (_value.result || []).map(m => new Role(m));
    RoleResponse.refineValues(this);
  }
  get result(): Role[] | undefined {
    return this._result;
  }
  set result(value: Role[] | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RoleResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RoleResponse.AsObject {
    return {
      result: (this.result || []).map(m => m.toObject())
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
  ): RoleResponse.AsProtobufJSON {
    return {
      result: (this.result || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RoleResponse {
  /**
   * Standard JavaScript object representation for RoleResponse
   */
  export interface AsObject {
    result?: Role.AsObject[];
  }

  /**
   * Protobuf JSON representation for RoleResponse
   */
  export interface AsProtobufJSON {
    result: Role.AsProtobufJSON[] | null;
  }
}
