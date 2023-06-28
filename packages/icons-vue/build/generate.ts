import path from 'node:path'
import {readFile, writeFile} from 'node:fs/promises'
import { format } from 'prettier'
import camelcase from 'camelcase'
import {emptyDir, ensureDir} from 'fs-extra'
import type { BuiltInParserName } from 'prettier'
import glob from 'fast-glob'
import { pathComponents } from './paths'


const getName = (file: string) => {
  const filename = path.basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })
const transformToVueComponent = async (file: string) => {
  const content = await readFile(file, 'utf-8')
  const { filename, componentName } = getName(file)
  const vue = formatCode(
    `
<template>
${content}
</template>
<script lang="ts">
import type { DefineComponent } from 'vue'
export default ({
  name: "${componentName}",
}) as DefineComponent
</script>`,
    'vue'
  )
  writeFile(path.resolve(pathComponents, `${filename}.vue`), vue, 'utf-8')
}
const generateEntry = async (files: string[]) => {
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n')
  )
  await writeFile(path.resolve(pathComponents, 'index.ts'), code, 'utf-8')
}
const iconFiles = await glob('**/*.svg', { cwd: 'svg',absolute: true })
await ensureDir(pathComponents)
await emptyDir(pathComponents)
await Promise.all(iconFiles.map(icon=>transformToVueComponent(icon)))
await generateEntry(iconFiles)