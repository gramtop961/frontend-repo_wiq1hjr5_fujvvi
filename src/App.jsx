import { useState } from 'react'
import { Shield, Bug, Mail, Phone, Send, CheckCircle2, ArrowRight, Target, Users, GlobeLock, MousePointerClick, Terminal, LockKeyhole, Award, Trophy } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-emerald-500 grid place-items-center shadow-lg shadow-emerald-500/30">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-wide">BorneoSec<span className="text-emerald-400">.id</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">Tentang</a>
          <a href="#services" className="hover:text-white">Layanan</a>
          <a href="#usecases" className="hover:text-white">Use Case</a>
          <a href="#process" className="hover:text-white">Proses</a>
          <a href="#contact" className="hover:text-white">Kontak</a>
          <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-md transition-colors">
            Mulai Proyek <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[82vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-black to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-28 md:pt-40 pb-16 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <p className="inline-flex items-center gap-2 text-emerald-300/90 text-xs tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Top Rated Hackers dari Kalimantan
                <CheckCircle2 className="h-4 w-4" />
              </p>
              <p className="inline-flex items-center gap-2 text-cyan-300/90 text-xs tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Top 10 Google Bug Hunter (Indonesia)
                <Trophy className="h-4 w-4" />
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Uji Keamanan Sistem Anda dengan Tim Red Team BorneoSec
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              Kami berdiri sejak 2019 dari komunitas keamanan siber dan berkembang menjadi tim yang diperhitungkan secara nasional. Spesialis Penetration Testing, Phishing Simulation, dan Red Teaming.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 rounded-md transition-colors">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-5 py-3 rounded-md">
                Lihat Layanan
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/70 text-sm">
              <div>
                <p className="text-2xl font-bold text-white">50+ </p>
                Klien Enterprise
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+ </p>
                Temuan Kerentanan
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7 </p>
                Respons Insiden
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 overflow-hidden">
              <div className="h-full w-full rounded-lg bg-black/60 backdrop-blur grid grid-rows-3 gap-3 p-3">
                <div className="rounded-md bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <span className="text-white/90 text-sm">Reconnaissance</span>
                  </div>
                  <span className="text-emerald-400 text-xs">in progress...</span>
                </div>
                <div className="rounded-md bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bug className="h-5 w-5 text-cyan-400" />
                    <span className="text-white/90 text-sm">Exploitation</span>
                  </div>
                  <span className="text-cyan-400 text-xs">privilege escalate</span>
                </div>
                <div className="rounded-md bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LockKeyhole className="h-5 w-5 text-pink-400" />
                    <span className="text-white/90 text-sm">Reporting & Remediation</span>
                  </div>
                  <span className="text-pink-400 text-xs">evidence attached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const highlights = [
    {
      icon: <Shield className="h-5 w-5 text-emerald-400" />,
      title: 'Berdiri dari Komunitas (2019)',
      desc: 'Bermula sebagai komunitas security di Kalimantan, kami fokus berbagi ilmu, CTF, dan riset kerentanan hingga terbentuknya tim profesional.'
    },
    {
      icon: <Trophy className="h-5 w-5 text-cyan-400" />,
      title: 'Top 10 Google Bug Hunter (Indonesia)',
      desc: 'Konsistensi dalam responsible disclosure dan perburuan bug pada ekosistem Google menempatkan anggota kami di jajaran Top 10 nasional.'
    },
    {
      icon: <Award className="h-5 w-5 text-pink-400" />,
      title: 'Hacker yang Diperhitungkan',
      desc: 'Dikenal akan metodologi yang rapi, bukti eksploitasi yang kuat, dan rekomendasi yang dapat ditindaklanjuti oleh tim engineering.'
    }
  ]

  return (
    <section id="about" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tentang BorneoSec</h2>
            <p className="text-white/70 mt-4">
              BorneoSec lahir pada 2019 dari semangat komunitas. Kini kami tumbuh menjadi tim red team dan penetration tester yang dipercaya berbagai perusahaan
              di Indonesia. Visi kami sederhana: membantu organisasi memperkuat ketahanan siber dengan pendekatan yang praktis dan berorientasi hasil.
            </p>
            <p className="text-white/70 mt-3">
              Reputasi kami dibangun dari karya: laporan yang jelas, PoC yang meyakinkan, serta pendampingan perbaikan hingga tuntas. Itulah mengapa kami kerap disebut
              sebagai salah satu hacker yang diperhitungkan di Indonesia.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-white">
                  {h.icon}
                  <span className="font-medium text-sm">{h.title}</span>
                </div>
                <p className="text-white/70 text-sm mt-2">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      icon: <Bug className="h-6 w-6 text-emerald-400" />, 
      title: 'Penetration Testing',
      desc: 'Uji penetrasi menyeluruh (Web, Mobile, Infra, API) dengan metodologi OWASP & PTES. Laporan prioritas risiko dan rekomendasi perbaikan.'
    },
    {
      icon: <MousePointerClick className="h-6 w-6 text-cyan-400" />, 
      title: 'Phishing Simulation',
      desc: 'Simulasi spear-phishing dan awareness campaign untuk mengukur kesiapan tim Anda terhadap social engineering.'
    },
    {
      icon: <Target className="h-6 w-6 text-pink-400" />, 
      title: 'Red Teaming',
      desc: 'Simulasi serangan nyata end-to-end: dari recon, initial access, hingga persistence & exfiltration, tanpa mengganggu operasi.'
    }
  ]
  return (
    <section id="services" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Layanan BorneoSec</h2>
        <p className="text-white/70 text-center mt-3">Fokus pada hasil, bukan sekadar checklist.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.07] transition">
              <div className="h-10 w-10 rounded bg-white/5 grid place-items-center mb-4 border border-white/10">
                {it.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-white/70 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      icon: <GlobeLock className="h-5 w-5 text-emerald-400" />,
      title: 'Perbankan & Fintech',
      points: [
        'Uji Web/Mobile banking, API Open Banking',
        'Simulasi fraud & account takeover',
        'Compliance: ISO 27001, PCI DSS'
      ]
    },
    {
      icon: <Users className="h-5 w-5 text-cyan-400" />,
      title: 'BUMN & Pemerintahan',
      points: [
        'Red team pada critical infrastructure',
        'Awareness phishing untuk ribuan pegawai',
        'Hardening Active Directory'
      ]
    },
    {
      icon: <Target className="h-5 w-5 text-pink-400" />,
      title: 'E-Commerce & Startup',
      points: [
        'API security & business logic testing',
        'Bug-hunting untuk fitur baru',
        'Blue team drill: deteksi & respon'
      ]
    }
  ]
  return (
    <section id="usecases" className="bg-gradient-to-b from-black to-[#050505] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Use Case Nyata</h2>
        <p className="text-white/70 text-center mt-3">Contoh penerapan yang berdampak langsung pada keamanan bisnis.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-white/90 font-medium">
                {c.icon}
                {c.title}
              </div>
              <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc list-inside">
                {c.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Discovery & Scoping', desc: 'Memahami tujuan bisnis dan ruang lingkup teknis.' },
    { title: 'Rules of Engagement', desc: 'Menyusun aturan main, jadwal, dan komunikasi.' },
    { title: 'Execution', desc: 'Melakukan pengujian/serangan terkontrol dengan minim dampak.' },
    { title: 'Reporting', desc: 'Laporan detail dengan bukti, risk rating, dan rekomendasi.' },
    { title: 'Remediation Support', desc: 'Sesi perbaikan dan re-test untuk validasi.' },
  ]
  return (
    <section id="process" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Proses Engagement</h2>
        <div className="mt-10 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="text-xs text-emerald-400">Langkah {i+1}</div>
              <div className="text-white font-semibold mt-1">{s.title}</div>
              <div className="text-white/70 text-sm mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      quote: 'Tim BorneoSec menemukan celah kritikal pada API kami sebelum go-live. Rekomendasinya langsung bisa diimplementasi.',
      author: 'CTO, Fintech Kalimantan'
    },
    {
      quote: 'Simulasi phishing meningkatkan awareness pegawai kami hingga 78% dalam 3 bulan.',
      author: 'Head of IT Security, BUMN'
    },
    {
      quote: 'Red team exercise membuka blindspot deteksi kami dan membantu menyusun playbook IR yang lebih matang.',
      author: 'CISO, E-Commerce'
    }
  ]
  return (
    <section className="bg-[#0a0a0a] py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Apa Kata Klien</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-white/90">“{t.quote}”</p>
              <p className="text-white/50 text-sm mt-4">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: 'Penetration Testing', message: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', msg: 'Mengirim...' })
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus({ state: 'success', msg: 'Terima kasih! Tim kami akan menghubungi Anda.' })
      setForm({ name: '', email: '', company: '', phone: '', service: 'Penetration Testing', message: '' })
    } catch (err) {
      setStatus({ state: 'error', msg: 'Gagal mengirim. Coba lagi atau hubungi kami langsung.' })
    }
  }

  const Field = ({ label, children }) => (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )

  return (
    <section id="contact" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Hubungi Kami</h2>
            <p className="text-white/70 mt-3">Jelaskan kebutuhan Anda, kami kirimkan rencana & estimasi dalam 24 jam.</p>
            <div className="mt-6 space-y-3 text-white/80 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> hello@borneosec.id</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> +62-8xx-xxxx-xxxx</p>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Nama">
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" placeholder="Nama lengkap" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" placeholder="email@domain.com" />
              </Field>
              <Field label="Perusahaan">
                <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" placeholder="Opsional" />
              </Field>
              <Field label="Telepon / WhatsApp">
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" placeholder="Opsional" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Layanan">
                  <select value={form.service} onChange={e=>setForm({...form, service:e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white">
                    <option className="bg-black" value="Penetration Testing">Penetration Testing</option>
                    <option className="bg-black" value="Phishing Simulation">Phishing Simulation</option>
                    <option className="bg-black" value="Red Teaming">Red Teaming</option>
                    <option className="bg-black" value="Security Assessment">Security Assessment</option>
                    <option className="bg-black" value="Consulting">Consulting</option>
                  </select>
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Detail Kebutuhan">
                  <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={5} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" placeholder="Ceritakan scope, target, timeline, dan tujuan."></textarea>
                </Field>
              </div>
            </div>
            <button disabled={status.state==='loading'} className="mt-5 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 rounded-md disabled:opacity-60">
              <Send className="h-4 w-4" /> Kirim
            </button>
            {status.state !== 'idle' && (
              <p className={`mt-3 text-sm ${status.state==='success' ? 'text-emerald-400' : status.state==='error' ? 'text-red-400' : 'text-white/70'}`}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} BorneoSec.id — Secure by Design.</p>
        <div className="flex items-center gap-4 text-white/60 text-sm">
          <a href="#about" className="hover:text-white">Tentang</a>
          <a href="#services" className="hover:text-white">Layanan</a>
          <a href="#usecases" className="hover:text-white">Use Case</a>
          <a href="#process" className="hover:text-white">Proses</a>
          <a href="#contact" className="hover:text-white">Kontak</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <About />
      <Services />
      <UseCases />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
