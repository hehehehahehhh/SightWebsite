import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgouttopasture_01 from 'figma:asset/outtopasture-01.jpg';
import imgouttopasture_02 from 'figma:asset/outtopasture-02.jpg';
import imgouttopasture_03 from 'figma:asset/outtopasture-03.jpg';
import imgouttopasture_04 from 'figma:asset/outtopasture-04.jpg';
import imgouttopasture_05 from 'figma:asset/outtopasture-05.jpg';
import imgouttopasture_06 from 'figma:asset/outtopasture-06.jpg';
import imgouttopasture_07 from 'figma:asset/outtopasture-07.jpg';
import imgouttopasture_08 from 'figma:asset/outtopasture-08.jpg';

const images = [
  { src: imgouttopasture_01, alt: 'Out to Pasture 1' },
  { src: imgouttopasture_02, alt: 'Out to Pasture 2' },
  { src: imgouttopasture_03, alt: 'Out to Pasture 3' },
  { src: imgouttopasture_04, alt: 'Out to Pasture 4' },
  { src: imgouttopasture_05, alt: 'Out to Pasture 5' },
  { src: imgouttopasture_06, alt: 'Out to Pasture 6' },
  { src: imgouttopasture_07, alt: 'Out to Pasture 7' },
  { src: imgouttopasture_08, alt: 'Out to Pasture 8' },
];

export default function OutToPastureDetail() {
  return <SimpleProjectDetail title="Out to Pasture" category="Exhibition" images={images} />;
}
