import { FilterAltOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/joy';

export const FilterIcon = () => {
  return (
    <SvgIcon
      viewBox="0 0 16 16"
      sx={{
        height: 16,
        width: 16,
        color: (theme) => theme.vars.palette.text.primary,
        strokeWidth: 1,
      }}
    >
      <FilterAltOutlined />
    </SvgIcon>
  );
};
