import { useState } from "react";

function ContentsHeader({ title }) {
  return (
    <div className="Contents-title-container">
      <div className="Contents-title">{title} header</div>
    </div>
  );
}

export default ContentsHeader;
