import { useState, useMemo, useEffect } from 'react';
import { Card, ProjectCard } from '..';
import { Slide } from 'react-awesome-reveal';

export default function Project({ data, isLoading, isError }) {
  const [projectList, setProjectList] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('allWorks');
  useEffect(() => {
    setProjectList(data);
  }, [data]);

  function filteredProject() {
    if (!selectedCategory) {
      return projectList;
    }
    return projectList?.filter((item) => item.name === selectedCategory);
  }
  let filterList = useMemo(filteredProject, [selectedCategory, projectList]);
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }
  return (
    <section className='w-full h-full overflow-hidden px-6 py-24'>
      <div className='w-full container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
          <Slide
            direction='left'
            cascade
            triggerOnce={true}
            delay={400}>
            <h1 className='text-white text-4xl md:text-5xl font-semibold leading-tight after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] after:content-[""]'>
              Checkout My <br /> Recent Project
            </h1>
          </Slide>
          <Slide
            direction='right'
            cascade
            triggerOnce={true}
            delay={400}>
            <div className='flex items-center justify-start flex-wrap mt-6 md:mt-0 md:justify-end gap-2 md:gap-x-4'>
              <button
                type='button'
                value='allWorks'
                onClick={handleCategoryChange}
                className={`text-white px-6 py-1 md:px-8 md:py-2 capitalize border border-indigo-500 ring-1 transition-all hover:bg-indigo-500 ${
                  selectedCategory === 'allWorks' ? 'bg-indigo-500' : ''
                }`}>
                All Works
              </button>
              {projectList?.map((item, index) => (
                <button
                  key={index}
                  type='button'
                  value={item.name}
                  onClick={handleCategoryChange}
                  className={`text-white px-6 py-1 md:px-8 md:py-2 capitalize border border-indigo-500 ring-1 transition-all hover:bg-indigo-500 ${
                    selectedCategory === item.name ? 'bg-indigo-500' : ''
                  }`}>
                  {item.name}
                </button>
              ))}
            </div>
          </Slide>
        </div>
        <div className='w-full h-full  grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 py-12'>
          {selectedCategory === 'allWorks'
            ? projectList?.map((item) => {
                return item.projects.length === 0
                  ? 'No Data'
                  : item.projects.map((project, index) => (
                      <div key={index}>
                        <Card
                          imageUrl={project.imageUrl}
                          title={project.title}
                          demo={project.demo}
                          github={project.github}
                          description={project.description}
                          stack={project.stacks}
                        />
                      </div>
                    ));
              })
            : filterList.map((item) => {
                return item?.projects.length === 0 ? (
                  <div>No data</div>
                ) : (
                  filterList.map((item) => {
                    return item.projects.map((project, index) => (
                      <div key={index}>
                        <Card
                          imageUrl={project.imageUrl}
                          title={project.title}
                          demo={project.demo}
                          github={project.github}
                          description={project.description}
                          stack={project.stacks}
                        />
                      </div>
                    ));
                  })
                );
              })}
        </div>
      </div>
    </section>
  );
}
