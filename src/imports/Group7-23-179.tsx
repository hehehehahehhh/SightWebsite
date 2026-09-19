import img222222 from "figma:asset/1c9b40716a62c49dcd52fe32ed842c114dbb8c3d.jpg";
import img3333331 from "figma:asset/0d1bec016e8dcb93016ad8d91e9e9195dca70ec8.jpg";
import imgSample22 from "figma:asset/c29fc8733cc8d2d99da6b6dfe9d12464def696e5.jpg";
import { img222221, imgSample21 } from "./svg-afq3g";

interface GroupProps {
  onImageClick?: (index: number) => void;
}

function MaskGroup({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute left-[51%] top-0 w-[49%] h-[48%] cursor-pointer group" 
      data-name="Mask group"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img alt="Studio Image 2" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={img222222} />
      </div>
    </div>
  );
}

function MaskGroup1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute left-0 w-full h-[48%] cursor-pointer group" 
      style={{ top: 'calc(52% - 12px)' }}
      data-name="Mask group"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img alt="Studio Image 3" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgSample22} />
      </div>
    </div>
  );
}

export default function Group({ onImageClick }: GroupProps) {
  return (
    <div className="relative size-full">
      <MaskGroup onClick={() => onImageClick?.(1)} />
      <div 
        className="absolute h-[48%] left-0 top-0 w-[49%] cursor-pointer group" 
        data-name="333333 1"
        onClick={() => onImageClick?.(0)}
      >
        <img alt="Studio Image 1" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={img3333331} />
      </div>
      <MaskGroup1 onClick={() => onImageClick?.(2)} />
    </div>
  );
}