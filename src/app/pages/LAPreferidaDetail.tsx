import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imglapreferida_01 from 'figma:asset/lapreferida-01.jpg';
import imglapreferida_02 from 'figma:asset/lapreferida-02.jpg';
import imglapreferida_03 from 'figma:asset/lapreferida-03.jpg';
import imglapreferida_04 from 'figma:asset/lapreferida-04.jpg';
import imglapreferida_05 from 'figma:asset/lapreferida-05.jpg';
import imglapreferida_06 from 'figma:asset/lapreferida-06.jpg';
import imglapreferida_07 from 'figma:asset/lapreferida-07.jpg';
import imglapreferida_08 from 'figma:asset/lapreferida-08.jpg';
import imglapreferida_09 from 'figma:asset/lapreferida-09.jpg';

const images = [
  { src: imglapreferida_01, alt: 'LA Preferida 1' },
  { src: imglapreferida_02, alt: 'LA Preferida 2' },
  { src: imglapreferida_03, alt: 'LA Preferida 3' },
  { src: imglapreferida_04, alt: 'LA Preferida 4' },
  { src: imglapreferida_05, alt: 'LA Preferida 5' },
  { src: imglapreferida_06, alt: 'LA Preferida 6' },
  { src: imglapreferida_07, alt: 'LA Preferida 7' },
  { src: imglapreferida_08, alt: 'LA Preferida 8' },
  { src: imglapreferida_09, alt: 'LA Preferida 9' },
];

export default function LAPreferidaDetail() {
  return <SimpleProjectDetail title="LA Preferida" category="Food" images={images} />;
}
