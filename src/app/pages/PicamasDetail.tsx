import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgpicamas_01 from 'figma:asset/picamas-01.jpg';
import imgpicamas_02 from 'figma:asset/picamas-02.jpg';
import imgpicamas_03 from 'figma:asset/picamas-03.jpg';
import imgpicamas_04 from 'figma:asset/picamas-04.jpg';
import imgpicamas_05 from 'figma:asset/picamas-05.jpg';
import imgpicamas_06 from 'figma:asset/picamas-06.jpg';
import imgpicamas_07 from 'figma:asset/picamas-07.jpg';

const images = [
  { src: imgpicamas_01, alt: 'Picamas 1' },
  { src: imgpicamas_02, alt: 'Picamas 2' },
  { src: imgpicamas_03, alt: 'Picamas 3' },
  { src: imgpicamas_04, alt: 'Picamas 4' },
  { src: imgpicamas_05, alt: 'Picamas 5' },
  { src: imgpicamas_06, alt: 'Picamas 6' },
  { src: imgpicamas_07, alt: 'Picamas 7' },
];

export default function PicamasDetail() {
  return <SimpleProjectDetail title="Picamas" category="Food" images={images} />;
}
