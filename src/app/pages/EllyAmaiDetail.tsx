import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgellyamai_01 from 'figma:asset/ellyamai-01.jpg';
import imgellyamai_02 from 'figma:asset/ellyamai-02.jpg';
import imgellyamai_03 from 'figma:asset/ellyamai-03.jpg';
import imgellyamai_04 from 'figma:asset/ellyamai-04.jpg';
import imgellyamai_05 from 'figma:asset/ellyamai-05.jpg';
import imgellyamai_06 from 'figma:asset/ellyamai-06.jpg';
import imgellyamai_07 from 'figma:asset/ellyamai-07.jpg';
import imgellyamai_08 from 'figma:asset/ellyamai-08.jpg';
import imgellyamai_09 from 'figma:asset/ellyamai-09.jpg';
import imgellyamai_10 from 'figma:asset/ellyamai-10.jpg';
import imgellyamai_11 from 'figma:asset/ellyamai-11.jpg';
import imgellyamai_12 from 'figma:asset/ellyamai-12.jpg';
import imgellyamai_13 from 'figma:asset/ellyamai-13.jpg';

const images = [
  { src: imgellyamai_01, alt: 'Elly Amai 1' },
  { src: imgellyamai_02, alt: 'Elly Amai 2' },
  { src: imgellyamai_03, alt: 'Elly Amai 3' },
  { src: imgellyamai_04, alt: 'Elly Amai 4' },
  { src: imgellyamai_05, alt: 'Elly Amai 5' },
  { src: imgellyamai_06, alt: 'Elly Amai 6' },
  { src: imgellyamai_07, alt: 'Elly Amai 7' },
  { src: imgellyamai_08, alt: 'Elly Amai 8' },
  { src: imgellyamai_09, alt: 'Elly Amai 9' },
  { src: imgellyamai_10, alt: 'Elly Amai 10' },
  { src: imgellyamai_11, alt: 'Elly Amai 11' },
  { src: imgellyamai_12, alt: 'Elly Amai 12' },
  { src: imgellyamai_13, alt: 'Elly Amai 13' },
];

export default function EllyAmaiDetail() {
  return <SimpleProjectDetail title="Elly Amai" category="Food" images={images} />;
}
