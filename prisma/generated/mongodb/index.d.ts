
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model CompanyInfo
 * 
 */
export type CompanyInfo = $Result.DefaultSelection<Prisma.$CompanyInfoPayload>
/**
 * Model ProductInfo
 * 
 */
export type ProductInfo = $Result.DefaultSelection<Prisma.$ProductInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserInfos
 * const userInfos = await prisma.userInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserInfos
   * const userInfos = await prisma.userInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyInfo`: Exposes CRUD operations for the **CompanyInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyInfos
    * const companyInfos = await prisma.companyInfo.findMany()
    * ```
    */
  get companyInfo(): Prisma.CompanyInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productInfo`: Exposes CRUD operations for the **ProductInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductInfos
    * const productInfos = await prisma.productInfo.findMany()
    * ```
    */
  get productInfo(): Prisma.ProductInfoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserInfo: 'UserInfo',
    CompanyInfo: 'CompanyInfo',
    ProductInfo: 'ProductInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userInfo" | "companyInfo" | "productInfo"
      txIsolationLevel: never
    }
    model: {
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserInfoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserInfoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      CompanyInfo: {
        payload: Prisma.$CompanyInfoPayload<ExtArgs>
        fields: Prisma.CompanyInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          findFirst: {
            args: Prisma.CompanyInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          findMany: {
            args: Prisma.CompanyInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          create: {
            args: Prisma.CompanyInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          createMany: {
            args: Prisma.CompanyInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          update: {
            args: Prisma.CompanyInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          deleteMany: {
            args: Prisma.CompanyInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          aggregate: {
            args: Prisma.CompanyInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyInfo>
          }
          groupBy: {
            args: Prisma.CompanyInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyInfoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CompanyInfoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CompanyInfoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CompanyInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyInfoCountAggregateOutputType> | number
          }
        }
      }
      ProductInfo: {
        payload: Prisma.$ProductInfoPayload<ExtArgs>
        fields: Prisma.ProductInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>
          }
          findFirst: {
            args: Prisma.ProductInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>
          }
          findMany: {
            args: Prisma.ProductInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>[]
          }
          create: {
            args: Prisma.ProductInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>
          }
          createMany: {
            args: Prisma.ProductInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>
          }
          update: {
            args: Prisma.ProductInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>
          }
          deleteMany: {
            args: Prisma.ProductInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInfoPayload>
          }
          aggregate: {
            args: Prisma.ProductInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductInfo>
          }
          groupBy: {
            args: Prisma.ProductInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductInfoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductInfoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductInfoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userInfo?: UserInfoOmit
    companyInfo?: CompanyInfoOmit
    productInfo?: ProductInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    userId: number | null
    salario: number | null
    impuestosAnuales: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    userId: number | null
    salario: number | null
    impuestosAnuales: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: string | null
    userId: number | null
    imageUrl: string | null
    telefono: string | null
    direccion: string | null
    username: string | null
    cargo: string | null
    salario: number | null
    impuestosAnuales: number | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    imageUrl: string | null
    telefono: string | null
    direccion: string | null
    username: string | null
    cargo: string | null
    salario: number | null
    impuestosAnuales: number | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    userId: number
    imageUrl: number
    telefono: number
    direccion: number
    username: number
    cargo: number
    salario: number
    impuestosAnuales: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    userId?: true
    salario?: true
    impuestosAnuales?: true
  }

  export type UserInfoSumAggregateInputType = {
    userId?: true
    salario?: true
    impuestosAnuales?: true
  }

  export type UserInfoMinAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    telefono?: true
    direccion?: true
    username?: true
    cargo?: true
    salario?: true
    impuestosAnuales?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    telefono?: true
    direccion?: true
    username?: true
    cargo?: true
    salario?: true
    impuestosAnuales?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    telefono?: true
    direccion?: true
    username?: true
    cargo?: true
    salario?: true
    impuestosAnuales?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    id: string
    userId: number
    imageUrl: string
    telefono: string
    direccion: string
    username: string
    cargo: string
    salario: number
    impuestosAnuales: number
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    telefono?: boolean
    direccion?: boolean
    username?: boolean
    cargo?: boolean
    salario?: boolean
    impuestosAnuales?: boolean
  }, ExtArgs["result"]["userInfo"]>



  export type UserInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    telefono?: boolean
    direccion?: boolean
    username?: boolean
    cargo?: boolean
    salario?: boolean
    impuestosAnuales?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageUrl" | "telefono" | "direccion" | "username" | "cargo" | "salario" | "impuestosAnuales", ExtArgs["result"]["userInfo"]>

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      imageUrl: string
      telefono: string
      direccion: string
      username: string
      cargo: string
      salario: number
      impuestosAnuales: number
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * @param {UserInfoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userInfo = await prisma.userInfo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserInfoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserInfo.
     * @param {UserInfoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userInfo = await prisma.userInfo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserInfoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserInfo model
   */ 
  interface UserInfoFieldRefs {
    readonly id: FieldRef<"UserInfo", 'String'>
    readonly userId: FieldRef<"UserInfo", 'Int'>
    readonly imageUrl: FieldRef<"UserInfo", 'String'>
    readonly telefono: FieldRef<"UserInfo", 'String'>
    readonly direccion: FieldRef<"UserInfo", 'String'>
    readonly username: FieldRef<"UserInfo", 'String'>
    readonly cargo: FieldRef<"UserInfo", 'String'>
    readonly salario: FieldRef<"UserInfo", 'Float'>
    readonly impuestosAnuales: FieldRef<"UserInfo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to delete.
     */
    limit?: number
  }

  /**
   * UserInfo findRaw
   */
  export type UserInfoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserInfo aggregateRaw
   */
  export type UserInfoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
  }


  /**
   * Model CompanyInfo
   */

  export type AggregateCompanyInfo = {
    _count: CompanyInfoCountAggregateOutputType | null
    _avg: CompanyInfoAvgAggregateOutputType | null
    _sum: CompanyInfoSumAggregateOutputType | null
    _min: CompanyInfoMinAggregateOutputType | null
    _max: CompanyInfoMaxAggregateOutputType | null
  }

  export type CompanyInfoAvgAggregateOutputType = {
    companyId: number | null
  }

  export type CompanyInfoSumAggregateOutputType = {
    companyId: number | null
  }

  export type CompanyInfoMinAggregateOutputType = {
    id: string | null
    companyId: number | null
    logoUrl: string | null
    telefono: string | null
    direccion: string | null
    actividadEconomica: string | null
    codigoActividad: string | null
  }

  export type CompanyInfoMaxAggregateOutputType = {
    id: string | null
    companyId: number | null
    logoUrl: string | null
    telefono: string | null
    direccion: string | null
    actividadEconomica: string | null
    codigoActividad: string | null
  }

  export type CompanyInfoCountAggregateOutputType = {
    id: number
    companyId: number
    logoUrl: number
    telefono: number
    direccion: number
    actividadEconomica: number
    codigoActividad: number
    _all: number
  }


  export type CompanyInfoAvgAggregateInputType = {
    companyId?: true
  }

  export type CompanyInfoSumAggregateInputType = {
    companyId?: true
  }

  export type CompanyInfoMinAggregateInputType = {
    id?: true
    companyId?: true
    logoUrl?: true
    telefono?: true
    direccion?: true
    actividadEconomica?: true
    codigoActividad?: true
  }

  export type CompanyInfoMaxAggregateInputType = {
    id?: true
    companyId?: true
    logoUrl?: true
    telefono?: true
    direccion?: true
    actividadEconomica?: true
    codigoActividad?: true
  }

  export type CompanyInfoCountAggregateInputType = {
    id?: true
    companyId?: true
    logoUrl?: true
    telefono?: true
    direccion?: true
    actividadEconomica?: true
    codigoActividad?: true
    _all?: true
  }

  export type CompanyInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyInfo to aggregate.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyInfos
    **/
    _count?: true | CompanyInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyInfoMaxAggregateInputType
  }

  export type GetCompanyInfoAggregateType<T extends CompanyInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyInfo[P]>
      : GetScalarType<T[P], AggregateCompanyInfo[P]>
  }




  export type CompanyInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyInfoWhereInput
    orderBy?: CompanyInfoOrderByWithAggregationInput | CompanyInfoOrderByWithAggregationInput[]
    by: CompanyInfoScalarFieldEnum[] | CompanyInfoScalarFieldEnum
    having?: CompanyInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyInfoCountAggregateInputType | true
    _avg?: CompanyInfoAvgAggregateInputType
    _sum?: CompanyInfoSumAggregateInputType
    _min?: CompanyInfoMinAggregateInputType
    _max?: CompanyInfoMaxAggregateInputType
  }

  export type CompanyInfoGroupByOutputType = {
    id: string
    companyId: number
    logoUrl: string
    telefono: string
    direccion: string
    actividadEconomica: string
    codigoActividad: string
    _count: CompanyInfoCountAggregateOutputType | null
    _avg: CompanyInfoAvgAggregateOutputType | null
    _sum: CompanyInfoSumAggregateOutputType | null
    _min: CompanyInfoMinAggregateOutputType | null
    _max: CompanyInfoMaxAggregateOutputType | null
  }

  type GetCompanyInfoGroupByPayload<T extends CompanyInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyInfoGroupByOutputType[P]>
        }
      >
    >


  export type CompanyInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    logoUrl?: boolean
    telefono?: boolean
    direccion?: boolean
    actividadEconomica?: boolean
    codigoActividad?: boolean
  }, ExtArgs["result"]["companyInfo"]>



  export type CompanyInfoSelectScalar = {
    id?: boolean
    companyId?: boolean
    logoUrl?: boolean
    telefono?: boolean
    direccion?: boolean
    actividadEconomica?: boolean
    codigoActividad?: boolean
  }

  export type CompanyInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "logoUrl" | "telefono" | "direccion" | "actividadEconomica" | "codigoActividad", ExtArgs["result"]["companyInfo"]>

  export type $CompanyInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: number
      logoUrl: string
      telefono: string
      direccion: string
      actividadEconomica: string
      codigoActividad: string
    }, ExtArgs["result"]["companyInfo"]>
    composites: {}
  }

  type CompanyInfoGetPayload<S extends boolean | null | undefined | CompanyInfoDefaultArgs> = $Result.GetResult<Prisma.$CompanyInfoPayload, S>

  type CompanyInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyInfoCountAggregateInputType | true
    }

  export interface CompanyInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyInfo'], meta: { name: 'CompanyInfo' } }
    /**
     * Find zero or one CompanyInfo that matches the filter.
     * @param {CompanyInfoFindUniqueArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyInfoFindUniqueArgs>(args: SelectSubset<T, CompanyInfoFindUniqueArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyInfoFindUniqueOrThrowArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindFirstArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyInfoFindFirstArgs>(args?: SelectSubset<T, CompanyInfoFindFirstArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindFirstOrThrowArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyInfos
     * const companyInfos = await prisma.companyInfo.findMany()
     * 
     * // Get first 10 CompanyInfos
     * const companyInfos = await prisma.companyInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyInfoFindManyArgs>(args?: SelectSubset<T, CompanyInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyInfo.
     * @param {CompanyInfoCreateArgs} args - Arguments to create a CompanyInfo.
     * @example
     * // Create one CompanyInfo
     * const CompanyInfo = await prisma.companyInfo.create({
     *   data: {
     *     // ... data to create a CompanyInfo
     *   }
     * })
     * 
     */
    create<T extends CompanyInfoCreateArgs>(args: SelectSubset<T, CompanyInfoCreateArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyInfos.
     * @param {CompanyInfoCreateManyArgs} args - Arguments to create many CompanyInfos.
     * @example
     * // Create many CompanyInfos
     * const companyInfo = await prisma.companyInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyInfoCreateManyArgs>(args?: SelectSubset<T, CompanyInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyInfo.
     * @param {CompanyInfoDeleteArgs} args - Arguments to delete one CompanyInfo.
     * @example
     * // Delete one CompanyInfo
     * const CompanyInfo = await prisma.companyInfo.delete({
     *   where: {
     *     // ... filter to delete one CompanyInfo
     *   }
     * })
     * 
     */
    delete<T extends CompanyInfoDeleteArgs>(args: SelectSubset<T, CompanyInfoDeleteArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyInfo.
     * @param {CompanyInfoUpdateArgs} args - Arguments to update one CompanyInfo.
     * @example
     * // Update one CompanyInfo
     * const companyInfo = await prisma.companyInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyInfoUpdateArgs>(args: SelectSubset<T, CompanyInfoUpdateArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyInfos.
     * @param {CompanyInfoDeleteManyArgs} args - Arguments to filter CompanyInfos to delete.
     * @example
     * // Delete a few CompanyInfos
     * const { count } = await prisma.companyInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyInfoDeleteManyArgs>(args?: SelectSubset<T, CompanyInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyInfos
     * const companyInfo = await prisma.companyInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyInfoUpdateManyArgs>(args: SelectSubset<T, CompanyInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyInfo.
     * @param {CompanyInfoUpsertArgs} args - Arguments to update or create a CompanyInfo.
     * @example
     * // Update or create a CompanyInfo
     * const companyInfo = await prisma.companyInfo.upsert({
     *   create: {
     *     // ... data to create a CompanyInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyInfo we want to update
     *   }
     * })
     */
    upsert<T extends CompanyInfoUpsertArgs>(args: SelectSubset<T, CompanyInfoUpsertArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyInfos that matches the filter.
     * @param {CompanyInfoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const companyInfo = await prisma.companyInfo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CompanyInfoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CompanyInfo.
     * @param {CompanyInfoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const companyInfo = await prisma.companyInfo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CompanyInfoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CompanyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoCountArgs} args - Arguments to filter CompanyInfos to count.
     * @example
     * // Count the number of CompanyInfos
     * const count = await prisma.companyInfo.count({
     *   where: {
     *     // ... the filter for the CompanyInfos we want to count
     *   }
     * })
    **/
    count<T extends CompanyInfoCountArgs>(
      args?: Subset<T, CompanyInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyInfoAggregateArgs>(args: Subset<T, CompanyInfoAggregateArgs>): Prisma.PrismaPromise<GetCompanyInfoAggregateType<T>>

    /**
     * Group by CompanyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyInfoGroupByArgs['orderBy'] }
        : { orderBy?: CompanyInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyInfo model
   */
  readonly fields: CompanyInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyInfo model
   */ 
  interface CompanyInfoFieldRefs {
    readonly id: FieldRef<"CompanyInfo", 'String'>
    readonly companyId: FieldRef<"CompanyInfo", 'Int'>
    readonly logoUrl: FieldRef<"CompanyInfo", 'String'>
    readonly telefono: FieldRef<"CompanyInfo", 'String'>
    readonly direccion: FieldRef<"CompanyInfo", 'String'>
    readonly actividadEconomica: FieldRef<"CompanyInfo", 'String'>
    readonly codigoActividad: FieldRef<"CompanyInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanyInfo findUnique
   */
  export type CompanyInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo findUniqueOrThrow
   */
  export type CompanyInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo findFirst
   */
  export type CompanyInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyInfos.
     */
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo findFirstOrThrow
   */
  export type CompanyInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyInfos.
     */
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo findMany
   */
  export type CompanyInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfos to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo create
   */
  export type CompanyInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanyInfo.
     */
    data: XOR<CompanyInfoCreateInput, CompanyInfoUncheckedCreateInput>
  }

  /**
   * CompanyInfo createMany
   */
  export type CompanyInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyInfos.
     */
    data: CompanyInfoCreateManyInput | CompanyInfoCreateManyInput[]
  }

  /**
   * CompanyInfo update
   */
  export type CompanyInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanyInfo.
     */
    data: XOR<CompanyInfoUpdateInput, CompanyInfoUncheckedUpdateInput>
    /**
     * Choose, which CompanyInfo to update.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo updateMany
   */
  export type CompanyInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyInfos.
     */
    data: XOR<CompanyInfoUpdateManyMutationInput, CompanyInfoUncheckedUpdateManyInput>
    /**
     * Filter which CompanyInfos to update
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to update.
     */
    limit?: number
  }

  /**
   * CompanyInfo upsert
   */
  export type CompanyInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanyInfo to update in case it exists.
     */
    where: CompanyInfoWhereUniqueInput
    /**
     * In case the CompanyInfo found by the `where` argument doesn't exist, create a new CompanyInfo with this data.
     */
    create: XOR<CompanyInfoCreateInput, CompanyInfoUncheckedCreateInput>
    /**
     * In case the CompanyInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyInfoUpdateInput, CompanyInfoUncheckedUpdateInput>
  }

  /**
   * CompanyInfo delete
   */
  export type CompanyInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter which CompanyInfo to delete.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo deleteMany
   */
  export type CompanyInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyInfos to delete
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to delete.
     */
    limit?: number
  }

  /**
   * CompanyInfo findRaw
   */
  export type CompanyInfoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CompanyInfo aggregateRaw
   */
  export type CompanyInfoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CompanyInfo without action
   */
  export type CompanyInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
  }


  /**
   * Model ProductInfo
   */

  export type AggregateProductInfo = {
    _count: ProductInfoCountAggregateOutputType | null
    _avg: ProductInfoAvgAggregateOutputType | null
    _sum: ProductInfoSumAggregateOutputType | null
    _min: ProductInfoMinAggregateOutputType | null
    _max: ProductInfoMaxAggregateOutputType | null
  }

  export type ProductInfoAvgAggregateOutputType = {
    productId: number | null
    cantidad: number | null
  }

  export type ProductInfoSumAggregateOutputType = {
    productId: number | null
    cantidad: number | null
  }

  export type ProductInfoMinAggregateOutputType = {
    id: string | null
    productId: number | null
    imageUrl: string | null
    cantidad: number | null
    categoria: string | null
    subCategoria: string | null
  }

  export type ProductInfoMaxAggregateOutputType = {
    id: string | null
    productId: number | null
    imageUrl: string | null
    cantidad: number | null
    categoria: string | null
    subCategoria: string | null
  }

  export type ProductInfoCountAggregateOutputType = {
    id: number
    productId: number
    imageUrl: number
    cantidad: number
    categoria: number
    subCategoria: number
    _all: number
  }


  export type ProductInfoAvgAggregateInputType = {
    productId?: true
    cantidad?: true
  }

  export type ProductInfoSumAggregateInputType = {
    productId?: true
    cantidad?: true
  }

  export type ProductInfoMinAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    cantidad?: true
    categoria?: true
    subCategoria?: true
  }

  export type ProductInfoMaxAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    cantidad?: true
    categoria?: true
    subCategoria?: true
  }

  export type ProductInfoCountAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    cantidad?: true
    categoria?: true
    subCategoria?: true
    _all?: true
  }

  export type ProductInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInfo to aggregate.
     */
    where?: ProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfos to fetch.
     */
    orderBy?: ProductInfoOrderByWithRelationInput | ProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductInfos
    **/
    _count?: true | ProductInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductInfoMaxAggregateInputType
  }

  export type GetProductInfoAggregateType<T extends ProductInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateProductInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductInfo[P]>
      : GetScalarType<T[P], AggregateProductInfo[P]>
  }




  export type ProductInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInfoWhereInput
    orderBy?: ProductInfoOrderByWithAggregationInput | ProductInfoOrderByWithAggregationInput[]
    by: ProductInfoScalarFieldEnum[] | ProductInfoScalarFieldEnum
    having?: ProductInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductInfoCountAggregateInputType | true
    _avg?: ProductInfoAvgAggregateInputType
    _sum?: ProductInfoSumAggregateInputType
    _min?: ProductInfoMinAggregateInputType
    _max?: ProductInfoMaxAggregateInputType
  }

  export type ProductInfoGroupByOutputType = {
    id: string
    productId: number
    imageUrl: string
    cantidad: number
    categoria: string
    subCategoria: string | null
    _count: ProductInfoCountAggregateOutputType | null
    _avg: ProductInfoAvgAggregateOutputType | null
    _sum: ProductInfoSumAggregateOutputType | null
    _min: ProductInfoMinAggregateOutputType | null
    _max: ProductInfoMaxAggregateOutputType | null
  }

  type GetProductInfoGroupByPayload<T extends ProductInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductInfoGroupByOutputType[P]>
        }
      >
    >


  export type ProductInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    cantidad?: boolean
    categoria?: boolean
    subCategoria?: boolean
  }, ExtArgs["result"]["productInfo"]>



  export type ProductInfoSelectScalar = {
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    cantidad?: boolean
    categoria?: boolean
    subCategoria?: boolean
  }

  export type ProductInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "imageUrl" | "cantidad" | "categoria" | "subCategoria", ExtArgs["result"]["productInfo"]>

  export type $ProductInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: number
      imageUrl: string
      cantidad: number
      categoria: string
      subCategoria: string | null
    }, ExtArgs["result"]["productInfo"]>
    composites: {}
  }

  type ProductInfoGetPayload<S extends boolean | null | undefined | ProductInfoDefaultArgs> = $Result.GetResult<Prisma.$ProductInfoPayload, S>

  type ProductInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductInfoCountAggregateInputType | true
    }

  export interface ProductInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductInfo'], meta: { name: 'ProductInfo' } }
    /**
     * Find zero or one ProductInfo that matches the filter.
     * @param {ProductInfoFindUniqueArgs} args - Arguments to find a ProductInfo
     * @example
     * // Get one ProductInfo
     * const productInfo = await prisma.productInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductInfoFindUniqueArgs>(args: SelectSubset<T, ProductInfoFindUniqueArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductInfoFindUniqueOrThrowArgs} args - Arguments to find a ProductInfo
     * @example
     * // Get one ProductInfo
     * const productInfo = await prisma.productInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoFindFirstArgs} args - Arguments to find a ProductInfo
     * @example
     * // Get one ProductInfo
     * const productInfo = await prisma.productInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductInfoFindFirstArgs>(args?: SelectSubset<T, ProductInfoFindFirstArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoFindFirstOrThrowArgs} args - Arguments to find a ProductInfo
     * @example
     * // Get one ProductInfo
     * const productInfo = await prisma.productInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductInfos
     * const productInfos = await prisma.productInfo.findMany()
     * 
     * // Get first 10 ProductInfos
     * const productInfos = await prisma.productInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productInfoWithIdOnly = await prisma.productInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductInfoFindManyArgs>(args?: SelectSubset<T, ProductInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductInfo.
     * @param {ProductInfoCreateArgs} args - Arguments to create a ProductInfo.
     * @example
     * // Create one ProductInfo
     * const ProductInfo = await prisma.productInfo.create({
     *   data: {
     *     // ... data to create a ProductInfo
     *   }
     * })
     * 
     */
    create<T extends ProductInfoCreateArgs>(args: SelectSubset<T, ProductInfoCreateArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductInfos.
     * @param {ProductInfoCreateManyArgs} args - Arguments to create many ProductInfos.
     * @example
     * // Create many ProductInfos
     * const productInfo = await prisma.productInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductInfoCreateManyArgs>(args?: SelectSubset<T, ProductInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductInfo.
     * @param {ProductInfoDeleteArgs} args - Arguments to delete one ProductInfo.
     * @example
     * // Delete one ProductInfo
     * const ProductInfo = await prisma.productInfo.delete({
     *   where: {
     *     // ... filter to delete one ProductInfo
     *   }
     * })
     * 
     */
    delete<T extends ProductInfoDeleteArgs>(args: SelectSubset<T, ProductInfoDeleteArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductInfo.
     * @param {ProductInfoUpdateArgs} args - Arguments to update one ProductInfo.
     * @example
     * // Update one ProductInfo
     * const productInfo = await prisma.productInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductInfoUpdateArgs>(args: SelectSubset<T, ProductInfoUpdateArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductInfos.
     * @param {ProductInfoDeleteManyArgs} args - Arguments to filter ProductInfos to delete.
     * @example
     * // Delete a few ProductInfos
     * const { count } = await prisma.productInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductInfoDeleteManyArgs>(args?: SelectSubset<T, ProductInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductInfos
     * const productInfo = await prisma.productInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductInfoUpdateManyArgs>(args: SelectSubset<T, ProductInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductInfo.
     * @param {ProductInfoUpsertArgs} args - Arguments to update or create a ProductInfo.
     * @example
     * // Update or create a ProductInfo
     * const productInfo = await prisma.productInfo.upsert({
     *   create: {
     *     // ... data to create a ProductInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductInfo we want to update
     *   }
     * })
     */
    upsert<T extends ProductInfoUpsertArgs>(args: SelectSubset<T, ProductInfoUpsertArgs<ExtArgs>>): Prisma__ProductInfoClient<$Result.GetResult<Prisma.$ProductInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductInfos that matches the filter.
     * @param {ProductInfoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productInfo = await prisma.productInfo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductInfoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductInfo.
     * @param {ProductInfoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productInfo = await prisma.productInfo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductInfoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoCountArgs} args - Arguments to filter ProductInfos to count.
     * @example
     * // Count the number of ProductInfos
     * const count = await prisma.productInfo.count({
     *   where: {
     *     // ... the filter for the ProductInfos we want to count
     *   }
     * })
    **/
    count<T extends ProductInfoCountArgs>(
      args?: Subset<T, ProductInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductInfoAggregateArgs>(args: Subset<T, ProductInfoAggregateArgs>): Prisma.PrismaPromise<GetProductInfoAggregateType<T>>

    /**
     * Group by ProductInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductInfoGroupByArgs['orderBy'] }
        : { orderBy?: ProductInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductInfo model
   */
  readonly fields: ProductInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductInfo model
   */ 
  interface ProductInfoFieldRefs {
    readonly id: FieldRef<"ProductInfo", 'String'>
    readonly productId: FieldRef<"ProductInfo", 'Int'>
    readonly imageUrl: FieldRef<"ProductInfo", 'String'>
    readonly cantidad: FieldRef<"ProductInfo", 'Int'>
    readonly categoria: FieldRef<"ProductInfo", 'String'>
    readonly subCategoria: FieldRef<"ProductInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductInfo findUnique
   */
  export type ProductInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * Filter, which ProductInfo to fetch.
     */
    where: ProductInfoWhereUniqueInput
  }

  /**
   * ProductInfo findUniqueOrThrow
   */
  export type ProductInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * Filter, which ProductInfo to fetch.
     */
    where: ProductInfoWhereUniqueInput
  }

  /**
   * ProductInfo findFirst
   */
  export type ProductInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * Filter, which ProductInfo to fetch.
     */
    where?: ProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfos to fetch.
     */
    orderBy?: ProductInfoOrderByWithRelationInput | ProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInfos.
     */
    cursor?: ProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInfos.
     */
    distinct?: ProductInfoScalarFieldEnum | ProductInfoScalarFieldEnum[]
  }

  /**
   * ProductInfo findFirstOrThrow
   */
  export type ProductInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * Filter, which ProductInfo to fetch.
     */
    where?: ProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfos to fetch.
     */
    orderBy?: ProductInfoOrderByWithRelationInput | ProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInfos.
     */
    cursor?: ProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInfos.
     */
    distinct?: ProductInfoScalarFieldEnum | ProductInfoScalarFieldEnum[]
  }

  /**
   * ProductInfo findMany
   */
  export type ProductInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * Filter, which ProductInfos to fetch.
     */
    where?: ProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInfos to fetch.
     */
    orderBy?: ProductInfoOrderByWithRelationInput | ProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductInfos.
     */
    cursor?: ProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInfos.
     */
    skip?: number
    distinct?: ProductInfoScalarFieldEnum | ProductInfoScalarFieldEnum[]
  }

  /**
   * ProductInfo create
   */
  export type ProductInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductInfo.
     */
    data: XOR<ProductInfoCreateInput, ProductInfoUncheckedCreateInput>
  }

  /**
   * ProductInfo createMany
   */
  export type ProductInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductInfos.
     */
    data: ProductInfoCreateManyInput | ProductInfoCreateManyInput[]
  }

  /**
   * ProductInfo update
   */
  export type ProductInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductInfo.
     */
    data: XOR<ProductInfoUpdateInput, ProductInfoUncheckedUpdateInput>
    /**
     * Choose, which ProductInfo to update.
     */
    where: ProductInfoWhereUniqueInput
  }

  /**
   * ProductInfo updateMany
   */
  export type ProductInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductInfos.
     */
    data: XOR<ProductInfoUpdateManyMutationInput, ProductInfoUncheckedUpdateManyInput>
    /**
     * Filter which ProductInfos to update
     */
    where?: ProductInfoWhereInput
    /**
     * Limit how many ProductInfos to update.
     */
    limit?: number
  }

  /**
   * ProductInfo upsert
   */
  export type ProductInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductInfo to update in case it exists.
     */
    where: ProductInfoWhereUniqueInput
    /**
     * In case the ProductInfo found by the `where` argument doesn't exist, create a new ProductInfo with this data.
     */
    create: XOR<ProductInfoCreateInput, ProductInfoUncheckedCreateInput>
    /**
     * In case the ProductInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductInfoUpdateInput, ProductInfoUncheckedUpdateInput>
  }

  /**
   * ProductInfo delete
   */
  export type ProductInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
    /**
     * Filter which ProductInfo to delete.
     */
    where: ProductInfoWhereUniqueInput
  }

  /**
   * ProductInfo deleteMany
   */
  export type ProductInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInfos to delete
     */
    where?: ProductInfoWhereInput
    /**
     * Limit how many ProductInfos to delete.
     */
    limit?: number
  }

  /**
   * ProductInfo findRaw
   */
  export type ProductInfoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProductInfo aggregateRaw
   */
  export type ProductInfoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProductInfo without action
   */
  export type ProductInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInfo
     */
    select?: ProductInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInfo
     */
    omit?: ProductInfoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageUrl: 'imageUrl',
    telefono: 'telefono',
    direccion: 'direccion',
    username: 'username',
    cargo: 'cargo',
    salario: 'salario',
    impuestosAnuales: 'impuestosAnuales'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const CompanyInfoScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    logoUrl: 'logoUrl',
    telefono: 'telefono',
    direccion: 'direccion',
    actividadEconomica: 'actividadEconomica',
    codigoActividad: 'codigoActividad'
  };

  export type CompanyInfoScalarFieldEnum = (typeof CompanyInfoScalarFieldEnum)[keyof typeof CompanyInfoScalarFieldEnum]


  export const ProductInfoScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    imageUrl: 'imageUrl',
    cantidad: 'cantidad',
    categoria: 'categoria',
    subCategoria: 'subCategoria'
  };

  export type ProductInfoScalarFieldEnum = (typeof ProductInfoScalarFieldEnum)[keyof typeof ProductInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    id?: StringFilter<"UserInfo"> | string
    userId?: IntFilter<"UserInfo"> | number
    imageUrl?: StringFilter<"UserInfo"> | string
    telefono?: StringFilter<"UserInfo"> | string
    direccion?: StringFilter<"UserInfo"> | string
    username?: StringFilter<"UserInfo"> | string
    cargo?: StringFilter<"UserInfo"> | string
    salario?: FloatFilter<"UserInfo"> | number
    impuestosAnuales?: FloatFilter<"UserInfo"> | number
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    username?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    imageUrl?: StringFilter<"UserInfo"> | string
    telefono?: StringFilter<"UserInfo"> | string
    direccion?: StringFilter<"UserInfo"> | string
    username?: StringFilter<"UserInfo"> | string
    cargo?: StringFilter<"UserInfo"> | string
    salario?: FloatFilter<"UserInfo"> | number
    impuestosAnuales?: FloatFilter<"UserInfo"> | number
  }, "id" | "userId">

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    username?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserInfo"> | string
    userId?: IntWithAggregatesFilter<"UserInfo"> | number
    imageUrl?: StringWithAggregatesFilter<"UserInfo"> | string
    telefono?: StringWithAggregatesFilter<"UserInfo"> | string
    direccion?: StringWithAggregatesFilter<"UserInfo"> | string
    username?: StringWithAggregatesFilter<"UserInfo"> | string
    cargo?: StringWithAggregatesFilter<"UserInfo"> | string
    salario?: FloatWithAggregatesFilter<"UserInfo"> | number
    impuestosAnuales?: FloatWithAggregatesFilter<"UserInfo"> | number
  }

  export type CompanyInfoWhereInput = {
    AND?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    OR?: CompanyInfoWhereInput[]
    NOT?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    id?: StringFilter<"CompanyInfo"> | string
    companyId?: IntFilter<"CompanyInfo"> | number
    logoUrl?: StringFilter<"CompanyInfo"> | string
    telefono?: StringFilter<"CompanyInfo"> | string
    direccion?: StringFilter<"CompanyInfo"> | string
    actividadEconomica?: StringFilter<"CompanyInfo"> | string
    codigoActividad?: StringFilter<"CompanyInfo"> | string
  }

  export type CompanyInfoOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    logoUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    actividadEconomica?: SortOrder
    codigoActividad?: SortOrder
  }

  export type CompanyInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId?: number
    AND?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    OR?: CompanyInfoWhereInput[]
    NOT?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    logoUrl?: StringFilter<"CompanyInfo"> | string
    telefono?: StringFilter<"CompanyInfo"> | string
    direccion?: StringFilter<"CompanyInfo"> | string
    actividadEconomica?: StringFilter<"CompanyInfo"> | string
    codigoActividad?: StringFilter<"CompanyInfo"> | string
  }, "id" | "companyId">

  export type CompanyInfoOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    logoUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    actividadEconomica?: SortOrder
    codigoActividad?: SortOrder
    _count?: CompanyInfoCountOrderByAggregateInput
    _avg?: CompanyInfoAvgOrderByAggregateInput
    _max?: CompanyInfoMaxOrderByAggregateInput
    _min?: CompanyInfoMinOrderByAggregateInput
    _sum?: CompanyInfoSumOrderByAggregateInput
  }

  export type CompanyInfoScalarWhereWithAggregatesInput = {
    AND?: CompanyInfoScalarWhereWithAggregatesInput | CompanyInfoScalarWhereWithAggregatesInput[]
    OR?: CompanyInfoScalarWhereWithAggregatesInput[]
    NOT?: CompanyInfoScalarWhereWithAggregatesInput | CompanyInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyInfo"> | string
    companyId?: IntWithAggregatesFilter<"CompanyInfo"> | number
    logoUrl?: StringWithAggregatesFilter<"CompanyInfo"> | string
    telefono?: StringWithAggregatesFilter<"CompanyInfo"> | string
    direccion?: StringWithAggregatesFilter<"CompanyInfo"> | string
    actividadEconomica?: StringWithAggregatesFilter<"CompanyInfo"> | string
    codigoActividad?: StringWithAggregatesFilter<"CompanyInfo"> | string
  }

  export type ProductInfoWhereInput = {
    AND?: ProductInfoWhereInput | ProductInfoWhereInput[]
    OR?: ProductInfoWhereInput[]
    NOT?: ProductInfoWhereInput | ProductInfoWhereInput[]
    id?: StringFilter<"ProductInfo"> | string
    productId?: IntFilter<"ProductInfo"> | number
    imageUrl?: StringFilter<"ProductInfo"> | string
    cantidad?: IntFilter<"ProductInfo"> | number
    categoria?: StringFilter<"ProductInfo"> | string
    subCategoria?: StringNullableFilter<"ProductInfo"> | string | null
  }

  export type ProductInfoOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cantidad?: SortOrder
    categoria?: SortOrder
    subCategoria?: SortOrder
  }

  export type ProductInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: number
    AND?: ProductInfoWhereInput | ProductInfoWhereInput[]
    OR?: ProductInfoWhereInput[]
    NOT?: ProductInfoWhereInput | ProductInfoWhereInput[]
    imageUrl?: StringFilter<"ProductInfo"> | string
    cantidad?: IntFilter<"ProductInfo"> | number
    categoria?: StringFilter<"ProductInfo"> | string
    subCategoria?: StringNullableFilter<"ProductInfo"> | string | null
  }, "id" | "productId">

  export type ProductInfoOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cantidad?: SortOrder
    categoria?: SortOrder
    subCategoria?: SortOrder
    _count?: ProductInfoCountOrderByAggregateInput
    _avg?: ProductInfoAvgOrderByAggregateInput
    _max?: ProductInfoMaxOrderByAggregateInput
    _min?: ProductInfoMinOrderByAggregateInput
    _sum?: ProductInfoSumOrderByAggregateInput
  }

  export type ProductInfoScalarWhereWithAggregatesInput = {
    AND?: ProductInfoScalarWhereWithAggregatesInput | ProductInfoScalarWhereWithAggregatesInput[]
    OR?: ProductInfoScalarWhereWithAggregatesInput[]
    NOT?: ProductInfoScalarWhereWithAggregatesInput | ProductInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductInfo"> | string
    productId?: IntWithAggregatesFilter<"ProductInfo"> | number
    imageUrl?: StringWithAggregatesFilter<"ProductInfo"> | string
    cantidad?: IntWithAggregatesFilter<"ProductInfo"> | number
    categoria?: StringWithAggregatesFilter<"ProductInfo"> | string
    subCategoria?: StringNullableWithAggregatesFilter<"ProductInfo"> | string | null
  }

  export type UserInfoCreateInput = {
    id?: string
    userId: number
    imageUrl: string
    telefono: string
    direccion: string
    username: string
    cargo: string
    salario: number
    impuestosAnuales: number
  }

  export type UserInfoUncheckedCreateInput = {
    id?: string
    userId: number
    imageUrl: string
    telefono: string
    direccion: string
    username: string
    cargo: string
    salario: number
    impuestosAnuales: number
  }

  export type UserInfoUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    impuestosAnuales?: FloatFieldUpdateOperationsInput | number
  }

  export type UserInfoUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    impuestosAnuales?: FloatFieldUpdateOperationsInput | number
  }

  export type UserInfoCreateManyInput = {
    id?: string
    userId: number
    imageUrl: string
    telefono: string
    direccion: string
    username: string
    cargo: string
    salario: number
    impuestosAnuales: number
  }

  export type UserInfoUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    impuestosAnuales?: FloatFieldUpdateOperationsInput | number
  }

  export type UserInfoUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    impuestosAnuales?: FloatFieldUpdateOperationsInput | number
  }

  export type CompanyInfoCreateInput = {
    id?: string
    companyId: number
    logoUrl: string
    telefono: string
    direccion: string
    actividadEconomica: string
    codigoActividad: string
  }

  export type CompanyInfoUncheckedCreateInput = {
    id?: string
    companyId: number
    logoUrl: string
    telefono: string
    direccion: string
    actividadEconomica: string
    codigoActividad: string
  }

  export type CompanyInfoUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    logoUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    actividadEconomica?: StringFieldUpdateOperationsInput | string
    codigoActividad?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyInfoUncheckedUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    logoUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    actividadEconomica?: StringFieldUpdateOperationsInput | string
    codigoActividad?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyInfoCreateManyInput = {
    id?: string
    companyId: number
    logoUrl: string
    telefono: string
    direccion: string
    actividadEconomica: string
    codigoActividad: string
  }

  export type CompanyInfoUpdateManyMutationInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    logoUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    actividadEconomica?: StringFieldUpdateOperationsInput | string
    codigoActividad?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyInfoUncheckedUpdateManyInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    logoUrl?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    actividadEconomica?: StringFieldUpdateOperationsInput | string
    codigoActividad?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInfoCreateInput = {
    id?: string
    productId: number
    imageUrl: string
    cantidad: number
    categoria: string
    subCategoria?: string | null
  }

  export type ProductInfoUncheckedCreateInput = {
    id?: string
    productId: number
    imageUrl: string
    cantidad: number
    categoria: string
    subCategoria?: string | null
  }

  export type ProductInfoUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subCategoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductInfoUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subCategoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductInfoCreateManyInput = {
    id?: string
    productId: number
    imageUrl: string
    cantidad: number
    categoria: string
    subCategoria?: string | null
  }

  export type ProductInfoUpdateManyMutationInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subCategoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductInfoUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subCategoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    username?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    userId?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    username?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    username?: SortOrder
    cargo?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    userId?: SortOrder
    salario?: SortOrder
    impuestosAnuales?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CompanyInfoCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    logoUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    actividadEconomica?: SortOrder
    codigoActividad?: SortOrder
  }

  export type CompanyInfoAvgOrderByAggregateInput = {
    companyId?: SortOrder
  }

  export type CompanyInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    logoUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    actividadEconomica?: SortOrder
    codigoActividad?: SortOrder
  }

  export type CompanyInfoMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    logoUrl?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    actividadEconomica?: SortOrder
    codigoActividad?: SortOrder
  }

  export type CompanyInfoSumOrderByAggregateInput = {
    companyId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ProductInfoCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cantidad?: SortOrder
    categoria?: SortOrder
    subCategoria?: SortOrder
  }

  export type ProductInfoAvgOrderByAggregateInput = {
    productId?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cantidad?: SortOrder
    categoria?: SortOrder
    subCategoria?: SortOrder
  }

  export type ProductInfoMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    cantidad?: SortOrder
    categoria?: SortOrder
    subCategoria?: SortOrder
  }

  export type ProductInfoSumOrderByAggregateInput = {
    productId?: SortOrder
    cantidad?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}