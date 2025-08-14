import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://luckymediapi.test/graphql",
  documents: ["src/**/*.graphql"],
  ignoreNoDocuments: true, // Don't fail if no documents are found
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        strictScalars: false, // More lenient for initial setup
        skipTypename: true,
        // Add some flexibility for Statamic schemas
        avoidOptionals: false,
        maybeValue: "T | null | undefined",
        scalars: {
          // Common Statamic scalars
          Date: "string",
          DateTime: "string",
          JSON: "Record<string, any>",
          Mixed: "any",
        },
        // Handle empty types
        allowEmptyTypes: true,
        // Make generated operations more usable
        dedupeOperationSuffix: true,
        omitOperationSuffix: false,
      },
    },
  },
  config: {
    // Global config to help with schema validation issues
    skipDocumentsValidation: true,
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
