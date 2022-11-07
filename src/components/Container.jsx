import "./container.css";

export function Container({ title = "", align="start", children}) {
  return (
    <div className="container container-root">
      {title.length > 0 && (
        <div className="container-title">
          <span>{title}</span>
        </div>
      )}
      <div className={`container-content ${align=='start'?'align-start':'align-center'}`}>
        {children}
      </div>
    </div>
  );
}
