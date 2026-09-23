import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imguncoloredhoouse_01 from 'figma:asset/uncoloredhoouse-01.jpg';
import imguncoloredhoouse_02 from 'figma:asset/uncoloredhoouse-02.jpg';
import imguncoloredhoouse_03 from 'figma:asset/uncoloredhoouse-03.jpg';
import imguncoloredhoouse_04 from 'figma:asset/uncoloredhoouse-04.jpg';
import imguncoloredhoouse_05 from 'figma:asset/uncoloredhoouse-05.jpg';
import imguncoloredhoouse_06 from 'figma:asset/uncoloredhoouse-06.jpg';
import imguncoloredhoouse_07 from 'figma:asset/uncoloredhoouse-07.jpg';
import imguncoloredhoouse_08 from 'figma:asset/uncoloredhoouse-08.jpg';

const images = [
  { src: imguncoloredhoouse_01, alt: 'Uncolored Hoouse 1' },
  { src: imguncoloredhoouse_02, alt: 'Uncolored Hoouse 2' },
  { src: imguncoloredhoouse_03, alt: 'Uncolored Hoouse 3' },
  { src: imguncoloredhoouse_04, alt: 'Uncolored Hoouse 4' },
  { src: imguncoloredhoouse_05, alt: 'Uncolored Hoouse 5' },
  { src: imguncoloredhoouse_06, alt: 'Uncolored Hoouse 6' },
  { src: imguncoloredhoouse_07, alt: 'Uncolored Hoouse 7' },
  { src: imguncoloredhoouse_08, alt: 'Uncolored Hoouse 8' },
];

export default function UncoloredHoouseDetail() {
  return <SimpleProjectDetail title="Uncolored Hoouse" category="Exhibition" images={images} />;
}
