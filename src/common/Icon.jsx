import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

export function Icon({ icon, size, className = "icon" }) {
  return (
    <FontAwesomeIcon icon={icon} size={size} className={className} />
  );
}