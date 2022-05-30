export const StyledJSX = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #50a3a2;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          font-size: 25px;
          color: #50a3a2;
        }
        .button {
          padding: 15px 30px;
          border: none;
          background-color: #50a3a2;
          color: white;
          &:hover {
            background-color: black;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
