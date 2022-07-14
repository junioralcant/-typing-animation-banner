import Typewriter from 'typewriter-effect';

import './styles.css';

interface BannerProps {
  names: string[];
}

export function Banner({ names }: BannerProps) {
  return (
    <div className="content-banner">
      <h1>O uso inteligente de</h1>
      <h1>dados para transformar</h1>

      <div className="single-line">
        <h1 className="title-single-line">a saúde </h1>
        <h1>
          <Typewriter
            options={{
              strings: names,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
}
