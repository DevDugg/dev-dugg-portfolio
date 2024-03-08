import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

const Interface = () => {
  return (
    <div className='flex w-screen flex-col items-center'>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
export default Interface
