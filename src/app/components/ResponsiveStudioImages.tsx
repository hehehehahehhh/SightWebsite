import imgSample22 from "figma:asset/c29fc8733cc8d2d99da6b6dfe9d12464def696e5.jpg";
import img3333331 from "figma:asset/0d1bec016e8dcb93016ad8d91e9e9195dca70ec8.jpg";
import { imgSample21 } from "../../imports/svg-zyqx9";

export default function ResponsiveStudioImages() {
  return (
    <div className="relative w-full" style={{ paddingBottom: '91.47%' /* 987/1079 aspect ratio */ }}>
      <div className="absolute inset-0">
        {/* Top Image - Frame */}
        <div 
          className="absolute left-0 w-full"
          style={{ 
            top: '0%',
            height: '48.43%' /* 478/987 */
          }}
        >
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip"
              style={{ 
                maskImage: `url('${imgSample21}')`,
                maskSize: '100% 100%',
                maskPosition: 'center',
                maskRepeat: 'no-repeat'
              }}
            >
              <img 
                alt="Studio interior" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                src={img3333331} 
              />
            </div>
          </div>
        </div>

        {/* Bottom Image - Frame1 */}
        <div 
          className="absolute left-0 w-full"
          style={{ 
            top: '51.57%', /* 509/987 */
            height: '48.43%' /* 478/987 */
          }}
        >
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip"
              style={{ 
                maskImage: `url('${imgSample21}')`,
                maskSize: '100% 100%',
                maskPosition: 'center',
                maskRepeat: 'no-repeat'
              }}
            >
              <img 
                alt="Studio backdrop" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                src={imgSample22} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
