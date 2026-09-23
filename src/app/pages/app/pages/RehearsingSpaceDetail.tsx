import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgrehearsingspace_01 from 'figma:asset/rehearsingspace-01.jpg';
import imgrehearsingspace_02 from 'figma:asset/rehearsingspace-02.jpg';
import imgrehearsingspace_03 from 'figma:asset/rehearsingspace-03.jpg';
import imgrehearsingspace_04 from 'figma:asset/rehearsingspace-04.jpg';
import imgrehearsingspace_05 from 'figma:asset/rehearsingspace-05.jpg';
import imgrehearsingspace_06 from 'figma:asset/rehearsingspace-06.jpg';
import imgrehearsingspace_07 from 'figma:asset/rehearsingspace-07.jpg';
import imgrehearsingspace_08 from 'figma:asset/rehearsingspace-08.jpg';
import imgrehearsingspace_09 from 'figma:asset/rehearsingspace-09.jpg';
import imgrehearsingspace_10 from 'figma:asset/rehearsingspace-10.jpg';

const images = [
  { src: imgrehearsingspace_01, alt: 'Rehearsing Space 1' },
  { src: imgrehearsingspace_02, alt: 'Rehearsing Space 2' },
  { src: imgrehearsingspace_03, alt: 'Rehearsing Space 3' },
  { src: imgrehearsingspace_04, alt: 'Rehearsing Space 4' },
  { src: imgrehearsingspace_05, alt: 'Rehearsing Space 5' },
  { src: imgrehearsingspace_06, alt: 'Rehearsing Space 6' },
  { src: imgrehearsingspace_07, alt: 'Rehearsing Space 7' },
  { src: imgrehearsingspace_08, alt: 'Rehearsing Space 8' },
  { src: imgrehearsingspace_09, alt: 'Rehearsing Space 9' },
  { src: imgrehearsingspace_10, alt: 'Rehearsing Space 10' },
];

export default function RehearsingSpaceDetail() {
  return <SimpleProjectDetail title="Rehearsing Space" category="Exhibition" images={images} />;
}
