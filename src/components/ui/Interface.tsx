import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Section from '../dom/Section'
import SkillsSection from './SkillsSection'

const Interface = () => {
  return (
    <div className='flex w-screen flex-col items-center'>
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  )
}
export default Interface
