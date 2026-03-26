import {
  WifiIcon,
  HomeModernIcon,
  TvIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  FireIcon,
} from "@heroicons/react/24/outline";

const facilities = [
  {
    id: 1,
    title: "Private Workspace",
    description: "Комфортное рабочее место для отдыха и работы.",
    icon: HomeModernIcon,
  },
  {
    id: 2,
    title: "Free Wifi",
    description: "Стабильный быстрый интернет во всех зонах.",
    icon: WifiIcon,
  },
  {
    id: 3,
    title: "Parking Area",
    description: "Удобная парковка рядом с гостиницей.",
    icon: BuildingOffice2Icon,
  },
  {
    id: 4,
    title: "Breakfast",
    description: "Свежий завтрак каждое утро для гостей.",
    icon: FireIcon,
  },
  {
    id: 5,
    title: "TV Room",
    description: "Современная зона отдыха с телевизором.",
    icon: TvIcon,
  },
  {
    id: 6,
    title: "Cleaning Service",
    description: "Чистота и порядок каждый день.",
    icon: SparklesIcon,
  },
];

export default facilities;
