import { createDirectoryContents } from '../utils'
import fs from 'fs'
jest.mock('fs')

describe('Utility functions', () => {
    test('fs module being used in createDirectoryContents', () => {
      fs()
      expect(fs).toHaveBeenCalled()
    })
})
