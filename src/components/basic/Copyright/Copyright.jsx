import React from "react";

const Copyright = () => {
  return (
    <section className="footer sm:footer-horizontal footer-center text-base-content p-4 py-6 text-slate-200">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Nexora INC.
        </p>
      </aside>
    </section>
  );
};

export default Copyright;
