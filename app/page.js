import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  BookOpen, 
  Users, 
  Brain, 
  HeartHandshake, 
  Sparkles, 
  GraduationCap,
  Calendar,
  CheckCircle2
} from 'lucide-react'

export default function Home() {
  const experiences = [
    {
      role: 'Chief Executive Officer & Founder',
      company: 'Thought Life Connection',
      location: 'Los Angeles, California',
      period: 'January 1995 – Present',
      duration: '31+ Years',
      description: 'Founded Thought-Life Connection to provide cognitive awareness, spiritual development, and practical behavioral change. Guiding individuals through comprehensive recovery education and our signature 1-year home study program for those seeking recovery from home.',
      tags: ['Addiction Recovery', 'Cognitive Transformation', 'Home Study Curriculum', 'Mentorship']
    },
    {
      role: 'Owner',
      company: 'Warriors Eyes Production',
      location: 'California',
      period: 'January 2015 – November 2022',
      duration: '7 yrs 11 mos',
      description: 'Led independent media and production endeavors, focusing on community storytelling, creative direction, and educational outreach initiatives.',
      tags: ['Production', 'Creative Direction', 'Community Outreach']
    }
  ]

  const featuredWork = [
    {
      title: 'Thought-Life Connection Program',
      tag: 'Core Program',
      description: 'A structured recovery and personal transformation framework that bridges cognitive awareness, spiritual grounding, and behavioral change.',
      features: [
        'Cognitive awareness and reframing self-limiting beliefs',
        'Practical integration of 12-Step recovery insights',
        'Personal accountability and emotional integrity'
      ]
    },
    {
      title: '1-Year Home-Study Recovery Course',
      tag: 'Curriculum',
      description: 'A comprehensive, self-paced recovery course designed specifically for individuals seeking genuine recovery from home who cannot attend traditional meetings.',
      features: [
        'Structured year-long guided curriculum',
        'Flexible learning suited for busy or private schedules',
        'Direct foundational exercises for personal growth'
      ]
    },
    {
      title: 'Workshops, Retreats & Seminars',
      tag: 'Speaking & Facilitation',
      description: 'Dynamic in-person and group sessions helping diverse communities confront destructive thought patterns and cultivate healthy ways of living.',
      features: [
        'Recovery education seminars for diverse audiences',
        'Interactive retreat workshops focused on healing trauma',
        'Community group facilitation and open dialogues'
      ]
    },
    {
      title: '1-on-1 Transformation Mentorship',
      tag: 'Personal Coaching',
      description: 'Direct, compassionate guidance tailored to individuals navigating addiction, personal crisis, or seeking a deeper personal transformation.',
      features: [
        'Personalized breakthrough sessions',
        'Ongoing accountability and life guidance',
        'Rebuilding integrity and establishing purposeful habits'
      ]
    }
  ]

  const skills = [
    {
      icon: Brain,
      title: 'Counseling Psychology',
      desc: 'Understanding the intimate link between thoughts, behavioral patterns, and lasting recovery.'
    },
    {
      icon: HeartHandshake,
      title: 'Relationship Counseling',
      desc: 'Rebuilding damaged trust, establishing healthy communication, and restoring family connections.'
    },
    {
      icon: Users,
      title: '1-on-1 Mentorship & Coaching',
      desc: 'Providing compassionate guidance, personal accountability, and actionable life strategies.'
    },
    {
      icon: Sparkles,
      title: 'Recovery Education',
      desc: 'Demystifying addiction with cognitive tools, spiritual grounding, and 12-step wisdom.'
    },
    {
      icon: BookOpen,
      title: 'Curriculum Design',
      desc: 'Authoring structured home-study courses that empower individuals to heal at their own pace.'
    },
    {
      icon: CheckCircle2,
      title: 'Workshop Facilitation',
      desc: 'Leading engaging recovery seminars, speaking events, and transformational group retreats.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0c0a08] text-[#ffffff] font-sans">
      
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#0c0a08]/90 backdrop-blur-md border-b border-[#2c2620]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#181512] border border-[#c9a45a]/50 text-[#c9a45a] flex items-center justify-center font-bold text-xs">
              KC
            </span>
            <span>KC Ken Pierson</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a39e97]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#work" className="hover:text-white transition-colors">Programs</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-[#c9a45a] text-[#0c0a08] font-semibold hover:bg-[#dfb96c] transition-all"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 border-b border-[#2c2620] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c9a45a]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181512] border border-[#2c2620] text-xs font-semibold text-[#c9a45a] mb-8">
            <MapPin className="w-3.5 h-3.5" />
            <span>Santa Clarita, California</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl mb-6">
            KC Ken Pierson
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#c9a45a] max-w-3xl mb-4">
            Founder – Thought-Life Connection &bull; Recovery Educator &bull; Speaker
          </p>

          <p className="text-base sm:text-lg text-[#a39e97] max-w-2xl leading-relaxed mb-10">
            Dedicated for more than two decades to helping individuals overcome addiction, destructive thinking patterns, and self-limiting behaviors through cognitive awareness and personal transformation.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://thoughtlifeconnection.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c9a45a] text-[#0c0a08] font-bold text-sm tracking-wide hover:bg-[#dfb96c] transition-all shadow-lg shadow-[#c9a45a]/10"
            >
              <span>Visit ThoughtLifeConnection.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#181512] border border-[#2c2620] text-white font-medium text-sm hover:border-[#c9a45a]/50 hover:bg-[#201c18] transition-all"
            >
              <span>Connect with Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 border-b border-[#2c2620] bg-[#0c0a08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c9a45a] block mb-2">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Path to Lasting Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Quote Card */}
            <div className="lg:col-span-5 bg-[#181512] border border-[#2c2620] rounded-2xl p-8 relative">
              <div className="w-10 h-10 rounded-full bg-[#c9a45a]/10 text-[#c9a45a] flex items-center justify-center font-serif text-2xl font-bold mb-6">
                “
              </div>
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#ffffff] leading-relaxed mb-6">
                “Meaningful recovery begins with awareness of one’s inner life and the courage to confront destructive beliefs and behaviors. Through education, community, and compassionate guidance, individuals can rebuild integrity, rediscover purpose, and create lasting change.”
              </blockquote>
              <div className="border-t border-[#2c2620] pt-4">
                <p className="text-sm font-bold text-white">KC Ken Pierson</p>
                <p className="text-xs text-[#a39e97]">Founder of Thought-Life Connection</p>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6 text-[#a39e97] text-base sm:text-lg leading-relaxed">
              <p>
                For more than two decades, I have dedicated my life's work to helping individuals break free from addiction, destructive thinking cycles, and self-limiting behaviors. My focus is centered on helping people understand the profound relationship between their thought life, their everyday actions, and their capacity to cultivate lasting recovery.
              </p>
              <p>
                As founder of <strong className="text-white">Thought-Life Connection</strong>, I created an educational recovery and personal transformation program that integrates cognitive awareness, spiritual development, and practical behavioral change. Through experiential workshops, guided group discussions, retreats, and direct one-on-one mentorship, I help people recognize self-defeating patterns and build sustainable ways of living.
              </p>
              <p>
                My approach combines practical recovery principles, including insights from the 12-Step tradition, with psychological awareness and personal responsibility. Over the years, I have walked alongside individuals from all walks of life navigating addiction, trauma, and behavioral health challenges—empowering each person to reclaim their integrity and rediscover their true purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs / Projects */}
      <section id="work" className="py-24 border-b border-[#2c2620] bg-[#100e0b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a45a] block mb-2">
                Featured Work & Programs
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Educational Initiatives & Recovery Programs
              </h2>
            </div>
            <a 
              href="https://thoughtlifeconnection.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a45a] hover:text-[#dfb96c] transition-colors"
            >
              <span>Explore all offerings at ThoughtLifeConnection.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#181512] border border-[#2c2620] hover:border-[#c9a45a]/50 rounded-2xl p-8 transition-all hover:-translate-y-1"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-[#201c18] border border-[#2c2620] text-xs font-semibold text-[#c9a45a] mb-4">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#a39e97] text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2.5 border-t border-[#2c2620] pt-6">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-[#ffffff]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45a] mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience & Education */}
      <section id="experience" className="py-24 border-b border-[#2c2620] bg-[#0c0a08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c9a45a] block mb-2">
              Career History
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Work Experience & Background
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-[#181512] border border-[#2c2620] rounded-2xl p-8 transition-all hover:border-[#c9a45a]/40"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-lg text-[#c9a45a] font-medium">{exp.company} &bull; <span className="text-[#a39e97] text-base">{exp.location}</span></p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201c18] border border-[#2c2620] text-xs font-semibold text-[#a39e97] w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#c9a45a]" />
                    <span>{exp.period} ({exp.duration})</span>
                  </div>
                </div>

                <p className="text-[#a39e97] text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-3 py-1 rounded-md bg-[#201c18] text-xs text-[#ffffff] font-medium border border-[#2c2620]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Education entry */}
            <div className="bg-[#181512] border border-[#2c2620] rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-[#c9a45a]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c9a45a]">Education & In-Depth Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Philosophy & Cross-Cultural Treatment of Addiction</h3>
                  <p className="text-base text-[#a39e97]">South Pasadena</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201c18] border border-[#2c2620] text-xs font-semibold text-[#a39e97] w-fit">
                  <Calendar className="w-3.5 h-3.5 text-[#c9a45a]" />
                  <span>November 1996 – November 2003</span>
                </div>
              </div>
              <p className="text-[#a39e97] text-base leading-relaxed">
                Seven years of intensive personal and clinical study investigating philosophical paradigms, cross-cultural methodologies, and cognitive approaches to addiction recovery and lasting psychological healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-b border-[#2c2620] bg-[#100e0b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c9a45a] block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Areas of Focus & Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div 
                  key={index} 
                  className="bg-[#181512] border border-[#2c2620] rounded-2xl p-6 hover:border-[#c9a45a]/50 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#201c18] border border-[#2c2620] text-[#c9a45a] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-sm text-[#a39e97] leading-relaxed">{skill.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0c0a08] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-b from-[#181512] to-[#12100d] border border-[#2c2620] rounded-3xl p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a45a] block mb-2">
                Connect Directly
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Let's Start the Conversation
              </h2>
              <p className="text-[#a39e97] text-base sm:text-lg leading-relaxed mb-10">
                Whether you are seeking recovery mentorship, information about the 1-year home study program, or inquiring about workshops and speaking engagements, feel free to reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {/* Website */}
              <a 
                href="https://thoughtlifeconnection.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#201c18] border border-[#2c2620] hover:border-[#c9a45a] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#181512] text-[#c9a45a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] uppercase tracking-wider text-[#a39e97] font-semibold">Website</div>
                  <div className="text-sm font-bold text-white truncate">thoughtlifeconnection.com</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:kcptlc@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#201c18] border border-[#2c2620] hover:border-[#c9a45a] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#181512] text-[#c9a45a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] uppercase tracking-wider text-[#a39e97] font-semibold">Email</div>
                  <div className="text-sm font-bold text-white truncate">kcptlc@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:8182667982" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#201c18] border border-[#2c2620] hover:border-[#c9a45a] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#181512] text-[#c9a45a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] uppercase tracking-wider text-[#a39e97] font-semibold">Phone</div>
                  <div className="text-sm font-bold text-white truncate">(818) 266-7982</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/kc-ken-pierson-a1a200152" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#201c18] border border-[#2c2620] hover:border-[#c9a45a] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#181512] text-[#c9a45a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] uppercase tracking-wider text-[#a39e97] font-semibold">LinkedIn</div>
                  <div className="text-sm font-bold text-white truncate">kc-ken-pierson</div>
                </div>
              </a>
            </div>

            {/* Social / GitHub Footer link */}
            <div className="border-t border-[#2c2620] pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#a39e97]">
              <span>Location: Santa Clarita, California</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/kcptlc-sketch" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-[#c9a45a]" />
                  <span>GitHub (@kcptlc-sketch)</span>
                </a>
                <span className="text-[#2c2620]">&bull;</span>
                <a 
                  href="https://www.linkedin.com/in/kc-ken-pierson-a1a200152" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#c9a45a]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#2c2620] bg-[#0c0a08] text-xs text-[#a39e97]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} KC Ken Pierson &bull; Thought-Life Connection. All rights reserved.</p>
          <a href="#" className="text-[#c9a45a] hover:underline font-medium">
            Back to top &uarr;
          </a>
        </div>
      </footer>

    </div>
  )
}

