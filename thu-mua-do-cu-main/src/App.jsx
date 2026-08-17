// App.jsx – Root component: ghép tất cả section + nút float Zalo
import Header  from './components/Header';
import Hero    from './components/Hero';
import Services from './components/Services';
import Process  from './components/Process';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import ZaloFloat from './components/ZaloFloat';
import ServicePage from './components/ServicePage';
import { getServicePageFromPath } from './data/servicePages';

export default function App() {
  const servicePage = getServicePageFromPath(window.location.pathname);

  return (
    <>
      <Header />
      <main>
        {servicePage ? (
          <>
            <ServicePage service={servicePage} />
            <Contact />
          </>
        ) : (
          <>
            <Hero />
            <Services />
            <Process />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <ZaloFloat phoneNumber="0938228764" />
    </>
  );
}
