import Image from "next/image";
import Link from "next/link";

import hero from "../public/hero.jpg";
import chefs from "../public/chefs.jpg";
import chefs2 from "../public/chefs2.jpg";

import customer1 from "../public/customer1.jpg";
import customer2 from "../public/customer2.jpg";
import customer3 from "../public/customer3.jpg";
import customer4 from "../public/customer4.jpg";

import TestimonialCard from "@/components/main/TestimonialCard";
import { Specials } from "@/components/main/Specials";

const testamonialData = [
  '"What a delightful find! Little Lemon captures the essence of Italian cuisine flawlessly. The pasta is handmade perfection, and the flavors are a symphony for the taste buds. The chefs truly have a gift for bringing the magic of Italy to the heart of Chicago. Highly recommend!"',
  '"Little Lemon is my go-to for a taste of Italy in Chicago. The atmosphere is cozy, the service is impeccable, and the food is nothing short of a masterpiece. I feel like I have been transported to a charming trattoria in Tuscany every time I dine here."',
  '"Antonio and Filipo are culinary maestros! The attention to detail in every bite is unparalleled. Little Lemon is not just a restaurant; it is a culinary journey through Italy. My taste buds have never been happier!"',
  '"Little Lemon is a hidden gem in Chicago! The flavors are as authentic as my grandmothers kitchen in Naples. Every dish tells a story of tradition and love. I am a regular, and I cannot get enough of the warmth and flavors this place brings to the table!"',
];

export default function Home() {
  return (
    <>
      <section className="flex justify-center pt-10 text-white bg-green">
        <div className="flex flex-col w-11/12 max-w-5xl gap-10 md:flex-row">
          <div className="flex-1">
            <h1 className="text-6xl font-normal text-yellow font-markazi">
              Little Lemon
            </h1>
            <h2 className="text-4xl font-markazi mb-7">Chicago</h2>
            <p className="mb-10 font-karla">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <Link
              href="/reservations"
              className="px-4 py-3 font-bold transition-colors border-4 rounded-full hover:bg-transparent hover:text-white border-yellow bg-yellow text-green font-karla"
            >
              Reserve a table
            </Link>
          </div>
          <Image
            className="self-center object-cover w-full -mb-16 h-96 rounded-2xl md:flex-1"
            width={700}
            height={700}
            src={hero}
            alt="bruschtta"
            priority
            placeholder="blur"
          />
        </div>
      </section>
      <section className="flex justify-center pb-8 pt-28 text-green">
        <div className="w-11/12 max-w-5xl">
          <div className="flex items-center justify-between mb-14">
            <h3 className="text-4xl font-markazi">This weeks specials!</h3>
            <Link
              href="/order"
              className="flex-shrink-0 px-4 py-3 font-bold transition-colors border-4 rounded-full hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
            >
              Online Menu
            </Link>
          </div>
          <Specials />
        </div>
      </section>
      <section className="flex justify-center py-10 text-white bg-green">
        <div className="w-11/12 max-w-5xl">
          <h3 className="mb-10 text-4xl font-markazi">
            What people say about us!
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <TestimonialCard img={customer1} name={"Marlon Harbinger"} data={testamonialData[0]} />
            <TestimonialCard img={customer2} name={"Amir Ashkan"} data={testamonialData[1]} />
            <TestimonialCard img={customer3} name={"Carol Beam"} data={testamonialData[2]} />
            <TestimonialCard img={customer4} name={"Jen Markazi"} data={testamonialData[3]} />
          </div>
        </div>
      </section>
      <section className="flex justify-center py-10">
        <div className="grid w-11/12 max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-6xl font-normal text-yellow font-markazi">
              Little Lemon
            </h1>
            <h2 className="text-4xl font-markazi mb-7 text-green">Chicago</h2>
            <p className="mb-10 font-karla text-green">
              Welcome to Little Lemon, a charming culinary haven nestled in the
              heart of Chicago, where our rich Italian roots and cherished
              family traditions are the secret ingredients to our success.
              Established with a passion for authentic flavors, our story began
              decades ago when our founders, inspired by the sun-kissed orchards
              of Italy, set out to bring a slice of Mediterranean magic to the
              Windy City. At Little Lemon, we take pride in our commitment to
              preserving the time-honored recipes passed down through
              generations. Our kitchen is a symphony of flavors orchestrated by
              our talented chefs, Antonio and Filipo, who infuse each dish with
              a touch of their culinary artistry. With a menu that pays homage
              to classic Italian fare, we invite you to embark on a gastronomic
              journey that transcends borders and brings the warmth of a true
              Italian family kitchen to your table. As you step into Little
              Lemon, you're not just dining; you're becoming a part of our
              story, where passion, tradition, and a zest for life converge to
              create an unforgettable dining experience. Join us and savor the
              essence of Little Lemon – where every meal is a celebration of
              family, heritage, and the timeless joy of good food.
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row lg:flex-col ">
            <Image
              src={chefs}
              alt="chefs"
              className="object-cover w-full sm:w-[48%] lg:w-full rounded-2xl"
            />
            <Image
              src={chefs2}
              alt="chefs"
              className="object-cover w-full sm:w-[48%] lg:w-full rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
