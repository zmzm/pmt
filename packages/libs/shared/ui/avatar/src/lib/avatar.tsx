import JoyAvatar, { AvatarProps as JoyAvatarProps } from '@mui/joy/Avatar';
import { Skeleton } from '@task-flow/shared/ui/skeleton';

interface AvatarProps extends JoyAvatarProps {
  skeleton?: boolean;
}

export const Avatar = ({
  skeleton,
  children,
  src,
  ...otherProps
}: AvatarProps) => (
  <JoyAvatar {...otherProps} src={skeleton ? '' : src}>
    {skeleton ? <Skeleton loading /> : children}
  </JoyAvatar>
);
