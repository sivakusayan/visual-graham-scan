// Disable rule for copy.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ModalLink from '../components/ModalLink';

const collisionLink = 'https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects#narrow-phase';
const motionLink = 'http://www.cs.columbia.edu/~allen/F17/NOTES/lozanogrown.pdf';
const imageLink = 'http://ceng503.cankaya.edu.tr/uploads/files/file/Digital%20Image%20Processing-6.pdf';
const delaunayLink = 'http://www.cis.upenn.edu/~jean/gbooks/new281-282.pdf';

const convexHullLink1 = 'https://medium.com/@harshitsikchi/convex-hulls-explained-baab662c4e94';
const convexHullLink2 = 'http://geomalgorithms.com/a10-_hull-1.html';
const grahamScanLink1 = 'https://courses.csail.mit.edu/6.006/spring11/rec/rec24.pdf';
const grahamScanLink2 = 'https://www.geeksforgeeks.org/convex-hull-set-2-graham-scan/';

const MODAL_COPY = {
  WHAT: (
    <p>
      The convex hull, is vaguely speaking, the collection of points that you need to ‘surround’ all the other points. It
      is perhaps bext explained with pictures.
    </p>
  ),
  WHY: (
    <p>
      The convex hull has a wide variety of applications, such as checking for <ModalLink href={collisionLink}>collisions</ModalLink>,{' '}<ModalLink href={motionLink}>robot motion planning</ModalLink>, and{' '}<ModalLink href={imageLink}>image processing</ModalLink>. One can also try to find the convex hull of a 3D point set, which gives us a nice way to compute <ModalLink href={delaunayLink}>Delaunay triangulations</ModalLink>.
    </p>
  ),
  CREDITS: null,
  RESOURCES: (
    <ul>
      <li><ModalLink href={convexHullLink1}>Convex Hulls Explained</ModalLink></li>
      <li><ModalLink href={convexHullLink2}>Convex Hull or a Planar Point Set</ModalLink></li>
      <li><ModalLink href={grahamScanLink1}>Graham Scan</ModalLink></li>
      <li><ModalLink href={grahamScanLink2}>Implementing the Graham Scan</ModalLink></li>
    </ul>
  ),
};

export default MODAL_COPY;
