import "./container.css";

export function Container({ title = "", text="" }) {
  return (
    <div className="container container-root">
      {title.length > 0 && (
        <div className="container-title">
          <span>{title}</span>
        </div>
      )}
      <div className="container-content">
        <h2>{text}</h2>
      </div>
    </div>
  );
}
