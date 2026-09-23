import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imglemurea_01 from 'figma:asset/lemurea-01.jpg';
import imglemurea_02 from 'figma:asset/lemurea-02.jpg';
import imglemurea_03 from 'figma:asset/lemurea-03.jpg';
import imglemurea_04 from 'figma:asset/lemurea-04.jpg';
import imglemurea_05 from 'figma:asset/lemurea-05.jpg';
import imglemurea_06 from 'figma:asset/lemurea-06.jpg';
import imglemurea_07 from 'figma:asset/lemurea-07.jpg';
import imglemurea_08 from 'figma:asset/lemurea-08.jpg';
import imglemurea_09 from 'figma:asset/lemurea-09.jpg';
import imglemurea_10 from 'figma:asset/lemurea-10.jpg';
import imglemurea_11 from 'figma:asset/lemurea-11.jpg';

const images = [
  { src: imglemurea_01, alt: 'Lemurea 1' },
  { src: imglemurea_02, alt: 'Lemurea 2' },
  { src: imglemurea_03, alt: 'Lemurea 3' },
  { src: imglemurea_04, alt: 'Lemurea 4' },
  { src: imglemurea_05, alt: 'Lemurea 5' },
  { src: imglemurea_06, alt: 'Lemurea 6' },
  { src: imglemurea_07, alt: 'Lemurea 7' },
  { src: imglemurea_08, alt: 'Lemurea 8' },
  { src: imglemurea_09, alt: 'Lemurea 9' },
  { src: imglemurea_10, alt: 'Lemurea 10' },
  { src: imglemurea_11, alt: 'Lemurea 11' },
];

export default function LemureaDetail() {
  return <SimpleProjectDetail title="Lemurea" category="Fashion" images={images} />;
}
