import JoyBreadcrumbs, { BreadcrumbsProps } from '@mui/joy/Breadcrumbs';

export const Breadcrumbs = ({ children, ...rest }: BreadcrumbsProps) => (
  <JoyBreadcrumbs {...rest}>{children}</JoyBreadcrumbs>
);
