import '../styles/global.css'
import type { AppProps } from 'next/app'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { useEffect, useState } from 'react';
import Image from 'next/image';


const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return <>
    {!loading ?
      (<Component {...pageProps} />)
      :
      (<div className="relative flex items-center h-10 cursor-pointer my-auto">
        <div className="">
          <Image
            priority
            src="https://res.cloudinary.com/droskhnig/image/upload/v1658405870/Airbnb-logo_kbjs6w.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>)
    }
  </>
}

export default MyApp
