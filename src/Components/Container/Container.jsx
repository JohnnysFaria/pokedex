import style from './Container.module.css';

export default function Container({ title, children }) {
  return (
    <div className={style.root}>
      {title && <h1 className={style.title}>{title}</h1>}
      {children}
    </div>
  );
}
