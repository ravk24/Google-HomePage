import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import google_img from "../../public/images/google.svg";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={google_img}
          alt="google.com"
          width={300}
          height={100}
          priority
        />
        <HomeSearch />
      </div>
    </div>
  );
}
