import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgtavola_01 from 'figma:asset/tavola-01.jpg';
import imgtavola_02 from 'figma:asset/tavola-02.jpg';
import imgtavola_03 from 'figma:asset/tavola-03.jpg';
import imgtavola_04 from 'figma:asset/tavola-04.jpg';
import imgtavola_05 from 'figma:asset/tavola-05.jpg';
import imgtavola_06 from 'figma:asset/tavola-06.jpg';
import imgtavola_07 from 'figma:asset/tavola-07.jpg';
import imgtavola_08 from 'figma:asset/tavola-08.jpg';
import imgtavola_09 from 'figma:asset/tavola-09.jpg';
import imgtavola_10 from 'figma:asset/tavola-10.jpg';
import imgtavola_11 from 'figma:asset/tavola-11.jpg';
import imgtavola_12 from 'figma:asset/tavola-12.jpg';
import imgtavola_13 from 'figma:asset/tavola-13.jpg';

import videoTavola01 from 'figma:asset/tavola-video-01.mp4';
import videoTavola02 from 'figma:asset/tavola-video-02.mp4';
import videoTavola03 from 'figma:asset/tavola-video-03.mp4';
import videoTavola04 from 'figma:asset/tavola-video-04.mp4';
import posterTavola01 from 'figma:asset/tavola-video-poster-01.jpg';
import posterTavola02 from 'figma:asset/tavola-video-poster-02.jpg';
import posterTavola03 from 'figma:asset/tavola-video-poster-03.jpg';
import posterTavola04 from 'figma:asset/tavola-video-poster-04.jpg';

const images = [
  { src: imgtavola_01, alt: 'Tavola 1' },
  { src: imgtavola_02, alt: 'Tavola 2' },
  { src: imgtavola_03, alt: 'Tavola 3' },
  { src: imgtavola_04, alt: 'Tavola 4' },
  { src: imgtavola_05, alt: 'Tavola 5' },
  { src: imgtavola_06, alt: 'Tavola 6' },
  { src: imgtavola_07, alt: 'Tavola 7' },
  { src: imgtavola_08, alt: 'Tavola 8' },
  { src: imgtavola_09, alt: 'Tavola 9' },
  { src: imgtavola_10, alt: 'Tavola 10' },
  { src: imgtavola_11, alt: 'Tavola 11' },
  { src: imgtavola_12, alt: 'Tavola 12' },
  { src: imgtavola_13, alt: 'Tavola 13' },
  { src: videoTavola01, alt: 'Tavola video 1', type: 'video' as const, poster: posterTavola01 },
  { src: videoTavola02, alt: 'Tavola video 2', type: 'video' as const, poster: posterTavola02 },
  { src: videoTavola03, alt: 'Tavola video 3', type: 'video' as const, poster: posterTavola03 },
  { src: videoTavola04, alt: 'Tavola video 4', type: 'video' as const, poster: posterTavola04 },
];

export default function TavolaDetail() {
  return <SimpleProjectDetail title="Tavola" category="Food" images={images} />;
}
