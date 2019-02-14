/**
 *
 * Asynchronously loads the component for EmailPreview
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
