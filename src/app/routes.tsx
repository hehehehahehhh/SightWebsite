import { createHashRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import ObjectsDetail from "./pages/ObjectsDetail";
import PackagingDetail from "./pages/PackagingDetail";
import ThreeCatsDetail from "./pages/ThreeCatsDetail";
import YukiKumoDetail from "./pages/YukiKumoDetail";
import WushilandDetail from "./pages/WushilandDetail";
import MicroIngredientDetail from "./pages/MicroIngredientDetail";
import SumeiDetail from "./pages/SumeiDetail";
import GambleHouseDetail from "./pages/GambleHouseDetail";
import FengFengDetail from "./pages/FengFengDetail";
import ArtZenDetail from "./pages/ArtZenDetail";
import ECommerceDetail from "./pages/ECommerceDetail";
import IvoryDetail from "./pages/IvoryDetail";
import RoxyDetail from "./pages/RoxyDetail";
import ShirleyDetail from "./pages/ShirleyDetail";
import MankunDetail from "./pages/MankunDetail";
import TardesTaurinasDetail from "./pages/TardesTaurinasDetail";
import YouSeeButDoYouDetail from "./pages/YouSeeButDoYouDetail";
import LatencyDetail from "./pages/LatencyDetail";
import SometimesAJourneyDetail from "./pages/SometimesAJourneyDetail";
import ToneInTongueDetail from "./pages/ToneInTongueDetail";
import WeAreBecomingCloudsDetail from "./pages/WeAreBecomingCloudsDetail";
import ProxyChimerOracleDetail from "./pages/ProxyChimerOracleDetail";
import LemureaDetail from "./pages/LemureaDetail";
import DualityRunwayDetail from "./pages/DualityRunwayDetail";
import TwoGirlsOneTweezerDetail from "./pages/TwoGirlsOneTweezerDetail";
import UncoloredHoouseDetail from "./pages/UncoloredHoouseDetail";
import RehearsingSpaceDetail from "./pages/RehearsingSpaceDetail";
import OutToPastureDetail from "./pages/OutToPastureDetail";
import PrinceOfPeaceDetail from "./pages/PrinceOfPeaceDetail";
import EllyAmaiDetail from "./pages/EllyAmaiDetail";
import AllAboutGingerDetail from "./pages/AllAboutGingerDetail";
import LAPreferidaDetail from "./pages/LAPreferidaDetail";
import PicamasDetail from "./pages/PicamasDetail";
import RienDetail from "./pages/RienDetail";
import TavolaDetail from "./pages/TavolaDetail";
import RootLayout from "./components/RootLayout";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "objects",
        Component: ObjectsDetail,
      },
      {
        path: "packaging",
        Component: PackagingDetail,
      },
      {
        path: "threecats",
        Component: ThreeCatsDetail,
      },
      {
        path: "yukikumo",
        Component: YukiKumoDetail,
      },
      {
        path: "wushiland",
        Component: WushilandDetail,
      },
      {
        path: "microingredient",
        Component: MicroIngredientDetail,
      },
      {
        path: "sumei",
        Component: SumeiDetail,
      },
      {
        path: "gamblehouse",
        Component: GambleHouseDetail,
      },
      {
        path: "fengfeng",
        Component: FengFengDetail,
      },
      {
        path: "artzen",
        Component: ArtZenDetail,
      },
      {
        path: "ecommerce",
        Component: ECommerceDetail,
      },
      {
        path: "ivory",
        Component: IvoryDetail,
      },
      {
        path: "roxy",
        Component: RoxyDetail,
      },
      {
        path: "shirley",
        Component: ShirleyDetail,
      },
      {
        path: "mankun",
        Component: MankunDetail,
      },
      {
        path: "tardestaurinas",
        Component: TardesTaurinasDetail,
      },
      {
        path: "youseebutdoyou",
        Component: YouSeeButDoYouDetail,
      },
      {
        path: "latency",
        Component: LatencyDetail,
      },
      {
        path: "sometimesajourney",
        Component: SometimesAJourneyDetail,
      },
      {
        path: "tongueintongue",
        Component: ToneInTongueDetail,
      },
      {
        path: "weareclouds",
        Component: WeAreBecomingCloudsDetail,
      },
      {
        path: "proxychimeroracle",
        Component: ProxyChimerOracleDetail,
      },
      {
        path: "lemurea",
        Component: LemureaDetail,
      },
      {
        path: "dualityrunway",
        Component: DualityRunwayDetail,
      },
      {
        path: "twogirlsonetweezer",
        Component: TwoGirlsOneTweezerDetail,
      },
      {
        path: "uncoloredhoouse",
        Component: UncoloredHoouseDetail,
      },
      {
        path: "rehearsingspace",
        Component: RehearsingSpaceDetail,
      },
      {
        path: "outtopasture",
        Component: OutToPastureDetail,
      },
      {
        path: "princeofpeace",
        Component: PrinceOfPeaceDetail,
      },
      {
        path: "ellyamai",
        Component: EllyAmaiDetail,
      },
      {
        path: "allaboutginger",
        Component: AllAboutGingerDetail,
      },
      {
        path: "lapreferida",
        Component: LAPreferidaDetail,
      },
      {
        path: "picamas",
        Component: PicamasDetail,
      },
      {
        path: "rien",
        Component: RienDetail,
      },
      {
        path: "tavola",
        Component: TavolaDetail,
      },
    ],
  },
]);