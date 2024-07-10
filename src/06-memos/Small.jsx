import { memo } from 'react';

// if CRA is being used you can import Reacy from 'react' and use React.memo() instead of memo()

export const Small = memo(({ value }) => {
  console.log('Small component rendered');

  return <small>{value}</small>;
});
