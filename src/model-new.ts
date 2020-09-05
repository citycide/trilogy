import { Trilogy } from "."
// import { Hooks } from "./hooks"
import * as types from "./types"
import { normalizeSchema } from "./schema-helpers"

import type { Any } from "ts-toolbelt"

export default class Model <
  SchemaRaw extends types.Schema,
  ModelObject extends types.InferObjectShape<SchemaRaw> = types.InferObjectShape<SchemaRaw>,
  ModelObjectRaw = types.MarkOptionals<SchemaRaw, ModelObject>
> {
  object?: Any.Compute<ModelObject>
  schema: types.SchemaNormalized<SchemaRaw>

  constructor (
    public ctx: Trilogy,
    public name: string,
    schema: SchemaRaw,
    public options: types.ModelOptions = {}
  ) {
    // super()
    this.schema = normalizeSchema(schema, options)
  }

  create (object: ModelObjectRaw): ModelObject {
    return object as any as ModelObject
  }
}

const schema = {
  name: String,
  age: Number,
  favoriteNumber: {
    type: Number,
    defaultTo: 6
  },
  id: "increments" as const
}

type ModelSchema = typeof schema
type ModelObject = types.InferObjectShape<ModelSchema>
type ModelObjectRaw = types.MarkOptionals<ModelSchema>

const a = new Model(new Trilogy(""), "people", schema)

a.object?.age
a.schema
const result = a.create({
  age: 29,
  name: "bo",
  favoriteNumber: 6
})
