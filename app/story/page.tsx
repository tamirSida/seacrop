import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <div className="relative min-h-screen bg-seacrop-dark overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <main className="relative z-10 py-24 px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* Logo at top - links to home */}
          <div className="mb-32 pt-16">
            <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300">
              <Image
                src="/SeaCrop Circular Logo Lockup/PNG/SeaCrop Circular Logo Lockup.png"
                alt="SeaCrop Logo"
                width={80}
                height={80}
                priority
                className="w-16 h-16 sm:w-20 sm:h-20"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
          </div>

          {/* Header */}
          <div className="mb-48">
            <div className="fade-in-up delay-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light water-text">
                Our Story
              </h1>
            </div>
          </div>

          {/* Story Content with generous spacing */}
          <div className="space-y-40" style={{marginLeft: '1rem', marginRight: 'auto'}}>
            
            <div className="fade-in-up delay-2">
              <p className="text-xl leading-relaxed text-white font-light">
                <span className="text-3xl font-normal">Seven years ago</span>, our journey began with a simple question 
                asked in casual conversation: <em className="italic">&lsquo;How can we feed the world 
                more affordably?&rsquo;</em> What followed was a relentless pursuit of 
                solutions that could change the way the world thinks about nutrition at scale.
              </p>
            </div>

            <br />

            <div className="fade-in-up delay-2">
              <p className="text-xl leading-relaxed text-white font-light">
                Co-founder <strong className="font-semibold">Itai Katz</strong>, a PhD physicist at Technion University 
                in Israel, began experimenting after hours in his own kitchen. He wanted to understand whether the ocean&apos;s smallest organisms, 
                <strong className="font-semibold">phytoplankton</strong>, could hold the key to feeding billions sustainably. What he discovered challenged 
                conventional thinking.
              </p>
            </div>

            <br />

            <div className="fade-in-up delay-2 space-y-20">
              <p className="text-xl leading-relaxed text-white font-light">
                Phytoplankton naturally carry a <strong className="font-semibold">negative electric charge</strong>. Instead of relying on heavy, 
                energy-intensive methods to harvest them, Itai devised a curtain of positively charged 
                electrostatic fibres, allowing these microscopic powerhouses to adhere gently without 
                damaging the surrounding ecosystem.
              </p>
              
              <p className="text-xl leading-relaxed text-white/90 font-light">
                This approach opened up the possibility of farming plankton efficiently, at scale, and in 
                harmony with the ocean's natural systems.
              </p>
            </div>

            <br />

            <div className="fade-in-up delay-2 space-y-20">
              <p className="text-xl leading-relaxed text-white font-light">
                Recognising the potential of Itai&apos;s work, <strong className="font-semibold">Shahar</strong> joined as a 
                co-founder, taking on the practical execution of these early experiments. His ability to translate technical concepts 
                into working systems became the bridge between breakthrough science and functional application. 
                Together, Itai and Shahar built the first steps of what would become <strong className="font-bold">SeaCrop</strong>.
              </p>
              
              <p className="text-xl leading-relaxed text-white/90 font-light">
                When <strong className="font-semibold">Arik Pinto</strong> came on board, bringing the operational 
                expertise to match Itai&apos;s technical vision and Shahar&apos;s executional drive, SeaCrop truly began to take shape.
              </p>
            </div>

            <br />

            <div className="fade-in-up delay-2">
              <p className="text-xl leading-relaxed text-white font-light">
                Our technology doesn&apos;t just aim to create sustainable nutrition. By deploying our fibre 
                curtains in <em className="italic">eutrophic waters</em> - areas suffering from nutrient overload and 
                oxygen depletion - we also help restore balance to marine ecosystems, reducing oceanic dead zones while creating 
                a scalable, ocean-friendly feed source.
              </p>
            </div>

            <br />

            <div className="fade-in-up delay-2 space-y-20 pt-16">
              <p className="text-xl leading-relaxed text-white font-light">
                At SeaCrop, we know that <strong className="font-semibold">real change takes time</strong>. 
                We are building solutions not just for today, but for generations to come: farming the smallest life in the ocean 
                so that billions of people can thrive in the future.
              </p>
              
              <p className="text-xl leading-relaxed text-white/90 font-light">
                This is more than technology. It&apos;s a <strong className="font-semibold">promise to the ocean</strong>, 
                to the planet, and to every life it nourishes: a future where 
                food security and environmental balance go hand in hand.
              </p>
            </div>
            <br />

          </div>
          
          {/* Bottom spacing */}
          <div className="pb-48"></div>
        </div>
      </main>

      {/* Footer with generous spacing */}
      <footer className="relative z-10 border-t border-white/10 bg-seacrop-dark">
        <div className="container mx-auto max-w-4xl px-8 py-40">
          <div className="flex flex-col items-center space-y-20">
            <br/>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-16 py-16 pt-24">
              <a
                href="mailto:arik@seacrop.co"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 text-white hover:text-seacrop-turquoise hover:border-seacrop-turquoise transition-all duration-300 group"
                title="Email"
              >
                <i className="fas fa-envelope text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              <a
                href="https://www.linkedin.com/company/seacrop-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 text-white hover:text-seacrop-turquoise hover:border-seacrop-turquoise transition-all duration-300 group"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-center">
              <p className="text-white/60 text-sm">
                © 2025 SeaCrop. Small Particles. Global Impact.
              </p>
              <br/>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}