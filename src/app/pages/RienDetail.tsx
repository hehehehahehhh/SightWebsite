import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgrien_01 from 'figma:asset/rien-01.jpg';
import imgrien_02 from 'figma:asset/rien-02.jpg';
import imgrien_03 from 'figma:asset/rien-03.jpg';
import imgrien_04 from 'figma:asset/rien-04.jpg';
import imgrien_05 from 'figma:asset/rien-05.jpg';
import imgrien_06 from 'figma:asset/rien-06.jpg';
import imgrien_07 from 'figma:asset/rien-07.jpg';
import imgrien_08 from 'figma:asset/rien-08.jpg';
import imgrien_09 from 'figma:asset/rien-09.jpg';
import imgrien_10 from 'figma:asset/rien-10.jpg';
import imgrien_11 from 'figma:asset/rien-11.jpg';

const images = [
  { src: imgrien_01, alt: 'RIEN 1' },
  { src: imgrien_02, alt: 'RIEN 2' },
  { src: imgrien_03, alt: 'RIEN 3' },
  { src: imgrien_04, alt: 'RIEN 4' },
  { src: imgrien_05, alt: 'RIEN 5' },
  { src: imgrien_06, alt: 'RIEN 6' },
  { src: imgrien_07, alt: 'RIEN 7' },
  { src: imgrien_08, alt: 'RIEN 8' },
  { src: imgrien_09, alt: 'RIEN 9' },
  { src: imgrien_10, alt: 'RIEN 10' },
  { src: imgrien_11, alt: 'RIEN 11' },
];

export default function RienDetail() {
  return <SimpleProjectDetail title="RIEN" category="Food" images={images} />;
}
