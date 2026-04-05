// App.jsx – Root component: ghép tất cả section + nút float Zalo
import Header  from './components/Header';
import Hero    from './components/Hero';
import Services from './components/Services';
import Process  from './components/Process';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import ZaloFloat from './components/ZaloFloat';

export default function App() {
  return (
    <>
      {/* SEO: lang="vi" đã set trong index.html */}
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      {/* Nút Zalo cố định góc phải màn hình */}
      <ZaloFloat phoneNumber="0328296013" />
    </>
  );
}
