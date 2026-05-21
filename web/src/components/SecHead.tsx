import type { ReactNode } from "react";

export function SecHead({
  no,
  kicker,
  title,
  right,
}: {
  no: string;
  kicker: string;
  title: ReactNode;
  right: ReactNode;
}) {
  return (
    <header className="sec-head">
      <div>
        <div className="sec-no"><span className="bar"></span><span>{no} · {kicker}</span></div>
        <h2 className="display display-l">{title}</h2>
      </div>
      <div className="right">{right}</div>
    </header>
  );
}
