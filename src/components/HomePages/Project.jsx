import { useState, useMemo, useEffect } from 'react';
import { Card, ProjectCard } from '..';
import { Slide } from 'react-awesome-reveal';
import { CgMoreO } from 'react-icons/cg';
import CustomButton from '../Button';

export default function Project({ data, isLoading, isError, projectRef }) {
  const [projectList, setProjectList] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('allWorks');
  const [visible, setVisible] = useState(4);
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
    setVisible(4);
  }
  function showMoreFunc() {
    const newData = filterList?.map((item) => {
      return parseInt(item.projects.length);
    });
    return newData;
  }

  const showMore = () => {
    setVisible((visible) => visible + 2);
  };
  return (
    <section
      ref={projectRef}
      className='w-full h-full overflow-hidden px-6 py-24'>
      <div className='w-full container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
          <Slide
            direction='left'
            cascade
            triggerOnce={true}
            delay={400}>
            <h1 className='dark:text-light text-dark text-4xl md:text-5xl font-semibold leading-tight after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] after:content-[""]'>
              Checkout My <br /> Recent Project
            </h1>
          </Slide>
          <Slide
            direction='right'
            cascade
            triggerOnce={true}
            delay={400}>
            <div className='flex items-center justify-start flex-wrap mt-6 md:mt-0 md:justify-end gap-2 md:gap-x-4'>
              {projectList?.map((item, index) => (
                <button
                  key={index}
                  type='button'
                  value={item.name}
                  onClick={handleCategoryChange}
                  className={`text-dark dark:text-light px-6 py-1 md:px-8 md:py-2 capitalize border border-indigo-500 ring-1 transition-all hover:bg-indigo-500 hover:text-light ${
                    selectedCategory === item.name
                      ? 'bg-indigo-500 text-light'
                      : ''
                  }`}>
                  {item.name}
                </button>
              ))}
            </div>
          </Slide>
        </div>
        <div className='w-full h-full  grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 py-12'>
          {selectedCategory === 'allWorks'
            ? filterList?.map((item) => {
                return item.projects.length === 0
                  ? 'No Data'
                  : item.projects.slice(0, visible).map((project, index) => (
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
                    return item.projects
                      .slice(0, visible)
                      .map((project, index) => (
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
        <div className='flex justify-center py-4 md:py-8'>
          {visible < showMoreFunc() ? (
            <CustomButton
              type='button'
              onClick={showMore}
              isFlex
              isRounded
              isTransparentPurple
              className='items-center text-2xl justify-center dark:text-light text-dark hover:text-light px-8 py-2'>
              <CgMoreO className='mr-2' /> Load More
            </CustomButton>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}
