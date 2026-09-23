import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgprinceofpeace_01 from 'figma:asset/princeofpeace-01.jpg';
import imgprinceofpeace_02 from 'figma:asset/princeofpeace-02.jpg';
import imgprinceofpeace_03 from 'figma:asset/princeofpeace-03.jpg';
import imgprinceofpeace_04 from 'figma:asset/princeofpeace-04.jpg';
import imgprinceofpeace_05 from 'figma:asset/princeofpeace-05.jpg';
import imgprinceofpeace_06 from 'figma:asset/princeofpeace-06.jpg';
import imgprinceofpeace_07 from 'figma:asset/princeofpeace-07.jpg';
import imgprinceofpeace_08 from 'figma:asset/princeofpeace-08.jpg';

const images = [
  { src: imgprinceofpeace_01, alt: 'Prince of Peace 1' },
  { src: imgprinceofpeace_02, alt: 'Prince of Peace 2' },
  { src: imgprinceofpeace_03, alt: 'Prince of Peace 3' },
  { src: imgprinceofpeace_04, alt: 'Prince of Peace 4' },
  { src: imgprinceofpeace_05, alt: 'Prince of Peace 5' },
  { src: imgprinceofpeace_06, alt: 'Prince of Peace 6' },
  { src: imgprinceofpeace_07, alt: 'Prince of Peace 7' },
  { src: imgprinceofpeace_08, alt: 'Prince of Peace 8' },
];

export default function PrinceOfPeaceDetail() {
  return <SimpleProjectDetail title="Prince of Peace" category="Food" images={images} />;
}
