import scss from "./CSSModules.module.scss";

export const CSSModules = () => {
  return (
    <div className={scss.container}>
      <p className={scss.title}>CSS Modules</p>
      <button className={scss.button}>FIGHT!</button>
    </div>
  );
};
