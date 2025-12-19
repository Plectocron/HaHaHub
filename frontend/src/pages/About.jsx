import Header from "../components/layouts/Header.jsx";
import Card from "../components/common/Card.jsx";
import Footer from "../components/layouts/Footer.jsx";

function About() {
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center flex-grow">
        <Card
          flex="flex flex-col justify-evenly items-start"
          bgColor="bg-dark-blue"
          textColor="text-white"
          borderThickness="border"
          borderColor="border-slate"
          maxWidth="max-w-3xl"
          borderRadius="rounded-[2.3rem]"
          orbs={{
            topColor: "bg-purple-500/10",
            bottomColor: "bg-purple-500/10",
          }}
        >
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-2xl font-bold">About HaHaHub</h1>
            <p className="text-lg">A simple joke delivery app built to demonstrate modern web development.</p>            
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-xl">Built With:</h2>
            <p className="text-md">React • Vite • Tailwind CSS • React Router • Node.js • Express • Official Joke API</p>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-2xl font-bold">What It Demonstrates</h2>
            <p className="text-md">- API integration and asynchronous data fetching</p>
            <p className="text-md">- Modern React patterns with hooks</p>
            <p className="text-md">- Responsive design with Tailwind CSS</p>
            <p className="text-md">- Client-side routing</p>
            <p className="text-md">- Full-stack architecture (React frontend + Node.js backend)</p>
            <p className="text-md">- Component-based architecture with reusable UI elements</p>
          </div>
          <p className="text-gray-500">HaHaHub is a portfolio project showcasing front-end and back-end development skills.</p>
        </Card>
      </div>
      <Footer
        bgClass="bg-dark-blue"
        textColor="text-gray-400"
        borderThickness="border"
        borderColor="border-slate"
        className="flex justify-center items-center"
      >
        © {new Date().getFullYear()} HaHaHub. Powered by Official Joke API.
      </Footer>
    </div>
  );
}

export default About;