// Disable rule since we are writing copy here.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ModalLink from '../components/ModalLink';

// WHY LINKS
const collisionLink = 'https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects#narrow-phase';
const motionLink = 'http://www.cs.columbia.edu/~allen/F17/NOTES/lozanogrown.pdf';
const imageLink = 'http://ceng503.cankaya.edu.tr/uploads/files/file/Digital%20Image%20Processing-6.pdf';
const delaunayLink = 'http://www.cis.upenn.edu/~jean/gbooks/new281-282.pdf';

// CREDIT LINKS
const cancelIcon = 'https://www.iconfinder.com/icons/103431/cancel_icon';
const playIcon = 'https://www.iconfinder.com/icons/211876/play_icon';
const randomIcon = 'https://www.iconfinder.com/icons/1608804/random_icon';
const nextIcon = 'https://www.iconfinder.com/icons/1564530/arrow_direction_next_share_icon';
const switchIcon = 'https://www.iconfinder.com/icons/352152/calls_swap_icon';

// LICENSES
const cc = 'https://creativecommons.org/licenses/by/3.0/';
const ccsa = 'https://creativecommons.org/licenses/by-sa/3.0/';
const mit = 'https://opensource.org/licenses/MIT';
const sil = 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL';

// RESOURCE LINKS
const convexHullLink1 = 'https://medium.com/@harshitsikchi/convex-hulls-explained-baab662c4e94';
const convexHullLink2 = 'http://geomalgorithms.com/a10-_hull-1.html';
const grahamScanLink1 = 'https://courses.csail.mit.edu/6.006/spring11/rec/rec24.pdf';
const grahamScanLink2 = 'https://www.geeksforgeeks.org/convex-hull-set-2-graham-scan/';

const MODAL_MARKUP = {
  WHAT: (
    <>
      <p className="modal-text">
        The convex hull, is vaguely speaking, the collection of points that you need to ‘surround’ all the other points. It
        is perhaps bext explained with pictures.
      </p>
      <svg className="modal-icon">
        <use xlinkHref="img/spritesheet.svg#convex-hull" />
      </svg>
    </>
  ),
  WHY: (
    <p className="modal-text">
      The convex hull has a wide variety of applications, such as checking for <ModalLink href={collisionLink}>collisions</ModalLink>,{' '}<ModalLink href={motionLink}>robot motion planning</ModalLink>, and{' '}<ModalLink href={imageLink}>image processing</ModalLink>. One can also try to find the convex hull of a 3D point set, which gives us a nice way to compute <ModalLink href={delaunayLink}>Delaunay triangulations</ModalLink>.
    </p>
  ),
  CREDITS: (
    <ul className="modal-list">
      <li className="modal-list__item modal-text">
        <ModalLink href={cancelIcon}>Cancel Icon</ModalLink> by PICOL, <ModalLink href={ccsa}>CC BY-SA 3.0 License</ModalLink>
      </li>
      <li className="modal-list__item modal-text">
        <ModalLink href={playIcon}>Play Icon</ModalLink> by Ionicons, <ModalLink href={mit}>MIT License</ModalLink>
      </li>
      <li className="modal-list__item modal-text">
        <ModalLink href={randomIcon}>Random Icon</ModalLink> by Dave Gandy, <ModalLink href={sil}>SIL Open Font License</ModalLink>
      </li>
      <li className="modal-list__item modal-text">
        <ModalLink href={nextIcon}>Next Icon</ModalLink> by Artyom Khamitov, <ModalLink href={cc}>CC BY 3.0 License</ModalLink>
      </li>
      <li className="modal-list__item modal-text">
        <ModalLink href={switchIcon}>Switch Icon</ModalLink> by Google, <ModalLink href={ccsa}>CC BY-SA 3.0 License</ModalLink>
      </li>
    </ul>
  ),
  RESOURCES: (
    <ul className="modal-list">
      <li className="modal-list__item modal-text"><ModalLink href={convexHullLink1}>Convex Hulls Explained</ModalLink></li>
      <li className="modal-list__item modal-text"><ModalLink href={convexHullLink2}>Convex Hull of a Planar Point Set</ModalLink></li>
      <li className="modal-list__item modal-text"><ModalLink href={grahamScanLink1}>Graham Scan</ModalLink></li>
      <li className="modal-list__item modal-text"><ModalLink href={grahamScanLink2}>Implementing the Graham Scan</ModalLink></li>
    </ul>
  ),
};

export default MODAL_MARKUP;
