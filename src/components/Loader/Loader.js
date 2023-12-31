import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => (
  <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{}}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor="#c0efff"
    color="#4caf50"
  />
);
