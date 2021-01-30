import { dirname } from "path"
import { mkdirSync, readFileSync, writeFileSync } from "fs"

import { SqlJs } from "sql.js/module"
import * as pool from "generic-pool"

import { Trilogy } from "."
import { LooseObject } from "./types/utils"

export type SqlJsResponse = Array<{
  columns: string[]
  values: unknown[][]
}>

export const parseResponse = (
  contents: SqlJsResponse
): LooseObject[] => {
  if (contents?.length < 1) return []

  const [{ columns, values }] = contents
  const results = []

  for (let i = 0; i < values.length; i++) {
    const line: LooseObject = {}

    for (let j = 0; j < columns.length; j++) {
      line[columns[j]] = values[i][j]
    }

    results.push(line)
  }

  return results
}

export async function readDatabase (instance: Trilogy): Promise<SqlJs.Database> {
  const name = instance.options.connection.filename

  const init = await import("sql.js")
  const SQL = await init()

  if (name === ":memory:") {
    return new SQL.Database()
  }

  let client

  try {
    mkdirSync(dirname(name), { recursive: true })
    const file = readFileSync(name)
    client = new SQL.Database(file)
  } catch (e) {
    if (e.code === "ENOENT") {
      client = new SQL.Database()
      writeDatabase(instance, client)
    } else {
      throw e
    }
  }

  return client
}

export const writeDatabase = (instance: Trilogy, db: SqlJs.Database): void => {
  const name = instance.options.connection.filename
  if (name === ":memory:") return

  mkdirSync(dirname(name), { recursive: true })
  writeFileSync(name, db.export(), { mode: parseInt("0777", 8) })
}

export function pureConnect (instance: Trilogy): pool.Pool<SqlJs.Database> {
  return pool.createPool({
    async create () {
      return readDatabase(instance)
    },

    async destroy (client: SqlJs.Database): Promise<void> {
      client.close()
    }
  }, { min: 1, max: 1 })
}
