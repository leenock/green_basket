// pages/index.tsx
import Header from "../components/Header";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Navigation Bar */}
      <Header />
    </div>
  );
};

export default Home;
