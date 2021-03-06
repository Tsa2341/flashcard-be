/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  cardOrderByInput: { // input type
    answer?: NexusGenEnums['Sort'] | null; // Sort
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    id?: NexusGenEnums['Sort'] | null; // Sort
    question?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthResponse: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  FindCard: { // root type
    cards: NexusGenRootTypes['FlashCard'][]; // [FlashCard!]!
    count: number; // Int!
  }
  FlashCard: { // root type
    answer: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    question: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    createAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  UserReadFlashcard: { // root type
    confidence: number; // Int!
    id: number; // Int!
    readAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthResponse: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  FindCard: { // field return type
    cards: NexusGenRootTypes['FlashCard'][]; // [FlashCard!]!
    count: number; // Int!
  }
  FlashCard: { // field return type
    answer: string; // String!
    author: NexusGenRootTypes['User'] | null; // User
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    question: string; // String!
    usersRead: Array<NexusGenRootTypes['UserReadFlashcard'] | null> | null; // [UserReadFlashcard]
  }
  Mutation: { // field return type
    createCard: NexusGenRootTypes['FlashCard']; // FlashCard!
    deleteCard: NexusGenRootTypes['FlashCard']; // FlashCard!
    login: NexusGenRootTypes['AuthResponse']; // AuthResponse!
    readCard: NexusGenRootTypes['FlashCard']; // FlashCard!
    signup: NexusGenRootTypes['AuthResponse']; // AuthResponse!
    updateCard: NexusGenRootTypes['FlashCard']; // FlashCard!
  }
  Query: { // field return type
    findCard: NexusGenRootTypes['FindCard'] | null; // FindCard
  }
  User: { // field return type
    createAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    flashcardsCreated: NexusGenRootTypes['FlashCard'][]; // [FlashCard!]!
    flashcardsRead: NexusGenRootTypes['UserReadFlashcard'][]; // [UserReadFlashcard!]!
    id: number; // Int!
    name: string; // String!
  }
  UserReadFlashcard: { // field return type
    confidence: number; // Int!
    flashCard: NexusGenRootTypes['FlashCard'] | null; // FlashCard
    id: number; // Int!
    readAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenFieldTypeNames {
  AuthResponse: { // field return type name
    token: 'String'
    user: 'User'
  }
  FindCard: { // field return type name
    cards: 'FlashCard'
    count: 'Int'
  }
  FlashCard: { // field return type name
    answer: 'String'
    author: 'User'
    createdAt: 'DateTime'
    id: 'Int'
    question: 'String'
    usersRead: 'UserReadFlashcard'
  }
  Mutation: { // field return type name
    createCard: 'FlashCard'
    deleteCard: 'FlashCard'
    login: 'AuthResponse'
    readCard: 'FlashCard'
    signup: 'AuthResponse'
    updateCard: 'FlashCard'
  }
  Query: { // field return type name
    findCard: 'FindCard'
  }
  User: { // field return type name
    createAt: 'DateTime'
    email: 'String'
    flashcardsCreated: 'FlashCard'
    flashcardsRead: 'UserReadFlashcard'
    id: 'Int'
    name: 'String'
  }
  UserReadFlashcard: { // field return type name
    confidence: 'Int'
    flashCard: 'FlashCard'
    id: 'Int'
    readAt: 'DateTime'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCard: { // args
      answer: string; // String!
      question: string; // String!
    }
    deleteCard: { // args
      id: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    readCard: { // args
      confidence: number; // Int!
      id: number; // Int!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateCard: { // args
      answer?: string | null; // String
      id: number; // Int!
      question?: string | null; // String
    }
  }
  Query: {
    findCard: { // args
      email?: string | null; // String
      filter?: string | null; // String
      id?: number | null; // Int
      orderBy?: NexusGenInputs['cardOrderByInput'][] | null; // [cardOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}