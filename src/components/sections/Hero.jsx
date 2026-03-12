import RotatingText from "../ui/RotatingText";
import TextType from "../ui/TextType";
// import { DecryptedText } from '../ui/DecryptedText';
// import { TrueFocus } from '../ui/TrueFocus';

// interface HeroProps {
//   heroRef: React.RefObject<HTMLDivElement | null>;
// }

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
          <RotatingText
            texts={["John Wong", "Web Developer"]}
            rotationInterval={4000}
            staggerDuration={0.1}
            staggerFrom="center"
            mainClassName="justify-center"
          />
        </h1>
        <p className="mt-3 text-slate-300">
            <TextType 
                text={["Building responsive, animated React experiences."]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
            />
        </p>
      </div>
    </section>
  );
}
