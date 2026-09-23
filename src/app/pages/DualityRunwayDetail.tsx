import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgdualityrunway_01 from 'figma:asset/dualityrunway-01.jpg';
import imgdualityrunway_02 from 'figma:asset/dualityrunway-02.jpg';
import imgdualityrunway_03 from 'figma:asset/dualityrunway-03.jpg';
import imgdualityrunway_04 from 'figma:asset/dualityrunway-04.jpg';
import imgdualityrunway_05 from 'figma:asset/dualityrunway-05.jpg';
import imgdualityrunway_06 from 'figma:asset/dualityrunway-06.jpg';
import imgdualityrunway_07 from 'figma:asset/dualityrunway-07.jpg';
import imgdualityrunway_08 from 'figma:asset/dualityrunway-08.jpg';
import imgdualityrunway_09 from 'figma:asset/dualityrunway-09.jpg';

const images = [
  { src: imgdualityrunway_01, alt: 'Duality Runway 1' },
  { src: imgdualityrunway_02, alt: 'Duality Runway 2' },
  { src: imgdualityrunway_03, alt: 'Duality Runway 3' },
  { src: imgdualityrunway_04, alt: 'Duality Runway 4' },
  { src: imgdualityrunway_05, alt: 'Duality Runway 5' },
  { src: imgdualityrunway_06, alt: 'Duality Runway 6' },
  { src: imgdualityrunway_07, alt: 'Duality Runway 7' },
  { src: imgdualityrunway_08, alt: 'Duality Runway 8' },
  { src: imgdualityrunway_09, alt: 'Duality Runway 9' },
];

export default function DualityRunwayDetail() {
  return <SimpleProjectDetail title="Duality Runway" category="Fashion" images={images} />;
}
