import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface WorkProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const WorkSite = ({ backgroundImage, title, subtitle, peopleJoined }: WorkProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <WorkSite 
          backgroundImage="bg-bg-img-1"
          title="Iron Warehouse"
          subtitle="Kanbha"
          peopleJoined="Our business partners"
        />
        <WorkSite 
          backgroundImage="bg-bg-img-2"
          title="Transport"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Overwhelmed</strong> by the intricacies of iron logistics?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Embark on a seamless iron logistics journey with Shree Ram. Our dedicated team ensures precise handling at every stage. From warehousing to transportation, trust us as your reliable partner in the dynamic world of iron transport. Where can we lead you today?
          </p>
          <Image 
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp