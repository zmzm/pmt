export function filterStringValues(
  values: string[] | undefined,
  searchTerm: string
) {
  if (!values) {
    return [];
  }

  return values.filter((collectionValue) =>
    String(collectionValue)
      .toLowerCase()
      .includes(String(searchTerm).toLowerCase())
  );
}
