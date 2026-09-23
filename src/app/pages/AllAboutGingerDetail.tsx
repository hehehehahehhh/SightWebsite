import SimpleProjectDetail from '../components/SimpleProjectDetail';
import imgallaboutginger_01 from 'figma:asset/allaboutginger-01.jpg';
import imgallaboutginger_02 from 'figma:asset/allaboutginger-02.jpg';
import imgallaboutginger_03 from 'figma:asset/allaboutginger-03.jpg';
import imgallaboutginger_04 from 'figma:asset/allaboutginger-04.jpg';
import imgallaboutginger_05 from 'figma:asset/allaboutginger-05.jpg';
import imgallaboutginger_06 from 'figma:asset/allaboutginger-06.jpg';
import imgallaboutginger_07 from 'figma:asset/allaboutginger-07.jpg';
import imgallaboutginger_08 from 'figma:asset/allaboutginger-08.jpg';
import imgallaboutginger_09 from 'figma:asset/allaboutginger-09.jpg';
import imgallaboutginger_10 from 'figma:asset/allaboutginger-10.jpg';

const images = [
  { src: imgallaboutginger_01, alt: 'All About Ginger 1' },
  { src: imgallaboutginger_02, alt: 'All About Ginger 2' },
  { src: imgallaboutginger_03, alt: 'All About Ginger 3' },
  { src: imgallaboutginger_04, alt: 'All About Ginger 4' },
  { src: imgallaboutginger_05, alt: 'All About Ginger 5' },
  { src: imgallaboutginger_06, alt: 'All About Ginger 6' },
  { src: imgallaboutginger_07, alt: 'All About Ginger 7' },
  { src: imgallaboutginger_08, alt: 'All About Ginger 8' },
  { src: imgallaboutginger_09, alt: 'All About Ginger 9' },
  { src: imgallaboutginger_10, alt: 'All About Ginger 10' },
];

export default function AllAboutGingerDetail() {
  return <SimpleProjectDetail title="All About Ginger" category="Food" images={images} />;
}
