
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Specs
 * 
 */
export type Specs = $Result.DefaultSelection<Prisma.$SpecsPayload>
/**
 * Model Seller
 * 
 */
export type Seller = $Result.DefaultSelection<Prisma.$SellerPayload>
/**
 * Model TestReq
 * 
 */
export type TestReq = $Result.DefaultSelection<Prisma.$TestReqPayload>
/**
 * Model Msg
 * 
 */
export type Msg = $Result.DefaultSelection<Prisma.$MsgPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CarType: {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  TRUCK: 'TRUCK',
  COUPE: 'COUPE',
  CONVERTIBLE: 'CONVERTIBLE',
  HATCHBACK: 'HATCHBACK',
  WAGON: 'WAGON',
  VAN: 'VAN'
};

export type CarType = (typeof CarType)[keyof typeof CarType]


export const FuelType: {
  PETROL: 'PETROL',
  DIESEL: 'DIESEL',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const Transmission: {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC'
};

export type Transmission = (typeof Transmission)[keyof typeof Transmission]


export const ReqStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ReqStatus = (typeof ReqStatus)[keyof typeof ReqStatus]

}

export type CarType = $Enums.CarType

export const CarType: typeof $Enums.CarType

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type Transmission = $Enums.Transmission

export const Transmission: typeof $Enums.Transmission

export type ReqStatus = $Enums.ReqStatus

export const ReqStatus: typeof $Enums.ReqStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specs`: Exposes CRUD operations for the **Specs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specs
    * const specs = await prisma.specs.findMany()
    * ```
    */
  get specs(): Prisma.SpecsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seller`: Exposes CRUD operations for the **Seller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.seller.findMany()
    * ```
    */
  get seller(): Prisma.SellerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testReq`: Exposes CRUD operations for the **TestReq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestReqs
    * const testReqs = await prisma.testReq.findMany()
    * ```
    */
  get testReq(): Prisma.TestReqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.msg`: Exposes CRUD operations for the **Msg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Msgs
    * const msgs = await prisma.msg.findMany()
    * ```
    */
  get msg(): Prisma.MsgDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Account: 'Account',
    Car: 'Car',
    Specs: 'Specs',
    Seller: 'Seller',
    TestReq: 'TestReq',
    Msg: 'Msg'
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
      modelProps: "user" | "account" | "car" | "specs" | "seller" | "testReq" | "msg"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Specs: {
        payload: Prisma.$SpecsPayload<ExtArgs>
        fields: Prisma.SpecsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>
          }
          findFirst: {
            args: Prisma.SpecsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>
          }
          findMany: {
            args: Prisma.SpecsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>[]
          }
          create: {
            args: Prisma.SpecsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>
          }
          createMany: {
            args: Prisma.SpecsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>[]
          }
          delete: {
            args: Prisma.SpecsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>
          }
          update: {
            args: Prisma.SpecsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>
          }
          deleteMany: {
            args: Prisma.SpecsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>[]
          }
          upsert: {
            args: Prisma.SpecsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecsPayload>
          }
          aggregate: {
            args: Prisma.SpecsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecs>
          }
          groupBy: {
            args: Prisma.SpecsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecsCountArgs<ExtArgs>
            result: $Utils.Optional<SpecsCountAggregateOutputType> | number
          }
        }
      }
      Seller: {
        payload: Prisma.$SellerPayload<ExtArgs>
        fields: Prisma.SellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findFirst: {
            args: Prisma.SellerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findMany: {
            args: Prisma.SellerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          create: {
            args: Prisma.SellerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          createMany: {
            args: Prisma.SellerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          delete: {
            args: Prisma.SellerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          update: {
            args: Prisma.SellerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          deleteMany: {
            args: Prisma.SellerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          upsert: {
            args: Prisma.SellerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          aggregate: {
            args: Prisma.SellerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeller>
          }
          groupBy: {
            args: Prisma.SellerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerCountArgs<ExtArgs>
            result: $Utils.Optional<SellerCountAggregateOutputType> | number
          }
        }
      }
      TestReq: {
        payload: Prisma.$TestReqPayload<ExtArgs>
        fields: Prisma.TestReqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestReqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestReqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>
          }
          findFirst: {
            args: Prisma.TestReqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestReqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>
          }
          findMany: {
            args: Prisma.TestReqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>[]
          }
          create: {
            args: Prisma.TestReqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>
          }
          createMany: {
            args: Prisma.TestReqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestReqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>[]
          }
          delete: {
            args: Prisma.TestReqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>
          }
          update: {
            args: Prisma.TestReqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>
          }
          deleteMany: {
            args: Prisma.TestReqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestReqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestReqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>[]
          }
          upsert: {
            args: Prisma.TestReqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReqPayload>
          }
          aggregate: {
            args: Prisma.TestReqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestReq>
          }
          groupBy: {
            args: Prisma.TestReqGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestReqGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestReqCountArgs<ExtArgs>
            result: $Utils.Optional<TestReqCountAggregateOutputType> | number
          }
        }
      }
      Msg: {
        payload: Prisma.$MsgPayload<ExtArgs>
        fields: Prisma.MsgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          findFirst: {
            args: Prisma.MsgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          findMany: {
            args: Prisma.MsgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>[]
          }
          create: {
            args: Prisma.MsgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          createMany: {
            args: Prisma.MsgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MsgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>[]
          }
          delete: {
            args: Prisma.MsgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          update: {
            args: Prisma.MsgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          deleteMany: {
            args: Prisma.MsgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MsgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MsgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>[]
          }
          upsert: {
            args: Prisma.MsgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsgPayload>
          }
          aggregate: {
            args: Prisma.MsgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMsg>
          }
          groupBy: {
            args: Prisma.MsgGroupByArgs<ExtArgs>
            result: $Utils.Optional<MsgGroupByOutputType>[]
          }
          count: {
            args: Prisma.MsgCountArgs<ExtArgs>
            result: $Utils.Optional<MsgCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    account?: AccountOmit
    car?: CarOmit
    specs?: SpecsOmit
    seller?: SellerOmit
    testReq?: TestReqOmit
    msg?: MsgOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    createdCars: number
    savedCars: number
    reqs: number
    msgs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    createdCars?: boolean | UserCountOutputTypeCountCreatedCarsArgs
    savedCars?: boolean | UserCountOutputTypeCountSavedCarsArgs
    reqs?: boolean | UserCountOutputTypeCountReqsArgs
    msgs?: boolean | UserCountOutputTypeCountMsgsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestReqWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMsgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsgWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    savedBy: number
    reqs: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | CarCountOutputTypeCountSavedByArgs
    reqs?: boolean | CarCountOutputTypeCountReqsArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountReqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestReqWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    createdCars?: boolean | User$createdCarsArgs<ExtArgs>
    savedCars?: boolean | User$savedCarsArgs<ExtArgs>
    reqs?: boolean | User$reqsArgs<ExtArgs>
    msgs?: boolean | User$msgsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    createdCars?: boolean | User$createdCarsArgs<ExtArgs>
    savedCars?: boolean | User$savedCarsArgs<ExtArgs>
    reqs?: boolean | User$reqsArgs<ExtArgs>
    msgs?: boolean | User$msgsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      createdCars: Prisma.$CarPayload<ExtArgs>[]
      savedCars: Prisma.$CarPayload<ExtArgs>[]
      reqs: Prisma.$TestReqPayload<ExtArgs>[]
      msgs: Prisma.$MsgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCars<T extends User$createdCarsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedCars<T extends User$savedCarsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reqs<T extends User$reqsArgs<ExtArgs> = {}>(args?: Subset<T, User$reqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    msgs<T extends User$msgsArgs<ExtArgs> = {}>(args?: Subset<T, User$msgsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.createdCars
   */
  export type User$createdCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * User.savedCars
   */
  export type User$savedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * User.reqs
   */
  export type User$reqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    where?: TestReqWhereInput
    orderBy?: TestReqOrderByWithRelationInput | TestReqOrderByWithRelationInput[]
    cursor?: TestReqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestReqScalarFieldEnum | TestReqScalarFieldEnum[]
  }

  /**
   * User.msgs
   */
  export type User$msgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    where?: MsgWhereInput
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    cursor?: MsgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    year: number | null
    mileage: number | null
    price: number | null
  }

  export type CarSumAggregateOutputType = {
    year: number | null
    mileage: number | null
    price: number | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    type: $Enums.CarType | null
    year: number | null
    mileage: number | null
    price: number | null
    desc: string | null
    userId: string | null
    isSold: boolean | null
    isFeatured: boolean | null
    isNew: boolean | null
    location: string | null
    fuelType: $Enums.FuelType | null
    transmission: $Enums.Transmission | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    type: $Enums.CarType | null
    year: number | null
    mileage: number | null
    price: number | null
    desc: string | null
    userId: string | null
    isSold: boolean | null
    isFeatured: boolean | null
    isNew: boolean | null
    location: string | null
    fuelType: $Enums.FuelType | null
    transmission: $Enums.Transmission | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    type: number
    year: number
    mileage: number
    colors: number
    price: number
    desc: number
    imgs: number
    userId: number
    isSold: number
    isFeatured: number
    isNew: number
    features: number
    location: number
    fuelType: number
    transmission: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    year?: true
    mileage?: true
    price?: true
  }

  export type CarSumAggregateInputType = {
    year?: true
    mileage?: true
    price?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    type?: true
    year?: true
    mileage?: true
    price?: true
    desc?: true
    userId?: true
    isSold?: true
    isFeatured?: true
    isNew?: true
    location?: true
    fuelType?: true
    transmission?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    type?: true
    year?: true
    mileage?: true
    price?: true
    desc?: true
    userId?: true
    isSold?: true
    isFeatured?: true
    isNew?: true
    location?: true
    fuelType?: true
    transmission?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    type?: true
    year?: true
    mileage?: true
    colors?: true
    price?: true
    desc?: true
    imgs?: true
    userId?: true
    isSold?: true
    isFeatured?: true
    isNew?: true
    features?: true
    location?: true
    fuelType?: true
    transmission?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors: string[]
    price: number
    desc: string
    imgs: string[]
    userId: string
    isSold: boolean | null
    isFeatured: boolean | null
    isNew: boolean | null
    features: string[]
    location: string
    fuelType: $Enums.FuelType | null
    transmission: $Enums.Transmission | null
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    type?: boolean
    year?: boolean
    mileage?: boolean
    colors?: boolean
    price?: boolean
    desc?: boolean
    imgs?: boolean
    userId?: boolean
    isSold?: boolean
    isFeatured?: boolean
    isNew?: boolean
    features?: boolean
    location?: boolean
    fuelType?: boolean
    transmission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedBy?: boolean | Car$savedByArgs<ExtArgs>
    specs?: boolean | Car$specsArgs<ExtArgs>
    seller?: boolean | Car$sellerArgs<ExtArgs>
    reqs?: boolean | Car$reqsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    type?: boolean
    year?: boolean
    mileage?: boolean
    colors?: boolean
    price?: boolean
    desc?: boolean
    imgs?: boolean
    userId?: boolean
    isSold?: boolean
    isFeatured?: boolean
    isNew?: boolean
    features?: boolean
    location?: boolean
    fuelType?: boolean
    transmission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    type?: boolean
    year?: boolean
    mileage?: boolean
    colors?: boolean
    price?: boolean
    desc?: boolean
    imgs?: boolean
    userId?: boolean
    isSold?: boolean
    isFeatured?: boolean
    isNew?: boolean
    features?: boolean
    location?: boolean
    fuelType?: boolean
    transmission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    type?: boolean
    year?: boolean
    mileage?: boolean
    colors?: boolean
    price?: boolean
    desc?: boolean
    imgs?: boolean
    userId?: boolean
    isSold?: boolean
    isFeatured?: boolean
    isNew?: boolean
    features?: boolean
    location?: boolean
    fuelType?: boolean
    transmission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "type" | "year" | "mileage" | "colors" | "price" | "desc" | "imgs" | "userId" | "isSold" | "isFeatured" | "isNew" | "features" | "location" | "fuelType" | "transmission" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedBy?: boolean | Car$savedByArgs<ExtArgs>
    specs?: boolean | Car$specsArgs<ExtArgs>
    seller?: boolean | Car$sellerArgs<ExtArgs>
    reqs?: boolean | Car$reqsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      savedBy: Prisma.$UserPayload<ExtArgs>[]
      specs: Prisma.$SpecsPayload<ExtArgs> | null
      seller: Prisma.$SellerPayload<ExtArgs> | null
      reqs: Prisma.$TestReqPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string
      type: $Enums.CarType
      year: number
      mileage: number
      colors: string[]
      price: number
      desc: string
      imgs: string[]
      userId: string
      isSold: boolean | null
      isFeatured: boolean | null
      isNew: boolean | null
      features: string[]
      location: string
      fuelType: $Enums.FuelType | null
      transmission: $Enums.Transmission | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedBy<T extends Car$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Car$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specs<T extends Car$specsArgs<ExtArgs> = {}>(args?: Subset<T, Car$specsArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seller<T extends Car$sellerArgs<ExtArgs> = {}>(args?: Subset<T, Car$sellerArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reqs<T extends Car$reqsArgs<ExtArgs> = {}>(args?: Subset<T, Car$reqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly name: FieldRef<"Car", 'String'>
    readonly brand: FieldRef<"Car", 'String'>
    readonly type: FieldRef<"Car", 'CarType'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly colors: FieldRef<"Car", 'String[]'>
    readonly price: FieldRef<"Car", 'Float'>
    readonly desc: FieldRef<"Car", 'String'>
    readonly imgs: FieldRef<"Car", 'String[]'>
    readonly userId: FieldRef<"Car", 'String'>
    readonly isSold: FieldRef<"Car", 'Boolean'>
    readonly isFeatured: FieldRef<"Car", 'Boolean'>
    readonly isNew: FieldRef<"Car", 'Boolean'>
    readonly features: FieldRef<"Car", 'String[]'>
    readonly location: FieldRef<"Car", 'String'>
    readonly fuelType: FieldRef<"Car", 'FuelType'>
    readonly transmission: FieldRef<"Car", 'Transmission'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.savedBy
   */
  export type Car$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Car.specs
   */
  export type Car$specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    where?: SpecsWhereInput
  }

  /**
   * Car.seller
   */
  export type Car$sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    where?: SellerWhereInput
  }

  /**
   * Car.reqs
   */
  export type Car$reqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    where?: TestReqWhereInput
    orderBy?: TestReqOrderByWithRelationInput | TestReqOrderByWithRelationInput[]
    cursor?: TestReqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestReqScalarFieldEnum | TestReqScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model Specs
   */

  export type AggregateSpecs = {
    _count: SpecsCountAggregateOutputType | null
    _avg: SpecsAvgAggregateOutputType | null
    _sum: SpecsSumAggregateOutputType | null
    _min: SpecsMinAggregateOutputType | null
    _max: SpecsMaxAggregateOutputType | null
  }

  export type SpecsAvgAggregateOutputType = {
    capacity: number | null
    hp: number | null
    torque: number | null
    doors: number | null
    acceleration: number | null
    zeroToSixty: number | null
    topSpeed: number | null
    length: number | null
    width: number | null
    height: number | null
    weight: number | null
  }

  export type SpecsSumAggregateOutputType = {
    capacity: number | null
    hp: number | null
    torque: number | null
    doors: number | null
    acceleration: number | null
    zeroToSixty: number | null
    topSpeed: number | null
    length: number | null
    width: number | null
    height: number | null
    weight: number | null
  }

  export type SpecsMinAggregateOutputType = {
    id: string | null
    capacity: number | null
    hp: number | null
    torque: number | null
    doors: number | null
    acceleration: number | null
    zeroToSixty: number | null
    topSpeed: number | null
    length: number | null
    width: number | null
    height: number | null
    weight: number | null
    carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecsMaxAggregateOutputType = {
    id: string | null
    capacity: number | null
    hp: number | null
    torque: number | null
    doors: number | null
    acceleration: number | null
    zeroToSixty: number | null
    topSpeed: number | null
    length: number | null
    width: number | null
    height: number | null
    weight: number | null
    carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecsCountAggregateOutputType = {
    id: number
    capacity: number
    hp: number
    torque: number
    doors: number
    acceleration: number
    zeroToSixty: number
    topSpeed: number
    length: number
    width: number
    height: number
    weight: number
    carId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecsAvgAggregateInputType = {
    capacity?: true
    hp?: true
    torque?: true
    doors?: true
    acceleration?: true
    zeroToSixty?: true
    topSpeed?: true
    length?: true
    width?: true
    height?: true
    weight?: true
  }

  export type SpecsSumAggregateInputType = {
    capacity?: true
    hp?: true
    torque?: true
    doors?: true
    acceleration?: true
    zeroToSixty?: true
    topSpeed?: true
    length?: true
    width?: true
    height?: true
    weight?: true
  }

  export type SpecsMinAggregateInputType = {
    id?: true
    capacity?: true
    hp?: true
    torque?: true
    doors?: true
    acceleration?: true
    zeroToSixty?: true
    topSpeed?: true
    length?: true
    width?: true
    height?: true
    weight?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecsMaxAggregateInputType = {
    id?: true
    capacity?: true
    hp?: true
    torque?: true
    doors?: true
    acceleration?: true
    zeroToSixty?: true
    topSpeed?: true
    length?: true
    width?: true
    height?: true
    weight?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecsCountAggregateInputType = {
    id?: true
    capacity?: true
    hp?: true
    torque?: true
    doors?: true
    acceleration?: true
    zeroToSixty?: true
    topSpeed?: true
    length?: true
    width?: true
    height?: true
    weight?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specs to aggregate.
     */
    where?: SpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecsOrderByWithRelationInput | SpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specs
    **/
    _count?: true | SpecsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecsMaxAggregateInputType
  }

  export type GetSpecsAggregateType<T extends SpecsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecs[P]>
      : GetScalarType<T[P], AggregateSpecs[P]>
  }




  export type SpecsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecsWhereInput
    orderBy?: SpecsOrderByWithAggregationInput | SpecsOrderByWithAggregationInput[]
    by: SpecsScalarFieldEnum[] | SpecsScalarFieldEnum
    having?: SpecsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecsCountAggregateInputType | true
    _avg?: SpecsAvgAggregateInputType
    _sum?: SpecsSumAggregateInputType
    _min?: SpecsMinAggregateInputType
    _max?: SpecsMaxAggregateInputType
  }

  export type SpecsGroupByOutputType = {
    id: string
    capacity: number | null
    hp: number | null
    torque: number | null
    doors: number | null
    acceleration: number | null
    zeroToSixty: number | null
    topSpeed: number | null
    length: number | null
    width: number | null
    height: number | null
    weight: number | null
    carId: string
    createdAt: Date
    updatedAt: Date
    _count: SpecsCountAggregateOutputType | null
    _avg: SpecsAvgAggregateOutputType | null
    _sum: SpecsSumAggregateOutputType | null
    _min: SpecsMinAggregateOutputType | null
    _max: SpecsMaxAggregateOutputType | null
  }

  type GetSpecsGroupByPayload<T extends SpecsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecsGroupByOutputType[P]>
            : GetScalarType<T[P], SpecsGroupByOutputType[P]>
        }
      >
    >


  export type SpecsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capacity?: boolean
    hp?: boolean
    torque?: boolean
    doors?: boolean
    acceleration?: boolean
    zeroToSixty?: boolean
    topSpeed?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    weight?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specs"]>

  export type SpecsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capacity?: boolean
    hp?: boolean
    torque?: boolean
    doors?: boolean
    acceleration?: boolean
    zeroToSixty?: boolean
    topSpeed?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    weight?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specs"]>

  export type SpecsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capacity?: boolean
    hp?: boolean
    torque?: boolean
    doors?: boolean
    acceleration?: boolean
    zeroToSixty?: boolean
    topSpeed?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    weight?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specs"]>

  export type SpecsSelectScalar = {
    id?: boolean
    capacity?: boolean
    hp?: boolean
    torque?: boolean
    doors?: boolean
    acceleration?: boolean
    zeroToSixty?: boolean
    topSpeed?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    weight?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "capacity" | "hp" | "torque" | "doors" | "acceleration" | "zeroToSixty" | "topSpeed" | "length" | "width" | "height" | "weight" | "carId" | "createdAt" | "updatedAt", ExtArgs["result"]["specs"]>
  export type SpecsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type SpecsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type SpecsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $SpecsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specs"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      capacity: number | null
      hp: number | null
      torque: number | null
      doors: number | null
      acceleration: number | null
      zeroToSixty: number | null
      topSpeed: number | null
      length: number | null
      width: number | null
      height: number | null
      weight: number | null
      carId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specs"]>
    composites: {}
  }

  type SpecsGetPayload<S extends boolean | null | undefined | SpecsDefaultArgs> = $Result.GetResult<Prisma.$SpecsPayload, S>

  type SpecsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecsCountAggregateInputType | true
    }

  export interface SpecsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specs'], meta: { name: 'Specs' } }
    /**
     * Find zero or one Specs that matches the filter.
     * @param {SpecsFindUniqueArgs} args - Arguments to find a Specs
     * @example
     * // Get one Specs
     * const specs = await prisma.specs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecsFindUniqueArgs>(args: SelectSubset<T, SpecsFindUniqueArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecsFindUniqueOrThrowArgs} args - Arguments to find a Specs
     * @example
     * // Get one Specs
     * const specs = await prisma.specs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecsFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsFindFirstArgs} args - Arguments to find a Specs
     * @example
     * // Get one Specs
     * const specs = await prisma.specs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecsFindFirstArgs>(args?: SelectSubset<T, SpecsFindFirstArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsFindFirstOrThrowArgs} args - Arguments to find a Specs
     * @example
     * // Get one Specs
     * const specs = await prisma.specs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecsFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specs
     * const specs = await prisma.specs.findMany()
     * 
     * // Get first 10 Specs
     * const specs = await prisma.specs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specsWithIdOnly = await prisma.specs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecsFindManyArgs>(args?: SelectSubset<T, SpecsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specs.
     * @param {SpecsCreateArgs} args - Arguments to create a Specs.
     * @example
     * // Create one Specs
     * const Specs = await prisma.specs.create({
     *   data: {
     *     // ... data to create a Specs
     *   }
     * })
     * 
     */
    create<T extends SpecsCreateArgs>(args: SelectSubset<T, SpecsCreateArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specs.
     * @param {SpecsCreateManyArgs} args - Arguments to create many Specs.
     * @example
     * // Create many Specs
     * const specs = await prisma.specs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecsCreateManyArgs>(args?: SelectSubset<T, SpecsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specs and returns the data saved in the database.
     * @param {SpecsCreateManyAndReturnArgs} args - Arguments to create many Specs.
     * @example
     * // Create many Specs
     * const specs = await prisma.specs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specs and only return the `id`
     * const specsWithIdOnly = await prisma.specs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecsCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specs.
     * @param {SpecsDeleteArgs} args - Arguments to delete one Specs.
     * @example
     * // Delete one Specs
     * const Specs = await prisma.specs.delete({
     *   where: {
     *     // ... filter to delete one Specs
     *   }
     * })
     * 
     */
    delete<T extends SpecsDeleteArgs>(args: SelectSubset<T, SpecsDeleteArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specs.
     * @param {SpecsUpdateArgs} args - Arguments to update one Specs.
     * @example
     * // Update one Specs
     * const specs = await prisma.specs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecsUpdateArgs>(args: SelectSubset<T, SpecsUpdateArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specs.
     * @param {SpecsDeleteManyArgs} args - Arguments to filter Specs to delete.
     * @example
     * // Delete a few Specs
     * const { count } = await prisma.specs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecsDeleteManyArgs>(args?: SelectSubset<T, SpecsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specs
     * const specs = await prisma.specs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecsUpdateManyArgs>(args: SelectSubset<T, SpecsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specs and returns the data updated in the database.
     * @param {SpecsUpdateManyAndReturnArgs} args - Arguments to update many Specs.
     * @example
     * // Update many Specs
     * const specs = await prisma.specs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specs and only return the `id`
     * const specsWithIdOnly = await prisma.specs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecsUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specs.
     * @param {SpecsUpsertArgs} args - Arguments to update or create a Specs.
     * @example
     * // Update or create a Specs
     * const specs = await prisma.specs.upsert({
     *   create: {
     *     // ... data to create a Specs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specs we want to update
     *   }
     * })
     */
    upsert<T extends SpecsUpsertArgs>(args: SelectSubset<T, SpecsUpsertArgs<ExtArgs>>): Prisma__SpecsClient<$Result.GetResult<Prisma.$SpecsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsCountArgs} args - Arguments to filter Specs to count.
     * @example
     * // Count the number of Specs
     * const count = await prisma.specs.count({
     *   where: {
     *     // ... the filter for the Specs we want to count
     *   }
     * })
    **/
    count<T extends SpecsCountArgs>(
      args?: Subset<T, SpecsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecsAggregateArgs>(args: Subset<T, SpecsAggregateArgs>): Prisma.PrismaPromise<GetSpecsAggregateType<T>>

    /**
     * Group by Specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecsGroupByArgs} args - Group by arguments.
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
      T extends SpecsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecsGroupByArgs['orderBy'] }
        : { orderBy?: SpecsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specs model
   */
  readonly fields: SpecsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Specs model
   */
  interface SpecsFieldRefs {
    readonly id: FieldRef<"Specs", 'String'>
    readonly capacity: FieldRef<"Specs", 'Int'>
    readonly hp: FieldRef<"Specs", 'Int'>
    readonly torque: FieldRef<"Specs", 'Int'>
    readonly doors: FieldRef<"Specs", 'Int'>
    readonly acceleration: FieldRef<"Specs", 'Float'>
    readonly zeroToSixty: FieldRef<"Specs", 'Float'>
    readonly topSpeed: FieldRef<"Specs", 'Int'>
    readonly length: FieldRef<"Specs", 'Int'>
    readonly width: FieldRef<"Specs", 'Int'>
    readonly height: FieldRef<"Specs", 'Int'>
    readonly weight: FieldRef<"Specs", 'Int'>
    readonly carId: FieldRef<"Specs", 'String'>
    readonly createdAt: FieldRef<"Specs", 'DateTime'>
    readonly updatedAt: FieldRef<"Specs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specs findUnique
   */
  export type SpecsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * Filter, which Specs to fetch.
     */
    where: SpecsWhereUniqueInput
  }

  /**
   * Specs findUniqueOrThrow
   */
  export type SpecsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * Filter, which Specs to fetch.
     */
    where: SpecsWhereUniqueInput
  }

  /**
   * Specs findFirst
   */
  export type SpecsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * Filter, which Specs to fetch.
     */
    where?: SpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecsOrderByWithRelationInput | SpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specs.
     */
    cursor?: SpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specs.
     */
    distinct?: SpecsScalarFieldEnum | SpecsScalarFieldEnum[]
  }

  /**
   * Specs findFirstOrThrow
   */
  export type SpecsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * Filter, which Specs to fetch.
     */
    where?: SpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecsOrderByWithRelationInput | SpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specs.
     */
    cursor?: SpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specs.
     */
    distinct?: SpecsScalarFieldEnum | SpecsScalarFieldEnum[]
  }

  /**
   * Specs findMany
   */
  export type SpecsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * Filter, which Specs to fetch.
     */
    where?: SpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecsOrderByWithRelationInput | SpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specs.
     */
    cursor?: SpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    distinct?: SpecsScalarFieldEnum | SpecsScalarFieldEnum[]
  }

  /**
   * Specs create
   */
  export type SpecsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * The data needed to create a Specs.
     */
    data: XOR<SpecsCreateInput, SpecsUncheckedCreateInput>
  }

  /**
   * Specs createMany
   */
  export type SpecsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specs.
     */
    data: SpecsCreateManyInput | SpecsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specs createManyAndReturn
   */
  export type SpecsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * The data used to create many Specs.
     */
    data: SpecsCreateManyInput | SpecsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specs update
   */
  export type SpecsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * The data needed to update a Specs.
     */
    data: XOR<SpecsUpdateInput, SpecsUncheckedUpdateInput>
    /**
     * Choose, which Specs to update.
     */
    where: SpecsWhereUniqueInput
  }

  /**
   * Specs updateMany
   */
  export type SpecsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specs.
     */
    data: XOR<SpecsUpdateManyMutationInput, SpecsUncheckedUpdateManyInput>
    /**
     * Filter which Specs to update
     */
    where?: SpecsWhereInput
    /**
     * Limit how many Specs to update.
     */
    limit?: number
  }

  /**
   * Specs updateManyAndReturn
   */
  export type SpecsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * The data used to update Specs.
     */
    data: XOR<SpecsUpdateManyMutationInput, SpecsUncheckedUpdateManyInput>
    /**
     * Filter which Specs to update
     */
    where?: SpecsWhereInput
    /**
     * Limit how many Specs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specs upsert
   */
  export type SpecsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * The filter to search for the Specs to update in case it exists.
     */
    where: SpecsWhereUniqueInput
    /**
     * In case the Specs found by the `where` argument doesn't exist, create a new Specs with this data.
     */
    create: XOR<SpecsCreateInput, SpecsUncheckedCreateInput>
    /**
     * In case the Specs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecsUpdateInput, SpecsUncheckedUpdateInput>
  }

  /**
   * Specs delete
   */
  export type SpecsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
    /**
     * Filter which Specs to delete.
     */
    where: SpecsWhereUniqueInput
  }

  /**
   * Specs deleteMany
   */
  export type SpecsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specs to delete
     */
    where?: SpecsWhereInput
    /**
     * Limit how many Specs to delete.
     */
    limit?: number
  }

  /**
   * Specs without action
   */
  export type SpecsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specs
     */
    select?: SpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specs
     */
    omit?: SpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecsInclude<ExtArgs> | null
  }


  /**
   * Model Seller
   */

  export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  export type SellerMinAggregateOutputType = {
    id: string | null
    name: string | null
    img: string | null
    phone: string | null
    email: string | null
    website: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    img: string | null
    phone: string | null
    email: string | null
    website: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    carId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellerCountAggregateOutputType = {
    id: number
    name: number
    img: number
    phone: number
    email: number
    website: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    carId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SellerMinAggregateInputType = {
    id?: true
    name?: true
    img?: true
    phone?: true
    email?: true
    website?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellerMaxAggregateInputType = {
    id?: true
    name?: true
    img?: true
    phone?: true
    email?: true
    website?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellerCountAggregateInputType = {
    id?: true
    name?: true
    img?: true
    phone?: true
    email?: true
    website?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    carId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seller to aggregate.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sellers
    **/
    _count?: true | SellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerMaxAggregateInputType
  }

  export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeller[P]>
      : GetScalarType<T[P], AggregateSeller[P]>
  }




  export type SellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerWhereInput
    orderBy?: SellerOrderByWithAggregationInput | SellerOrderByWithAggregationInput[]
    by: SellerScalarFieldEnum[] | SellerScalarFieldEnum
    having?: SellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerCountAggregateInputType | true
    _min?: SellerMinAggregateInputType
    _max?: SellerMaxAggregateInputType
  }

  export type SellerGroupByOutputType = {
    id: string
    name: string
    img: string | null
    phone: string | null
    email: string | null
    website: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    carId: string
    createdAt: Date
    updatedAt: Date
    _count: SellerCountAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerGroupByOutputType[P]>
            : GetScalarType<T[P], SellerGroupByOutputType[P]>
        }
      >
    >


  export type SellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectScalar = {
    id?: boolean
    name?: boolean
    img?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    carId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SellerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "img" | "phone" | "email" | "website" | "address" | "city" | "state" | "country" | "postalCode" | "carId" | "createdAt" | "updatedAt", ExtArgs["result"]["seller"]>
  export type SellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type SellerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type SellerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $SellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seller"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      img: string | null
      phone: string | null
      email: string | null
      website: string | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      postalCode: string | null
      carId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seller"]>
    composites: {}
  }

  type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = $Result.GetResult<Prisma.$SellerPayload, S>

  type SellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerCountAggregateInputType | true
    }

  export interface SellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seller'], meta: { name: 'Seller' } }
    /**
     * Find zero or one Seller that matches the filter.
     * @param {SellerFindUniqueArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerFindUniqueArgs>(args: SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerFindUniqueOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerFindFirstArgs>(args?: SelectSubset<T, SellerFindFirstArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.seller.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.seller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerWithIdOnly = await prisma.seller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerFindManyArgs>(args?: SelectSubset<T, SellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seller.
     * @param {SellerCreateArgs} args - Arguments to create a Seller.
     * @example
     * // Create one Seller
     * const Seller = await prisma.seller.create({
     *   data: {
     *     // ... data to create a Seller
     *   }
     * })
     * 
     */
    create<T extends SellerCreateArgs>(args: SelectSubset<T, SellerCreateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {SellerCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerCreateManyArgs>(args?: SelectSubset<T, SellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sellers and returns the data saved in the database.
     * @param {SellerCreateManyAndReturnArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seller.
     * @param {SellerDeleteArgs} args - Arguments to delete one Seller.
     * @example
     * // Delete one Seller
     * const Seller = await prisma.seller.delete({
     *   where: {
     *     // ... filter to delete one Seller
     *   }
     * })
     * 
     */
    delete<T extends SellerDeleteArgs>(args: SelectSubset<T, SellerDeleteArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seller.
     * @param {SellerUpdateArgs} args - Arguments to update one Seller.
     * @example
     * // Update one Seller
     * const seller = await prisma.seller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerUpdateArgs>(args: SelectSubset<T, SellerUpdateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {SellerDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.seller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerDeleteManyArgs>(args?: SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerUpdateManyArgs>(args: SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers and returns the data updated in the database.
     * @param {SellerUpdateManyAndReturnArgs} args - Arguments to update many Sellers.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SellerUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seller.
     * @param {SellerUpsertArgs} args - Arguments to update or create a Seller.
     * @example
     * // Update or create a Seller
     * const seller = await prisma.seller.upsert({
     *   create: {
     *     // ... data to create a Seller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seller we want to update
     *   }
     * })
     */
    upsert<T extends SellerUpsertArgs>(args: SelectSubset<T, SellerUpsertArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.seller.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends SellerCountArgs>(
      args?: Subset<T, SellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerAggregateArgs>(args: Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>

    /**
     * Group by Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerGroupByArgs} args - Group by arguments.
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
      T extends SellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerGroupByArgs['orderBy'] }
        : { orderBy?: SellerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seller model
   */
  readonly fields: SellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seller model
   */
  interface SellerFieldRefs {
    readonly id: FieldRef<"Seller", 'String'>
    readonly name: FieldRef<"Seller", 'String'>
    readonly img: FieldRef<"Seller", 'String'>
    readonly phone: FieldRef<"Seller", 'String'>
    readonly email: FieldRef<"Seller", 'String'>
    readonly website: FieldRef<"Seller", 'String'>
    readonly address: FieldRef<"Seller", 'String'>
    readonly city: FieldRef<"Seller", 'String'>
    readonly state: FieldRef<"Seller", 'String'>
    readonly country: FieldRef<"Seller", 'String'>
    readonly postalCode: FieldRef<"Seller", 'String'>
    readonly carId: FieldRef<"Seller", 'String'>
    readonly createdAt: FieldRef<"Seller", 'DateTime'>
    readonly updatedAt: FieldRef<"Seller", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seller findUnique
   */
  export type SellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findUniqueOrThrow
   */
  export type SellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findFirst
   */
  export type SellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findFirstOrThrow
   */
  export type SellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findMany
   */
  export type SellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Sellers to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller create
   */
  export type SellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to create a Seller.
     */
    data: XOR<SellerCreateInput, SellerUncheckedCreateInput>
  }

  /**
   * Seller createMany
   */
  export type SellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seller createManyAndReturn
   */
  export type SellerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seller update
   */
  export type SellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to update a Seller.
     */
    data: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
    /**
     * Choose, which Seller to update.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller updateMany
   */
  export type SellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
  }

  /**
   * Seller updateManyAndReturn
   */
  export type SellerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seller upsert
   */
  export type SellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The filter to search for the Seller to update in case it exists.
     */
    where: SellerWhereUniqueInput
    /**
     * In case the Seller found by the `where` argument doesn't exist, create a new Seller with this data.
     */
    create: XOR<SellerCreateInput, SellerUncheckedCreateInput>
    /**
     * In case the Seller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
  }

  /**
   * Seller delete
   */
  export type SellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter which Seller to delete.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller deleteMany
   */
  export type SellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sellers to delete
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to delete.
     */
    limit?: number
  }

  /**
   * Seller without action
   */
  export type SellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
  }


  /**
   * Model TestReq
   */

  export type AggregateTestReq = {
    _count: TestReqCountAggregateOutputType | null
    _min: TestReqMinAggregateOutputType | null
    _max: TestReqMaxAggregateOutputType | null
  }

  export type TestReqMinAggregateOutputType = {
    id: string | null
    carId: string | null
    userId: string | null
    date: Date | null
    status: $Enums.ReqStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestReqMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    userId: string | null
    date: Date | null
    status: $Enums.ReqStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestReqCountAggregateOutputType = {
    id: number
    carId: number
    userId: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestReqMinAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestReqMaxAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestReqCountAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestReqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestReq to aggregate.
     */
    where?: TestReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReqs to fetch.
     */
    orderBy?: TestReqOrderByWithRelationInput | TestReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestReqs
    **/
    _count?: true | TestReqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestReqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestReqMaxAggregateInputType
  }

  export type GetTestReqAggregateType<T extends TestReqAggregateArgs> = {
        [P in keyof T & keyof AggregateTestReq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestReq[P]>
      : GetScalarType<T[P], AggregateTestReq[P]>
  }




  export type TestReqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestReqWhereInput
    orderBy?: TestReqOrderByWithAggregationInput | TestReqOrderByWithAggregationInput[]
    by: TestReqScalarFieldEnum[] | TestReqScalarFieldEnum
    having?: TestReqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestReqCountAggregateInputType | true
    _min?: TestReqMinAggregateInputType
    _max?: TestReqMaxAggregateInputType
  }

  export type TestReqGroupByOutputType = {
    id: string
    carId: string
    userId: string
    date: Date
    status: $Enums.ReqStatus
    createdAt: Date
    updatedAt: Date
    _count: TestReqCountAggregateOutputType | null
    _min: TestReqMinAggregateOutputType | null
    _max: TestReqMaxAggregateOutputType | null
  }

  type GetTestReqGroupByPayload<T extends TestReqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestReqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestReqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestReqGroupByOutputType[P]>
            : GetScalarType<T[P], TestReqGroupByOutputType[P]>
        }
      >
    >


  export type TestReqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testReq"]>

  export type TestReqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testReq"]>

  export type TestReqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testReq"]>

  export type TestReqSelectScalar = {
    id?: boolean
    carId?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestReqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "userId" | "date" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["testReq"]>
  export type TestReqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestReqIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestReqIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestReqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestReq"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      userId: string
      date: Date
      status: $Enums.ReqStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testReq"]>
    composites: {}
  }

  type TestReqGetPayload<S extends boolean | null | undefined | TestReqDefaultArgs> = $Result.GetResult<Prisma.$TestReqPayload, S>

  type TestReqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestReqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestReqCountAggregateInputType | true
    }

  export interface TestReqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestReq'], meta: { name: 'TestReq' } }
    /**
     * Find zero or one TestReq that matches the filter.
     * @param {TestReqFindUniqueArgs} args - Arguments to find a TestReq
     * @example
     * // Get one TestReq
     * const testReq = await prisma.testReq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestReqFindUniqueArgs>(args: SelectSubset<T, TestReqFindUniqueArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestReq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestReqFindUniqueOrThrowArgs} args - Arguments to find a TestReq
     * @example
     * // Get one TestReq
     * const testReq = await prisma.testReq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestReqFindUniqueOrThrowArgs>(args: SelectSubset<T, TestReqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestReq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqFindFirstArgs} args - Arguments to find a TestReq
     * @example
     * // Get one TestReq
     * const testReq = await prisma.testReq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestReqFindFirstArgs>(args?: SelectSubset<T, TestReqFindFirstArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestReq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqFindFirstOrThrowArgs} args - Arguments to find a TestReq
     * @example
     * // Get one TestReq
     * const testReq = await prisma.testReq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestReqFindFirstOrThrowArgs>(args?: SelectSubset<T, TestReqFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestReqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestReqs
     * const testReqs = await prisma.testReq.findMany()
     * 
     * // Get first 10 TestReqs
     * const testReqs = await prisma.testReq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testReqWithIdOnly = await prisma.testReq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestReqFindManyArgs>(args?: SelectSubset<T, TestReqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestReq.
     * @param {TestReqCreateArgs} args - Arguments to create a TestReq.
     * @example
     * // Create one TestReq
     * const TestReq = await prisma.testReq.create({
     *   data: {
     *     // ... data to create a TestReq
     *   }
     * })
     * 
     */
    create<T extends TestReqCreateArgs>(args: SelectSubset<T, TestReqCreateArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestReqs.
     * @param {TestReqCreateManyArgs} args - Arguments to create many TestReqs.
     * @example
     * // Create many TestReqs
     * const testReq = await prisma.testReq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestReqCreateManyArgs>(args?: SelectSubset<T, TestReqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestReqs and returns the data saved in the database.
     * @param {TestReqCreateManyAndReturnArgs} args - Arguments to create many TestReqs.
     * @example
     * // Create many TestReqs
     * const testReq = await prisma.testReq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestReqs and only return the `id`
     * const testReqWithIdOnly = await prisma.testReq.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestReqCreateManyAndReturnArgs>(args?: SelectSubset<T, TestReqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestReq.
     * @param {TestReqDeleteArgs} args - Arguments to delete one TestReq.
     * @example
     * // Delete one TestReq
     * const TestReq = await prisma.testReq.delete({
     *   where: {
     *     // ... filter to delete one TestReq
     *   }
     * })
     * 
     */
    delete<T extends TestReqDeleteArgs>(args: SelectSubset<T, TestReqDeleteArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestReq.
     * @param {TestReqUpdateArgs} args - Arguments to update one TestReq.
     * @example
     * // Update one TestReq
     * const testReq = await prisma.testReq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestReqUpdateArgs>(args: SelectSubset<T, TestReqUpdateArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestReqs.
     * @param {TestReqDeleteManyArgs} args - Arguments to filter TestReqs to delete.
     * @example
     * // Delete a few TestReqs
     * const { count } = await prisma.testReq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestReqDeleteManyArgs>(args?: SelectSubset<T, TestReqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestReqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestReqs
     * const testReq = await prisma.testReq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestReqUpdateManyArgs>(args: SelectSubset<T, TestReqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestReqs and returns the data updated in the database.
     * @param {TestReqUpdateManyAndReturnArgs} args - Arguments to update many TestReqs.
     * @example
     * // Update many TestReqs
     * const testReq = await prisma.testReq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestReqs and only return the `id`
     * const testReqWithIdOnly = await prisma.testReq.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestReqUpdateManyAndReturnArgs>(args: SelectSubset<T, TestReqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestReq.
     * @param {TestReqUpsertArgs} args - Arguments to update or create a TestReq.
     * @example
     * // Update or create a TestReq
     * const testReq = await prisma.testReq.upsert({
     *   create: {
     *     // ... data to create a TestReq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestReq we want to update
     *   }
     * })
     */
    upsert<T extends TestReqUpsertArgs>(args: SelectSubset<T, TestReqUpsertArgs<ExtArgs>>): Prisma__TestReqClient<$Result.GetResult<Prisma.$TestReqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestReqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqCountArgs} args - Arguments to filter TestReqs to count.
     * @example
     * // Count the number of TestReqs
     * const count = await prisma.testReq.count({
     *   where: {
     *     // ... the filter for the TestReqs we want to count
     *   }
     * })
    **/
    count<T extends TestReqCountArgs>(
      args?: Subset<T, TestReqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestReqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestReq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestReqAggregateArgs>(args: Subset<T, TestReqAggregateArgs>): Prisma.PrismaPromise<GetTestReqAggregateType<T>>

    /**
     * Group by TestReq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReqGroupByArgs} args - Group by arguments.
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
      T extends TestReqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestReqGroupByArgs['orderBy'] }
        : { orderBy?: TestReqGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestReqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestReqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestReq model
   */
  readonly fields: TestReqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestReq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestReqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestReq model
   */
  interface TestReqFieldRefs {
    readonly id: FieldRef<"TestReq", 'String'>
    readonly carId: FieldRef<"TestReq", 'String'>
    readonly userId: FieldRef<"TestReq", 'String'>
    readonly date: FieldRef<"TestReq", 'DateTime'>
    readonly status: FieldRef<"TestReq", 'ReqStatus'>
    readonly createdAt: FieldRef<"TestReq", 'DateTime'>
    readonly updatedAt: FieldRef<"TestReq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestReq findUnique
   */
  export type TestReqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * Filter, which TestReq to fetch.
     */
    where: TestReqWhereUniqueInput
  }

  /**
   * TestReq findUniqueOrThrow
   */
  export type TestReqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * Filter, which TestReq to fetch.
     */
    where: TestReqWhereUniqueInput
  }

  /**
   * TestReq findFirst
   */
  export type TestReqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * Filter, which TestReq to fetch.
     */
    where?: TestReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReqs to fetch.
     */
    orderBy?: TestReqOrderByWithRelationInput | TestReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestReqs.
     */
    cursor?: TestReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestReqs.
     */
    distinct?: TestReqScalarFieldEnum | TestReqScalarFieldEnum[]
  }

  /**
   * TestReq findFirstOrThrow
   */
  export type TestReqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * Filter, which TestReq to fetch.
     */
    where?: TestReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReqs to fetch.
     */
    orderBy?: TestReqOrderByWithRelationInput | TestReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestReqs.
     */
    cursor?: TestReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestReqs.
     */
    distinct?: TestReqScalarFieldEnum | TestReqScalarFieldEnum[]
  }

  /**
   * TestReq findMany
   */
  export type TestReqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * Filter, which TestReqs to fetch.
     */
    where?: TestReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReqs to fetch.
     */
    orderBy?: TestReqOrderByWithRelationInput | TestReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestReqs.
     */
    cursor?: TestReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReqs.
     */
    skip?: number
    distinct?: TestReqScalarFieldEnum | TestReqScalarFieldEnum[]
  }

  /**
   * TestReq create
   */
  export type TestReqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * The data needed to create a TestReq.
     */
    data: XOR<TestReqCreateInput, TestReqUncheckedCreateInput>
  }

  /**
   * TestReq createMany
   */
  export type TestReqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestReqs.
     */
    data: TestReqCreateManyInput | TestReqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestReq createManyAndReturn
   */
  export type TestReqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * The data used to create many TestReqs.
     */
    data: TestReqCreateManyInput | TestReqCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestReq update
   */
  export type TestReqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * The data needed to update a TestReq.
     */
    data: XOR<TestReqUpdateInput, TestReqUncheckedUpdateInput>
    /**
     * Choose, which TestReq to update.
     */
    where: TestReqWhereUniqueInput
  }

  /**
   * TestReq updateMany
   */
  export type TestReqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestReqs.
     */
    data: XOR<TestReqUpdateManyMutationInput, TestReqUncheckedUpdateManyInput>
    /**
     * Filter which TestReqs to update
     */
    where?: TestReqWhereInput
    /**
     * Limit how many TestReqs to update.
     */
    limit?: number
  }

  /**
   * TestReq updateManyAndReturn
   */
  export type TestReqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * The data used to update TestReqs.
     */
    data: XOR<TestReqUpdateManyMutationInput, TestReqUncheckedUpdateManyInput>
    /**
     * Filter which TestReqs to update
     */
    where?: TestReqWhereInput
    /**
     * Limit how many TestReqs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestReq upsert
   */
  export type TestReqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * The filter to search for the TestReq to update in case it exists.
     */
    where: TestReqWhereUniqueInput
    /**
     * In case the TestReq found by the `where` argument doesn't exist, create a new TestReq with this data.
     */
    create: XOR<TestReqCreateInput, TestReqUncheckedCreateInput>
    /**
     * In case the TestReq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestReqUpdateInput, TestReqUncheckedUpdateInput>
  }

  /**
   * TestReq delete
   */
  export type TestReqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
    /**
     * Filter which TestReq to delete.
     */
    where: TestReqWhereUniqueInput
  }

  /**
   * TestReq deleteMany
   */
  export type TestReqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestReqs to delete
     */
    where?: TestReqWhereInput
    /**
     * Limit how many TestReqs to delete.
     */
    limit?: number
  }

  /**
   * TestReq without action
   */
  export type TestReqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReq
     */
    select?: TestReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReq
     */
    omit?: TestReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReqInclude<ExtArgs> | null
  }


  /**
   * Model Msg
   */

  export type AggregateMsg = {
    _count: MsgCountAggregateOutputType | null
    _min: MsgMinAggregateOutputType | null
    _max: MsgMaxAggregateOutputType | null
  }

  export type MsgMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MsgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MsgCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    content: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MsgMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MsgMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MsgCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MsgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Msg to aggregate.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Msgs
    **/
    _count?: true | MsgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsgMaxAggregateInputType
  }

  export type GetMsgAggregateType<T extends MsgAggregateArgs> = {
        [P in keyof T & keyof AggregateMsg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsg[P]>
      : GetScalarType<T[P], AggregateMsg[P]>
  }




  export type MsgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsgWhereInput
    orderBy?: MsgOrderByWithAggregationInput | MsgOrderByWithAggregationInput[]
    by: MsgScalarFieldEnum[] | MsgScalarFieldEnum
    having?: MsgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsgCountAggregateInputType | true
    _min?: MsgMinAggregateInputType
    _max?: MsgMaxAggregateInputType
  }

  export type MsgGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    content: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: MsgCountAggregateOutputType | null
    _min: MsgMinAggregateOutputType | null
    _max: MsgMaxAggregateOutputType | null
  }

  type GetMsgGroupByPayload<T extends MsgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsgGroupByOutputType[P]>
            : GetScalarType<T[P], MsgGroupByOutputType[P]>
        }
      >
    >


  export type MsgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msg"]>

  export type MsgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msg"]>

  export type MsgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msg"]>

  export type MsgSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MsgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "content" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["msg"]>
  export type MsgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MsgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MsgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MsgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Msg"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      content: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["msg"]>
    composites: {}
  }

  type MsgGetPayload<S extends boolean | null | undefined | MsgDefaultArgs> = $Result.GetResult<Prisma.$MsgPayload, S>

  type MsgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MsgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MsgCountAggregateInputType | true
    }

  export interface MsgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Msg'], meta: { name: 'Msg' } }
    /**
     * Find zero or one Msg that matches the filter.
     * @param {MsgFindUniqueArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MsgFindUniqueArgs>(args: SelectSubset<T, MsgFindUniqueArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Msg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MsgFindUniqueOrThrowArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MsgFindUniqueOrThrowArgs>(args: SelectSubset<T, MsgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Msg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgFindFirstArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MsgFindFirstArgs>(args?: SelectSubset<T, MsgFindFirstArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Msg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgFindFirstOrThrowArgs} args - Arguments to find a Msg
     * @example
     * // Get one Msg
     * const msg = await prisma.msg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MsgFindFirstOrThrowArgs>(args?: SelectSubset<T, MsgFindFirstOrThrowArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Msgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Msgs
     * const msgs = await prisma.msg.findMany()
     * 
     * // Get first 10 Msgs
     * const msgs = await prisma.msg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const msgWithIdOnly = await prisma.msg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MsgFindManyArgs>(args?: SelectSubset<T, MsgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Msg.
     * @param {MsgCreateArgs} args - Arguments to create a Msg.
     * @example
     * // Create one Msg
     * const Msg = await prisma.msg.create({
     *   data: {
     *     // ... data to create a Msg
     *   }
     * })
     * 
     */
    create<T extends MsgCreateArgs>(args: SelectSubset<T, MsgCreateArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Msgs.
     * @param {MsgCreateManyArgs} args - Arguments to create many Msgs.
     * @example
     * // Create many Msgs
     * const msg = await prisma.msg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MsgCreateManyArgs>(args?: SelectSubset<T, MsgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Msgs and returns the data saved in the database.
     * @param {MsgCreateManyAndReturnArgs} args - Arguments to create many Msgs.
     * @example
     * // Create many Msgs
     * const msg = await prisma.msg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Msgs and only return the `id`
     * const msgWithIdOnly = await prisma.msg.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MsgCreateManyAndReturnArgs>(args?: SelectSubset<T, MsgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Msg.
     * @param {MsgDeleteArgs} args - Arguments to delete one Msg.
     * @example
     * // Delete one Msg
     * const Msg = await prisma.msg.delete({
     *   where: {
     *     // ... filter to delete one Msg
     *   }
     * })
     * 
     */
    delete<T extends MsgDeleteArgs>(args: SelectSubset<T, MsgDeleteArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Msg.
     * @param {MsgUpdateArgs} args - Arguments to update one Msg.
     * @example
     * // Update one Msg
     * const msg = await prisma.msg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MsgUpdateArgs>(args: SelectSubset<T, MsgUpdateArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Msgs.
     * @param {MsgDeleteManyArgs} args - Arguments to filter Msgs to delete.
     * @example
     * // Delete a few Msgs
     * const { count } = await prisma.msg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MsgDeleteManyArgs>(args?: SelectSubset<T, MsgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Msgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Msgs
     * const msg = await prisma.msg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MsgUpdateManyArgs>(args: SelectSubset<T, MsgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Msgs and returns the data updated in the database.
     * @param {MsgUpdateManyAndReturnArgs} args - Arguments to update many Msgs.
     * @example
     * // Update many Msgs
     * const msg = await prisma.msg.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Msgs and only return the `id`
     * const msgWithIdOnly = await prisma.msg.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MsgUpdateManyAndReturnArgs>(args: SelectSubset<T, MsgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Msg.
     * @param {MsgUpsertArgs} args - Arguments to update or create a Msg.
     * @example
     * // Update or create a Msg
     * const msg = await prisma.msg.upsert({
     *   create: {
     *     // ... data to create a Msg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Msg we want to update
     *   }
     * })
     */
    upsert<T extends MsgUpsertArgs>(args: SelectSubset<T, MsgUpsertArgs<ExtArgs>>): Prisma__MsgClient<$Result.GetResult<Prisma.$MsgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Msgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgCountArgs} args - Arguments to filter Msgs to count.
     * @example
     * // Count the number of Msgs
     * const count = await prisma.msg.count({
     *   where: {
     *     // ... the filter for the Msgs we want to count
     *   }
     * })
    **/
    count<T extends MsgCountArgs>(
      args?: Subset<T, MsgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Msg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MsgAggregateArgs>(args: Subset<T, MsgAggregateArgs>): Prisma.PrismaPromise<GetMsgAggregateType<T>>

    /**
     * Group by Msg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsgGroupByArgs} args - Group by arguments.
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
      T extends MsgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsgGroupByArgs['orderBy'] }
        : { orderBy?: MsgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MsgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Msg model
   */
  readonly fields: MsgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Msg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Msg model
   */
  interface MsgFieldRefs {
    readonly id: FieldRef<"Msg", 'String'>
    readonly name: FieldRef<"Msg", 'String'>
    readonly email: FieldRef<"Msg", 'String'>
    readonly phone: FieldRef<"Msg", 'String'>
    readonly content: FieldRef<"Msg", 'String'>
    readonly userId: FieldRef<"Msg", 'String'>
    readonly createdAt: FieldRef<"Msg", 'DateTime'>
    readonly updatedAt: FieldRef<"Msg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Msg findUnique
   */
  export type MsgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg findUniqueOrThrow
   */
  export type MsgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg findFirst
   */
  export type MsgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Msgs.
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Msgs.
     */
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * Msg findFirstOrThrow
   */
  export type MsgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msg to fetch.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Msgs.
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Msgs.
     */
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * Msg findMany
   */
  export type MsgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter, which Msgs to fetch.
     */
    where?: MsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Msgs to fetch.
     */
    orderBy?: MsgOrderByWithRelationInput | MsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Msgs.
     */
    cursor?: MsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Msgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Msgs.
     */
    skip?: number
    distinct?: MsgScalarFieldEnum | MsgScalarFieldEnum[]
  }

  /**
   * Msg create
   */
  export type MsgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * The data needed to create a Msg.
     */
    data: XOR<MsgCreateInput, MsgUncheckedCreateInput>
  }

  /**
   * Msg createMany
   */
  export type MsgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Msgs.
     */
    data: MsgCreateManyInput | MsgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Msg createManyAndReturn
   */
  export type MsgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * The data used to create many Msgs.
     */
    data: MsgCreateManyInput | MsgCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Msg update
   */
  export type MsgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * The data needed to update a Msg.
     */
    data: XOR<MsgUpdateInput, MsgUncheckedUpdateInput>
    /**
     * Choose, which Msg to update.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg updateMany
   */
  export type MsgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Msgs.
     */
    data: XOR<MsgUpdateManyMutationInput, MsgUncheckedUpdateManyInput>
    /**
     * Filter which Msgs to update
     */
    where?: MsgWhereInput
    /**
     * Limit how many Msgs to update.
     */
    limit?: number
  }

  /**
   * Msg updateManyAndReturn
   */
  export type MsgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * The data used to update Msgs.
     */
    data: XOR<MsgUpdateManyMutationInput, MsgUncheckedUpdateManyInput>
    /**
     * Filter which Msgs to update
     */
    where?: MsgWhereInput
    /**
     * Limit how many Msgs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Msg upsert
   */
  export type MsgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * The filter to search for the Msg to update in case it exists.
     */
    where: MsgWhereUniqueInput
    /**
     * In case the Msg found by the `where` argument doesn't exist, create a new Msg with this data.
     */
    create: XOR<MsgCreateInput, MsgUncheckedCreateInput>
    /**
     * In case the Msg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsgUpdateInput, MsgUncheckedUpdateInput>
  }

  /**
   * Msg delete
   */
  export type MsgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
    /**
     * Filter which Msg to delete.
     */
    where: MsgWhereUniqueInput
  }

  /**
   * Msg deleteMany
   */
  export type MsgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Msgs to delete
     */
    where?: MsgWhereInput
    /**
     * Limit how many Msgs to delete.
     */
    limit?: number
  }

  /**
   * Msg without action
   */
  export type MsgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Msg
     */
    select?: MsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Msg
     */
    omit?: MsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsgInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    type: 'type',
    year: 'year',
    mileage: 'mileage',
    colors: 'colors',
    price: 'price',
    desc: 'desc',
    imgs: 'imgs',
    userId: 'userId',
    isSold: 'isSold',
    isFeatured: 'isFeatured',
    isNew: 'isNew',
    features: 'features',
    location: 'location',
    fuelType: 'fuelType',
    transmission: 'transmission',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const SpecsScalarFieldEnum: {
    id: 'id',
    capacity: 'capacity',
    hp: 'hp',
    torque: 'torque',
    doors: 'doors',
    acceleration: 'acceleration',
    zeroToSixty: 'zeroToSixty',
    topSpeed: 'topSpeed',
    length: 'length',
    width: 'width',
    height: 'height',
    weight: 'weight',
    carId: 'carId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecsScalarFieldEnum = (typeof SpecsScalarFieldEnum)[keyof typeof SpecsScalarFieldEnum]


  export const SellerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img: 'img',
    phone: 'phone',
    email: 'email',
    website: 'website',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    carId: 'carId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum]


  export const TestReqScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestReqScalarFieldEnum = (typeof TestReqScalarFieldEnum)[keyof typeof TestReqScalarFieldEnum]


  export const MsgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    content: 'content',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MsgScalarFieldEnum = (typeof MsgScalarFieldEnum)[keyof typeof MsgScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CarType'
   */
  export type EnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType'>
    


  /**
   * Reference to a field of type 'CarType[]'
   */
  export type ListEnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType[]'>
    


  /**
   * Reference to a field of type 'Transmission'
   */
  export type EnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission'>
    


  /**
   * Reference to a field of type 'Transmission[]'
   */
  export type ListEnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission[]'>
    


  /**
   * Reference to a field of type 'ReqStatus'
   */
  export type EnumReqStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReqStatus'>
    


  /**
   * Reference to a field of type 'ReqStatus[]'
   */
  export type ListEnumReqStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReqStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    createdCars?: CarListRelationFilter
    savedCars?: CarListRelationFilter
    reqs?: TestReqListRelationFilter
    msgs?: MsgListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    createdCars?: CarOrderByRelationAggregateInput
    savedCars?: CarOrderByRelationAggregateInput
    reqs?: TestReqOrderByRelationAggregateInput
    msgs?: MsgOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    createdCars?: CarListRelationFilter
    savedCars?: CarListRelationFilter
    reqs?: TestReqListRelationFilter
    msgs?: MsgListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    name?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    type?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    year?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    colors?: StringNullableListFilter<"Car">
    price?: FloatFilter<"Car"> | number
    desc?: StringFilter<"Car"> | string
    imgs?: StringNullableListFilter<"Car">
    userId?: StringFilter<"Car"> | string
    isSold?: BoolNullableFilter<"Car"> | boolean | null
    isFeatured?: BoolNullableFilter<"Car"> | boolean | null
    isNew?: BoolNullableFilter<"Car"> | boolean | null
    features?: StringNullableListFilter<"Car">
    location?: StringFilter<"Car"> | string
    fuelType?: EnumFuelTypeNullableFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableFilter<"Car"> | $Enums.Transmission | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedBy?: UserListRelationFilter
    specs?: XOR<SpecsNullableScalarRelationFilter, SpecsWhereInput> | null
    seller?: XOR<SellerNullableScalarRelationFilter, SellerWhereInput> | null
    reqs?: TestReqListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    colors?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    imgs?: SortOrder
    userId?: SortOrder
    isSold?: SortOrderInput | SortOrder
    isFeatured?: SortOrderInput | SortOrder
    isNew?: SortOrderInput | SortOrder
    features?: SortOrder
    location?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    transmission?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    savedBy?: UserOrderByRelationAggregateInput
    specs?: SpecsOrderByWithRelationInput
    seller?: SellerOrderByWithRelationInput
    reqs?: TestReqOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    name?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    type?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    year?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    colors?: StringNullableListFilter<"Car">
    price?: FloatFilter<"Car"> | number
    desc?: StringFilter<"Car"> | string
    imgs?: StringNullableListFilter<"Car">
    userId?: StringFilter<"Car"> | string
    isSold?: BoolNullableFilter<"Car"> | boolean | null
    isFeatured?: BoolNullableFilter<"Car"> | boolean | null
    isNew?: BoolNullableFilter<"Car"> | boolean | null
    features?: StringNullableListFilter<"Car">
    location?: StringFilter<"Car"> | string
    fuelType?: EnumFuelTypeNullableFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableFilter<"Car"> | $Enums.Transmission | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedBy?: UserListRelationFilter
    specs?: XOR<SpecsNullableScalarRelationFilter, SpecsWhereInput> | null
    seller?: XOR<SellerNullableScalarRelationFilter, SellerWhereInput> | null
    reqs?: TestReqListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    colors?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    imgs?: SortOrder
    userId?: SortOrder
    isSold?: SortOrderInput | SortOrder
    isFeatured?: SortOrderInput | SortOrder
    isNew?: SortOrderInput | SortOrder
    features?: SortOrder
    location?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    transmission?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    name?: StringWithAggregatesFilter<"Car"> | string
    brand?: StringWithAggregatesFilter<"Car"> | string
    type?: EnumCarTypeWithAggregatesFilter<"Car"> | $Enums.CarType
    year?: IntWithAggregatesFilter<"Car"> | number
    mileage?: IntWithAggregatesFilter<"Car"> | number
    colors?: StringNullableListFilter<"Car">
    price?: FloatWithAggregatesFilter<"Car"> | number
    desc?: StringWithAggregatesFilter<"Car"> | string
    imgs?: StringNullableListFilter<"Car">
    userId?: StringWithAggregatesFilter<"Car"> | string
    isSold?: BoolNullableWithAggregatesFilter<"Car"> | boolean | null
    isFeatured?: BoolNullableWithAggregatesFilter<"Car"> | boolean | null
    isNew?: BoolNullableWithAggregatesFilter<"Car"> | boolean | null
    features?: StringNullableListFilter<"Car">
    location?: StringWithAggregatesFilter<"Car"> | string
    fuelType?: EnumFuelTypeNullableWithAggregatesFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableWithAggregatesFilter<"Car"> | $Enums.Transmission | null
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type SpecsWhereInput = {
    AND?: SpecsWhereInput | SpecsWhereInput[]
    OR?: SpecsWhereInput[]
    NOT?: SpecsWhereInput | SpecsWhereInput[]
    id?: StringFilter<"Specs"> | string
    capacity?: IntNullableFilter<"Specs"> | number | null
    hp?: IntNullableFilter<"Specs"> | number | null
    torque?: IntNullableFilter<"Specs"> | number | null
    doors?: IntNullableFilter<"Specs"> | number | null
    acceleration?: FloatNullableFilter<"Specs"> | number | null
    zeroToSixty?: FloatNullableFilter<"Specs"> | number | null
    topSpeed?: IntNullableFilter<"Specs"> | number | null
    length?: IntNullableFilter<"Specs"> | number | null
    width?: IntNullableFilter<"Specs"> | number | null
    height?: IntNullableFilter<"Specs"> | number | null
    weight?: IntNullableFilter<"Specs"> | number | null
    carId?: StringFilter<"Specs"> | string
    createdAt?: DateTimeFilter<"Specs"> | Date | string
    updatedAt?: DateTimeFilter<"Specs"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type SpecsOrderByWithRelationInput = {
    id?: SortOrder
    capacity?: SortOrderInput | SortOrder
    hp?: SortOrderInput | SortOrder
    torque?: SortOrderInput | SortOrder
    doors?: SortOrderInput | SortOrder
    acceleration?: SortOrderInput | SortOrder
    zeroToSixty?: SortOrderInput | SortOrder
    topSpeed?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type SpecsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    carId?: string
    AND?: SpecsWhereInput | SpecsWhereInput[]
    OR?: SpecsWhereInput[]
    NOT?: SpecsWhereInput | SpecsWhereInput[]
    capacity?: IntNullableFilter<"Specs"> | number | null
    hp?: IntNullableFilter<"Specs"> | number | null
    torque?: IntNullableFilter<"Specs"> | number | null
    doors?: IntNullableFilter<"Specs"> | number | null
    acceleration?: FloatNullableFilter<"Specs"> | number | null
    zeroToSixty?: FloatNullableFilter<"Specs"> | number | null
    topSpeed?: IntNullableFilter<"Specs"> | number | null
    length?: IntNullableFilter<"Specs"> | number | null
    width?: IntNullableFilter<"Specs"> | number | null
    height?: IntNullableFilter<"Specs"> | number | null
    weight?: IntNullableFilter<"Specs"> | number | null
    createdAt?: DateTimeFilter<"Specs"> | Date | string
    updatedAt?: DateTimeFilter<"Specs"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id" | "carId">

  export type SpecsOrderByWithAggregationInput = {
    id?: SortOrder
    capacity?: SortOrderInput | SortOrder
    hp?: SortOrderInput | SortOrder
    torque?: SortOrderInput | SortOrder
    doors?: SortOrderInput | SortOrder
    acceleration?: SortOrderInput | SortOrder
    zeroToSixty?: SortOrderInput | SortOrder
    topSpeed?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecsCountOrderByAggregateInput
    _avg?: SpecsAvgOrderByAggregateInput
    _max?: SpecsMaxOrderByAggregateInput
    _min?: SpecsMinOrderByAggregateInput
    _sum?: SpecsSumOrderByAggregateInput
  }

  export type SpecsScalarWhereWithAggregatesInput = {
    AND?: SpecsScalarWhereWithAggregatesInput | SpecsScalarWhereWithAggregatesInput[]
    OR?: SpecsScalarWhereWithAggregatesInput[]
    NOT?: SpecsScalarWhereWithAggregatesInput | SpecsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specs"> | string
    capacity?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    hp?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    torque?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    doors?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    acceleration?: FloatNullableWithAggregatesFilter<"Specs"> | number | null
    zeroToSixty?: FloatNullableWithAggregatesFilter<"Specs"> | number | null
    topSpeed?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    length?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    width?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    height?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    weight?: IntNullableWithAggregatesFilter<"Specs"> | number | null
    carId?: StringWithAggregatesFilter<"Specs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Specs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Specs"> | Date | string
  }

  export type SellerWhereInput = {
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    id?: StringFilter<"Seller"> | string
    name?: StringFilter<"Seller"> | string
    img?: StringNullableFilter<"Seller"> | string | null
    phone?: StringNullableFilter<"Seller"> | string | null
    email?: StringNullableFilter<"Seller"> | string | null
    website?: StringNullableFilter<"Seller"> | string | null
    address?: StringNullableFilter<"Seller"> | string | null
    city?: StringNullableFilter<"Seller"> | string | null
    state?: StringNullableFilter<"Seller"> | string | null
    country?: StringNullableFilter<"Seller"> | string | null
    postalCode?: StringNullableFilter<"Seller"> | string | null
    carId?: StringFilter<"Seller"> | string
    createdAt?: DateTimeFilter<"Seller"> | Date | string
    updatedAt?: DateTimeFilter<"Seller"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type SellerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    carId?: string
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    name?: StringFilter<"Seller"> | string
    img?: StringNullableFilter<"Seller"> | string | null
    phone?: StringNullableFilter<"Seller"> | string | null
    email?: StringNullableFilter<"Seller"> | string | null
    website?: StringNullableFilter<"Seller"> | string | null
    address?: StringNullableFilter<"Seller"> | string | null
    city?: StringNullableFilter<"Seller"> | string | null
    state?: StringNullableFilter<"Seller"> | string | null
    country?: StringNullableFilter<"Seller"> | string | null
    postalCode?: StringNullableFilter<"Seller"> | string | null
    createdAt?: DateTimeFilter<"Seller"> | Date | string
    updatedAt?: DateTimeFilter<"Seller"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id" | "carId">

  export type SellerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SellerCountOrderByAggregateInput
    _max?: SellerMaxOrderByAggregateInput
    _min?: SellerMinOrderByAggregateInput
  }

  export type SellerScalarWhereWithAggregatesInput = {
    AND?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    OR?: SellerScalarWhereWithAggregatesInput[]
    NOT?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seller"> | string
    name?: StringWithAggregatesFilter<"Seller"> | string
    img?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    email?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    website?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    address?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    city?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    state?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    country?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    carId?: StringWithAggregatesFilter<"Seller"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Seller"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Seller"> | Date | string
  }

  export type TestReqWhereInput = {
    AND?: TestReqWhereInput | TestReqWhereInput[]
    OR?: TestReqWhereInput[]
    NOT?: TestReqWhereInput | TestReqWhereInput[]
    id?: StringFilter<"TestReq"> | string
    carId?: StringFilter<"TestReq"> | string
    userId?: StringFilter<"TestReq"> | string
    date?: DateTimeFilter<"TestReq"> | Date | string
    status?: EnumReqStatusFilter<"TestReq"> | $Enums.ReqStatus
    createdAt?: DateTimeFilter<"TestReq"> | Date | string
    updatedAt?: DateTimeFilter<"TestReq"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestReqOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TestReqWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    carId_userId?: TestReqCarIdUserIdCompoundUniqueInput
    AND?: TestReqWhereInput | TestReqWhereInput[]
    OR?: TestReqWhereInput[]
    NOT?: TestReqWhereInput | TestReqWhereInput[]
    carId?: StringFilter<"TestReq"> | string
    userId?: StringFilter<"TestReq"> | string
    date?: DateTimeFilter<"TestReq"> | Date | string
    status?: EnumReqStatusFilter<"TestReq"> | $Enums.ReqStatus
    createdAt?: DateTimeFilter<"TestReq"> | Date | string
    updatedAt?: DateTimeFilter<"TestReq"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "carId_userId">

  export type TestReqOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestReqCountOrderByAggregateInput
    _max?: TestReqMaxOrderByAggregateInput
    _min?: TestReqMinOrderByAggregateInput
  }

  export type TestReqScalarWhereWithAggregatesInput = {
    AND?: TestReqScalarWhereWithAggregatesInput | TestReqScalarWhereWithAggregatesInput[]
    OR?: TestReqScalarWhereWithAggregatesInput[]
    NOT?: TestReqScalarWhereWithAggregatesInput | TestReqScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestReq"> | string
    carId?: StringWithAggregatesFilter<"TestReq"> | string
    userId?: StringWithAggregatesFilter<"TestReq"> | string
    date?: DateTimeWithAggregatesFilter<"TestReq"> | Date | string
    status?: EnumReqStatusWithAggregatesFilter<"TestReq"> | $Enums.ReqStatus
    createdAt?: DateTimeWithAggregatesFilter<"TestReq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestReq"> | Date | string
  }

  export type MsgWhereInput = {
    AND?: MsgWhereInput | MsgWhereInput[]
    OR?: MsgWhereInput[]
    NOT?: MsgWhereInput | MsgWhereInput[]
    id?: StringFilter<"Msg"> | string
    name?: StringFilter<"Msg"> | string
    email?: StringFilter<"Msg"> | string
    phone?: StringFilter<"Msg"> | string
    content?: StringFilter<"Msg"> | string
    userId?: StringFilter<"Msg"> | string
    createdAt?: DateTimeFilter<"Msg"> | Date | string
    updatedAt?: DateTimeFilter<"Msg"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MsgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiver?: UserOrderByWithRelationInput
  }

  export type MsgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MsgWhereInput | MsgWhereInput[]
    OR?: MsgWhereInput[]
    NOT?: MsgWhereInput | MsgWhereInput[]
    name?: StringFilter<"Msg"> | string
    email?: StringFilter<"Msg"> | string
    phone?: StringFilter<"Msg"> | string
    content?: StringFilter<"Msg"> | string
    userId?: StringFilter<"Msg"> | string
    createdAt?: DateTimeFilter<"Msg"> | Date | string
    updatedAt?: DateTimeFilter<"Msg"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MsgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MsgCountOrderByAggregateInput
    _max?: MsgMaxOrderByAggregateInput
    _min?: MsgMinOrderByAggregateInput
  }

  export type MsgScalarWhereWithAggregatesInput = {
    AND?: MsgScalarWhereWithAggregatesInput | MsgScalarWhereWithAggregatesInput[]
    OR?: MsgScalarWhereWithAggregatesInput[]
    NOT?: MsgScalarWhereWithAggregatesInput | MsgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Msg"> | string
    name?: StringWithAggregatesFilter<"Msg"> | string
    email?: StringWithAggregatesFilter<"Msg"> | string
    phone?: StringWithAggregatesFilter<"Msg"> | string
    content?: StringWithAggregatesFilter<"Msg"> | string
    userId?: StringWithAggregatesFilter<"Msg"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Msg"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Msg"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    createdCars?: CarCreateNestedManyWithoutUserInput
    savedCars?: CarCreateNestedManyWithoutSavedByInput
    reqs?: TestReqCreateNestedManyWithoutUserInput
    msgs?: MsgCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    createdCars?: CarUncheckedCreateNestedManyWithoutUserInput
    savedCars?: CarUncheckedCreateNestedManyWithoutSavedByInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutUserInput
    msgs?: MsgUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    createdCars?: CarUpdateManyWithoutUserNestedInput
    savedCars?: CarUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUpdateManyWithoutUserNestedInput
    msgs?: MsgUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    createdCars?: CarUncheckedUpdateManyWithoutUserNestedInput
    savedCars?: CarUncheckedUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutUserNestedInput
    msgs?: MsgUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatedCarsInput
    savedBy?: UserCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsCreateNestedOneWithoutCarInput
    seller?: SellerCreateNestedOneWithoutCarInput
    reqs?: TestReqCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    userId: string
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsUncheckedCreateNestedOneWithoutCarInput
    seller?: SellerUncheckedCreateNestedOneWithoutCarInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatedCarsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUpdateOneWithoutCarNestedInput
    seller?: SellerUpdateOneWithoutCarNestedInput
    reqs?: TestReqUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUncheckedUpdateOneWithoutCarNestedInput
    seller?: SellerUncheckedUpdateOneWithoutCarNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    userId: string
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecsCreateInput = {
    id?: string
    capacity?: number | null
    hp?: number | null
    torque?: number | null
    doors?: number | null
    acceleration?: number | null
    zeroToSixty?: number | null
    topSpeed?: number | null
    length?: number | null
    width?: number | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutSpecsInput
  }

  export type SpecsUncheckedCreateInput = {
    id?: string
    capacity?: number | null
    hp?: number | null
    torque?: number | null
    doors?: number | null
    acceleration?: number | null
    zeroToSixty?: number | null
    topSpeed?: number | null
    length?: number | null
    width?: number | null
    height?: number | null
    weight?: number | null
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    hp?: NullableIntFieldUpdateOperationsInput | number | null
    torque?: NullableIntFieldUpdateOperationsInput | number | null
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    acceleration?: NullableFloatFieldUpdateOperationsInput | number | null
    zeroToSixty?: NullableFloatFieldUpdateOperationsInput | number | null
    topSpeed?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSpecsNestedInput
  }

  export type SpecsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    hp?: NullableIntFieldUpdateOperationsInput | number | null
    torque?: NullableIntFieldUpdateOperationsInput | number | null
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    acceleration?: NullableFloatFieldUpdateOperationsInput | number | null
    zeroToSixty?: NullableFloatFieldUpdateOperationsInput | number | null
    topSpeed?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecsCreateManyInput = {
    id?: string
    capacity?: number | null
    hp?: number | null
    torque?: number | null
    doors?: number | null
    acceleration?: number | null
    zeroToSixty?: number | null
    topSpeed?: number | null
    length?: number | null
    width?: number | null
    height?: number | null
    weight?: number | null
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    hp?: NullableIntFieldUpdateOperationsInput | number | null
    torque?: NullableIntFieldUpdateOperationsInput | number | null
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    acceleration?: NullableFloatFieldUpdateOperationsInput | number | null
    zeroToSixty?: NullableFloatFieldUpdateOperationsInput | number | null
    topSpeed?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    hp?: NullableIntFieldUpdateOperationsInput | number | null
    torque?: NullableIntFieldUpdateOperationsInput | number | null
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    acceleration?: NullableFloatFieldUpdateOperationsInput | number | null
    zeroToSixty?: NullableFloatFieldUpdateOperationsInput | number | null
    topSpeed?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerCreateInput = {
    id?: string
    name: string
    img?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutSellerInput
  }

  export type SellerUncheckedCreateInput = {
    id?: string
    name: string
    img?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerCreateManyInput = {
    id?: string
    name: string
    img?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    carId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    carId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqCreateInput = {
    id?: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutReqsInput
    user: UserCreateNestedOneWithoutReqsInput
  }

  export type TestReqUncheckedCreateInput = {
    id?: string
    carId: string
    userId: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestReqUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutReqsNestedInput
    user?: UserUpdateOneRequiredWithoutReqsNestedInput
  }

  export type TestReqUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqCreateManyInput = {
    id?: string
    carId: string
    userId: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestReqUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsgCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutMsgsInput
  }

  export type MsgUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutMsgsNestedInput
  }

  export type MsgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsgCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type TestReqListRelationFilter = {
    every?: TestReqWhereInput
    some?: TestReqWhereInput
    none?: TestReqWhereInput
  }

  export type MsgListRelationFilter = {
    every?: MsgWhereInput
    some?: MsgWhereInput
    none?: MsgWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestReqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MsgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumFuelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableFilter<$PrismaModel> | $Enums.FuelType | null
  }

  export type EnumTransmissionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableFilter<$PrismaModel> | $Enums.Transmission | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SpecsNullableScalarRelationFilter = {
    is?: SpecsWhereInput | null
    isNot?: SpecsWhereInput | null
  }

  export type SellerNullableScalarRelationFilter = {
    is?: SellerWhereInput | null
    isNot?: SellerWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    colors?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    imgs?: SortOrder
    userId?: SortOrder
    isSold?: SortOrder
    isFeatured?: SortOrder
    isNew?: SortOrder
    features?: SortOrder
    location?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
    isSold?: SortOrder
    isFeatured?: SortOrder
    isNew?: SortOrder
    location?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
    isSold?: SortOrder
    isFeatured?: SortOrder
    isNew?: SortOrder
    location?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
  }

  export type EnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumFuelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
  }

  export type EnumTransmissionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Transmission | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransmissionNullableFilter<$PrismaModel>
    _max?: NestedEnumTransmissionNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type SpecsCountOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    hp?: SortOrder
    torque?: SortOrder
    doors?: SortOrder
    acceleration?: SortOrder
    zeroToSixty?: SortOrder
    topSpeed?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecsAvgOrderByAggregateInput = {
    capacity?: SortOrder
    hp?: SortOrder
    torque?: SortOrder
    doors?: SortOrder
    acceleration?: SortOrder
    zeroToSixty?: SortOrder
    topSpeed?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type SpecsMaxOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    hp?: SortOrder
    torque?: SortOrder
    doors?: SortOrder
    acceleration?: SortOrder
    zeroToSixty?: SortOrder
    topSpeed?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecsMinOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    hp?: SortOrder
    torque?: SortOrder
    doors?: SortOrder
    acceleration?: SortOrder
    zeroToSixty?: SortOrder
    topSpeed?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecsSumOrderByAggregateInput = {
    capacity?: SortOrder
    hp?: SortOrder
    torque?: SortOrder
    doors?: SortOrder
    acceleration?: SortOrder
    zeroToSixty?: SortOrder
    topSpeed?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SellerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SellerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SellerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReqStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReqStatus | EnumReqStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReqStatusFilter<$PrismaModel> | $Enums.ReqStatus
  }

  export type TestReqCarIdUserIdCompoundUniqueInput = {
    carId: string
    userId: string
  }

  export type TestReqCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestReqMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestReqMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReqStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReqStatus | EnumReqStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReqStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReqStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReqStatusFilter<$PrismaModel>
    _max?: NestedEnumReqStatusFilter<$PrismaModel>
  }

  export type MsgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MsgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MsgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutUserInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutSavedByInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput> | CarCreateWithoutSavedByInput[] | CarUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput | CarCreateOrConnectWithoutSavedByInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type TestReqCreateNestedManyWithoutUserInput = {
    create?: XOR<TestReqCreateWithoutUserInput, TestReqUncheckedCreateWithoutUserInput> | TestReqCreateWithoutUserInput[] | TestReqUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutUserInput | TestReqCreateOrConnectWithoutUserInput[]
    createMany?: TestReqCreateManyUserInputEnvelope
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
  }

  export type MsgCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MsgCreateWithoutReceiverInput, MsgUncheckedCreateWithoutReceiverInput> | MsgCreateWithoutReceiverInput[] | MsgUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MsgCreateOrConnectWithoutReceiverInput | MsgCreateOrConnectWithoutReceiverInput[]
    createMany?: MsgCreateManyReceiverInputEnvelope
    connect?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput> | CarCreateWithoutSavedByInput[] | CarUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput | CarCreateOrConnectWithoutSavedByInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type TestReqUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestReqCreateWithoutUserInput, TestReqUncheckedCreateWithoutUserInput> | TestReqCreateWithoutUserInput[] | TestReqUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutUserInput | TestReqCreateOrConnectWithoutUserInput[]
    createMany?: TestReqCreateManyUserInputEnvelope
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
  }

  export type MsgUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MsgCreateWithoutReceiverInput, MsgUncheckedCreateWithoutReceiverInput> | MsgCreateWithoutReceiverInput[] | MsgUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MsgCreateOrConnectWithoutReceiverInput | MsgCreateOrConnectWithoutReceiverInput[]
    createMany?: MsgCreateManyReceiverInputEnvelope
    connect?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CarUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutUserInput | CarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutUserInput | CarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarUpdateManyWithWhereWithoutUserInput | CarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput> | CarCreateWithoutSavedByInput[] | CarUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput | CarCreateOrConnectWithoutSavedByInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutSavedByInput | CarUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutSavedByInput | CarUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: CarUpdateManyWithWhereWithoutSavedByInput | CarUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type TestReqUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestReqCreateWithoutUserInput, TestReqUncheckedCreateWithoutUserInput> | TestReqCreateWithoutUserInput[] | TestReqUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutUserInput | TestReqCreateOrConnectWithoutUserInput[]
    upsert?: TestReqUpsertWithWhereUniqueWithoutUserInput | TestReqUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestReqCreateManyUserInputEnvelope
    set?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    disconnect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    delete?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    update?: TestReqUpdateWithWhereUniqueWithoutUserInput | TestReqUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestReqUpdateManyWithWhereWithoutUserInput | TestReqUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestReqScalarWhereInput | TestReqScalarWhereInput[]
  }

  export type MsgUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MsgCreateWithoutReceiverInput, MsgUncheckedCreateWithoutReceiverInput> | MsgCreateWithoutReceiverInput[] | MsgUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MsgCreateOrConnectWithoutReceiverInput | MsgCreateOrConnectWithoutReceiverInput[]
    upsert?: MsgUpsertWithWhereUniqueWithoutReceiverInput | MsgUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MsgCreateManyReceiverInputEnvelope
    set?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    disconnect?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    delete?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    connect?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    update?: MsgUpdateWithWhereUniqueWithoutReceiverInput | MsgUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MsgUpdateManyWithWhereWithoutReceiverInput | MsgUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MsgScalarWhereInput | MsgScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutUserInput | CarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutUserInput | CarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarUpdateManyWithWhereWithoutUserInput | CarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput> | CarCreateWithoutSavedByInput[] | CarUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput | CarCreateOrConnectWithoutSavedByInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutSavedByInput | CarUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutSavedByInput | CarUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: CarUpdateManyWithWhereWithoutSavedByInput | CarUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type TestReqUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestReqCreateWithoutUserInput, TestReqUncheckedCreateWithoutUserInput> | TestReqCreateWithoutUserInput[] | TestReqUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutUserInput | TestReqCreateOrConnectWithoutUserInput[]
    upsert?: TestReqUpsertWithWhereUniqueWithoutUserInput | TestReqUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestReqCreateManyUserInputEnvelope
    set?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    disconnect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    delete?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    update?: TestReqUpdateWithWhereUniqueWithoutUserInput | TestReqUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestReqUpdateManyWithWhereWithoutUserInput | TestReqUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestReqScalarWhereInput | TestReqScalarWhereInput[]
  }

  export type MsgUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MsgCreateWithoutReceiverInput, MsgUncheckedCreateWithoutReceiverInput> | MsgCreateWithoutReceiverInput[] | MsgUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MsgCreateOrConnectWithoutReceiverInput | MsgCreateOrConnectWithoutReceiverInput[]
    upsert?: MsgUpsertWithWhereUniqueWithoutReceiverInput | MsgUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MsgCreateManyReceiverInputEnvelope
    set?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    disconnect?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    delete?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    connect?: MsgWhereUniqueInput | MsgWhereUniqueInput[]
    update?: MsgUpdateWithWhereUniqueWithoutReceiverInput | MsgUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MsgUpdateManyWithWhereWithoutReceiverInput | MsgUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MsgScalarWhereInput | MsgScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type CarCreatecolorsInput = {
    set: string[]
  }

  export type CarCreateimgsInput = {
    set: string[]
  }

  export type CarCreatefeaturesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCreatedCarsInput = {
    create?: XOR<UserCreateWithoutCreatedCarsInput, UserUncheckedCreateWithoutCreatedCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCarsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSavedCarsInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput> | UserCreateWithoutSavedCarsInput[] | UserUncheckedCreateWithoutSavedCarsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput | UserCreateOrConnectWithoutSavedCarsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpecsCreateNestedOneWithoutCarInput = {
    create?: XOR<SpecsCreateWithoutCarInput, SpecsUncheckedCreateWithoutCarInput>
    connectOrCreate?: SpecsCreateOrConnectWithoutCarInput
    connect?: SpecsWhereUniqueInput
  }

  export type SellerCreateNestedOneWithoutCarInput = {
    create?: XOR<SellerCreateWithoutCarInput, SellerUncheckedCreateWithoutCarInput>
    connectOrCreate?: SellerCreateOrConnectWithoutCarInput
    connect?: SellerWhereUniqueInput
  }

  export type TestReqCreateNestedManyWithoutCarInput = {
    create?: XOR<TestReqCreateWithoutCarInput, TestReqUncheckedCreateWithoutCarInput> | TestReqCreateWithoutCarInput[] | TestReqUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutCarInput | TestReqCreateOrConnectWithoutCarInput[]
    createMany?: TestReqCreateManyCarInputEnvelope
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSavedCarsInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput> | UserCreateWithoutSavedCarsInput[] | UserUncheckedCreateWithoutSavedCarsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput | UserCreateOrConnectWithoutSavedCarsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpecsUncheckedCreateNestedOneWithoutCarInput = {
    create?: XOR<SpecsCreateWithoutCarInput, SpecsUncheckedCreateWithoutCarInput>
    connectOrCreate?: SpecsCreateOrConnectWithoutCarInput
    connect?: SpecsWhereUniqueInput
  }

  export type SellerUncheckedCreateNestedOneWithoutCarInput = {
    create?: XOR<SellerCreateWithoutCarInput, SellerUncheckedCreateWithoutCarInput>
    connectOrCreate?: SellerCreateOrConnectWithoutCarInput
    connect?: SellerWhereUniqueInput
  }

  export type TestReqUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<TestReqCreateWithoutCarInput, TestReqUncheckedCreateWithoutCarInput> | TestReqCreateWithoutCarInput[] | TestReqUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutCarInput | TestReqCreateOrConnectWithoutCarInput[]
    createMany?: TestReqCreateManyCarInputEnvelope
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
  }

  export type EnumCarTypeFieldUpdateOperationsInput = {
    set?: $Enums.CarType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarUpdatecolorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarUpdateimgsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CarUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType | null
  }

  export type NullableEnumTransmissionFieldUpdateOperationsInput = {
    set?: $Enums.Transmission | null
  }

  export type UserUpdateOneRequiredWithoutCreatedCarsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCarsInput, UserUncheckedCreateWithoutCreatedCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCarsInput
    upsert?: UserUpsertWithoutCreatedCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCarsInput, UserUpdateWithoutCreatedCarsInput>, UserUncheckedUpdateWithoutCreatedCarsInput>
  }

  export type UserUpdateManyWithoutSavedCarsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput> | UserCreateWithoutSavedCarsInput[] | UserUncheckedCreateWithoutSavedCarsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput | UserCreateOrConnectWithoutSavedCarsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedCarsInput | UserUpsertWithWhereUniqueWithoutSavedCarsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedCarsInput | UserUpdateWithWhereUniqueWithoutSavedCarsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedCarsInput | UserUpdateManyWithWhereWithoutSavedCarsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpecsUpdateOneWithoutCarNestedInput = {
    create?: XOR<SpecsCreateWithoutCarInput, SpecsUncheckedCreateWithoutCarInput>
    connectOrCreate?: SpecsCreateOrConnectWithoutCarInput
    upsert?: SpecsUpsertWithoutCarInput
    disconnect?: SpecsWhereInput | boolean
    delete?: SpecsWhereInput | boolean
    connect?: SpecsWhereUniqueInput
    update?: XOR<XOR<SpecsUpdateToOneWithWhereWithoutCarInput, SpecsUpdateWithoutCarInput>, SpecsUncheckedUpdateWithoutCarInput>
  }

  export type SellerUpdateOneWithoutCarNestedInput = {
    create?: XOR<SellerCreateWithoutCarInput, SellerUncheckedCreateWithoutCarInput>
    connectOrCreate?: SellerCreateOrConnectWithoutCarInput
    upsert?: SellerUpsertWithoutCarInput
    disconnect?: SellerWhereInput | boolean
    delete?: SellerWhereInput | boolean
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutCarInput, SellerUpdateWithoutCarInput>, SellerUncheckedUpdateWithoutCarInput>
  }

  export type TestReqUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestReqCreateWithoutCarInput, TestReqUncheckedCreateWithoutCarInput> | TestReqCreateWithoutCarInput[] | TestReqUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutCarInput | TestReqCreateOrConnectWithoutCarInput[]
    upsert?: TestReqUpsertWithWhereUniqueWithoutCarInput | TestReqUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestReqCreateManyCarInputEnvelope
    set?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    disconnect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    delete?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    update?: TestReqUpdateWithWhereUniqueWithoutCarInput | TestReqUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestReqUpdateManyWithWhereWithoutCarInput | TestReqUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestReqScalarWhereInput | TestReqScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSavedCarsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput> | UserCreateWithoutSavedCarsInput[] | UserUncheckedCreateWithoutSavedCarsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput | UserCreateOrConnectWithoutSavedCarsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedCarsInput | UserUpsertWithWhereUniqueWithoutSavedCarsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedCarsInput | UserUpdateWithWhereUniqueWithoutSavedCarsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedCarsInput | UserUpdateManyWithWhereWithoutSavedCarsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpecsUncheckedUpdateOneWithoutCarNestedInput = {
    create?: XOR<SpecsCreateWithoutCarInput, SpecsUncheckedCreateWithoutCarInput>
    connectOrCreate?: SpecsCreateOrConnectWithoutCarInput
    upsert?: SpecsUpsertWithoutCarInput
    disconnect?: SpecsWhereInput | boolean
    delete?: SpecsWhereInput | boolean
    connect?: SpecsWhereUniqueInput
    update?: XOR<XOR<SpecsUpdateToOneWithWhereWithoutCarInput, SpecsUpdateWithoutCarInput>, SpecsUncheckedUpdateWithoutCarInput>
  }

  export type SellerUncheckedUpdateOneWithoutCarNestedInput = {
    create?: XOR<SellerCreateWithoutCarInput, SellerUncheckedCreateWithoutCarInput>
    connectOrCreate?: SellerCreateOrConnectWithoutCarInput
    upsert?: SellerUpsertWithoutCarInput
    disconnect?: SellerWhereInput | boolean
    delete?: SellerWhereInput | boolean
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutCarInput, SellerUpdateWithoutCarInput>, SellerUncheckedUpdateWithoutCarInput>
  }

  export type TestReqUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestReqCreateWithoutCarInput, TestReqUncheckedCreateWithoutCarInput> | TestReqCreateWithoutCarInput[] | TestReqUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestReqCreateOrConnectWithoutCarInput | TestReqCreateOrConnectWithoutCarInput[]
    upsert?: TestReqUpsertWithWhereUniqueWithoutCarInput | TestReqUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestReqCreateManyCarInputEnvelope
    set?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    disconnect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    delete?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    connect?: TestReqWhereUniqueInput | TestReqWhereUniqueInput[]
    update?: TestReqUpdateWithWhereUniqueWithoutCarInput | TestReqUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestReqUpdateManyWithWhereWithoutCarInput | TestReqUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestReqScalarWhereInput | TestReqScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutSpecsInput = {
    create?: XOR<CarCreateWithoutSpecsInput, CarUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: CarCreateOrConnectWithoutSpecsInput
    connect?: CarWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarUpdateOneRequiredWithoutSpecsNestedInput = {
    create?: XOR<CarCreateWithoutSpecsInput, CarUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: CarCreateOrConnectWithoutSpecsInput
    upsert?: CarUpsertWithoutSpecsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutSpecsInput, CarUpdateWithoutSpecsInput>, CarUncheckedUpdateWithoutSpecsInput>
  }

  export type CarCreateNestedOneWithoutSellerInput = {
    create?: XOR<CarCreateWithoutSellerInput, CarUncheckedCreateWithoutSellerInput>
    connectOrCreate?: CarCreateOrConnectWithoutSellerInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutSellerNestedInput = {
    create?: XOR<CarCreateWithoutSellerInput, CarUncheckedCreateWithoutSellerInput>
    connectOrCreate?: CarCreateOrConnectWithoutSellerInput
    upsert?: CarUpsertWithoutSellerInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutSellerInput, CarUpdateWithoutSellerInput>, CarUncheckedUpdateWithoutSellerInput>
  }

  export type CarCreateNestedOneWithoutReqsInput = {
    create?: XOR<CarCreateWithoutReqsInput, CarUncheckedCreateWithoutReqsInput>
    connectOrCreate?: CarCreateOrConnectWithoutReqsInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReqsInput = {
    create?: XOR<UserCreateWithoutReqsInput, UserUncheckedCreateWithoutReqsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReqsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReqStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReqStatus
  }

  export type CarUpdateOneRequiredWithoutReqsNestedInput = {
    create?: XOR<CarCreateWithoutReqsInput, CarUncheckedCreateWithoutReqsInput>
    connectOrCreate?: CarCreateOrConnectWithoutReqsInput
    upsert?: CarUpsertWithoutReqsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutReqsInput, CarUpdateWithoutReqsInput>, CarUncheckedUpdateWithoutReqsInput>
  }

  export type UserUpdateOneRequiredWithoutReqsNestedInput = {
    create?: XOR<UserCreateWithoutReqsInput, UserUncheckedCreateWithoutReqsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReqsInput
    upsert?: UserUpsertWithoutReqsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReqsInput, UserUpdateWithoutReqsInput>, UserUncheckedUpdateWithoutReqsInput>
  }

  export type UserCreateNestedOneWithoutMsgsInput = {
    create?: XOR<UserCreateWithoutMsgsInput, UserUncheckedCreateWithoutMsgsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMsgsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMsgsNestedInput = {
    create?: XOR<UserCreateWithoutMsgsInput, UserUncheckedCreateWithoutMsgsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMsgsInput
    upsert?: UserUpsertWithoutMsgsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMsgsInput, UserUpdateWithoutMsgsInput>, UserUncheckedUpdateWithoutMsgsInput>
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
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumFuelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableFilter<$PrismaModel> | $Enums.FuelType | null
  }

  export type NestedEnumTransmissionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableFilter<$PrismaModel> | $Enums.Transmission | null
  }

  export type NestedEnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransmissionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Transmission | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransmissionNullableFilter<$PrismaModel>
    _max?: NestedEnumTransmissionNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumReqStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReqStatus | EnumReqStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReqStatusFilter<$PrismaModel> | $Enums.ReqStatus
  }

  export type NestedEnumReqStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReqStatus | EnumReqStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReqStatus[] | ListEnumReqStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReqStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReqStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReqStatusFilter<$PrismaModel>
    _max?: NestedEnumReqStatusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutUserInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsCreateNestedOneWithoutCarInput
    seller?: SellerCreateNestedOneWithoutCarInput
    reqs?: TestReqCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsUncheckedCreateNestedOneWithoutCarInput
    seller?: SellerUncheckedCreateNestedOneWithoutCarInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutUserInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput>
  }

  export type CarCreateManyUserInputEnvelope = {
    data: CarCreateManyUserInput | CarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutSavedByInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatedCarsInput
    specs?: SpecsCreateNestedOneWithoutCarInput
    seller?: SellerCreateNestedOneWithoutCarInput
    reqs?: TestReqCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutSavedByInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    userId: string
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specs?: SpecsUncheckedCreateNestedOneWithoutCarInput
    seller?: SellerUncheckedCreateNestedOneWithoutCarInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutSavedByInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
  }

  export type TestReqCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutReqsInput
  }

  export type TestReqUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestReqCreateOrConnectWithoutUserInput = {
    where: TestReqWhereUniqueInput
    create: XOR<TestReqCreateWithoutUserInput, TestReqUncheckedCreateWithoutUserInput>
  }

  export type TestReqCreateManyUserInputEnvelope = {
    data: TestReqCreateManyUserInput | TestReqCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MsgCreateWithoutReceiverInput = {
    id?: string
    name: string
    email: string
    phone: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsgUncheckedCreateWithoutReceiverInput = {
    id?: string
    name: string
    email: string
    phone: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsgCreateOrConnectWithoutReceiverInput = {
    where: MsgWhereUniqueInput
    create: XOR<MsgCreateWithoutReceiverInput, MsgUncheckedCreateWithoutReceiverInput>
  }

  export type MsgCreateManyReceiverInputEnvelope = {
    data: MsgCreateManyReceiverInput | MsgCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type CarUpsertWithWhereUniqueWithoutUserInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutUserInput, CarUncheckedUpdateWithoutUserInput>
    create: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput>
  }

  export type CarUpdateWithWhereUniqueWithoutUserInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutUserInput, CarUncheckedUpdateWithoutUserInput>
  }

  export type CarUpdateManyWithWhereWithoutUserInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutUserInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: StringFilter<"Car"> | string
    name?: StringFilter<"Car"> | string
    brand?: StringFilter<"Car"> | string
    type?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    year?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    colors?: StringNullableListFilter<"Car">
    price?: FloatFilter<"Car"> | number
    desc?: StringFilter<"Car"> | string
    imgs?: StringNullableListFilter<"Car">
    userId?: StringFilter<"Car"> | string
    isSold?: BoolNullableFilter<"Car"> | boolean | null
    isFeatured?: BoolNullableFilter<"Car"> | boolean | null
    isNew?: BoolNullableFilter<"Car"> | boolean | null
    features?: StringNullableListFilter<"Car">
    location?: StringFilter<"Car"> | string
    fuelType?: EnumFuelTypeNullableFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableFilter<"Car"> | $Enums.Transmission | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type CarUpsertWithWhereUniqueWithoutSavedByInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutSavedByInput, CarUncheckedUpdateWithoutSavedByInput>
    create: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
  }

  export type CarUpdateWithWhereUniqueWithoutSavedByInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutSavedByInput, CarUncheckedUpdateWithoutSavedByInput>
  }

  export type CarUpdateManyWithWhereWithoutSavedByInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutSavedByInput>
  }

  export type TestReqUpsertWithWhereUniqueWithoutUserInput = {
    where: TestReqWhereUniqueInput
    update: XOR<TestReqUpdateWithoutUserInput, TestReqUncheckedUpdateWithoutUserInput>
    create: XOR<TestReqCreateWithoutUserInput, TestReqUncheckedCreateWithoutUserInput>
  }

  export type TestReqUpdateWithWhereUniqueWithoutUserInput = {
    where: TestReqWhereUniqueInput
    data: XOR<TestReqUpdateWithoutUserInput, TestReqUncheckedUpdateWithoutUserInput>
  }

  export type TestReqUpdateManyWithWhereWithoutUserInput = {
    where: TestReqScalarWhereInput
    data: XOR<TestReqUpdateManyMutationInput, TestReqUncheckedUpdateManyWithoutUserInput>
  }

  export type TestReqScalarWhereInput = {
    AND?: TestReqScalarWhereInput | TestReqScalarWhereInput[]
    OR?: TestReqScalarWhereInput[]
    NOT?: TestReqScalarWhereInput | TestReqScalarWhereInput[]
    id?: StringFilter<"TestReq"> | string
    carId?: StringFilter<"TestReq"> | string
    userId?: StringFilter<"TestReq"> | string
    date?: DateTimeFilter<"TestReq"> | Date | string
    status?: EnumReqStatusFilter<"TestReq"> | $Enums.ReqStatus
    createdAt?: DateTimeFilter<"TestReq"> | Date | string
    updatedAt?: DateTimeFilter<"TestReq"> | Date | string
  }

  export type MsgUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MsgWhereUniqueInput
    update: XOR<MsgUpdateWithoutReceiverInput, MsgUncheckedUpdateWithoutReceiverInput>
    create: XOR<MsgCreateWithoutReceiverInput, MsgUncheckedCreateWithoutReceiverInput>
  }

  export type MsgUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MsgWhereUniqueInput
    data: XOR<MsgUpdateWithoutReceiverInput, MsgUncheckedUpdateWithoutReceiverInput>
  }

  export type MsgUpdateManyWithWhereWithoutReceiverInput = {
    where: MsgScalarWhereInput
    data: XOR<MsgUpdateManyMutationInput, MsgUncheckedUpdateManyWithoutReceiverInput>
  }

  export type MsgScalarWhereInput = {
    AND?: MsgScalarWhereInput | MsgScalarWhereInput[]
    OR?: MsgScalarWhereInput[]
    NOT?: MsgScalarWhereInput | MsgScalarWhereInput[]
    id?: StringFilter<"Msg"> | string
    name?: StringFilter<"Msg"> | string
    email?: StringFilter<"Msg"> | string
    phone?: StringFilter<"Msg"> | string
    content?: StringFilter<"Msg"> | string
    userId?: StringFilter<"Msg"> | string
    createdAt?: DateTimeFilter<"Msg"> | Date | string
    updatedAt?: DateTimeFilter<"Msg"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCars?: CarCreateNestedManyWithoutUserInput
    savedCars?: CarCreateNestedManyWithoutSavedByInput
    reqs?: TestReqCreateNestedManyWithoutUserInput
    msgs?: MsgCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCars?: CarUncheckedCreateNestedManyWithoutUserInput
    savedCars?: CarUncheckedCreateNestedManyWithoutSavedByInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutUserInput
    msgs?: MsgUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCars?: CarUpdateManyWithoutUserNestedInput
    savedCars?: CarUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUpdateManyWithoutUserNestedInput
    msgs?: MsgUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCars?: CarUncheckedUpdateManyWithoutUserNestedInput
    savedCars?: CarUncheckedUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutUserNestedInput
    msgs?: MsgUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutCreatedCarsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    savedCars?: CarCreateNestedManyWithoutSavedByInput
    reqs?: TestReqCreateNestedManyWithoutUserInput
    msgs?: MsgCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCreatedCarsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    savedCars?: CarUncheckedCreateNestedManyWithoutSavedByInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutUserInput
    msgs?: MsgUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCreatedCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCarsInput, UserUncheckedCreateWithoutCreatedCarsInput>
  }

  export type UserCreateWithoutSavedCarsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    createdCars?: CarCreateNestedManyWithoutUserInput
    reqs?: TestReqCreateNestedManyWithoutUserInput
    msgs?: MsgCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSavedCarsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    createdCars?: CarUncheckedCreateNestedManyWithoutUserInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutUserInput
    msgs?: MsgUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSavedCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
  }

  export type SpecsCreateWithoutCarInput = {
    id?: string
    capacity?: number | null
    hp?: number | null
    torque?: number | null
    doors?: number | null
    acceleration?: number | null
    zeroToSixty?: number | null
    topSpeed?: number | null
    length?: number | null
    width?: number | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecsUncheckedCreateWithoutCarInput = {
    id?: string
    capacity?: number | null
    hp?: number | null
    torque?: number | null
    doors?: number | null
    acceleration?: number | null
    zeroToSixty?: number | null
    topSpeed?: number | null
    length?: number | null
    width?: number | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecsCreateOrConnectWithoutCarInput = {
    where: SpecsWhereUniqueInput
    create: XOR<SpecsCreateWithoutCarInput, SpecsUncheckedCreateWithoutCarInput>
  }

  export type SellerCreateWithoutCarInput = {
    id?: string
    name: string
    img?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerUncheckedCreateWithoutCarInput = {
    id?: string
    name: string
    img?: string | null
    phone?: string | null
    email?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerCreateOrConnectWithoutCarInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutCarInput, SellerUncheckedCreateWithoutCarInput>
  }

  export type TestReqCreateWithoutCarInput = {
    id?: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReqsInput
  }

  export type TestReqUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestReqCreateOrConnectWithoutCarInput = {
    where: TestReqWhereUniqueInput
    create: XOR<TestReqCreateWithoutCarInput, TestReqUncheckedCreateWithoutCarInput>
  }

  export type TestReqCreateManyCarInputEnvelope = {
    data: TestReqCreateManyCarInput | TestReqCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedCarsInput = {
    update: XOR<UserUpdateWithoutCreatedCarsInput, UserUncheckedUpdateWithoutCreatedCarsInput>
    create: XOR<UserCreateWithoutCreatedCarsInput, UserUncheckedCreateWithoutCreatedCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCarsInput, UserUncheckedUpdateWithoutCreatedCarsInput>
  }

  export type UserUpdateWithoutCreatedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    savedCars?: CarUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUpdateManyWithoutUserNestedInput
    msgs?: MsgUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    savedCars?: CarUncheckedUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutUserNestedInput
    msgs?: MsgUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSavedCarsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSavedCarsInput, UserUncheckedUpdateWithoutSavedCarsInput>
    create: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSavedCarsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSavedCarsInput, UserUncheckedUpdateWithoutSavedCarsInput>
  }

  export type UserUpdateManyWithWhereWithoutSavedCarsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSavedCarsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SpecsUpsertWithoutCarInput = {
    update: XOR<SpecsUpdateWithoutCarInput, SpecsUncheckedUpdateWithoutCarInput>
    create: XOR<SpecsCreateWithoutCarInput, SpecsUncheckedCreateWithoutCarInput>
    where?: SpecsWhereInput
  }

  export type SpecsUpdateToOneWithWhereWithoutCarInput = {
    where?: SpecsWhereInput
    data: XOR<SpecsUpdateWithoutCarInput, SpecsUncheckedUpdateWithoutCarInput>
  }

  export type SpecsUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    hp?: NullableIntFieldUpdateOperationsInput | number | null
    torque?: NullableIntFieldUpdateOperationsInput | number | null
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    acceleration?: NullableFloatFieldUpdateOperationsInput | number | null
    zeroToSixty?: NullableFloatFieldUpdateOperationsInput | number | null
    topSpeed?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecsUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    hp?: NullableIntFieldUpdateOperationsInput | number | null
    torque?: NullableIntFieldUpdateOperationsInput | number | null
    doors?: NullableIntFieldUpdateOperationsInput | number | null
    acceleration?: NullableFloatFieldUpdateOperationsInput | number | null
    zeroToSixty?: NullableFloatFieldUpdateOperationsInput | number | null
    topSpeed?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerUpsertWithoutCarInput = {
    update: XOR<SellerUpdateWithoutCarInput, SellerUncheckedUpdateWithoutCarInput>
    create: XOR<SellerCreateWithoutCarInput, SellerUncheckedCreateWithoutCarInput>
    where?: SellerWhereInput
  }

  export type SellerUpdateToOneWithWhereWithoutCarInput = {
    where?: SellerWhereInput
    data: XOR<SellerUpdateWithoutCarInput, SellerUncheckedUpdateWithoutCarInput>
  }

  export type SellerUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqUpsertWithWhereUniqueWithoutCarInput = {
    where: TestReqWhereUniqueInput
    update: XOR<TestReqUpdateWithoutCarInput, TestReqUncheckedUpdateWithoutCarInput>
    create: XOR<TestReqCreateWithoutCarInput, TestReqUncheckedCreateWithoutCarInput>
  }

  export type TestReqUpdateWithWhereUniqueWithoutCarInput = {
    where: TestReqWhereUniqueInput
    data: XOR<TestReqUpdateWithoutCarInput, TestReqUncheckedUpdateWithoutCarInput>
  }

  export type TestReqUpdateManyWithWhereWithoutCarInput = {
    where: TestReqScalarWhereInput
    data: XOR<TestReqUpdateManyMutationInput, TestReqUncheckedUpdateManyWithoutCarInput>
  }

  export type CarCreateWithoutSpecsInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatedCarsInput
    savedBy?: UserCreateNestedManyWithoutSavedCarsInput
    seller?: SellerCreateNestedOneWithoutCarInput
    reqs?: TestReqCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutSpecsInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    userId: string
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCarsInput
    seller?: SellerUncheckedCreateNestedOneWithoutCarInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutSpecsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSpecsInput, CarUncheckedCreateWithoutSpecsInput>
  }

  export type CarUpsertWithoutSpecsInput = {
    update: XOR<CarUpdateWithoutSpecsInput, CarUncheckedUpdateWithoutSpecsInput>
    create: XOR<CarCreateWithoutSpecsInput, CarUncheckedCreateWithoutSpecsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutSpecsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutSpecsInput, CarUncheckedUpdateWithoutSpecsInput>
  }

  export type CarUpdateWithoutSpecsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatedCarsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCarsNestedInput
    seller?: SellerUpdateOneWithoutCarNestedInput
    reqs?: TestReqUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutSpecsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedCarsNestedInput
    seller?: SellerUncheckedUpdateOneWithoutCarNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutSellerInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatedCarsInput
    savedBy?: UserCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsCreateNestedOneWithoutCarInput
    reqs?: TestReqCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutSellerInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    userId: string
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsUncheckedCreateNestedOneWithoutCarInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutSellerInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSellerInput, CarUncheckedCreateWithoutSellerInput>
  }

  export type CarUpsertWithoutSellerInput = {
    update: XOR<CarUpdateWithoutSellerInput, CarUncheckedUpdateWithoutSellerInput>
    create: XOR<CarCreateWithoutSellerInput, CarUncheckedCreateWithoutSellerInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutSellerInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutSellerInput, CarUncheckedUpdateWithoutSellerInput>
  }

  export type CarUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatedCarsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUpdateOneWithoutCarNestedInput
    reqs?: TestReqUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUncheckedUpdateOneWithoutCarNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutReqsInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreatedCarsInput
    savedBy?: UserCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsCreateNestedOneWithoutCarInput
    seller?: SellerCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateWithoutReqsInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    userId: string
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCarsInput
    specs?: SpecsUncheckedCreateNestedOneWithoutCarInput
    seller?: SellerUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarCreateOrConnectWithoutReqsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutReqsInput, CarUncheckedCreateWithoutReqsInput>
  }

  export type UserCreateWithoutReqsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    createdCars?: CarCreateNestedManyWithoutUserInput
    savedCars?: CarCreateNestedManyWithoutSavedByInput
    msgs?: MsgCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutReqsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    createdCars?: CarUncheckedCreateNestedManyWithoutUserInput
    savedCars?: CarUncheckedCreateNestedManyWithoutSavedByInput
    msgs?: MsgUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutReqsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReqsInput, UserUncheckedCreateWithoutReqsInput>
  }

  export type CarUpsertWithoutReqsInput = {
    update: XOR<CarUpdateWithoutReqsInput, CarUncheckedUpdateWithoutReqsInput>
    create: XOR<CarCreateWithoutReqsInput, CarUncheckedCreateWithoutReqsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutReqsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutReqsInput, CarUncheckedUpdateWithoutReqsInput>
  }

  export type CarUpdateWithoutReqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatedCarsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUpdateOneWithoutCarNestedInput
    seller?: SellerUpdateOneWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutReqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUncheckedUpdateOneWithoutCarNestedInput
    seller?: SellerUncheckedUpdateOneWithoutCarNestedInput
  }

  export type UserUpsertWithoutReqsInput = {
    update: XOR<UserUpdateWithoutReqsInput, UserUncheckedUpdateWithoutReqsInput>
    create: XOR<UserCreateWithoutReqsInput, UserUncheckedCreateWithoutReqsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReqsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReqsInput, UserUncheckedUpdateWithoutReqsInput>
  }

  export type UserUpdateWithoutReqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    createdCars?: CarUpdateManyWithoutUserNestedInput
    savedCars?: CarUpdateManyWithoutSavedByNestedInput
    msgs?: MsgUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutReqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    createdCars?: CarUncheckedUpdateManyWithoutUserNestedInput
    savedCars?: CarUncheckedUpdateManyWithoutSavedByNestedInput
    msgs?: MsgUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutMsgsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    createdCars?: CarCreateNestedManyWithoutUserInput
    savedCars?: CarCreateNestedManyWithoutSavedByInput
    reqs?: TestReqCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMsgsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    createdCars?: CarUncheckedCreateNestedManyWithoutUserInput
    savedCars?: CarUncheckedCreateNestedManyWithoutSavedByInput
    reqs?: TestReqUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMsgsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMsgsInput, UserUncheckedCreateWithoutMsgsInput>
  }

  export type UserUpsertWithoutMsgsInput = {
    update: XOR<UserUpdateWithoutMsgsInput, UserUncheckedUpdateWithoutMsgsInput>
    create: XOR<UserCreateWithoutMsgsInput, UserUncheckedCreateWithoutMsgsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMsgsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMsgsInput, UserUncheckedUpdateWithoutMsgsInput>
  }

  export type UserUpdateWithoutMsgsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    createdCars?: CarUpdateManyWithoutUserNestedInput
    savedCars?: CarUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMsgsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    createdCars?: CarUncheckedUpdateManyWithoutUserNestedInput
    savedCars?: CarUncheckedUpdateManyWithoutSavedByNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateManyUserInput = {
    id?: string
    name: string
    brand: string
    type: $Enums.CarType
    year: number
    mileage: number
    colors?: CarCreatecolorsInput | string[]
    price: number
    desc: string
    imgs?: CarCreateimgsInput | string[]
    isSold?: boolean | null
    isFeatured?: boolean | null
    isNew?: boolean | null
    features?: CarCreatefeaturesInput | string[]
    location: string
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestReqCreateManyUserInput = {
    id?: string
    carId: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsgCreateManyReceiverInput = {
    id?: string
    name: string
    email: string
    phone: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUpdateOneWithoutCarNestedInput
    seller?: SellerUpdateOneWithoutCarNestedInput
    reqs?: TestReqUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedCarsNestedInput
    specs?: SpecsUncheckedUpdateOneWithoutCarNestedInput
    seller?: SellerUncheckedUpdateOneWithoutCarNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreatedCarsNestedInput
    specs?: SpecsUpdateOneWithoutCarNestedInput
    seller?: SellerUpdateOneWithoutCarNestedInput
    reqs?: TestReqUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: SpecsUncheckedUpdateOneWithoutCarNestedInput
    seller?: SellerUncheckedUpdateOneWithoutCarNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    type?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    colors?: CarUpdatecolorsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    imgs?: CarUpdateimgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    isSold?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    features?: CarUpdatefeaturesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutReqsNestedInput
  }

  export type TestReqUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsgUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsgUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsgUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqCreateManyCarInput = {
    id?: string
    userId: string
    date: Date | string
    status?: $Enums.ReqStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    createdCars?: CarUpdateManyWithoutUserNestedInput
    reqs?: TestReqUpdateManyWithoutUserNestedInput
    msgs?: MsgUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    createdCars?: CarUncheckedUpdateManyWithoutUserNestedInput
    reqs?: TestReqUncheckedUpdateManyWithoutUserNestedInput
    msgs?: MsgUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReqsNestedInput
  }

  export type TestReqUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReqUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReqStatusFieldUpdateOperationsInput | $Enums.ReqStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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