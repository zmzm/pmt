import { Skeleton } from '@task-flow/shared/ui/skeleton';

export function TableRowsSkeleton({
  rowsNum = 10,
  columnsNum = 5,
}: {
  rowsNum?: number;
  columnsNum?: number;
}) {
  return (
    <tbody>
      {[...Array(rowsNum)].map((_, rowIndex) => (
        <tr key={`row${rowIndex}`}>
          {[...Array(columnsNum)].map((_, columnIndex) => (
            <td key={`column_${columnIndex}`}>
              <Skeleton variant="text" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
