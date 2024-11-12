import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default { 
  ignorePatterns: ['dist'],
  extends: [
    js.configs.recommended,
    "plugin:react-hooks/recommended", 
    ...tseslint.configs.recommended
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
  rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off"
    },
}
