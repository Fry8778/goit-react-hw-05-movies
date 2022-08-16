import { memo } from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      height="90"
      width="90"
      radius="9"
      color=" rgba(47, 139, 245, 0.952)"
      ariaLabel="watch"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName="loader"
      visible={true}
    />
  );
};

export default memo(Loader);