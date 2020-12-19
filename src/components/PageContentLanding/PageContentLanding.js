import FormReport from '../FormReport/FormReport.js';
function PageContentLanding() {
  return (
    <div className="main-column">
      <h1>Report old house appliance</h1>
      <p>We recycle old house appliances. Let us know if you have one at home or spotted one dumped in public area.</p>
      <a href="/about">Learn more...</a>
      <p><strong>Fill in the form to request collection of a scrap appliance.</strong></p>
      <FormReport />
    </div>
  );
}

export default PageContentLanding;