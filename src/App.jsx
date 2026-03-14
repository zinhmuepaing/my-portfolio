import { HashRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Leadership from './pages/Leadership'
import Contact from './pages/Contact'
import PageNotFound from './lib/PageNotFound'
import NavigationTracker from './lib/NavigationTracker'
import AuthProvider from './lib/AuthContext'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <HashRouter>
            <NavigationTracker />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </HashRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
