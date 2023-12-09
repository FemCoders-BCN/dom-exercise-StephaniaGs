import { defineConfig } from 'vitest/config'
import { testEnvironment } from 'vitest'

export default defineConfig({
    testEnvironment: 'jsdom',
})