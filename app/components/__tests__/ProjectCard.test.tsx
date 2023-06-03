import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import '@testing-library/jest-dom';

describe('project card', () => {
  it('renders no screenshot if screenshot is not given', () => {
    const project = {
      name: 'Project',
      description: 'description',
      repositoryURL: 'repository',
      liveURL: 'live',
    };

    render(<ProjectCard project={project} />);

    const p = screen.getByTestId('no-screenshot');
    const img = screen.queryByRole('img');

    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent(/no screenshot/i);
    expect(img).not.toBeInTheDocument();
  });

  it('renders img correctly if given', () => {
    const project = {
      name: 'Project A',
      screenshot: '/screenshot.png',
      description: 'description',
      repositoryURL: 'repository',
      liveURL: 'live',
    };

    render(<ProjectCard project={project} />);

    const img = screen.getByRole<HTMLImageElement>('img');
    const p = screen.queryByTestId('no-screenshot');

    expect(img.src).toMatch(new RegExp(project.screenshot.slice(1)));
    expect(p).not.toBeInTheDocument();
  });

  it('does not render live site svg if not given', () => {
    const project = {
      name: 'Project A',
      screenshot: '/screenshot.png',
      description: 'description',
      repositoryURL: 'repository',
    };

    render(<ProjectCard project={project} />);

    const liveAnchor = screen.queryByTestId('live-site');

    expect(liveAnchor).not.toBeInTheDocument();
  });

  it('renders live site and repository urls', () => {
    const project = {
      name: 'Project A',
      screenshot: '/screenshot.png',
      description: 'description',
      repositoryURL: 'repository',
      liveURL: 'live',
    };

    render(<ProjectCard project={project} />);

    const liveAnchor = screen.getByTestId('live-site');
    const repositoryAnchor = screen.getByTestId('repository');

    expect(liveAnchor).toBeInTheDocument();
    expect(liveAnchor).toHaveAttribute('href', project.liveURL);
    expect(repositoryAnchor).toHaveAttribute('href', project.repositoryURL);
  });
});
