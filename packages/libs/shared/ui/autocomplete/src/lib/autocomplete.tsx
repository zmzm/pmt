import JoyAutocomplete, { AutocompleteProps } from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';

export { AutocompleteOption };

export function Autocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return <JoyAutocomplete {...props} />;
}

export default Autocomplete;
