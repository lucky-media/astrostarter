// GraphQL utility functions
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

export async function client<T, V = Record<string, unknown>>(
  document: TypedDocumentNode<T, V>,
  variables?: V,
): Promise<T> {
  const response = await fetch("http://luckymediapi.test/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: document.loc?.source.body,
      variables,
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data;
}
