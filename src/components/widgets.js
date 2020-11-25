import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './widgets.module.css';
import widgets from '../widgets/widgets.json';

export const Widgets = () => {
  const [repos, setRepos] = useState([]);
  const allowedWidgets = Object.keys(widgets);

  useEffect(() => {
    fetch(
      'https://api.github.com/search/repositories?q=topic:codersrank-widget+org:codersrank-org&sort=stars&order=desc&page=1',
    )
      .then((res) => res.json())
      .then((data) => {
        const items = (data.items || []).filter((repo) =>
          allowedWidgets.includes(repo.name),
        );
        items.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        setRepos(items);
      });
  }, []);

  if (!repos.length) {
    return <div className="preloader" />;
  }

  return (
    <div className={clsx(styles.widgets)}>
      {repos.map((repo) => (
        <Link
          key={repo.name}
          className={clsx(styles.widget)}
          to={`/widgets/${repo.name}/`}
        >
          <img
            className={clsx(
              styles.widgetImage,
              repo.name === 'summary-widget' ? styles.widgetImageCenter : '',
            )}
            src={`https://raw.githubusercontent.com/codersrank-org/${repo.name}/${repo.default_branch}/preview.png`}
          />
          <div className={clsx(styles.widgetContent)}>
            <div className={clsx(styles.widgetTitle)}>
              <span>{repo.name}</span>
              <span className={clsx(styles.widgetStars)}>
                <i>★</i>
                {repo.stargazers_count}
              </span>
            </div>
            <div className={clsx(styles.widgetDescription)}>{repo.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
