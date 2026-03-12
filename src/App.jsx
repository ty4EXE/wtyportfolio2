import SmoothScroll from "./components/layout/SmoothScroll";
import LightRays from "./components/ui/LightRays";
import Landing from "./pages/landing";

function App() {
  return (

    <SmoothScroll>
      <div className="fixed inset-0 w-full h-full -z-10">
      <LightRays
          raysOrigin="right"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={4}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
      />
      </div>
        

      <Landing />

    </SmoothScroll>
  );
}


export default App;

