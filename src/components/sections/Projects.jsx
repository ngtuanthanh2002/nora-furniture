import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';
import './Projects.css';

export function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeader
          label="Dự án thực tế"
          title="Không gian đã hoàn thiện"
          subtitle="Những dự án tiêu biểu — nơi thiết kế gặp đời sống thực tế."
        />

        <div
          ref={ref}
          className="projects__list"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`project-row ${project.reverse ? 'project-row--reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="project-row__image-wrap">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="project-row__image"
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="project-row__content">
                <span className="project-row__meta">
                  {project.style} · {project.area}
                </span>
                <h3 className="project-row__title">{project.name}</h3>
                <p className="project-row__desc">{project.description}</p>
                <Button href="#tu-van" variant="outline" size="sm">
                  Xem chi tiết dự án
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
